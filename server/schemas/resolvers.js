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
            }).populate(["bookingId", "notesId"])
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
        updateProperty: async(parent, args) =>{
            return await Property.findOneAndUpdate(args)
        },
        updateOwner: async(parent, args)=> {
            return await Owner.findOneAndUpdate(args)
        },
        updateExpect: async(parent, args)=> {
            return await Expectations.findOneAndUpdate(args)
        },
        updateUser: async(parent, args)=> {
            return await User.findOneAndUpdate(args)
        },
        updateAdmin: async(parent, args)=> {
            return await Admin.findOneAndUpdate(args)
        },
        updateBooking: async(parent, args)=>{
            return await Booking.findOneAndUpdate(args)
        },
        updateNotes: async(parent, args)=> {
            return await Notes.findOneAndUpdate(args)
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
            {$push: {booking: newBooking._id}},
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