import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { businessFaqs } from "@/data/businessFaqs";

const BusinessFaq = () => (
  <section id="faq" className="border-y border-border/60 bg-card py-24">
    <div className="container grid min-w-0 grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
      <div className="min-w-0">
        <div className="mb-5 flex items-center gap-4">
          <div className="h-[2px] w-10 bg-[#178fbe]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#178fbe]">
            Buyer Questions
          </span>
        </div>
        <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-wider text-foreground">
          FREQUENTLY ASKED<br />
          <span className="text-primary">QUESTIONS</span>
        </h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
          Find the essentials for product selection, custom development and quotation requests.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-sm border border-primary/25 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Browse the catalogue
        </Link>
      </div>

      <Accordion type="single" collapsible className="min-w-0 rounded-lg border border-border bg-background px-5 sm:px-7">
        {businessFaqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-sm font-semibold leading-6 text-foreground hover:text-primary hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-sm leading-7 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default BusinessFaq;
