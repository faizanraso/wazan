import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Graph() {
  const data = [
    {
      name: "Page A",
      data: 4000,
    },
    {
      name: "Page B",
      data: 3000,
    },
    {
      name: "Page C",
      data: 2000,
    },
    {
      name: "Page D",
      data: 2780,
    },
    {
      name: "Page E",
      data: 1890,
    },
    {
      name: "Page F",
      data: 2390,
    },
    {
      name: "Page G",
      data: 3490,
    },
  ];

  function CustomizedAxisTick(props: any) {
    {
      const { x, y, stroke, payload } = props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            className={inter.className}
            x={0}
            y={4}
            dy={5}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
            fontSize={10}
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  return (
    <div className="flex text-center justify-center items-center mx-auto items-center">
      <LineChart
        width={500}
        height={250}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="natural" dataKey="data" stroke="#7bb0b9" />
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="2 2" />
        <XAxis
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tick={CustomizedAxisTick}
        />
        <YAxis padding={{ top: 10, bottom: 10 }} tick={{ fontSize: 10 }} />
        <Tooltip />
      </LineChart>
    </div>
  );
}
