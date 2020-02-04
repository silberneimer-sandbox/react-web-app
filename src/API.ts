/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateJobInput = {
  jobMasterId: string,
  routeId: string,
};

export type ModelJobConditionInput = {
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
};

export type UpdateJobInput = {
  jobMasterId: string,
  routeId: string,
};

export type DeleteJobInput = {
  jobMasterId: string,
  routeId: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelJobFilterInput = {
  jobMasterId?: ModelIDInput | null,
  routeId?: ModelStringInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateJobMutationVariables = {
  input: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};

export type UpdateJobMutationVariables = {
  input: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};

export type DeleteJobMutationVariables = {
  input: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};

export type GetJobQueryVariables = {
  jobMasterId: string,
  routeId: string,
};

export type GetJobQuery = {
  getJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};

export type ListJobsQueryVariables = {
  jobMasterId?: string | null,
  routeId?: ModelStringKeyConditionInput | null,
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListJobsQuery = {
  listJobs:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      jobMasterId: string,
      routeId: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateJobSubscription = {
  onCreateJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob:  {
    __typename: "Job",
    jobMasterId: string,
    routeId: string,
  } | null,
};
