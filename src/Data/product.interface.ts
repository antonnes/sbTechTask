import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";

export interface ProductEntity extends InMemoryDBEntity {
    Id: number;
    Name: string;
    Category: string;
    Price: number;
}
