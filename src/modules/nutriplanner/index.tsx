import { DashboardLayout } from "@/components/dashboard-layout"

export default function NutriPlannerPage() {
    return (
        <DashboardLayout breadcrumbPage="NutriPlanner">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-muted/50 p-6 rounded-xl border">
                    <h2 className="text-2xl font-bold mb-4">Modul NutriPlanner</h2>
                    <p className="text-muted-foreground">
                        Halaman ini digunakan untuk merencanakan nutrisi dan menu makanan.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="bg-muted/50 p-6 rounded-xl border min-h-[200px]">
                        <h3 className="font-semibold mb-2">Jadwal Makan</h3>
                        <p className="text-sm text-muted-foreground italic">Belum ada jadwal yang direncanakan.</p>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl border min-h-[200px]">
                        <h3 className="font-semibold mb-2">Analisis Nutrisi</h3>
                        <p className="text-sm text-muted-foreground italic">Daftar analisis akan muncul di sini.</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
