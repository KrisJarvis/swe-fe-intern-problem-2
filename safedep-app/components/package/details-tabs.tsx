import { Insight, MalysisResponse } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import OverviewTab from './tabs/overview';
import VulnerabilitiesTab from './tabs/vulnerabilities';
import VersionsTab from './tabs/versions';
import LicensesTab from './tabs/licenses';

interface PackageTabsProps {
    insight: Insight;
    malysis: MalysisResponse;
}

export default function PackageTabs({ insight, malysis }: PackageTabsProps) {
    return (
        <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
                <TabsTrigger value="versions">Versions</TabsTrigger>
                <TabsTrigger value="licenses">Licenses</TabsTrigger>
            </TabsList>
            <div className="mt-4">
                <TabsContent value="overview">
                    <OverviewTab insight={insight} malysis={malysis} />
                </TabsContent>
                <TabsContent value="vulnerabilities">
                    <VulnerabilitiesTab insight={insight} />
                </TabsContent>
                <TabsContent value="versions">
                    <VersionsTab insight={insight} />
                </TabsContent>
                <TabsContent value="licenses">
                    <LicensesTab insight={insight} />
                </TabsContent>
            </div>
        </Tabs>
    );
}
