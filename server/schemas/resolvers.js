const {Admin, Booking, Expectations, Notes, Owner, Property, User} = require("../models")

const resolvers = {
    Query: {
        allUsers: async () => {
            return await User.find({})
        },
        oneUser: async (parent, {userId}) => {
            return await User.findOne({
                _id: userId
            })
        }
    },
    Mutation: {

    }
}