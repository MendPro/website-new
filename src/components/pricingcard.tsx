// components/PricingCard.tsx
"use client"

import React, { useState } from 'react';
import CurrencyToggle from './currencyToggle';

interface Highlight {
    description: string;
    disabled?: boolean;
}

interface Tier {
    name: string;
    description: string;
    priceMonthly: number;
    href: string;
    highlights: Highlight[];
}

interface PricingCardProps {
    tier: Tier;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
    const [currency, setCurrency] = useState<'USD' | 'NGN'>('USD');
    const exchangeRate = 1560; // Example exchange rate

    const displayPrice =
        currency === 'USD'
            ? `$${tier.priceMonthly}`
            : `₦${(tier.priceMonthly * exchangeRate).toLocaleString()}`;

    return (
        <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-xl font-semibold">{tier.name}</h2>
                    <p className="mt-2 text-sm text-gray-700">{tier.description}</p>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="text-5xl font-medium text-gray-900">
                            {displayPrice}
                        </div>
                        <div className="text-sm text-gray-600">
                            <p>{currency}</p>
                            <p>per month</p>
                        </div>
                    </div>
                    <CurrencyToggle currency={currency} setCurrency={setCurrency} />
                    <div className="mt-8">
                        <a href={tier.href} className="inline-block px-6 py-2  bg-linear-115  from-[#f3ff8d] via-70% to-[#012b3a] text-white rounded hover:bg-green-700">
                            Join Wait List
                        </a>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-sm font-medium text-gray-900">
                            Start selling with:
                        </h3>
                        <ul className="mt-2 space-y-2">
                            {tier.highlights.map((highlight, index) => (
                                <li key={index} className="text-gray-700">
                                    {highlight.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
