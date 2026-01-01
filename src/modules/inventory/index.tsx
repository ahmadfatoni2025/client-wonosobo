import { DashboardLayout } from "@/components/dashboard-layout"

export default function InventoryPage() {
    return (
        <DashboardLayout breadcrumbPage="Inventaris">
            <div className="flex flex-1 flex-col gap-4">
                <div className="bg-muted/50 p-6 rounded-xl border">
                    <h2 className="text-2xl font-bold mb-4">Modul Inventaris</h2>
                    <p className="text-muted-foreground">
                        Kelola stok barang, bahan baku, dan perlengkapan dapur di sini.
                    </p>
                </div>
                <div className="bg-muted/50 p-6 rounded-xl border min-h-[400px]">
                    <h3 className="font-semibold mb-4">Daftar Stok Barang</h3>
                    <div className="border rounded-md overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-muted/50 border-b">
                                <tr>
                                    <th className="p-3 text-left">Nama Barang</th>
                                    <th className="p-3 text-left">Kategori</th>
                                    <th className="p-3 text-left">Stok</th>
                                    <th className="p-3 text-left">Satuan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-3">Beras Premium</td>
                                    <td className="p-3">Bahan Pokok</td>
                                    <td className="p-3 font-medium text-green-600">50</td>
                                    <td className="p-3">KG</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">Minyak Goreng</td>
                                    <td className="p-3">Bahan Pokok</td>
                                    <td className="p-3 font-medium text-red-600">5</td>
                                    <td className="p-3">Liter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
