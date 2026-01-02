import { DashboardLayout } from "@/components/dashboard-layout"
import ChartPenjualan from "@/components/ui/chartPenjualan"
import ChartDapur from "@/components/ui/chartDapur"
import ChartKeuangan from "@/components/ui/chartKeuangan"

export default function HomePage() {
    return (
        <DashboardLayout breadcrumbPage="Beranda Utama">
            <div className="flex flex-1 flex-col gap-6 p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="flex flex-col rounded-2xl border bg-white shadow-sm p-4 h-[300px] sm:h-auto sm:aspect-video">
                        <h3 className="text-sm font-semibold text-neutral-500 mb-4 px-2">Statistik Penjualan</h3>
                        <div className="flex-1 w-full">
                            <ChartPenjualan />
                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl border bg-white shadow-sm p-4 h-[300px] sm:h-auto sm:aspect-video">
                        <h3 className="text-sm font-semibold text-neutral-500 mb-4 px-2">Aktivitas Dapur</h3>
                        <div className="flex-1 w-full">
                            <ChartDapur />
                        </div>
                    </div>
                    <div className="flex flex-col rounded-2xl border bg-white shadow-sm p-4 h-[300px] sm:h-auto sm:aspect-video">
                        <h3 className="text-sm font-semibold text-neutral-500 mb-4 px-2">Arus Keuangan</h3>
                        <div className="flex-1 w-full">
                            <ChartKeuangan />
                        </div>
                    </div>
                </div>

                <div className="min-h-[400px] flex-1 rounded-2xl p-8 border bg-white shadow-sm">
                    <div>
                        <h2 className="text-3xl text-center justify-center py-auto font-bold tracking-tight text-neutral-900 mb-4">pas di isi karo tabel GIZI ?</h2>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

