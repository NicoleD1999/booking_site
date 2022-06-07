const {gql} = require("apollo-server-express")

const typeDefs= gql `
scalar Date

type Admin{
    _id: ID!
    first: String!
    last: String!
    email: String!
    password: String!
    phone_number: Int
}

type Booking{
   _id: ID!
   startDate: Date!
   endDate: Date!
   status: String! 
}

type Expectations{
    _id: ID!
    description: String!
}

type Notes{
    _id: ID!,
    body: String!
}

type Owner{
    _id: ID!
    description: String!
}

type Property{
    _id: ID!
    description: String!
}

type User{ 
    _id: ID!
    first: String!
    last: String!
    email: String!
    password: String!
    booking: Booking
    notes: [Notes]
}

type Query {
    allUsers: [User]!
    oneUser(userId: ID): User!
    property: [Property]!
    owner: [Owner]!
    expectations: [Expectations]!
    bookingStatus(status: String!): Booking  
}

type Mutation {
  updateProperty(propId: ID, description: String!): Property
  updateOwner(ownerId: ID, description: String!): Owner
  updateExpect(expectId: ID, description: String!): Expectations
  updateUser(userId: ID, first: String, last: String, email: String, password: String): User
  updateAdmin(adminId: ID, first: String!, last: String!, email: String!, password: String!, phone_number: Int): Admin
  updateBooking(bookingId: ID, startDate: Date!, endDate: Date!, status: String!): Booking
  updateNotes(notesId: ID, body: String!): Notes
  createUser(first: String!, last: String!, email: String!, password: String!): User
  createBooking(userId: ID!, startDate: Date!, endDate: Date!): Booking
}
`
module.exports = typeDefs