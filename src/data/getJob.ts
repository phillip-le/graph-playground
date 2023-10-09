import { request } from "gaxios";
import { getSecret } from "@aws-lambda-powertools/parameters/secrets";
import { jobEngineJobResponseSchema } from "../../src/schema/job/schema.zod";

export const getJob = async (jobId: string) => {
  const clientId = await getSecret("jora/supra/jobengine-client-id");

  const response = await request({
    baseUrl: "https://au.jora.com",
    url: `/api/v3/jobs/${jobId}`,
    params: {
      siteId: "au",
    },
    headers: {
      "X-Client-Id": clientId,
    },
    responseType: "json",
  });

  return jobEngineJobResponseSchema.parse(response.data);
};
