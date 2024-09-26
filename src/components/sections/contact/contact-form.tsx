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
            <Card className="border-none space-y-6 shadow-none">
                <CardHeader className="p-0">
                    <CardTitle className="text-lg md:text-xl uppercase barlow-extrabold tracking-wider">
                        Contate-nos
                    </CardTitle>
                    <CardDescription className="work-sans-regular text-base">
                        Preencha o formulário abaixo para entrar em contato conosco.
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-0">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="uppercase barlow-bold tracking-wider">Primeiro Nome</Label>
                                <Input
                                    id="firstName"
                                    className="text-black ring-darkVanilla border-zinc-200 rounded-none placeholder:text-zinc-400 shadow-none bg-white work-sans-regular text-base"
                                    placeholder="Primeiro Nome"
                                    {...register("firstName")}
                                />
                                {errors.firstName && (
                                    <small className="text-red-500 work-sans-regular text-sm tracking-wider">
                                        {errors.firstName.message}
                                    </small>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="uppercase barlow-bold tracking-wider">Último Nome</Label>
                                <Input
                                    id="lastName"
                                    className="text-black ring-darkVanilla border-zinc-200 rounded-none placeholder:text-zinc-400 shadow-none bg-white work-sans-regular text-base"
                                    placeholder="Último nome"
                                    {...register("lastName")}
                                />
                                {errors.lastName && (
                                    <small className="text-red-500 work-sans-regular text-sm tracking-wider">
                                        {errors.lastName.message}
                                    </small>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="uppercase barlow-bold tracking-wider">Email</Label>
                            <Input
                                id="email"
                                className="text-black ring-darkVanilla border-zinc-200 rounded-none placeholder:text-zinc-400 shadow-none bg-white work-sans-regular text-base"
                                placeholder="johndoe@exemplo.com"
                                type="email"
                                {...register("email")}
                            />
                            {errors.email && (
                                <small className="text-red-500 work-sans-regular text-sm tracking-wider">
                                    {errors.email.message}
                                </small>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone" className="uppercase barlow-bold tracking-wider">Telefone Celular</Label>
                            <Input
                                id="phone"
                                className="text-black ring-darkVanilla border-zinc-200 rounded-none placeholder:text-zinc-400 shadow-none bg-white work-sans-regular text-base"
                                placeholder="(xx) xxxxx-xxxx"
                                maxLength={11}
                                type="tel"
                                {...register("phone")}
                            />
                            {errors.phone && (
                                <small className="text-red-500 work-sans-regular text-sm tracking-wider">
                                    {errors.phone.message}
                                </small>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="uppercase barlow-bold tracking-wider">Mensagem</Label>
                            <Textarea
                                id="message"
                                className="text-black ring-darkVanilla border-zinc-200 rounded-none placeholder:text-zinc-400 shadow-none min-h-28 resize-none bg-white work-sans-regular text-base"
                                placeholder="Escreva sua mensagem aqui..."
                                {...register("message")}
                            />
                            {errors.message && (
                                <small className="text-red-500 work-sans-regular text-sm tracking-wider">
                                    {errors.message.message}
                                </small>
                            )}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-0">
                    <Button className="bg-darkVanilla py-7 text-base uppercase rounded-none border-2 border-darkVanilla w-full shadow-none barlow-extrabold tracking-wider whitespace-nowrap" type="submit">
                        Enviar Mensagem
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}