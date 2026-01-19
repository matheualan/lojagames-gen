import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "tb_categories" })
export class Category {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 255 })
    description: string;

    // @OneToMany(() => Product, (product) => product.category)
    // products: Product[];

}