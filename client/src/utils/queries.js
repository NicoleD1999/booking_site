import {gql} from '@apollo/client'

export const QUERY_ALL_USERS = gql `
query allUsers {
    allUsers {
      _id
      first
      last
      email
      password
      booking {
        _id
        startDate
        endDate
        status
      }
    }
  }
`;

export const QUERY_ONE_USER = gql `
query oneUser($userId: ID) {
    oneUser(userId: $userId) {
      _id
      first
      last
      email
      password
      booking {
        _id
        startDate
        endDate
        status
      }
    }
  }
`;

export const QUERY_PROPERTY = gql `
query property {
    property {
      _id
      description
    }
  }
`;

export const QUERY_OWNER = gql `
query owner {
    owner {
      _id
      description
    }
  }
`;

export const QUERY_EXPECTATIONS = gql `
query expectations {
    expectations {
      _id
      description
    }
  }
`;

export const QUERY_BY_BOOKING_STATUS = gql `
query bookingStatus($status: String!) {
    bookingStatus(status: $status) {
      _id
      startDate
      endDate
      status
    }
  }
`