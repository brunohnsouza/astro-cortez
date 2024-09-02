import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "Quais são os cuidados básicos que devo fornecer ao meu animal de estimação?",
        answer: "Os cuidados básicos incluem alimentação adequada, higiene regular, exercícios físicos, vacinação, desparasitação, atenção à saúde bucal e oferecer um ambiente seguro e estimulante para o seu animal de estimação.",
    },
    {
        question: "Com que frequência devo levar meu animal de estimação para exames de rotina?",
        answer: "Recomendamos agendar exames de rotina anuais para animais saudáveis. No entanto, animais mais jovens, idosos ou com condições médicas pré-existentes podem exigir visitas mais frequentes. Consulte nosso veterinário para determinar a frequência adequada para o seu animal de estimação.",
    },
    {
        question: "Quais vacinas são essenciais para meu animal de estimação e em que idade elas devem ser administradas?",
        answer: "As vacinas essenciais para cães geralmente incluem raiva, parvovirose, cinomose, hepatite infecciosa canina e leptospirose. Para gatos, as vacinas essenciais incluem raiva, panleucopenia, rinotraqueíte viral felina e calicivirose. O cronograma de vacinação varia, mas as primeiras doses geralmente são administradas quando os filhotes têm cerca de 6-8 semanas de idade.",
    },
];

export function FaqAccordion() {
    return (
        <Accordion type="single" collapsible>
            {
                faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className={`${index === 0 && "border-t"}`}>
                        <AccordionTrigger className="text-start flex items-start gap-x-4 hover:no-underline text-base text-foreground tracking-wide hover:text-foreground/90 transition-colors">
                            <span className="text-primary">{index + 1}.</span>
                            {faq.question}
                        </AccordionTrigger>

                        <AccordionContent className="nunito-regular text-base text-secondary-foreground/70 tracking-wide px-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>

    )
}