import { DashboardLayout } from "@/components/dashboard-layout"

export default function KitchenPage() {
    return (
        <DashboardLayout breadcrumbPage="Dapur">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-muted/50 p-6 rounded-xl border">
                    <h2 className="text-2xl font-bold mb-4">Modul Dapur</h2>
                    <p className="text-muted-foreground">
                        Pantau aktivitas masak dan pesanan dapur secara real-time.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-6 rounded-xl border-yellow-200 border">
                        <h3 className="font-bold">Pesanan Baru</h3>
                        <p className="text-3xl font-bold">12</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-xl border-blue-200 border">
                        <h3 className="font-bold">Sedang Dimasak</h3>
                        <p className="text-3xl font-bold">5</p>
                    </div>
                    <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl border-green-200 border">
                        <h3 className="font-bold">Selesai</h3>
                        <p className="text-3xl font-bold">48</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
