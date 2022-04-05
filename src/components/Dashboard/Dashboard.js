import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';



const DashBoard = () => {
    const data = [{
        month: "Apr",
        investment: 200000,
        sell: 423,
        revenue: 24500
    },
    {
        month: "May",
        investment: 500000,
        sell: 726,
        revenue: 67010
    },

    {
        month: "Jun",
        investment: 500000,
        sell: 529,
        revenue: 40405
    },
    {
        month: "Jul",
        investment: 600000,
        sell: 601,
        revenue: 50900
    },
    {
        month: "Aug",
        investment: 700000,
        sell: 670,
        revenue: 61000
    }
    ]

    return (
        <>
        <div className='container justify-center mt-5 '>
            <AreaChart width={400} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="month" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="sell" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </div>


        {/* Pie chart */}
        
        <div className="second_chart mt-5">
    <PieChart width={430} height={250}>
    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Pie data={data} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    </PieChart>
        </div>


        {/* Reader Chart */}
            <RadarChart outerRadius={90} width={500} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="month" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="month" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
            </RadarChart>
        </>

    );
};

export default DashBoard;