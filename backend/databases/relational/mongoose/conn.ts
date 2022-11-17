import mongoose, { connect, Connection, createConnection } from 'mongoose'
import Options from '../models';

const uri: String = process.env.DB_PATH ?? "mongodb://localhost:27017";
let conn: mongoose.Connection ;

export const getConnection = async (): Promise<mongoose.Connection> => {

    if (conn == null) {

    conn =  createConnection(
        uri as string,
        () => ({
                
                bufferCommands: false,
                bufferMaxEntries: 0,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true

            }),
        
    ) as unknown as Connection ;


// console.log( conn );
    console.log(`<====================== ${ conn.name } ======================>`);
  }

  return  conn ;
}