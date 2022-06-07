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
    oneUser(_id: ID): User!
    property: [Property]!
    owner: [Owner]!
    expectations: [Expectations]!
    bookingStatus(status: String!): Booking  
}

type Mutation {
  updateProperty(description: String!): Property
  updateOwner(description: String!): Owner
  updateExpect(description: String!): Expectations
  updateUser(first: String, last: String, email: String, password: String, booking: ID, notes: ID): User
  updateAdmin(first: String!, last: String!, email: String!, password: String!, phone_number: Int): Admin
  updateBooking(startDate: Date!, endDate: Date!, status: String!): Booking
  updateNotes(body: String!): Notes
  createUser(first: String!, last: String!, email: String!, password: String!): User
  createBooking(userId: ID!, startDate: Date!, endDate: Date!): Booking
}
`
module.exports = typeDefs