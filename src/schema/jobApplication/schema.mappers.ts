import { z } from "zod";
import { supraJobApplicationSchema } from "./schema.zod";

export type JobApplicationMapper = z.infer<
  typeof supraJobApplicationSchema
>["data"][number];

export type JobApplicationsMapper = z.infer<typeof supraJobApplicationSchema>;
