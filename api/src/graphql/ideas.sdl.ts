export const schema = gql`
  type Idea {
    id: Int!
    title: String!
    body: String
    user: String
    createdAt: DateTime!
  }

  type Query {
    ideas: [Idea!]! @skipAuth
    idea(id: Int!): Idea @requireAuth
  }

  input CreateIdeaInput {
    title: String!
    body: String
    user: String
  }

  input UpdateIdeaInput {
    title: String
    body: String
    user: String
  }

  type Mutation {
    createIdea(input: CreateIdeaInput!): Idea! @requireAuth
    updateIdea(id: Int!, input: UpdateIdeaInput!): Idea! @requireAuth
    deleteIdea(id: Int!): Idea! @requireAuth
  }
`
