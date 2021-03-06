/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobs = /* GraphQL */ `
  query GetJobs($id: ID!) {
    getJobs(id: $id) {
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
export const listJobss = /* GraphQL */ `
  query ListJobss(
    $filter: ModelJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
