import bcrypt from 'bcrypt';

export const 
    haspss = async ( pss:string ) => bcrypt.hashSync(
        pss,
        bcrypt.genSaltSync( Number( process.env.saltbcrypt ))
    );
