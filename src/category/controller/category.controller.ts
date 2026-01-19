import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { CategoryService } from "../service/categoria.service";
import { Category } from "../entity/category.entity";

@Controller()
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @Get('/name/:name')
    @HttpCode(HttpStatus.OK)
    findAllByName(@Param('name') name: string): Promise<Category[]> {
        return this.categoryService.findAllByName(name);
    }

    
     
}