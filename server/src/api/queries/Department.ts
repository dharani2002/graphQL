import { GraphQLList } from 'graphql'
import {DepartmentType} from '../typedefs/Department'
import { resolve } from 'path'


export const GET_ALL_DEPARTMENTS={
    type:new GraphQLList(DepartmentType),
    resolve(){
        return []
    }
}