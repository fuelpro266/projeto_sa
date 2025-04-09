import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function BarChartModel({ data, dataKeyX, dataKeysY, colors = [] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeysY.map((key, index) => (
          <Bar key={key} dataKey={key} fill={colors[index] || "#8884d8"} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
