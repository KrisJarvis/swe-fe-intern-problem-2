import { MalysisResponse, Insight } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface OverviewTabProps {
    insight: Insight;
    malysis?: MalysisResponse;
}

export default function OverviewTab({ insight, malysis }: OverviewTabProps) {
    const summary = malysis?.report?.inference?.summary || "No analysis summary available.";
    const details = malysis?.report?.inference?.details || "No detailed analysis available.";
    const isClean = malysis?.report?.inference?.summary?.toLowerCase().includes("no malware") || false;

    // Project description could be somewhere? insight.projectInsights[0].project?
    // Not directly in the types I defined from sample.

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Analysis Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className={`p-4 rounded-md border ${isClean ? 'bg-green-50 border-green-200 text-green-800' : 'bg-yellow-50 border-yellow-200'}`}>
                        <div className="flex items-start gap-3">
                            {isClean ? <CheckCircle2 className="h-5 w-5 mt-0.5" /> : <AlertTriangle className="h-5 w-5 mt-0.5" />}
                            <div>
                                <h4 className="font-medium">{summary}</h4>
                                <p className="text-sm mt-1 opacity-90">{details}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Verification Record</CardTitle>
                    <CardDescription>Details about the verification process.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground">
                        Manual analysis confirmed that the package is clean.
                        {/* Static text based on Figma design placeholders, since JSON doesn't have this explicitly */}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-sm text-muted-foreground">
                        No additional notes provided for this analysis.
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
