import { Insight } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface VersionsTabProps {
    insight: Insight;
}

export default function VersionsTab({ insight }: VersionsTabProps) {
    // Sort reverse chronological
    const versions = [...(insight.availableVersions || [])].reverse().slice(0, 50); // Limit to 50 for perf

    return (
        <Card>
            <CardHeader>
                <CardTitle>Version History</CardTitle>
                <CardDescription>Recent versions of this package.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Version</TableHead>
                            <TableHead>Published</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {versions.map((v) => (
                            <TableRow key={v.version}>
                                <TableCell className="font-mono">{v.version}</TableCell>
                                <TableCell>
                                    {v.publishedAt ? new Date(v.publishedAt).toLocaleDateString() : 'N/A'}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" asChild>
                                        {/* Link not implemented to switch version, but UI wise: */}
                                        <div className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
                                            Go <ChevronRight className="h-4 w-4 ml-1" />
                                        </div>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
