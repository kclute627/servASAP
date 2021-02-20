/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJobs = /* GraphQL */ `
  mutation CreateJobs(
    $input: CreateJobsInput!
      : ModelJobsConditionInput
  ) {
    createJobs(input: $input, condition: $condition) {
      id
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
    }
  }
`;
