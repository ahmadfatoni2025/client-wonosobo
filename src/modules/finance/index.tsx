import { DashboardLayout } from "@/components/dashboard-layout"

export default function FinancePage() {
    return (
        <DashboardLayout breadcrumbPage="Keuangan">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-muted/50 p-6 rounded-xl border">
                    <h2 className="text-2xl font-bold mb-4">Modul Keuangan</h2>
                    <p className="text-muted-foreground">
                        Laporan pengeluaran, pemasukan, dan analisis biaya operasional.
                    </p>
                </div>
                <div className="bg-muted/50 p-6 rounded-xl border flex-1">
                    <h3 className="font-semibold mb-4">Ringkasan Bulanan</h3>
                    <div className="h-64 bg-muted/20 rounded-md flex items-center justify-center italic text-muted-foreground">
                        Grafik Keuangan Akan Muncul Di Sini
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
