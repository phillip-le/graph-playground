import { getJobApplications } from "../../../../data/getJobApplications";
import type { QueryResolvers } from "./../../../types.generated";
export const jobApplications: NonNullable<
  QueryResolvers["jobApplications"]
> = async (_parent, _arg, _ctx) => {
  /* Implement Query.jobApplications resolver logic here */
  return (await getJobApplications()).data;
};
