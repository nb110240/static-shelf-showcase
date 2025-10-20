import { Card, CardContent } from "@/components/ui/card";
import { Users, Cpu, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "OUR TEAM",
      description: "Bobbinsindia contains mixed team of youth and experience, who have been working hand in hand to serve our clients well, and thus making this our greatest asset."
    },
    {
      icon: Cpu,
      title: "NEW TECHNOLOGY",
      description: "Latest Technology is used by Bobbinsindia to manufacture flexible, durable and best quality spools."
    },
    {
      icon: Award,
      title: "USP",
      description: "Bobbins India has its own tool designing and mould shop and is eager to develop any reel required by the industry."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Bobbinsindia an-insight
          </h2>
          <div className="text-muted-foreground space-y-4 text-left">
            <p>
              Bobbinsindia is a pioneer company in the field of spool manufacturing. The spools manufactured by us are used by the cable and wire industry. We have the largest range of spools under one roof. We believe in keeping adequate inventory of entire range of spools, reducing the lead time required in most cases to the minimum.
            </p>
            <p>
              The promoters of Bobbinsindia have 25 years of experience in the field of spool manufacturing, thus enabling Bobbinsindia in producing spools of best quality.
            </p>
            <p>
              Bobbinsindia is based in Andheri, Mumbai, and the financial capital of India.
            </p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
          We'll give your business chance to grow!
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-accent uppercase tracking-wide">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
