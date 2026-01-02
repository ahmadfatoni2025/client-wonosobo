import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// #region Sample data
const data = [
    {
        name: 'Jan',
        uv: 400,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 300,
        pv: 4567,
        amt: 2400,
    },
    {
        name: 'Mar',
        uv: 320,
        pv: 1398,
        amt: 2400,
    },
    {
        name: 'Apr',
        uv: 200,
        pv: 9800,
        amt: 2400,
    },
    {
        name: 'Mei',
        uv: 278,
        pv: 3908,
        amt: 2400,
    },
    {
        name: 'Jun',
        uv: 189,
        pv: 4800,
        amt: 2400,
    },
];

// #endregion
export default function ChartPenjualan() {
    return (
        <div className="w-full h-full min-h-[250px] sm:min-h-[300px] bg-linear-to-br from-white to-neutral-50 rounded-xl p-3 sm:p-5 shadow-sm border border-neutral-100">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        bottom: 5,
                        left: -10,
                    }}
                >
                    <CartesianGrid
                        stroke="#e5e5e5"
                        strokeDasharray="3 3"
                        vertical={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#6366f1"
                        strokeWidth={3}
                        strokeLinecap="round"
                        dot={{
                            stroke: '#4f46e5',
                            strokeWidth: 2,
                            r: 3,
                            fill: '#ffffff'
                        }}
                        activeDot={{
                            r: 5,
                            fill: '#4f46e5',
                            stroke: '#ffffff',
                            strokeWidth: 2
                        }}
                        name="Penjualan"
                    />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#888', fontSize: 10 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#888', fontSize: 10 }}
                        width={35}
                    />
                    <Legend
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{
                            fontSize: '11px',
                            fontWeight: 500,
                            paddingBottom: '15px'
                        }}
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: '10px',
                            border: '1px solid #f0f0f0',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            background: 'rgba(255, 255, 255, 0.98)',
                            padding: '10px'
                        }}
                        labelStyle={{
                            fontWeight: 700,
                            color: '#111',
                            marginBottom: '4px',
                            fontSize: '12px'
                        }}
                        itemStyle={{
                            fontSize: '12px',
                            padding: '2px 0'
                        }}
                        formatter={(value) => [`${value} unit`, 'Total']}
                        labelFormatter={(label) => `Bulan: ${label}`}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
