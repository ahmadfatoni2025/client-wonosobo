import { DashboardLayout } from "@/components/dashboard-layout"

export default function HomePage() {
    return (
        <DashboardLayout breadcrumbPage="Beranda Utama">
            <div className="flex flex-1 flex-col gap-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="bg-muted/50 flex flex-col items-center justify-center aspect-video rounded-xl border p-4">
                        <h3 className="text-lg font-semibold">Statistik Inventaris</h3>
                        <p className="text-muted-foreground text-sm">Data tersinkronasi dengan database</p>
                    </div>
                    <div className="bg-muted/50 flex flex-col items-center justify-center aspect-video rounded-xl border p-4">
                        <h3 className="text-lg font-semibold">Pesanan Dapur</h3>
                        <p className="text-muted-foreground text-sm">Pantau pesanan secara real-time</p>
                    </div>
                    <div className="bg-muted/50 flex flex-col items-center justify-center aspect-video rounded-xl border p-4">
                        <h3 className="text-lg font-semibold">Laporan Keuangan</h3>
                        <p className="text-muted-foreground text-sm">Ringkasan harian sistem MBG</p>
                    </div>
                </div>
                <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min p-6 border">
                    <h2 className="text-2xl font-bold mb-4">Selamat Datang di Management System MBG</h2>
                    <p className="text-muted-foreground">
                        Gunakan sidebar di sebelah kiri untuk menavigasi modul yang tersedia.
                        Semua data yang Anda inputkan akan langsung tersimpan di sistem backend kami.
                    </p>
                </div>
            </div>
        </DashboardLayout>
    )
}
