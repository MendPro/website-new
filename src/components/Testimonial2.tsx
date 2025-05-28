'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiaTimesSolid } from "react-icons/lia";

const testimonials = [
    {
        name: 'Juliet',
        text: 'I was one of the first users of MendPro and I was immediately hooked. With the attention to details and the ease of use; I could not ask for a better app for my business.',
        position: 'Founder & CEO: @themakeupspotafrica',
        image: '/team/mp3.jpeg',
    },
    {
        name: 'I.J',
        text: 'I run a high-volume fashion brand that sells primarily on Instagram. Using MendPro has significantly transformed my business. In such a short time, I have seen great results. So impressed!',
        position: 'Founder & CEO: @ijebyjazzy',
        image: '/team/mp3.jpeg',
    },
    {
        name: 'Calister',
        text: 'I own a salon and also sell handmade wigs for African women. Running both sides of the business can be overwhelming but since I started using MendPro for my online sales, things have become more manageable.',
        position: 'Owner: @carlisbeautyhair',
        image: '/team/mp3.jpeg',
    },
    {
        name: 'Benita',
        text: 'MendPro helped me automate my bookings and manage clients better. It’s been a total game changer.',
        position: 'Founder: @benitaspa',
        image: '/team/mp3.jpeg',
    },
    {
        name: 'Rose',
        text: 'From inventory to customer support, this platform takes care of it all for me.',
        position: 'Co-founder: @rosestylehub',
        image: '/team/mp3.jpeg',
    },
    {
        name: 'Ada',
        text: 'The user interface is clean and simple, even my team adapted quickly. Highly recommend MendPro.',
        position: 'Owner: @adahairlux',
        image: '/team/mp3.jpeg',
    },
];

const Testimonial2: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    const modalVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        exit: { y: '100%', opacity: 0, transition: { duration: 0.3 } },
    };


    // Disable background scroll when modal is open
    useEffect(() => {
        if (showMore) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Clean up on unmount
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [showMore]);

    return (
        <div className="relative px-4 py-8 max-w-6xl mx-auto">
            {/* Initial 3 testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl shadow-md border border-gray-100 p-4 py-6 transition-all
      ${index === 2 ? 'opacity-50 overflow-hidden' : 'opacity-100'}
    `}
                        style={index === 2 ? { maxHeight: '10.5rem' } : {}}
                    >
                        <div className='flex items-center gap-3'>

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-full object-cover mb-2"
                            />
                            <div>

                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-sm text-gray-500 italic">{item.position}</p>
                            </div>
                        </div>
                        <p className="text-sm mt-2 text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => setShowMore(true)}
                    className="bg-linear-115  from-[#f3ff8d] via-70% to-[#012b3a] text-white px-6 py-2 rounded hover:scale-105 cursor-pointer transition"
                >
                    Visit our wall of love
                </button>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {showMore && (
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 bg-white rounded-t-2xl h-screen md:h-[90vh] flex flex-col"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            {/* <h2 className="text-xl font-bold text-gray-800">Visit our wall of love</h2> */}
                            <button
                                onClick={() => setShowMore(false)}
                                className="text-red-500 font-semibold text-2xl"
                            >
                                <LiaTimesSolid />
                            </button>
                        </div>

                        {/* Scrollable content */}
                        <div className="overflow-y-auto p-6 flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {testimonials.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 p-4 rounded-lg shadow"
                                    >
                                        <div className='flex items-center gap-3'>

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-16 h-16 rounded-full object-cover mb-2"
                                            />
                                            <div>

                                                <h3 className="font-bold">{item.name}</h3>
                                                <p className="text-sm text-gray-500 italic">{item.position}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm mt-2 text-gray-700">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default Testimonial2;
