import Link from "next/link";
import { ArrowRight, Terminal, Github, Cpu, Globe } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative isolate pt-14 lg:pt-36 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#22c55e] to-cyan-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        animationDuration: '10s'
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative">
                {/* Floating Decorators */}
                <div className="absolute top-0 right-0 p-4 opacity-20 hidden lg:block animate-bounce" style={{ animationDuration: '3s' }}>
                    <Globe className="w-12 h-12 text-[#22c55e]" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-20 hidden lg:block animate-bounce" style={{ animationDuration: '4s' }}>
                    <Cpu className="w-12 h-12 text-cyan-400" />
                </div>

                <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-4 py-1.5 text-xs sm:text-sm w-fit mx-auto mb-8 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-default shadow-2xl shadow-[#22c55e]/10">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">TaskFlow v1.0 • Enterprise Ready</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 drop-shadow-2xl">
                    Scale your <br />
                    <span className="relative whitespace-nowrap">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-emerald-400 to-cyan-400 animate-gradient-x">
                            engineering workflow
                        </span>
                        <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#22c55e]/20 blur-lg -z-10"></span>
                    </span>
                    .
                </h1>

                <p className="mt-8 text-lg leading-8 text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
                    <strong className="text-white font-medium">TaskFlow</strong> is the high-performance task management system for developers who value precision. Built with a scalable <span className="text-emerald-400">Node.js</span> core and secured by <span className="text-emerald-400">RBAC</span>.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/register"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#22c55e] px-8 py-4 font-bold text-black shadow-lg hover:shadow-[#22c55e]/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    >
                        <span className="mr-2 z-10 relative">Start Building</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 z-10 relative" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Link>

                    <Link
                        href="/login"
                        className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-semibold text-white hover:bg-white/10 hover:border-[#22c55e]/50 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        Access Dashboard
                        <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform text-[#22c55e]">→</span>
                    </Link>
                </div>

                <div className="mt-20 flex items-center justify-center gap-12 sm:gap-16 opacity-40 hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#22c55e]/10 transition-colors">
                            <Terminal className="w-6 h-6 text-white group-hover:text-[#22c55e]" />
                        </div>
                        <span className="font-mono text-xs text-white/60">CLI Ready</span>
                    </div>
                    <div className="h-12 w-px bg-white/10"></div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#22c55e]/10 transition-colors">
                            <Github className="w-6 h-6 text-white group-hover:text-[#22c55e]" />
                        </div>
                        <span className="font-mono text-xs text-white/60">Open Source</span>
                    </div>
                    <div className="h-12 w-px bg-white/10"></div>
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#22c55e]/10 transition-colors">
                            <Cpu className="w-6 h-6 text-white group-hover:text-[#22c55e]" />
                        </div>
                        <span className="font-mono text-xs text-white/60">High Perf</span>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#22c55e] to-emerald-200 opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
        </div>
    );
}
