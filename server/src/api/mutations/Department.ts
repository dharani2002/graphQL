import { GraphQLString } from "graphql";
import { DepartmentType } from "../typedefs/Department";


export const CREATE_DEPARTMENT={
    type:DepartmentType,
    args:{
        deptName:{type:GraphQLString}
    },
    resolve(parent:any,args:any){
        const{deptName}=args
        return args
    }
}