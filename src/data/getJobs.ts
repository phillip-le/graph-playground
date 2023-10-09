import { request } from "gaxios";
import { getSecret } from "@aws-lambda-powertools/parameters/secrets";
import { jobEngineBatchJobResponseSchema } from "../../src/schema/job/schema.zod";

export const getJobs = async (jobIds: readonly string[]) => {
  console.log("getJobs", jobIds);
  const clientId = await getSecret("jora/supra/jobengine-client-id");

  const response = await request({
    baseUrl: "https://au.jora.com",
    url: `/api/v3/jobs`,
    params: {
      siteId: "au",
      jobIds: jobIds.join(","),
    },
    headers: {
      "X-Client-Id": clientId,
    },
    responseType: "json",
  });

  return jobEngineBatchJobResponseSchema.parse(response.data);
};
