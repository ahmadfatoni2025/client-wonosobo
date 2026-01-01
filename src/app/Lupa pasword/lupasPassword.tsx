import { GalleryVerticalEnd } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function ForgetPassword() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link to="/" className="flex items-center gap-2 font-medium">
                        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                            <GalleryVerticalEnd className="size-4" />
                        </div>
                        Leafiess inc.
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center gap-1 text-center">
                                <h1 className="text-3xl font-bold">Lupa Kata Sandi</h1>
                                <p className="text-muted-foreground text-base text-balance">
                                    Mohon maaf, fitur reset kata sandi mandiri sedang dalam pengembangan.
                                </p>
                            </div>
                            <div className="text-muted-foreground text-center text-base">
                                Silakan hubungi admin melalui WhatsApp untuk bantuan reset kata sandi Anda.
                            </div>
                            <Button asChild className="w-full text-lg py-6">
                                <a href="https://wa.me/6285714412716" target="_blank" rel="noopener noreferrer">
                                    Hubungi Admin
                                </a>
                            </Button>
                            <div className="text-center text-sm">
                                <Link to="/" className="underline underline-offset-4 text-base">
                                    Kembali ke Halaman Masuk
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <img
                    src="https://i.pinimg.com/736x/85/c5/3a/85c53a9acfb82a522cb04c07db008940.jpg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
