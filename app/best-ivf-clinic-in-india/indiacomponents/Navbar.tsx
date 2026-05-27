'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AppointmentModal from './AppointmentModal';
import SocialIcons from './SocialIcons';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-white px-6 py-0 shadow-sm fixed top-0 left-0 right-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/gads/assets/image/Header Logo.svg"
                            alt="Seeds Of Innocens Fertility & IVF Logo"
                            width={200}
                            height={60}
                            className="h-auto"
                            priority
                        />
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex items-center gap-3">
                        <SocialIcons variant="navbar" />

                        {/* Book Appointment Button */}
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="hidden md:inline-flex px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors font-medium text-lg"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </nav>

            {/* Appointment Modal */}
            <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
