import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function AreaChartModel({ data, dataKeyX, dataKeysY, colors = [] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeysY.map((key, index) => (
          <Area key={key} type="monotone" dataKey={key} stroke={colors[index] || "#8884d8"} fill={colors[index] || "#8884d8"} />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}