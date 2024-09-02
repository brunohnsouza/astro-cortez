import { Button } from "@/components/ui/button";

const logoName = "AmiVet";

export const sections: Section[] = [
  {
    id: "#home",
    nameSection: "Início",
  },
  {
    id: "#about-us",
    nameSection: "Sobre nós",
  },
  {
    id: "#services",
    nameSection: "Serviços",
  },
  {
    id: "#team",
    nameSection: "Equipe",
  },
  {
    id: "#evidence",
    nameSection: "Depoimentos",
  },
  {
    id: "#faq",
    nameSection: "FAQ",
  },
  {
    id: "#contact",
    nameSection: "Contato",
  },
];

type Section = {
  id: string;
  nameSection: string;
};

export default function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/35 fixed z-50 py-4 w-full shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-4">
        <a href="#home" className="flex items-center gap-x-2 max-w-max">
          <img src="/logo.svg" alt={`Logo da clínica ${logoName}`} />
          <span
            className="text-xl md:text-2xl text-secondary-foreground font-extrabold tracking-wide hidden sm:inline-block"
          >
            {logoName}
          </span>
        </a>

        <nav>
          <Button asChild className="capitalize font-semibold text-base tracking-wide">
            <a href="#contact">Marcar consulta</a>
          </Button>
        </nav>
      </div>
    </header>

  );
}
