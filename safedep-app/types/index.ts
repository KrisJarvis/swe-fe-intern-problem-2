export interface Package {
    ecosystem: string;
    name: string;
}

export interface PackageVersion {
    package: Package;
    version: string;
}

export interface VulnerabilityID {
    type: string;
    value: string;
}

export interface VulnerabilitySeverity {
    type: string;
    score: string;
    risk: string;
}

export interface Vulnerability {
    id: VulnerabilityID;
    summary: string;
    aliases?: VulnerabilityID[];
    related?: { value: string }[];
    severities?: VulnerabilitySeverity[];
    publishedAt?: string;
    modifiedAt?: string;
}

export interface Check {
    name: string;
    score?: number;
    reason: string;
    documentation: { url: string; description: string };
}

export interface Scorecard {
    date: string;
    score: number;
    checks: Check[];
}

export interface ProjectInsight {
    project: { type: string; name: string; url: string };
    stars: string;
    forks: string;
    issues: { open: string };
    scorecard: Scorecard;
}

export interface License {
    licenseId: string;
}

export interface AvailableVersion {
    version: string;
    publishedAt: string;
}

export interface Insight {
    dependencies?: { package: Package; version: string }[];
    vulnerabilities?: Vulnerability[];
    projectInsights?: ProjectInsight[];
    licenses?: { licenses: License[] };
    availableVersions?: AvailableVersion[];
    registries?: string[];
}

export interface InsightsResponse {
    packageVersion: PackageVersion;
    insight: Insight;
}

export interface FileInfo {
    key: string;
    origin: string;
    sha256: string;
    size: string;
}

export interface MalysisReportContent {
    packageVersion: PackageVersion;
    fileSystem: { files: FileInfo[] };
    analyzedAt: string;
    inference: { confidence: string; details: string; summary: string };
    packageMetrics: { downloads: { daily: string; weekly: string; monthly: string; total: string }; maintainersCount: string };
    publishers: { name: string; email: string }[];
}

export interface MalysisResponse {
    analysisId: string;
    status: string;
    report: MalysisReportContent;
}
