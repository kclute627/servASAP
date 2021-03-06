/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const createJobs = /* GraphQL */ `
  mutation CreateJobs(
    $input: CreateJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    createJobs(input: $input, condition: $condition) {
      id
      status
      jobNumber
      clientName
      clientRef
      server
      caseNumber
      plantiff
      defendant
      courtDate
      courtName
      rush
      dueDate
      serverInstructions
      personServed
      serviceAddress {
        fullServiceAddress
        street
        suite
        city
        state
        zip
        lat
        lng
      }
      altAddress {
        fullServiceAddress
        street
        suite
        city
        state
        zip
        lat
        lng
      }
      documents {
        description
        serviceDocs {
          bucket
          region
          key
        }
        otherDocs {
          bucket
          region
          key
        }
      }
      invoice {
        service
        description
        price
        qty
        total
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateJobs = /* GraphQL */ `
  mutation UpdateJobs(
    $input: UpdateJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    updateJobs(input: $input, condition: $condition) {
      id
      status
      jobNumber
      clientName
      clientRef
      server
      caseNumber
      plantiff
      defendant
      courtDate
      courtName
      rush
      dueDate
      serverInstructions
      personServed
      serviceAddress {
        fullServiceAddress
        street
        suite
        city
        state
        zip
        lat
        lng
      }
      altAddress {
        fullServiceAddress
        street
        suite
        city
        state
        zip
        lat
        lng
      }
      documents {
        description
        serviceDocs {
          bucket
          region
          key
        }
        otherDocs {
          bucket
          region
          key
        }
      }
      invoice {
        service
        description
        price
        qty
        total
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteJobs = /* GraphQL */ `
  mutation DeleteJobs(
    $input: DeleteJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    deleteJobs(input: $input, condition: $condition) {
      id
      status
      jobNumber
      clientName
      clientRef
      server
      caseNumber
      plantiff
      defendant
      courtDate
      courtName
      rush
      dueDate
      serverInstructions
      personServed
      serviceAddress {
        fullServiceAddress
        street
        suite
        city
        state
        zip
        lat
        lng
      }
      altAddress {
        fullServiceAddress
        street
        suite
        city
        state
        zip
        lat
        lng
      }
      documents {
        description
        serviceDocs {
          bucket
          region
          key
        }
        otherDocs {
          bucket
          region
          key
        }
      }
      invoice {
        service
        description
        price
        qty
        total
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
