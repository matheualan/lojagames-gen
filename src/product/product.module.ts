import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entity/product.entity";
import { CategoryModule } from "../category/category.module";
import { ProductController } from "./controller/product.controller";
import { ProductService } from "./service/product.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product]), CategoryModule],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule { }