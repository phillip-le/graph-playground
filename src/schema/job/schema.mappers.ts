import { z } from "zod";
import { jobEngineJobResponseSchema } from "./schema.zod";

export type JobMapper = z.infer<typeof jobEngineJobResponseSchema>["data"];
