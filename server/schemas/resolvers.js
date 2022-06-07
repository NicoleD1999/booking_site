const {Admin, Booking, Expectations, Notes, Owner, Property, User} = require("../models")
const { GraphQLScalarType } = require('graphql') ;
const { Kind } = require('graphql/language');

const resolvers = {
    Query: {
        allUsers: async () => {
            return await User.find({}).populate(["booking"])
        },
        oneUser: async (parent, {userId}) => {
            return await User.findOne({
                _id: userId
            }).populate(["booking"])
        },
        property: async()=>{
            return Property.find({})
        },
        owner: async()=> {
            return Owner.find({})
        },
        expectations: async()=>{
            return Expectations.find({})
        },
        bookingStatus: async(parent, {status}) =>{
            return await Booking.findOne({
                status: status
            })
        },
    },
    Mutation: {
        updateProperty: async(parent, {propId, description}) =>{
            return await Property.findOneAndUpdate(
                {_id: propId},
                {$set: {description: description}},
                {new: true}
            )
        },
        updateOwner: async(parent, {ownerId, description})=> {
            return await Owner.findOneAndUpdate(
                {_id: ownerId},
                {$set: {description: description}},
                {new: true}
            )
        },
        updateExpect: async(parent, {expectId, description})=> {
            return await Expectations.findOneAndUpdate(
                {_id: expectId},
                {$set: {description: description}},
                {new: true}
            )
        },
        updateUser: async(parent, {userId, first, last, email, password})=> {
            return await User.findOneAndUpdate(
                {_id: userId},
                {$set: {first: first, last: last, email: email, password: password}},
                {new: true}
            )
        },
        updateAdmin: async(parent, {adminId, first, last, email, password, phone_number})=> {
            return await Admin.findOneAndUpdate(
                {_id: adminId},
                {$set: {first: first, last: last, email: email, password: password, phone_number: phone_number}},
                {new: true}
            )
        },
        updateBooking: async(parent, {bookingId, startDate, endDate, status})=>{
            return await Booking.findOneAndUpdate(
                {_id: bookingId},
                {$set: {startDate: startDate, endDate: endDate, status: status}},
                {new: true}
            )
        },
        updateNotes: async(parent, {notesId, body})=> {
            return await Notes.findOneAndUpdate(
                {_id: notesId},
                {$push: {body: body}},
                {new: true}
            )
        },
        createUser: async(parent, args)=>{
           return await User.create(args)
        },
        createBooking: async(parent, {userId, startDate, endDate})=>{
            const newBooking = await Booking.create(
            {
            startDate: startDate,
            endDate: endDate
            })
            await User.findOneAndUpdate(
            {_id: userId},
            {$set: {booking: newBooking._id}},
            {new: true}
            )
            return newBooking
        }
        

    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Custom date scalar',
        parseValue(value) {
          return value;
        },
        serialize(value) {
          return new Date(Number(value));
        },
        parseLiteral(ast) {
          if (ast.kind === Kind.INT) {
            return new Date(ast.value);
          }
          return null;
        }
      }),
};

module.exports = resolvers