import { CrearProductoDTO } from './dto/productos.dto';
import { Controller,Get,Post,Put,Delete, Res, HttpStatus, Body, NotFoundException, Param, Query } from '@nestjs/common';

import { ProductosService } from "./productos.service";
@Controller('productos')
export class ProductosController {

  constructor (private productosService:ProductosService){}
  //Crear Producto=> productos /crear
  @Post('/crear')
  async crearPost(@Res() res,@Body() crearProductoDTO: CrearProductoDTO){
    const producto =await this.productosService.crearProducto(crearProductoDTO);  
    //console.log(crearProductoDTO);
        res.status(HttpStatus.OK).json({
            message: 'Producto creado satisfactoriamente',
            producto
        });    
  }

  //Obtener todos los producto => /productos
  @Get('/')
  async getProductos(@Res() res ){
    const productos=await this.productosService.getProductos();

   return  res.status(HttpStatus.OK).json({
      productos
    })
  }

   //Obetener producto => productos/5f5bc79c4cd8703a044d4aae
   @Get('/:productoID')
   async getProducto(@Res() res, @Param('productoID') productoID) {
       const producto = await this.productosService.getProducto(productoID);
       if (!producto) throw new NotFoundException('El producto no existe');
       return res.status(HttpStatus.OK).json(producto);
   }

   //Eliminar => productos/eliminar?productoID=5f5bc79c4cd8703a044d4aae
   @Delete('/eliminar')
   async eliminarProducto(@Res() res, @Query('productoID') productoID) {
       const eliminarProducto = await this.productosService.eliminarProducto(productoID);
       if (!eliminarProducto) throw new NotFoundException('El producto no existe');
       return res.status(HttpStatus.OK).json({
           message: 'Producto eliminado satisfactoriamente',
           eliminarProducto
       });
   }

   //Actualizar => productos/actualizar?productoID=5f5bc79c4cd8703a044d4aae
   @Put('/actualizar')
   async updateProduct(@Res() res, @Body() crearProductoDTO: CrearProductoDTO, @Query('productoID') productoID) {
       const actualizarProducto = await this.productosService.actualizarProducto(productoID, crearProductoDTO);
       if (!actualizarProducto) throw new NotFoundException('El producto no existe');
       return res.status(HttpStatus.OK).json({
           message: 'Producto actualizado satisfactoriamente',
           actualizarProducto
       });
   }

}
