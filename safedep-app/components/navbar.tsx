import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-950">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 max-w-7xl">
                <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide leading-none mb-1">
                        POWERED BY
                    </span>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="SafeDep Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain"
                            />
                        </div>
                        <span className="font-medium text-[#0f172a] dark:text-slate-50 text-[28.57px] leading-[100%] tracking-[-0.05em]">
                            SafeDep
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button className="bg-[#009688] hover:bg-[#00796B] text-white gap-2 text-sm font-normal leading-5 tracking-normal align-middle px-4">
                        <Github className="h-4 w-4" />
                        Install GitHub App
                    </Button>
                </div>
            </div>
        </header>
    );
}
