import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { RevealGroup, RevealItem } from "./Reveal"
import SectionHeading from "./SectionHeading"

/** Two-column FAQ: sticky heading + accordion. */
const FaqSection = ({ index, faqs, className = "bg-white" }) => (
  <section className={`section ${className}`}>
    <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionHeading index={index} eyebrow="FAQ" title="Frequently asked questions" lead="Quick answers to help you get started." />
        </div>
      </div>
      <RevealGroup className="lg:col-span-8">
        <Accordion type="multiple" className="border-t border-ink-900/10">
          {faqs.map((faq, i) => (
            <RevealItem key={faq.question}>
              <AccordionItem value={`faq-${i}`} className="border-b border-ink-900/10">
                <AccordionTrigger className="group gap-6 py-6 text-left font-display text-lg font-semibold tracking-[-0.01em] text-ink-900 hover:no-underline sm:text-xl [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-brand-600">
                  <span className="flex items-baseline gap-5">
                    <span className="t-eyebrow tabular text-ink-400">{String(i + 1).padStart(2, "0")}</span>
                    <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-7 pl-10 pr-8 text-[15px] leading-relaxed text-ink-500 sm:pl-12">
                  {faq.answer && <p>{faq.answer}</p>}
                  {faq.points && (
                    <ul className="space-y-2.5">
                      {faq.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            </RevealItem>
          ))}
        </Accordion>
      </RevealGroup>
    </div>
  </section>
)

export default FaqSection
