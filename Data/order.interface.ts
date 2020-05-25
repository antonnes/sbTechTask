import { InMemoryDBEntity } from "@nestjs-addons/in-memory-db";
import Status from "./OrderStatus";

export interface OrderEntity extends InMemoryDBEntity {
    Date: string;
    Products: number[];
    Status: Status;
}
