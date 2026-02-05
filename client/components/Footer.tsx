import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="mb-4 md:mb-0 flex items-center gap-2">
                    <span className="font-bold text-gray-200 tracking-tight">TaskFlow</span>
                    <span className="text-white/20">|</span>
                    <span className="text-gray-500">© {new Date().getFullYear()} All rights reserved.</span>
                </div>

                <div className="flex gap-8 mb-4 md:mb-0 font-medium">
                    <Link href="#" className="hover:text-[#22c55e] transition-colors duration-200">Privacy Policy</Link>
                    <Link href="#" className="hover:text-[#22c55e] transition-colors duration-200">Terms of Service</Link>
                    <Link href="#" className="hover:text-[#22c55e] transition-colors duration-200">System Status</Link>
                </div>

                <div className="flex gap-5">
                    <Link href="#" className="group p-2 rounded-full hover:bg-white/5 transition-all">
                        <Github className="w-5 h-5 group-hover:text-[#22c55e] transition-colors" />
                    </Link>
                    <Link href="#" className="group p-2 rounded-full hover:bg-white/5 transition-all">
                        <Twitter className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                    <Link href="#" className="group p-2 rounded-full hover:bg-white/5 transition-all">
                        <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
