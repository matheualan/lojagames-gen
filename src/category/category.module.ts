import { Module } from "@nestjs/common";
import { CategoryService } from "./service/categoria.service";
import { CategoryController } from "./controller/category.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./entity/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService],
    exports: [] //apenas category tera exports pois precisara ficar visivel para product
})
export class CategoryModule { }