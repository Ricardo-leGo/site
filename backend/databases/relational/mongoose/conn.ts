import mongoose, { Connection } from 'mongoose'

const uri: String = process.env.DB_PATH ?? "mongodb://localhost:27017";
console.log( uri );
let conn: mongoose.Connection ;

export const getConnection = async (): Promise<mongoose.Connection> => {
  
    if (conn == null) {

    conn = mongoose.createConnection(
        uri as string,
        () => ({
                
                bufferCommands: false,
                bufferMaxEntries: 0,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true

            }),
        
    ) as unknown as Connection ;

    console.log(`<====================== DB ${conn.name} ======================>`);


  }

  return conn 
}