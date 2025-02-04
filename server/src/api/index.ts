import { GraphQLObjectType, GraphQLSchema,GraphQLString } from "graphql";
import { GET_ALL_DEPARTMENTS } from './queries/Department'
import { CREATE_DEPARTMENT } from "./mutations/Department";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllDepartments:GET_ALL_DEPARTMENTS
  },
});

const Mutation=new GraphQLObjectType({
    name:"Mutation",
    fields:{
      createDepartment:CREATE_DEPARTMENT
    }
})

export const schema=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})