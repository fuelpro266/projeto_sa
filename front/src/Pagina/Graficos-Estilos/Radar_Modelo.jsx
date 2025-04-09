import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

export default function RadarChartModel({ data, dataKey, nameKey, color = "#8884d8" }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={nameKey} />
        <PolarRadiusAxis />
        <Radar dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}