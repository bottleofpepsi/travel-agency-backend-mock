import { gql } from "apollo-server-express";
import { ROOMS_DATA } from "./data.js";

export const typeDefs = gql`
    type Rating {
        rating: Float
        reviewCount: Int
    }

    type Room {
        id: ID
        name: String
        price: Float
        isAvailable: Boolean
        ratingInfo: Rating
    }

    type Query {
        rooms: [Room]   
        room(id: ID): Room
    }
`;

export const resolvers = {
    Query: {
        room: (_, args) => {
            return ROOMS_DATA.find(room => room.id === +args.id);
        },
        rooms: () => ROOMS_DATA,
    }
};
