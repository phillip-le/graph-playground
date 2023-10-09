import type { JobResolvers } from "./../../types.generated";
export const Job: JobResolvers = {
  /* Implement Job resolver logic here */
  id: ({ id }) => {
    /* Job.id resolver is required because Job.id exists but JobMapper.id does not */
    return id;
  },
  isQuickApply: ({ attributes }) => {
    /* Job.isQuickApply resolver is required because Job.isQuickApply exists but JobMapper.isQuickApply does not */
    return attributes.isQuickApply;
  },
  location: ({ attributes }) => {
    /* Job.location resolver is required because Job.location exists but JobMapper.location does not */
    return attributes.location.name;
  },
  title: ({ attributes }) => {
    /* Job.title resolver is required because Job.title exists but JobMapper.title does not */
    return attributes.title;
  },
};
