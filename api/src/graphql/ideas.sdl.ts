export const schema = gql`
  type Idea {
    id: Int!
    title: String!
    body: String
    user: String!
    userId: String!
    createdAt: DateTime!
  }

  type Query {
    ideas: [Idea!]! @skipAuth
    idea(id: Int!): Idea @skipAuth
  }

  input CreateIdeaInput {
    title: String!
    body: String
    user: String!
    userId: String!
  }

  input UpdateIdeaInput {
    title: String
    body: String
    user: String
    userId: String
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea! @requireAuth
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea! @requireAuth
    deleteIdea(id: Int!): Idea! @requireAuth
  }
`
