import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { produtoSchema } from './schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Producto',schema:produtoSchema}
    ])
  ],
  controllers: [ProductosController],
  providers: [ProductosService]
})
export class ProductosModule {}
