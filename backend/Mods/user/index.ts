import sayhello from "./sayhello";


export default {

    sayhello: async (_:void, data:any, context:any) => await sayhello(_, data, context),
    insertIntoDatabase:async (_:void, data:any, context:any) => {

        console.log(  );


        const res =await  context.dbConn.collection('Otros').insertOne({

            name:"name",
            status:true

        });


        console.log(res  );

        return {
            msg: "hola",
            status:true, 
            Result:["hola"]
        }

        
    }
}