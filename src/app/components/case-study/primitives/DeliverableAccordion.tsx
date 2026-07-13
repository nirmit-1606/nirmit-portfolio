import { motion } from "motion/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/accordion";
import { fadeUp } from "../animations";
import { CaseStudyImage } from "./CaseStudyImage";

interface DeliverableItem {
  value: string;
  label: string;
  sublabel: string;
  src: string;
  alt: string;
  caption: string;
  bg?: string;
}

export function DeliverableAccordion({ items }: { items: DeliverableItem[] }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
      <Accordion type="multiple" className="rounded-xl overflow-hidden divide-y divide-border border border-border">
        {items.map(({ value, label, sublabel, src, alt, caption, bg }) => (
          <AccordionItem key={value} value={value} className="border-0 bg-secondary/40 transition-colors">
            <AccordionTrigger className="px-5 hover:no-underline hover:bg-foreground/[0.04] transition-all">
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-foreground-secondary-2 font-normal mt-0.5">{sublabel}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-6 pt-2">
              <CaseStudyImage src={src} alt={alt} caption={caption} bg={bg ?? ""} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
