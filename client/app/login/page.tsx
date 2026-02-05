"use client";

import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Star, Github, Facebook, Chrome, FileText } from 'lucide-react';

export default function LoginPage() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            setError('');
            const res = await api.post('/auth/login', { email, password });
            login(res.data.token, res.data);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login failed');
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
                        <h1 className="text-xl text-gray-400 mb-8 font-light">Please Enter your Account details</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded-lg">{error}</div>}

                            <div>
                                <label className="block text-sm text-gray-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@example.com"
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
                                    placeholder="● ● ● ● ● ● ● ●"
                                    className="w-full bg-white text-black px-4 py-3.5 rounded-xl border-none focus:ring-0 placeholder-gray-400 font-bold tracking-widest text-xs"
                                    required
                                />
                                <div className="flex justify-end mt-2">
                                    <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Forgot Password</a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Signing in...' : 'Sign in'}
                            </button>

                            <div className="flex justify-center gap-4 mt-8">
                                <button type="button" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                                    <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" className="w-6 h-6" alt="Google" />
                                </button>
                                <button type="button" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                                    <Github className="w-6 h-6 text-black" />
                                </button>
                                <button type="button" className="p-2 bg-white rounded-full hover:scale-110 transition-transform">
                                    <Facebook className="w-6 h-6 text-blue-600" />
                                </button>
                            </div>

                            <div className="text-center mt-8">
                                <Link href="/register" className="text-sm text-gray-400 hover:text-white underline decoration-gray-500">
                                    Create an account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Side: Card */}
                <div className="hidden lg:block relative h-[800px] w-full bg-[#22c55e] rounded-[40px] p-12 overflow-hidden">
                    {/* Decorative curves */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black rounded-bl-[40px] z-10"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#22c55e] rounded-tr-[20px] z-20"></div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-5xl font-bold text-white leading-tight mb-8">
                                Organize your<br />Development Docs.
                            </h2>
                            <div className="text-6xl font-serif text-white/50 mb-6">“</div>
                            <p className="text-white text-lg font-medium leading-relaxed mb-8 max-w-md">
                                "TaskFlow handles our entire documentation workflow. From API specs to sprint tasks, everything is in one secure place."
                            </p>

                            <div>
                                <h4 className="text-white font-bold text-xl">Alex Chen</h4>
                                <p className="text-white/80">Lead Backend Engineer</p>
                            </div>

                            <div className="flex gap-4 mt-12">
                                <button className="p-3 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors text-white">
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                                <button className="p-3 bg-black rounded-lg hover:bg-gray-900 transition-colors text-white">
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Bottom White Card */}
                        <div className="bg-white rounded-[30px] p-8 relative">
                            <button className="absolute -top-6 right-8 p-4 bg-white rounded-full shadow-lg">
                                <Star className="w-6 h-6 text-black fill-black" />
                            </button>

                            <h3 className="text-2xl font-bold text-black mb-2">Build Scalable Systems</h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Designed for modern engineering teams. Join 500+ developers shipping faster.
                            </p>

                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} alt="" />
                                ))}
                                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 text-xs text-gray-500 font-medium">
                                    +500
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Abstract background Lines */}
                    <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2 opacity-20 pointer-events-none">
                        <svg width="400" height="400" viewBox="0 0 200 200">
                            <path d="M100,0 L200,100 L100,200 L0,100 Z" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
}
