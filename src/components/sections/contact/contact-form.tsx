import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    firstName: z.string().nonempty({ message: "Primeiro nome é obrigatório." }),
    lastName: z.string().nonempty({ message: "Último nome é obrigatório." }),
    email: z.string().email({ message: "Email inválido." }),
    phone: z.string().regex(/^\d{11}$/, { message: "Telefone inválido." }),
    message: z.string().nonempty({ message: "Mensagem é obrigatória." }),
})

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: FormData) {
        console.log(values)
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit(onSubmit)(event);
        }}>
            <Card className="border-none space-y-8 shadow-none">
                <CardHeader className="p-0">
                    <CardTitle className="text-foreground font-bold text-xl tracking-wide">
                        Contate-nos
                    </CardTitle>
                    <CardDescription className="text-base text-secondary-foreground/70 tracking-wide">
                        Preencha o formulário abaixo para entrar em contato conosco.
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="font-semibold tracking-wide">Primeiro Nome</Label>
                                <Input
                                    id="firstName"
                                    placeholder="Primeiro Nome"
                                    {...register("firstName")}
                                />
                                {errors.firstName && (
                                    <small className="text-destructive text-sm tracking-wide">
                                        {errors.firstName.message}
                                    </small>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="font-semibold tracking-wide">Último Nome</Label>
                                <Input
                                    id="lastName"
                                    placeholder="Último nome"
                                    {...register("lastName")}
                                />
                                {errors.lastName && (
                                    <small className="text-destructive text-sm tracking-wide">
                                        {errors.lastName.message}
                                    </small>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="font-semibold tracking-wide">Email</Label>
                            <Input
                                id="email"
                                placeholder="johndoe@exemplo.com"
                                type="email"
                                {...register("email")}
                            />
                            {errors.email && (
                                <small className="text-destructive text-sm tracking-wide">
                                    {errors.email.message}
                                </small>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="font-semibold tracking-wide">Telefone Celular</Label>
                            <Input
                                id="phone"
                                placeholder="(xx) xxxxx-xxxx"
                                maxLength={11}
                                type="tel"
                                {...register("phone")}
                            />
                            {errors.phone && (
                                <small className="text-destructive text-sm tracking-wide">
                                    {errors.phone.message}
                                </small>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="font-semibold tracking-wide">Mensagem</Label>
                            <Textarea
                                id="message"
                                className="min-h-20 resize-none"
                                placeholder="Escreva sua mensagem aqui..."
                                {...register("message")}
                            />
                            {errors.message && (
                                <small className="text-destructive text-sm tracking-wide">
                                    {errors.message.message}
                                </small>
                            )}
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-0">
                    <Button className="capitalize font-semibold text-base w-full tracking-wide" type="submit">
                        Enviar Mensagem
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}