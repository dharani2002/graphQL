import { GraphQLObjectType,GraphQLID,GraphQLString, } from "graphql";

export const DepartmentType=new GraphQLObjectType({
    name:"Department",
    fields:()=>({
        depNo:{type:GraphQLID},
        deptName:{type:GraphQLString}
    })
})