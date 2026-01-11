import Link from 'next/link';
import { Package } from '@/types';
import { Button } from '@/components/ui/button';
import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CheckCircle } from 'lucide-react';


interface PackageHeaderProps {
    pkg: Package;
    version: string;
    analyzedAt?: string;
    registry?: string;
}

export default function PackageHeader({ pkg, version, analyzedAt, registry }: PackageHeaderProps) {
    // Format analyzedAt if present, e.g. "24 Oct 2025, 10:06"
    const formattedDate = analyzedAt
        ? new Date(analyzedAt).toLocaleDateString('en-GP', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
        : 'N/A';

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <div className="flex items-center gap-3">
                    <FaGithub className="h-8 w-8 text-slate-900 dark:text-slate-50" />
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        {pkg.name} <span className="text-slate-400 font-light">v{version}</span>
                    </h1>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <span>Analyzed: {formattedDate}</span>
                    </div>
                    {registry && (
                        <Link href={registry} target="_blank" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                            Source <IoGlobeOutline className="h-3.5 w-3.5" />
                        </Link>
                    )}
                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-xs font-medium border border-green-100">
                        <CheckCircle className="h-3 w-3" />
                        High Confidence
                    </div>
                </div>
            </div>
            <div>
                {/* Button moved to Navbar */}
            </div>
        </div>
    );
}
