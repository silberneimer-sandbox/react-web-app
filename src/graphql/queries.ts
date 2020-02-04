// tslint:disable
// this is an auto generated file. This will be overwritten

export const getJob = /* GraphQL */ `
  query GetJob($jobMasterId: ID!, $routeId: String!) {
    getJob(jobMasterId: $jobMasterId, routeId: $routeId) {
      jobMasterId
      routeId
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $jobMasterId: ID
    $routeId: ModelStringKeyConditionInput
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listJobs(
      jobMasterId: $jobMasterId
      routeId: $routeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        jobMasterId
        routeId
      }
      nextToken
    }
  }
`;
