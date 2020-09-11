import { Document } from "mongoose";

export interface Producto extends Document{
    readonly nombre: string;
    readonly descripcion: string;
    readonly imgURL: string;
    readonly precio: number;
    readonly fecha_de_creacion: Date; 
}