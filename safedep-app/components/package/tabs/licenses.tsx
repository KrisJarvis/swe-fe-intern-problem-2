import { Insight } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2 } from 'lucide-react';

interface LicensesTabProps {
    insight: Insight;
}

export default function LicensesTab({ insight }: LicensesTabProps) {
    const licenses = insight.licenses?.licenses || [];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Licenses</CardTitle>
                <CardDescription>Detected licenses for this package.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>License ID</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {licenses.map((l, i) => (
                            <TableRow key={l.licenseId + i}>
                                <TableCell className="font-mono font-bold">{l.licenseId}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2 text-green-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Valid
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
