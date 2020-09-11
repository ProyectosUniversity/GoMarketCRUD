import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { Producto } from './interfaces/productos.interfeces'
import { CrearProductoDTO } from './dto/productos.dto'

@Injectable()
export class ProductosService {

    constructor(@InjectModel('Producto') private readonly productoModel:Model<Producto> ){} 


    //Listar todos los Productos
    async getProductos(): Promise<Producto[]> {
        const productos = await this.productoModel.find();
        return productos;
    }
    
    //Obtener solo un producto
    async getProducto(productoID: string): Promise<Producto> {
        const producto = await this.productoModel.findById(productoID); 
        return producto;
    }

    //Crear un producto
    async crearProducto(crearProductoDTO: CrearProductoDTO): Promise<Producto> {
        const nuevoProducto = new this.productoModel(crearProductoDTO);
        return nuevoProducto.save();
    }

    //Eliminar un producto
    async eliminarProducto(productoID: string):Promise<Producto>{
        const eliminarProducto= await this.productoModel.findByIdAndDelete(productoID);
        return eliminarProducto;
    }

    //Actualizar un Producto
    async actualizarProducto(productoID: string, crearProductoDTO: CrearProductoDTO): Promise<Producto> {
        const actualizarProducto = await this.productoModel
                            .findByIdAndUpdate(productoID, crearProductoDTO, {new: true});
        return actualizarProducto;
    }


}
