import {gql} from '@apollo/client'

export const UPDATE_PROPERTY = gql 
`mutation updateProperty($description: String!, $propId: ID) {
    updateProperty(description: $description, propId: $propId) {
      _id
      description
    }
  }
`;

export const UPDATE_OWNER = gql 
`mutation updateOwner($description: String!, $ownerId: ID) {
    updateOwner(description: $description, ownerId: $ownerId) {
      _id
      description
    }
  }
`;

export const UPDATE_EXPECT = gql
`mutation updateExpect($description: String!, $expectId: ID) {
    updateExpect(description: $description, expectId: $expectId) {
      _id
      description
    }
  }
`;

export const UPDATE_USER = gql
`mutation updateUser($userId: ID, $first: String, $last: String, $email: String, $password: String) {
    updateUser(userId: $userId, first: $first, last: $last, email: $email, password: $password) {
      _id
      first
      last
      email
      password
    }
  }
`;

export const UPDATE_ADMIN = gql
`mutation updateAdmin($first: String!, $last: String!, $email: String!, $password: String!, $adminId: ID, $phoneNumber: Int) {
    updateAdmin(first: $first, last: $last, email: $email, password: $password, adminId: $adminId, phone_number: $phoneNumber) {
      _id
      first
      last
      email
      password
      phone_number
    }
  }
`;

export const UPDATE_BOOKING = gql
`mutation updateBooking($startDate: Date!, $endDate: Date!, $status: String!, $bookingId: ID) {
    updateBooking(startDate: $startDate, endDate: $endDate, status: $status, bookingId: $bookingId) {
      _id
      startDate
      endDate
      status
    }
  }
`;

export const UPDATE_NOTES = gql
`mutation updateNotes($body: String!, $notesId: ID) {
    updateNotes(body: $body, notesId: $notesId) {
      _id
      body
    }
  }
`;

export const CREATE_USER = gql 
`mutation createUser($first: String!, $last: String!, $email: String!, $password: String!) {
    createUser(first: $first, last: $last, email: $email, password: $password) {
      _id
      first
      last
      email
      password
    }
  }
`;

export const CREATE_BOOKING = gql
`mutation createBooking($userId: ID!, $startDate: Date!, $endDate: Date!) {
    createBooking(userId: $userId, startDate: $startDate, endDate: $endDate) {
      _id
      startDate
      endDate
      status
    }
  }
`;