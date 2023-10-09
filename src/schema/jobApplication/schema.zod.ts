import { z } from "zod";

export const supraJobApplicationSchema = z.object({
  data: z
    .object({
      id: z.string(),
      candidateId: z.string(),
      jobId: z.string(),
      applicationStatus: z.enum(["SUBMITTED"]),
      applicationStatusUpdatedAt: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
    .array(),
});
