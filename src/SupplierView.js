import React from "react";
import { Star } from "lucide-react";

const SupplierView = () => {
  const suppliers = [
    { name: "BAMBREW", env: 4, social: 3, governance: 3 },
    { name: "ZEROCIRCLE", env: 3, social: 3, governance: 3 },
    { name: "ZOMATO HYPERPURE", env: 1.5, social: 3, governance: 5 },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">
            Enter Supply Requirements
          </h2>
          <select className="w-full mb-2 p-2 border rounded">
            <option>Product Type</option>
          </select>
          <select className="w-full mb-2 p-2 border rounded">
            <option>Product</option>
          </select>
          <div className="flex items-center mb-2">
            <span className="mr-2">Enter Qty</span>
            <input type="number" className="w-20 p-2 border rounded" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View Options
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Available Suppliers</h2>
          <div className="h-40 bg-gray-100 relative">
            {/* Add scatter plot here */}
            <div className="absolute bottom-0 left-0 w-full text-center">
              Sustainability
            </div>
            <div className="absolute top-0 left-0 h-full -rotate-90 transform origin-top-left text-center">
              Price
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Supplier Action</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>ENV</th>
              <th>Social</th>
              <th>Governance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.name}>
                <td>{supplier.name}</td>
                <td>
                  {supplier.env}/5{" "}
                  {supplier.env >= 4 && (
                    <Star
                      className="inline"
                      size={16}
                      fill="gold"
                      stroke="gold"
                    />
                  )}
                </td>
                <td>
                  {supplier.social}/5{" "}
                  {supplier.social >= 4 && (
                    <Star
                      className="inline"
                      size={16}
                      fill="gold"
                      stroke="gold"
                    />
                  )}
                </td>
                <td>
                  {supplier.governance}/5{" "}
                  {supplier.governance >= 4 && (
                    <Star
                      className="inline"
                      size={16}
                      fill="gold"
                      stroke="gold"
                    />
                  )}
                </td>
                <td>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">
                    Enter Contract
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierView;
