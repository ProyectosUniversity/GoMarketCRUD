import { Schema } from 'mongoose'

export const produtoSchema = new Schema({
    nombre:{type:String, required:true},
    descripcion: {type:String, required:true},
    imgURL:{type:String, required:true},
    precio: {type:String, required:true},
    fecha_de_creacion: {
        type: Date,
        default: Date.now
    }
});

