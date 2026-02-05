import { Shield, Zap, Database, Server } from "lucide-react";

export default function FeatureBento() {
    return (
        <div className="py-24 sm:py-32 relative z-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-20 animate-fade-in-up">
                    <h2 className="text-base font-bold uppercase tracking-widest text-[#22c55e]">Engineering First</h2>
                    <p className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Everything you need to ship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-cyan-400">faster</span>.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl mx-auto">
                        TaskFlow isn't just another todo list. It's a reference architecture for scalable, secure, and modern web applications.
                    </p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-4 lg:grid-rows-2">

                    {/* Main Large Feature */}
                    <div className="relative lg:col-span-2 lg:row-span-2 p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-[#111] to-black border border-white/10 overflow-hidden group hover:border-[#22c55e]/30 transition-all duration-500 shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent_60%)] transition-all"></div>

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-2xl bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(34,197,94,0.3)]">
                                        <Shield className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">RBAC Security</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                                    Role-Based Access Control is deeply integrated. Admins wield full oversight, while users operate within strict boundaries. Security is our first priority, not an afterthought.
                                </p>
                            </div>

                            {/* Code Preview Decorator */}
                            <div className="relative rounded-xl bg-[#050505] border border-white/10 p-5 font-mono text-sm text-gray-300 shadow-inner group-hover:translate-y-[-5px] transition-transform duration-500">
                                <div className="absolute top-0 right-0 p-3 flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 mix-blend-screen"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 mix-blend-screen"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 mix-blend-screen"></div>
                                </div>
                                <p><span className="text-purple-400">const</span> <span className="text-blue-400">taskFlowAuth</span> = <span className="text-yellow-300">async</span> (req, res, next) ={">"} {"{"}</p>
                                <p className="pl-4"><span className="text-purple-400">const</span> token = req.headers.<span className="text-blue-300">authorization</span>;</p>
                                <p className="pl-4"><span className="text-purple-400">if</span> (!token) <span className="text-purple-400">throw</span> <span className="text-yellow-300">new</span> Error(<span className="text-orange-300">"Unauthorized"</span>);</p>
                                <p className="pl-4 text-gray-500">// Verifying JWT signature...</p>
                                <p className="pl-4"><span className="text-purple-400">return</span> next();</p>
                                <p>{"}"}</p>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="lg:col-span-1 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-[#22c55e]/30 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#22c55e]/10 transition-all"></div>
                        <div className="w-12 h-12 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-6 border border-[#22c55e]/20 group-hover:rotate-12 transition-transform duration-300">
                            <Database className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Prisma ORM</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Type-safe database access with PostgreSQL. Migrations and schema management made elegantly simple.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="lg:col-span-1 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-[#22c55e]/30 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-all"></div>
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20 group-hover:-rotate-12 transition-transform duration-300">
                            <Server className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Node.js API</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Robust Express backend designed for high throughput, low latency, and infinite scalability.</p>
                    </div>

                    {/* Wide Feature */}
                    <div className="lg:col-span-2 p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-[#22c55e]/30 transition-colors flex flex-col md:flex-row items-center justify-between gap-8 group">
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-6 border border-[#22c55e]/20 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Blazing Fast Performance</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Optimized for speed with connection pooling and Next.js 16 server components. TaskFlow feels instantaneous.
                            </p>
                        </div>
                        {/* Visual Flair */}
                        <div className="relative w-32 h-32 opacity-50 flex-shrink-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute inset-0 bg-[#22c55e]/20 blur-2xl rounded-full animate-pulse"></div>
                            <Zap className="relative z-10 w-full h-full text-[#22c55e]" strokeWidth={1} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
