export default function PackageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950">
            <div className="flex-1 container mx-auto px-4 max-w-7xl py-6">
                {children}
            </div>
        </div>
    );
}
