import { z } from "zod";

const jobEngineJobSchema = z.object({
  id: z.string(),
  attributes: z.object({
    title: z.string(),
    location: z.object({
      name: z.string(),
    }),
    isQuickApply: z.boolean(),
    isDirectPosting: z.boolean(),
  }),
});

export type JobEngineJob = z.infer<typeof jobEngineJobSchema>;

export const jobEngineJobResponseSchema = z.object({
  data: jobEngineJobSchema,
});

export const jobEngineBatchJobResponseSchema = z.object({
  data: jobEngineJobSchema.array(),
});

export type JobEngineBatchJobResponse = z.infer<
  typeof jobEngineBatchJobResponseSchema
>;
