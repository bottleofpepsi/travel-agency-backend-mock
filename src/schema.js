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

    type RoomsPagination {
        data: [Room]
        hasMore: Boolean
    }

    type Query {
        rooms(start: Int, end: Int): RoomsPagination 
        room(id: ID!): Room
    }
`;

export const resolvers = {
    Query: {
        room: (_, args) => {
            return ROOMS_DATA.find(room => room.id === +args.id);
        },
        rooms: (_, args) => {
            return {
                data: ROOMS_DATA.slice(args.start || 0, args.end || ROOMS_DATA.length),
                hasMore: !!(args.end && args.end < ROOMS_DATA.length)
            }
        },
    }
};
