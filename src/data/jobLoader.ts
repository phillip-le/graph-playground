import DataLoader from "dataloader";
import { JobEngineJob } from "src/schema/job/schema.zod";
import { getJobs } from "./getJobs";

export const jobLoader = new DataLoader<string, JobEngineJob>(
  async (jobIds) => {
    return (await getJobs(jobIds)).data;
  }
);
