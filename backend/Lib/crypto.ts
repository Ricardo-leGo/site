import * as CryptoTs from 'crypto-js';


export const cypherEncode = ( jsontringyfied:string ) =>{

    return CryptoTs
    .AES
    .encrypt( 
        jsontringyfied, 
        String( process.env.cyperkey ) 
        ).toString()
}



export const cypherDecode = ( encodeData:string ) =>{

    return JSON.parse(
        CryptoTs
        .AES
        .decrypt( 
            encodeData, 
            String( process.env.cyperkey ) 
            ).toString()
    )
}