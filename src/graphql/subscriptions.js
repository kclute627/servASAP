/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJobs = /* GraphQL */ `
  subscription OnCreateJobs {
    onCreateJobs {
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
export const onUpdateJobs = /* GraphQL */ `
  subscription OnUpdateJobs {
    onUpdateJobs {
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
export const onDeleteJobs = /* GraphQL */ `
  subscription OnDeleteJobs {
    onDeleteJobs {
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
