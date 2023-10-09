import { jobLoader } from "../../../../data/jobLoader";
import type { QueryResolvers } from "./../../../types.generated";

export const job: NonNullable<QueryResolvers["job"]> = async (
  _parent,
  args,
  _ctx
) => {
  return await jobLoader.load(args.jobId);
};
