'use client';

import { motion } from 'framer-motion';

export function Plan() {
    return (
        <div className="w-full flex justify-center">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: -15, opacity: 1 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="flex gap-2 rounded-lg p-2 text-black font-bold bg-linear-115 from-[#f3ff8d] from-28% via-[#7dd9c7] via-70% to-[#012b3a91] sm:bg-linear-145"
            >
                <p>PLAN.</p>
                <p>POST.</p>
                <p>CLOSE.</p>
                <p className='text-'>REPEAT.</p>
            </motion.div>
        </div>
    );
}
