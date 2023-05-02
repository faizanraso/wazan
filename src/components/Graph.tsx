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
import convertDateFormat from "@/functions/ConvertDateFormat";

const inter = Inter({ subsets: ["latin"] });

export default function Graph(props: any) {
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
            fontSize={5}
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  const CustomTooltip = (props: any) => {
    {
      const { active, payload, label } = props;
      if (active && payload && payload.length) {
        return (
          <section className={inter.className} role="tooltip">
            <div className="flex text-xs bg-white p-3 text-gray-900 font-medium flex-col">
              <p className="block">{`${convertDateFormat(label)}`}</p>
              <p className="block">{`Weight: ${payload[0].value} lbs`}</p>
            </div>
          </section>
        );
      }
      return null;
    }
  };

  return (
    <div className="flex text-center justify-center items-center mx-auto items-center">
      <LineChart
        width={450}
        height={250}
        data={props.data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="natural" dataKey="weight" stroke="#7bb0b9" />
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="2 2" />
        <XAxis
          dataKey="date"
          padding={{ left: 10, right: 10 }}
          tick={CustomizedAxisTick}
        />
        <YAxis padding={{ top: 10, bottom: 0 }} tick={{ fontSize: 10 }} />
        <Tooltip content={CustomTooltip} />
      </LineChart>
    </div>
  );
}
