import { Insight } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface VulnerabilitiesTabProps {
    insight: Insight;
}

export default function VulnerabilitiesTab({ insight }: VulnerabilitiesTabProps) {
    const vulns = insight.vulnerabilities || [];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Vulnerabilities</CardTitle>
                <CardDescription>
                    {vulns.length} security issues found.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {vulns.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">
                        No known vulnerabilities detected.
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Summary</TableHead>
                                <TableHead>Risk</TableHead>
                                <TableHead>Published</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vulns.map((v) => {
                                const sev = v.severities?.[0]; // Taking first
                                const risk = sev?.risk || 'UNKNOWN';
                                // Risk color mapping
                                let badgeVariant: "default" | "secondary" | "destructive" | "outline" = "secondary";
                                if (risk.includes('HIGH') || risk.includes('CRITICAL')) badgeVariant = "destructive";
                                if (risk.includes('LOW')) badgeVariant = "outline";

                                return (
                                    <TableRow key={v.id.value}>
                                        <TableCell className="font-medium font-mono">{v.id.value}</TableCell>
                                        <TableCell>{v.summary}</TableCell>
                                        <TableCell>
                                            <Badge variant={badgeVariant}>{risk.replace('RISK_', '')}</Badge>
                                        </TableCell>
                                        <TableCell className="whitespace-nowrap">
                                            {v.publishedAt ? new Date(v.publishedAt).toLocaleDateString() : 'N/A'}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
