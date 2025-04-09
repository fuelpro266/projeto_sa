import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function PieChartModel({ data, dataKey, nameKey, colors = [] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Tooltip />
        <Legend />
        <Pie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
          {data.map((_, index) => (
            <Cell key={index} fill={colors[index] || "#8884d8"} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}