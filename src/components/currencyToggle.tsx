// components/CurrencyToggle.tsx
import React from 'react';

interface CurrencyToggleProps {
  currency: 'USD' | 'NGN';
  setCurrency: (currency: 'USD' | 'NGN') => void;
}

const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ currency, setCurrency }) => {
  const isUSD = currency === 'USD';

  const toggleCurrency = () => {
    setCurrency(isUSD ? 'NGN' : 'USD');
  };

  return (
    <div className="mt-6 flex items-center gap-3">
      <span className="text-sm text-gray-700">USD</span>
      <button
        onClick={toggleCurrency}
        className={`relative inline-flex h-6 w-11 outline-none items-center rounded-full transition-colors duration-300 ${
          isUSD ? 'bg-blue-600' : 'bg-green-600'
        }`}
        aria-label="Toggle currency"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            isUSD ? 'translate-x-1' : 'translate-x-6'
          }`}
        />
      </button>
      <span className="text-sm text-gray-700">NGN</span>
    </div>
  );
};

export default CurrencyToggle;
