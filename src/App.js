import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SupplierView from './SupplierView';
import ConsumerView from './ConsumerView';

const emissionsData = [
  { year: 2020, baseline: 100, target: 100, improved: 100 },
  { year: 2021, baseline: 98, target: 95, improved: 97 },
  { year: 2022, baseline: 96, target: 90, improved: 93 },
  { year: 2023, baseline: 94, target: 85, improved: 88 },
  { year: 2024, baseline: 92, target: 80, improved: 82 },
];

const dppData = [
  { id: 'SKU001', product: "Levi's 501", batch: 'B001', rawMaterial: 'Cotton, Polyester' },
  { id: 'SKU002', product: "Levi's 502", batch: 'B002', rawMaterial: 'Organic Cotton' },
  { id: 'SKU003', product: "Levi's 512", batch: 'B003', rawMaterial: 'Recycled Denim' },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('impactOverview');
  const [lumenBalance, setLumenBalance] = useState(1000);
  const [lumenPrice, setLumenPrice] = useState(30);

  const renderTopBar = () => (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">LUMEN</h1>
        <div className="flex space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200" title="Settings">⚙️</button>
          <button className="p-2 rounded-full hover:bg-gray-200" title="My Account">👤</button>
          <button className="p-2 rounded-full hover:bg-gray-200" title="Sign Out">🚪</button>
        </div>
      </div>
    </header>
  );

  const renderSidebar = () => (
    <nav className="w-64 bg-white shadow-sm">
      <div className="p-4">
        {['impactOverview', 'digitalProductPassports', 'tradeCarbon', 'suppliers', 'consumer'].map((tab) => (
          <button 
            key={tab}
            className={`w-full text-left p-2 mb-2 rounded ${activeTab === tab ? 'bg-teal-200' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
    </nav>
  );

  const renderImpactOverview = () => {
    const esgScore = 78;
    const environmentalScore = 82;
    const socialScore = 75;
    const governanceScore = 77;

    const ratings = [
      { name: 'Company', value: 70, color: 'bg-red-500' },
      { name: 'Target', value: 60, color: 'bg-yellow-500' },
      { name: 'Benchmark', value: 50, color: 'bg-yellow-300' },
      { name: 'Average', value: 40, color: 'bg-green-300' },
      { name: 'Best', value: 20, color: 'bg-green-500' }
    ];

    const maxRating = Math.max(...ratings.map(r => r.value));

    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Impact Overview</h2>

        {/* ESG Score */}
        <div className="mb-6 text-center">
          <div className="text-4xl font-bold bg-teal-200 inline-block px-6 py-3 rounded">
            ESG Score: {esgScore}/100
          </div>
        </div>

        {/* E, S, G Scores */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'E', score: environmentalScore, color: 'bg-teal-200' },
            { label: 'S', score: socialScore, color: 'bg-blue-200' },
            { label: 'G', score: governanceScore, color: 'bg-purple-200' }
          ].map(({ label, score, color }) => (
            <div key={label} className={`${color} p-4 rounded text-center`}>
              <div className="text-xl font-bold">{label}</div>
              <div className="text-2xl">{score}/100</div>
            </div>
          ))}
        </div>

        {/* Environmental Benchmark */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Environmental Benchmark</h3>
          <div className="relative h-40">
            {ratings.map((rating, index) => (
              <div 
                key={rating.name}
                className="absolute bottom-0 flex flex-col items-center"
                style={{
                  left: `${(index / (ratings.length - 1)) * 100}%`,
                  width: '18%',
                  height: `${(rating.value / maxRating) * 100}%`
                }}
              >
                <div className="text-xs mb-1">{rating.name}</div>
                <div 
                  className={`w-full ${rating.color} rounded-t`}
                  style={{ height: '100%' }}
                ></div>
                <div className="text-xs mt-1">{rating.value}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span>High Impact</span>
            <span>Low Impact</span>
          </div>
        </div>
      </div>
    );
  };

  const renderDigitalProductPassports = () => (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">DPP Trace</h2>
        <div className="mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-2">Product</th>
                <th className="border p-2">Producer Info</th>
                <th className="border p-2">Shipper Info</th>
                <th className="border p-2">Retailer Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Product</td>
                <td className="border p-2">Details</td>
                <td className="border p-2"></td>
                <td className="border p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl font-bold">7/10</div>
            </div>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="10" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#4fd1c5" strokeWidth="10" strokeDasharray="283" strokeDashoffset="85" />
              <circle cx="50" cy="50" r="38" fill="#fff" />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <div>Raw Material</div>
          <div>Producer</div>
          <div>Shipper</div>
          <div className="font-bold">Retailer</div>
          <div>End Consumer</div>
          <div>Recycle</div>
        </div>
      </div>
    </div>
  );

  const renderTradeCarbon = () => (
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Carbon Credits Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={emissionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="baseline" fill="#8884d8" />
            <Bar dataKey="target" fill="#82ca9d" />
            <Bar dataKey="improved" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Trade $LUMEN</h2>
        <p>Current $LUMEN Balance: {lumenBalance}</p>
        <p>Current $LUMEN Price: ${lumenPrice}</p>
        <div className="mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => setLumenBalance(lumenBalance + 100)}
          >
            Buy 100 $LUMEN
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setLumenBalance(Math.max(0, lumenBalance - 100))}
          >
            Sell 100 $LUMEN
          </button>
        </div>
      </div>
    </div>
  );

  const renderSuppliers = () => (
    <SupplierView />
  );

  const renderConsumer = () => (
    <ConsumerView />
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'impactOverview':
        return renderImpactOverview();
      case 'digitalProductPassports':
        return renderDigitalProductPassports();
      case 'tradeCarbon':
        return renderTradeCarbon();
      case 'suppliers':
        return renderSuppliers();
      case 'consumer':
        return renderConsumer();
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {renderTopBar()}
      <div className="flex flex-1 overflow-hidden">
        {renderSidebar()}
        <main className="flex-1 overflow-auto p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;