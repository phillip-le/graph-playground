/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Book } from "./book/resolvers/Book";
import { BookResult } from "./book/resolvers/BookResult";
import { ExtraCharacter } from "./character/resolvers/ExtraCharacter";
import { Fighter } from "./character/resolvers/Fighter";
import { Job } from "./job/resolvers/Job";
import { JobApplication } from "./jobApplication/resolvers/JobApplication";
import { Magazine } from "./book/resolvers/Magazine";
import { PayloadError } from "./base/resolvers/PayloadError";
import { book as Query_book } from "./book/resolvers/Query/book";
import { character as Query_character } from "./character/resolvers/Query/character";
import { job as Query_job } from "./job/resolvers/Query/job";
import { jobApplication as Query_jobApplication } from "./jobApplication/resolvers/Query/jobApplication";
import { jobApplications as Query_jobApplications } from "./jobApplication/resolvers/Query/jobApplications";
import { readable as Query_readable } from "./book/resolvers/Query/readable";
import { user as Query_user } from "./user/resolvers/Query/user";
import { ShortNovel } from "./book/resolvers/ShortNovel";
import { User } from "./user/resolvers/User";
import { Wizard } from "./character/resolvers/Wizard";
import { DateTimeResolver } from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    book: Query_book,
    character: Query_character,
    job: Query_job,
    jobApplication: Query_jobApplication,
    jobApplications: Query_jobApplications,
    readable: Query_readable,
    user: Query_user,
  },

  Book: Book,
  BookResult: BookResult,
  ExtraCharacter: ExtraCharacter,
  Fighter: Fighter,
  Job: Job,
  JobApplication: JobApplication,
  Magazine: Magazine,
  PayloadError: PayloadError,
  ShortNovel: ShortNovel,
  User: User,
  Wizard: Wizard,
  DateTime: DateTimeResolver,
};
