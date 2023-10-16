import { request } from "gaxios";
import { JobApplicationsMapper } from "../../src/schema/jobApplication/schema.mappers";
import { supraJobApplicationSchema } from "../../src/schema/jobApplication/schema.zod";
import dotenv from "dotenv";

dotenv.config();

export const getJobApplications = async (): Promise<JobApplicationsMapper> => {
  if (!process.env.BEARER_TOKEN)
    throw new Error("BEARER_TOKEN not set in .env file");

  const response = await request({
    baseUrl: "https://supra.jora.com",
    url: `/job-applications`,
    headers: {
      Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
    responseType: "json",
  });

  console.log(response.data);

  return supraJobApplicationSchema.parse(response.data);
};
