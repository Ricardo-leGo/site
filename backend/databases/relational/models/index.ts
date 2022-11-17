import mongoose, {Types} from 'mongoose';

export interface IOptions extends mongoose.Document {
  _id:  String
  name: String
  logo: String
};

const schema:any = {
  _id : { type: Types.ObjectId, required:false },
  name: { type: String, required: true         },
  logo: { type: String, required: true         },
};




const Options = (conn: mongoose.Connection): 
mongoose.Model<IOptions> => conn.model( 'options', schema );

export default Options;