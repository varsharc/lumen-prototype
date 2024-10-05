import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ConsumerView = () => {
  const ratings = [
    { name: "Company", value: 70, color: "#EF4444" },
    { name: "Target", value: 60, color: "#F59E0B" },
    { name: "Benchmark", value: 50, color: "#10B981" },
    { name: "Average", value: 40, color: "#3B82F6" },
    { name: "Best", value: 20, color: "#6366F1" },
  ];

  const emissionsData = [
    { stage: "Raw Material", scope12: 100, intensity: 0.5 },
    { stage: "Producer", scope12: 150, intensity: 0.7 },
    { stage: "Shipper", scope12: 80, intensity: 0.3 },
    { stage: "Retailer", scope12: 120, intensity: 0.6 },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">
            Environmental Benchmark
          </h2>
          <div className="h-24 flex items-end space-x-2">
            {ratings.map((rating) => (
              <div
                key={rating.name}
                className="flex-1 flex flex-col items-center"
                style={{ height: `${(rating.value / 100) * 100}%` }}
              >
                <div className="text-xs mb-1">{rating.name}</div>
                <div
                  className="w-full rounded-t"
                  style={{ backgroundColor: rating.color, height: "100%" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">DPP Trace</h2>
          {/* Add DPP Trace visualization here */}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Emissions Data</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Scope 1+2 Emissions</th>
              <th>Intensity</th>
            </tr>
          </thead>
          <tbody>
            {emissionsData.map((data) => (
              <tr key={data.stage}>
                <td>{data.stage}</td>
                <td>{data.scope12}</td>
                <td>{data.intensity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add simple flowchart here */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Circular Value</h2>
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">₹30-40</div>
          <div className="text-2xl font-bold">L30</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Disposal</h3>
            {["Packaging", "Clothing", "Metal Tags"].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center mb-2"
              >
                <span>{item}</span>
                <button className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                  Instructions
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Recycle & Earn Rewards</h3>
            {[
              { name: "RECYKAL", price: "₹ 44", pickup: "Free Pickup" },
              { name: "UNFORUS", price: "₹ 30", pickup: "+ ₹2 Pickup" },
              { name: "", price: "₹ ..", pickup: "+ ..." },
            ].map((recycler, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <span>{recycler.name}</span>
                  <div>
                    <button className="bg-green-500 text-white px-2 py-1 rounded text-sm mr-1">
                      Sell
                    </button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                      Chat
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  {recycler.price}{" "}
                  <span className="text-xs">{recycler.pickup}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerView;
