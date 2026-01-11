import { Insight } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IoInformationCircleOutline, IoBugOutline, IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoLaw, GoPackage } from "react-icons/go";

interface MetricsCardsProps {
    insight: Insight;
    version: string;
    ecosystem: string;
}

export default function MetricsCards({ insight, version, ecosystem }: MetricsCardsProps) {
    const vulnCount = insight.vulnerabilities?.length || 0;
    const license = insight.licenses?.licenses?.[0]?.licenseId || 'Unknown';
    const score = insight.projectInsights?.[0]?.scorecard?.score;
    const scoreFormatted = score !== undefined ? score.toFixed(1) : 'N/A';

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Version
                    </CardTitle>
                    <IoInformationCircleOutline className="h-5 w-5 text-teal-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold truncate" title={version}>
                        {version}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Vulnerabilities
                    </CardTitle>
                    <IoBugOutline className={`h-5 w-5 ${vulnCount > 0 ? 'text-red-500' : 'text-green-500'}`} />
                </CardHeader>
                <CardContent>
                    <div className={`text-2xl font-bold ${vulnCount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {vulnCount}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {vulnCount === 0 ? "No known vulnerabilities" : "Security risks detected"}
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        OpenSSF Scorecard
                    </CardTitle>
                    <IoShieldCheckmarkOutline className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{scoreFormatted}<span className="text-sm font-normal text-muted-foreground">/10</span></div>
                    <p className="text-xs text-muted-foreground">
                        Security health score
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        License
                    </CardTitle>
                    <GoLaw className="h-5 w-5 text-teal-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold truncate" title={license}>{license}</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Ecosystem
                    </CardTitle>
                    <GoPackage className="h-5 w-5 text-teal-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold capitalize">{String(ecosystem).replace(/^ecosystem_/i, '').toLowerCase()}</div>
                </CardContent>
            </Card>
        </div>
    );
}
