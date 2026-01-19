import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "../entity/category.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>,
    ) { }


    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find({ 
            // relations: {
            //     product: true
            // } 
        });
    }


    async findById(id: number): Promise<Category> {
        let category = await this.categoryRepository.findOne({
            where: { 
                id
            },
            // relations: {
            //     product: true
            // }
        })

        if (!category) throw new HttpException('Categoria nao encontrada', HttpStatus.NOT_FOUND);

        return category;
    }

    async findAllByName(name: string): Promise<Category[]> {
        return await this.categoryRepository.find({
            where: {
                name: ILike(`%${name}%`)
            },
            // relations: {
            //     product: true
            // }
        })
    }


    async create(category: Category): Promise<Category> {
        return await this.categoryRepository.save(category);
    }

    // async update(id: number, categoria: Category): Promise<Category> {
    //     const categoryExists = await this.findById(id);
    //     if (!categoryExists) throw new NotFoundException('Categoria não encontrada');


    //     categoria.id = id;
    //     return this.categoryRepository.save(categoria);
    // }

    async update(category: Category): Promise<Category> {
        let findCategory = await this.findById(category.id);

        if (!findCategory || !category.id) throw new HttpException("Categoria nao encontrada", HttpStatus.NOT_FOUND);

        return await this.categoryRepository.save(category);
    }


    async delete(id: number): Promise<DeleteResult> {
        let findCategory = await this.findById(id);

        if (!findCategory) throw new HttpException("Categoria nao encontrada", HttpStatus.NOT_FOUND);

        return await this.categoryRepository.delete(id);
    }

}