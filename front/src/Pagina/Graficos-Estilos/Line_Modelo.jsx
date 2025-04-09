import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function LineChartModel({ data, dataKeyX, dataKeysY, colors = [] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKeysY.map((key, index) => (
          <Line key={key} type="monotone" dataKey={key} stroke={colors[index] || "#8884d8"} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}