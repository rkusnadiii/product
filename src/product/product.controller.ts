import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('get')
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get('get/:id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  @Post('/new')
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Put('/edit')
  async update(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productService.update(id, product);
  }

  @Delete('/delete')
  async delete(@Param('id') id: string): Promise<Product> {
    return this.productService.delete(id);
  }
}
