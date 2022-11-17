import Jwt from 'jsonwebtoken';

const secret =  process.env.s3cre3tjwt as string

export const enconde = ( pss:string )=> {
    
    return Jwt.sign( { pss }, secret , {expiresIn:"2h"});

}

export const decode = ( token:string  ) => {

    return Jwt.decode( token, {complete:true} )
};


export const verify = ( token:string) => {

    try {

        const rsp = Jwt.verify( token, secret);
        console.log( rsp );
        return   true
    } catch (error) {

        console.log( `el token es inválido. ${error}`);
        return false
        
    }
}




