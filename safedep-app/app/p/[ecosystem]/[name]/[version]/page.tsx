import React from 'react';
import { getPackageInsight, getPackageMalysis } from '@/lib/api';
import PackageHeader from '@/components/package/header';
import MetricsCards from '@/components/package/metrics-cards';
import PackageTabs from '@/components/package/details-tabs';
import { Card } from '@/components/ui/card';

interface PageProps {
    params: Promise<{
        ecosystem: string;
        name: string;
        version: string;
    }>;
}

export default async function PackagePage({ params }: PageProps) {
    const { ecosystem, name, version } = await params;
    const decodedName = decodeURIComponent(name);

    // Fetch data in parallel
    const insightData = await getPackageInsight(ecosystem, decodedName, version);
    const malysisData = await getPackageMalysis(ecosystem, decodedName, version);

    if (!insightData || !insightData.packageVersion) {
        return (
            <div className="container mx-auto p-10 text-center">
                <h1 className="text-2xl font-bold text-red-500">Package not found or data unavailable.</h1>
                <p className="text-muted-foreground mt-2">Could not fetch insights for {ecosystem}/{decodedName}@{version}</p>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-slate-50/50 dark:bg-slate-950/50">
            <main className="flex-1 space-y-6 pt-6 mb-10 container mx-auto px-4 max-w-7xl">
                <PackageHeader
                    pkg={insightData.packageVersion.package}
                    version={insightData.packageVersion.version}
                    analyzedAt={malysisData?.report?.analyzedAt}
                    registry={insightData.insight?.registries?.[0]}
                />

                <MetricsCards
                    insight={insightData.insight}
                    version={insightData.packageVersion.version}
                    ecosystem={insightData.packageVersion.package.ecosystem} // This returns an Enum number if I'm not careful.
                />


                <PackageTabs insight={insightData.insight} malysis={malysisData} />
            </main>
        </div>
    );
}
