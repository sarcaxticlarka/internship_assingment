"use client";

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Star, FileText } from 'lucide-react';

export default function RegisterPage() {
    const { login } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            setError('');
            const res = await api.post('/auth/register', { name, email, password, role });
            login(res.data.token, res.data);
        } catch (err: any) {
            if (err.response?.data?.errors) {
                setError(err.response.data.errors.map((e: any) => e.message).join(', '));
            } else {
                setError(err.response?.data?.message || 'Registration failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Side: Form */}
                <div className="px-6 lg:px-12 flex flex-col justify-center">
                    <Link href="/" className="mb-12 text-2xl font-bold tracking-tighter flex items-center gap-2">
                        <div className="bg-[#22c55e] p-1 rounded-md">
                            <FileText className="w-5 h-5 text-white" />
                        </div>
                        TaskFlow
                    </Link>

                    <div className="max-w-md w-full mx-auto lg:mx-0">
                        <h1 className="text-xl text-gray-400 mb-8 font-light">Create your Account</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg">{error}</div>}

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full bg-white text-black px-4 py-3.5 rounded-xl border-none focus:ring-0 placeholder-gray-400 font-medium"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="developer@example.com"
                                    className="w-full bg-white text-black px-4 py-3.5 rounded-xl border-none focus:ring-0 placeholder-gray-400 font-medium"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Min 6 characters"
                                    className="w-full bg-white text-black px-4 py-3.5 rounded-xl border-none focus:ring-0 placeholder-gray-400 font-bold tracking-widest text-xs"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Role</label>
                                <div className="relative">
                                    <select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                        className="w-full bg-white text-black px-4 py-3.5 rounded-xl border-none focus:ring-0 font-medium cursor-pointer appearance-none"
                                    >
                                        <option value="USER">User (Standard Access)</option>
                                        <option value="ADMIN">Admin (Full Control)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>

                            <div className="text-center mt-8">
                                <Link href="/login" className="text-sm text-gray-400 hover:text-white underline decoration-gray-500">
                                    Already have an account? Sign in
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side: Card */}
                <div className="hidden lg:block relative h-[800px] w-full bg-[#22c55e] rounded-[40px] p-12 overflow-hidden">
                    {/* Decorative curves */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black rounded-bl-[40px] z-10"></div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight mb-8">
                                Join the<br />Community.
                            </h2>
                            <p className="text-white text-lg font-medium leading-relaxed mb-8 max-w-md">
                                "Unlock the power of organized documentation. Perfect for individual developers and large teams alike."
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <h4 className="text-2xl font-bold text-white">5k+</h4>
                                    <p className="text-white/80 text-sm">Teams</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                                    <h4 className="text-2xl font-bold text-white">99%</h4>
                                    <p className="text-white/80 text-sm">Uptime</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom White Card */}
                        <div className="bg-white rounded-[30px] p-8 relative">
                            <button className="absolute -top-6 right-8 p-4 bg-white rounded-full shadow-lg">
                                <Star className="w-6 h-6 text-black fill-black" />
                            </button>

                            <h3 className="text-2xl font-bold text-black mb-2">Start documenting today</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Complete your setup to access the full API documentation and task dashboard.
                            </p>

                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-[#22c55e] w-3/4"></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Setup 75% complete</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
