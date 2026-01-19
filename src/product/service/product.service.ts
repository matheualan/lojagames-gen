import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entity/product.entity";
import { ILike, Repository } from "typeorm";
import { CategoryService } from "../../category/service/categoria.service";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        private categoryService: CategoryService
    ) { }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find({
            relations: {
                category: true
            }
        });
    }

    async findById(id: number): Promise<Product> {
        let product = await this.productRepository.findOne({
            where: {
                id
            },
            relations: {
                category: true
            }
        });

        if (!product) throw new HttpException('Produto nao encontrado', HttpStatus.NOT_FOUND);

        return product;
    }

    async findAllByName(name: string): Promise<Product[]> {
        return await this.productRepository.find({
            where: {
                name: ILike(`%${name}%`)
            },
            relations: {
                category: true
            }
        });
    }

    async create(product: Product): Promise<Product> {
        this.categoryService.findById(product.category.id);
        return await this.productRepository.save(product);
    }

    async update(product: Product): Promise<Product> {
        await this.findById(product.id);
        await this.categoryService.findById(product.category.id);
        return await this.productRepository.save(product);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.productRepository.delete(id);
    }

}