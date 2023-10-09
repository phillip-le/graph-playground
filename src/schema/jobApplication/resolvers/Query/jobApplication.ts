import { getJobApplications } from "../../../../data/getJobApplications";
import type { QueryResolvers } from "./../../../types.generated";
export const jobApplication: NonNullable<
  QueryResolvers["jobApplication"]
> = async (_parent, _arg, _ctx) => {
  /* Implement Query.jobApplication resolver logic here */
  return (await getJobApplications()).data[0];
};
