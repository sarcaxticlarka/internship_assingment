"use client";

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { LogOut, Menu, X, Command, Bell, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="bg-[#22c55e] p-2 rounded-lg hover:bg-[#16a34a] transition-colors">
                                <FileText className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                TaskFlow
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {user ? (
                            <>
                                <Link
                                    href="/dashboard"
                                    className="text-gray-300 hover:text-[#22c55e] font-medium transition-colors text-sm"
                                >
                                    Dashboard
                                </Link>
                                <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
                                    <Bell className="w-5 h-5" />
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#22c55e] rounded-full"></span>
                                </button>
                                <div className="pl-4 border-l border-white/10 flex items-center space-x-4">
                                    <div className="text-right hidden lg:block">
                                        <p className="text-sm font-semibold text-white">{user.name}</p>
                                        <p className="text-[10px] text-[#22c55e] uppercase tracking-wider font-bold">{user.role}</p>
                                    </div>
                                    <button
                                        onClick={logout}
                                        className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white/5 transition-all duration-200"
                                        title="Logout"
                                    >
                                        <LogOut className="h-5 w-5" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center space-x-6">
                                <Link
                                    href="/login"
                                    className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-[#22c55e] text-white hover:bg-[#16a34a] px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-[#22c55e]/30"
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-white/10 backdrop-blur-lg py-4 px-4 flex flex-col space-y-4">
                    {user ? (
                        <>
                            <Link
                                href="/dashboard"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-gray-300 hover:text-[#22c55e] font-medium text-lg"
                            >
                                Dashboard
                            </Link>
                            <button
                                onClick={() => { logout(); setMobileMenuOpen(false); }}
                                className="flex items-center text-gray-300 hover:text-red-500 font-medium text-lg w-full"
                            >
                                <LogOut className="h-5 w-5 mr-2" />
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-gray-300 hover:text-white font-medium text-lg"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/register"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full text-center bg-[#22c55e] text-white hover:bg-[#16a34a] px-4 py-3 rounded-lg text-lg font-bold"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
