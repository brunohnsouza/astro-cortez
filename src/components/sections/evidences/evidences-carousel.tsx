import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { EvidenceCard, type Evidence } from "./evidence-card";

const evidences: Evidence[] = [
    {
        name: "Ana Rodrigues",
        pet: "Golden Retriver",
        text: '"Sou extremamente grata à equipe da clínica veterinária. Cuidaram de Luna, minha Golden Retriever, com carinho e profissionalismo. Recomendo fortemente!"',
        image: "/sections/evidences/evidence-1.webp",
        petImage: "/sections/evidences/pet-evidence-1.webp",
    },
    {
        name: "Lucas Silva",
        pet: "Bulldog Francês",
        text: '"Estou muito feliz com a clínica veterinária! A equipe mostrou cuidado e compreensão, respondendo a todas as nossas preocupações e oferecendo um atendimento personalizado para Charlie, meu Bulldog Francês."',
        image: "/sections/evidences/evidence-2.webp",
        petImage: "/sections/evidences/pet-evidence-2.webp",
    },
    {
        name: "Lucas Silva",
        pet: "Bulldog Francês",
        text: '"Estou muito feliz com a clínica veterinária! A equipe mostrou cuidado e compreensão, respondendo a todas as nossas preocupações e oferecendo um atendimento personalizado para Charlie, meu Bulldog Francês."',
        image: "/sections/evidences/evidence-2.webp",
        petImage: "/sections/evidences/pet-evidence-2.webp",
    },
    {
        name: "Lucas Silva",
        pet: "Bulldog Francês",
        text: '"Estou muito feliz com a clínica veterinária! A equipe mostrou cuidado e compreensão, respondendo a todas as nossas preocupações e oferecendo um atendimento personalizado para Charlie, meu Bulldog Francês."',
        image: "/sections/evidences/evidence-2.webp",
        petImage: "/sections/evidences/pet-evidence-2.webp",
    }
]

const groupedEvidences = evidences.reduce((result, _, index, array) => {
    if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
    }
    return result;
}, [] as Evidence[][]);

export function EvidencesCarousel() {
    return (
        <Carousel opts={{
            loop: true,
        }}

        >
            <CarouselContent>
                {
                    groupedEvidences.map((group, index) => (
                        <CarouselItem key={index}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
                                {group.map((evidence, subIndex) => (
                                    <EvidenceCard
                                        key={subIndex}
                                        image={evidence.image}
                                        name={evidence.name}
                                        petImage={evidence.petImage}
                                        pet={evidence.pet}
                                        text={evidence.text}
                                    />
                                ))}
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    )
}