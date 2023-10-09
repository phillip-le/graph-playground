import { jobLoader } from "../../../data/jobLoader";
import type { JobApplicationResolvers } from "./../../types.generated";
export const JobApplication: JobApplicationResolvers = {
  /* Implement JobApplication resolver logic here */
  appliedAt: ({ createdAt }) => {
    return createdAt;
  },
  status: ({ applicationStatus }) => {
    return applicationStatus;
  },
  id: ({ id }) => {
    /* JobApplication.id resolver is required because JobApplication.id exists but JobApplicationMapper.id does not */
    return id;
  },
  job: async ({ jobId }) => {
    return await jobLoader.load(jobId);
  },
};
