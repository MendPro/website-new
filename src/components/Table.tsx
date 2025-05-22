import React from 'react';

type FeatureValue = boolean | string;

interface Feature {
  label: string;
  mendpro: FeatureValue;
  hootsuite: FeatureValue;
  zoho: FeatureValue;
  hubspot: FeatureValue;
}

const features: Feature[] = [
  { label: 'Social media scheduling', mendpro: true, hootsuite: true, zoho: true, hubspot: true },
  { label: 'DM to CRM automation', mendpro: true, hootsuite: false, zoho: false, hubspot: 'Partial' },
  { label: 'Order tracking from DMs', mendpro: true, hootsuite: false, zoho: 'Partial', hubspot: false },
  { label: 'Simple bookkeeping', mendpro: true, hootsuite: false, zoho: false, hubspot: false },
  { label: 'Inventory management', mendpro: true, hootsuite: false, zoho: false, hubspot: true },
  { label: 'AI replies for DMs/comments', mendpro: true, hootsuite: false, zoho: false, hubspot: true },
  { label: 'Smart remarketing triggers', mendpro: true, hootsuite: false, zoho: 'Partial', hubspot: true },
  { label: 'Customer segmentation', mendpro: true, hootsuite: 'Social-only', zoho: 'Social-only', hubspot: true },
  { label: 'Works across all platforms', mendpro: true, hootsuite: true, zoho: 'Partial', hubspot: true },
  { label: 'Business-focused features', mendpro: 'All-in-one', hootsuite: 'Social-only', zoho: 'Social-only', hubspot: 'CRM/Sales' },
  { label: 'Pricing', mendpro: 'Starts at $25/month', hootsuite: '$99+/month', zoho: '$15–$65/month', hubspot: '$20–$800/month' },
];

const Check = () => <span className="text-green-500 font-bold">✔</span>;
const Cross = () => <span className="text-red-500 font-bold">✘</span>;

const renderValue = (val: FeatureValue): JSX.Element => {
  if (val === true) return <Check />;
  if (val === false) return <Cross />;
  return <span className="text-gray-700">{val}</span>;
};

export default function Table(): JSX.Element {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">
        Why settle for social tools when you can run your whole business?
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-md text-sm text-left text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Feature</th>
              <th className="px-4 py-3 font-semibold">MendPro</th>
              <th className="px-4 py-3 font-semibold">Hootsuite</th>
              <th className="px-4 py-3 font-semibold">Zoho Social</th>
              <th className="px-4 py-3 font-semibold">HubSpot</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3">{feature.label}</td>
                <td className="px-4 py-3">{renderValue(feature.mendpro)}</td>
                <td className="px-4 py-3">{renderValue(feature.hootsuite)}</td>
                <td className="px-4 py-3">{renderValue(feature.zoho)}</td>
                <td className="px-4 py-3">{renderValue(feature.hubspot)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-8">
        <a
          href="/signup"
          className="inline-block bg-linear-115  from-[#f3ff8d] via-70% to-[#012b3a] text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition"
        >
          Switch to MendPro →
        </a>
      </div>
    </div>
  );
}
