import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { MalwareAnalysisService } from "@buf/safedep_api.connectrpc_es/safedep/services/malysis/v1/malysis_connect.js";
import { createPromiseClient, Interceptor } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { InsightsResponse, MalysisResponse } from '@/types';
import insightsData from '@/data/insights.json';
import malysisData from '@/data/malysis.json';

function authenticationInterceptor(token: string, tenant: string): Interceptor {
    return (next) => async (req) => {
        req.header.set("authorization", token);
        req.header.set("x-tenant-id", tenant);
        return await next(req);
    };
}

const token = process.env.SAFEDEP_API_KEY;
const tenantId = process.env.SAFEDEP_TENANT_ID;

const transport = (token && tenantId) ? createConnectTransport({
    baseUrl: "https://api.safedep.io",
    httpVersion: "1.1",
    interceptors: [authenticationInterceptor(token, tenantId)],
}) : null;

function mapEcosystem(eco: string): Ecosystem {
    switch (eco.toLowerCase()) {
        case 'npm': return Ecosystem.NPM;
        case 'maven': return Ecosystem.MAVEN;
        case 'pypi': return Ecosystem.PYPI;
        case 'go': return Ecosystem.GO;
        case 'rubygems': return Ecosystem.RUBYGEMS;
        default: return Ecosystem.NPM; // Default or throw?
    }
}

export async function getPackageInsight(ecosystem: string, name: string, version: string): Promise<InsightsResponse> {
    if (transport) {
        try {
            const client = createPromiseClient(InsightService, transport);
            const res = await client.getPackageVersionInsight({
                packageVersion: {
                    package: {
                        ecosystem: mapEcosystem(ecosystem),
                        name: name,
                    },
                    version: version,
                },
            });
            return res.toJson() as unknown as InsightsResponse;
        } catch (e) {
            console.error("API call failed, falling back to mock", e);
        }
    }

    // Simulate network delay for mock
    if (!transport) await new Promise(resolve => setTimeout(resolve, 500));

    return insightsData as unknown as InsightsResponse;
}

export async function getPackageMalysis(ecosystem: string, name: string, version: string): Promise<MalysisResponse> {
    if (transport) {
        try {
            const client = createPromiseClient(MalwareAnalysisService, transport);
            const res = await client.queryPackageAnalysis({
                target: {
                    packageVersion: {
                        package: {
                            ecosystem: mapEcosystem(ecosystem),
                            name: name,
                        },
                        version: version,
                    },
                },
            });
            return res.toJson() as unknown as MalysisResponse;
        } catch (e) {
            console.error("API call failed, falling back to mock", e);
        }
    }

    if (!transport) await new Promise(resolve => setTimeout(resolve, 500));
    return malysisData as unknown as MalysisResponse;
}
