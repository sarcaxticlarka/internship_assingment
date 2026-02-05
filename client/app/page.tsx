"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureBento from '../components/FeatureBento';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#22c55e] selection:text-black">
            <Navbar />
            <main>
                <Hero />
                <FeatureBento />
            </main>
            <Footer />
        </div>
    );
}
