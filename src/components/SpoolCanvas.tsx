import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpoolCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || 500;
    const h = el.clientHeight || 500;

    // ── Scene ────────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0.4, 1.4, 5.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);

    // ── Lights ───────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xfff8f0, 0.55));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 9, 7);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffe8d0, 0.7);
    fillLight.position.set(-6, 2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffd080, 0.5);
    rimLight.position.set(2, -5, -3);
    scene.add(rimLight);

    // ── DIN 46399 TYPE 63 Dimensions (normalised) ─────────────────────────
    // Flange OD 63mm → radius 1.0 in scene units
    const FLANGE_R      = 1.0;
    const OUTER_RIM_W   = 0.12;           // solid rim width
    const SPOKE_OUTER_R = FLANGE_R - OUTER_RIM_W;   // 0.88
    const SPOKE_INNER_R = 0.30;           // inner spoke edge (hub ring)
    const BORE_R        = 0.155;          // central bore
    const FLANGE_T      = 0.11;           // flange thickness
    const BARREL_R      = 0.27;           // hexagonal barrel outer radius
    const SPOOL_SPAN    = 1.05;           // total half-span (barrel+flanges)
    const BARREL_LEN    = (SPOOL_SPAN - FLANGE_T) * 2;
    const NUM_SPOKES    = 10;
    const SPOKE_SOLID   = 0.10;           // half angular width of solid spoke (rad)

    // ── Materials ─────────────────────────────────────────────────────────
    // Authentic DIN 46399 — warm beige/natural plastic
    const plasticMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0xd4b896),
      shininess: 55,
      specular: new THREE.Color(0xffe4c0),
      side: THREE.DoubleSide,
    });

    const innerMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0xbfa07a),
      shininess: 40,
      specular: new THREE.Color(0xddbb99),
    });

    const boreMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x7a6248),
      shininess: 25,
    });

    // ── Build spoke-wheel flange (ExtrudeGeometry with holes) ────────────
    const buildFlangeGeo = (): THREE.ExtrudeGeometry => {
      // Outer shape: full circle
      const shape = new THREE.Shape();
      shape.absarc(0, 0, FLANGE_R, 0, Math.PI * 2, false);

      // Bore hole
      const boreHole = new THREE.Path();
      boreHole.absarc(0, 0, BORE_R, 0, Math.PI * 2, true);
      shape.holes.push(boreHole);

      // 10 spoke openings — arch-shaped ring segments
      for (let i = 0; i < NUM_SPOKES; i++) {
        const midAngle    = (i / NUM_SPOKES) * Math.PI * 2;
        const startAngle  = midAngle + SPOKE_SOLID;
        const endAngle    = midAngle + (Math.PI * 2 / NUM_SPOKES) - SPOKE_SOLID;

        const pts: THREE.Vector2[] = [];
        const steps = 18;

        // outer arc  (CCW)
        for (let p = 0; p <= steps; p++) {
          const a = startAngle + (endAngle - startAngle) * (p / steps);
          pts.push(new THREE.Vector2(
            Math.cos(a) * SPOKE_OUTER_R,
            Math.sin(a) * SPOKE_OUTER_R,
          ));
        }
        // inner arc (CW — reversed to close the ring segment)
        for (let p = steps; p >= 0; p--) {
          const a = startAngle + (endAngle - startAngle) * (p / steps);
          pts.push(new THREE.Vector2(
            Math.cos(a) * SPOKE_INNER_R,
            Math.sin(a) * SPOKE_INNER_R,
          ));
        }

        shape.holes.push(new THREE.Path(pts));
      }

      return new THREE.ExtrudeGeometry(shape, {
        depth: FLANGE_T,
        bevelEnabled: true,
        bevelThickness: 0.012,
        bevelSize: 0.012,
        bevelSegments: 3,
      });
    };

    const flangeGeo = buildFlangeGeo();

    // ── Spool group (base orientation stays fixed — no spin) ───────────
    const spool = new THREE.Group();
    spool.rotation.y = -0.55;  // show 3/4 view
    spool.rotation.x =  0.18;
    scene.add(spool);

    // ── Part groups (these move during disintegration) ─────────────────
    const leftGroup   = new THREE.Group();
    const rightGroup  = new THREE.Group();
    const barrelGroup = new THREE.Group();
    const boreGroup   = new THREE.Group();

    // Left flange — ExtrudeGeometry shape in XY plane, extrudes along +Z → rotateY(+90°) makes it face along X
    const leftMesh = new THREE.Mesh(flangeGeo, plasticMat);
    leftMesh.rotation.y = Math.PI / 2;
    leftMesh.position.x = -SPOOL_SPAN;          // starts here, extrudes FLANGE_T toward +X
    leftGroup.add(leftMesh);

    // Right flange — mirror: rotateY(-90°) extrudes toward -X
    const rightMesh = new THREE.Mesh(flangeGeo, plasticMat.clone());
    rightMesh.rotation.y = -Math.PI / 2;
    rightMesh.position.x = SPOOL_SPAN;          // starts here, extrudes FLANGE_T toward -X
    rightGroup.add(rightMesh);

    // Barrel — hexagonal prism along X axis
    const barrelGeo = new THREE.CylinderGeometry(BARREL_R, BARREL_R, BARREL_LEN, 6, 1);
    const barrelMesh = new THREE.Mesh(barrelGeo, innerMat);
    barrelMesh.rotation.z = Math.PI / 2;
    barrelGroup.add(barrelMesh);

    // Bore — thin tube along X axis
    const boreGeo = new THREE.CylinderGeometry(BORE_R * 0.9, BORE_R * 0.9, BARREL_LEN + FLANGE_T * 2 + 0.06, 24);
    const boreMesh = new THREE.Mesh(boreGeo, boreMat);
    boreMesh.rotation.z = Math.PI / 2;
    boreGroup.add(boreMesh);

    spool.add(leftGroup, rightGroup, barrelGroup, boreGroup);

    // ── Exploded positions / rotations ────────────────────────────────
    const ORIGIN = new THREE.Vector3(0, 0, 0);

    const explodedLeft   = new THREE.Vector3(-3.0,  0.7,  0.4);
    const explodedRight  = new THREE.Vector3( 3.0, -0.5,  0.4);
    const explodedBarrel = new THREE.Vector3( 0.0,  2.1,  0.2);
    const explodedBore   = new THREE.Vector3( 0.0, -1.9,  0.9);

    // ── Hover detection ───────────────────────────────────────────────
    let isHovered = false;
    const LERP = 0.06;

    renderer.domElement.addEventListener("mouseenter", () => { isHovered = true; });
    renderer.domElement.addEventListener("mouseleave", () => { isHovered = false; });
    renderer.domElement.addEventListener("touchstart", () => { isHovered = true; }, { passive: true });
    renderer.domElement.addEventListener("touchend",   () => { isHovered = false; }, { passive: true });

    // ── Animation loop ────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle float — NO spin
      spool.position.y = Math.sin(t * 0.55) * 0.07;

      // Lerp each part toward exploded or origin
      leftGroup.position.lerp(isHovered ? explodedLeft : ORIGIN, LERP);
      leftGroup.rotation.y = THREE.MathUtils.lerp(
        leftGroup.rotation.y, isHovered ? 1.2 : 0, LERP,
      );

      rightGroup.position.lerp(isHovered ? explodedRight : ORIGIN, LERP);
      rightGroup.rotation.y = THREE.MathUtils.lerp(
        rightGroup.rotation.y, isHovered ? -1.2 : 0, LERP,
      );

      barrelGroup.position.lerp(isHovered ? explodedBarrel : ORIGIN, LERP);
      barrelGroup.rotation.x = THREE.MathUtils.lerp(
        barrelGroup.rotation.x, isHovered ? 0.6 : 0, LERP,
      );

      boreGroup.position.lerp(isHovered ? explodedBore : ORIGIN, LERP);
      boreGroup.rotation.x = THREE.MathUtils.lerp(
        boreGroup.rotation.x, isHovered ? -0.5 : 0, LERP,
      );

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ────────────────────────────────────────────────────────
    const onResize = () => {
      if (!el) return;
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      flangeGeo.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-pointer"
      title="Hover to explore the DIN 46399 TYPE 63"
    />
  );
};

export default SpoolCanvas;
