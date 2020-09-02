import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID,
        firstName: String,
        lastName: String,
        gender: String,
        language: String,
        email: String
    }
    
    type Mutattion {
        createFriend(input: FriendInput): Friend{

        }
    }

    input FriendInput {
        id: ID,
        firstName: String!,
        lastName: String,
        gender: String,
        language: String,
        email: String
    }

    type Query {
        friend: Friend
    }
`);

export default schema;
