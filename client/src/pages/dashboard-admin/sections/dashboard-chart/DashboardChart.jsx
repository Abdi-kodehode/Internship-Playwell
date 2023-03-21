import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: "Jan",
        "Active User": 1200,
      },
      {
        name: "Feb",
        "Active User": 1600,
      },
      {
        name: "Mar",
        "Active User": 2100,
      },
      {
        name: "Apr",
        "Active User": 2400,
      },
      {
        name: "May",
        "Active User": 2600,
      },
      {
        name: "Jun",
        "Active User": 2710,
      },
      {
        name: "Jul",
        "Active User": 2600,
      },
      {
        name: "Agu",
        "Active User": 2200,
      },
      {
        name: "Sep",
        "Active User": 3000,
      },
      {
        name: "Oct",
        "Active User": 3100,
      },
      {
        name: "Nov",
        "Active User": 3000,
      },
      {
        name: "Dec",
        "Active User": 2600,
      },
    ];

const DashboardChart = () => {
  return (
   
        <div className="bg-black/20  h-[60vh]  rounded-xl mx-5 my-2 pb-5 tablet:h-[45vh] mobile:h-[35vh]">
        <div className="pt-4 text-4xl text-white/80 px-5 pb-5 laptop:text-3xl tablet:text-2xl mobile:text-xl">
          <span>Active Users</span>
        </div>
        
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Active User" stroke="red" fill="#ff010cd6" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
      );
    }
  
export default DashboardChart

