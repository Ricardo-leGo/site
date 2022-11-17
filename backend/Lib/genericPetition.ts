import mongoose, { mongo } from "mongoose"
import { cypherDecode } from "./crypto"

export default async (_:void, data:string, context:any) => {


    const Data = await cypherDecode( data ),
          petition = Data.filters,
          collection = Data.Collection;
    
    

}