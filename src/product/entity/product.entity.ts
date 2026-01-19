import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "../../category/entity/category.entity";
import { IsNotEmpty } from "class-validator";

@Entity({ name: 'tb_products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 150, nullable: false })
    @IsNotEmpty()
    name: string;

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ length: 255 })
    description: string;

    @UpdateDateColumn()
    createdAt: Date;

    // @ManyToOne(() => Category, (category) => category.product, { onDelete: 'CASCADE' })
    // category: Category;

}