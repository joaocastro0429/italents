import mongoose, { Types } from "mongoose"


const usuarioShema=mongoose.Schema({
    nome:{type:String,required:true},
    email:{tyoe:String,unique:true , required:true},
    senha:{type:String},
    imagem:{type:String,required:true},
    endereco:[
        {
            rua:{type:String,required:true},
            numero:{type:Number, required:true},
            complemento:{type:String,required:true},
            cep:{type:String,requid:true},
            createdAt:{type:Date, required:true}

        }
    ],
    createdAt:{type:Date, required:true},
    produtos_fav:
    [
        {
          _id: {type:mongoose.Schema.Types.ObjectId,unique:true,ref:"produtos"}
        }
    ],
    admin:
        {type:Boolean,required:true,default:true},

   
})

const usuario = mongoose.model("usuarios",usuarioShema)

export default usuario