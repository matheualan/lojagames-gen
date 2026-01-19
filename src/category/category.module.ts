import { Module } from "@nestjs/common";
import { CategoryService } from "./service/categoria.service";
import { CategoryController } from "./controller/category.controller";

@Module({
    imports: [],
    controllers: [CategoryController],
    providers: [CategoryService],
    exports: [] //apenas category tera exports pois precisara ficar visivel para product
})
export class CategoryModule { }