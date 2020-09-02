import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID,
        firstName: String,
        lastName: String,
        age: Int,
        gender: String,
        language: String,
        email: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
    }

    input FriendInput {
        id: ID,
        firstName: String!,
        lastName: String,
        age: Int,
        gender: String,
        language: String,
        email: String
    }

    type Query {
        getFriend(id:ID): Friend
    }
`);

export default schema;
