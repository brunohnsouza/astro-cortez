import { Quote } from "lucide-react";

export type Evidence = {
    name: string;
    pet: string;
    text: string;
    image: string;
    petImage: string;
}

export function EvidenceCard({ image, name, petImage, pet, text }: Evidence) {
    return (
        <div className="flex flex-col text-center items-center md:flex-row md:text-start gap-8">
            <div className="relative size-44">
                <Quote className="absolute top-0 left-0 size-12 text-primary shrink-0" />

                <img src={image} alt={name} className="w-full h-full rounded-full aspect-square object-cover" loading="lazy" />
                <img src={petImage} alt={pet} className="absolute -bottom-3 right-0 w-1/2 h-1/2 rounded-full aspect-square object-cover border-4 border-primary" loading="lazy" />
            </div>

            <div className="flex flex-1 flex-col gap-y-6">
                <div className="flex flex-col md:items-start gap-y-0.5">
                    <h3 className="text-2xl capitalize font-semibold text-foreground tracking-wide">{name}</h3>
                    <h4 className="capitalize text-primary tracking-wide">{pet}</h4>
                </div>

                <p className="text-secondary-foreground/70 tracking-wide">{text}</p>
            </div>
        </div>
    );
}
