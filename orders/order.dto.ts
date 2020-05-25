import { IsNotEmpty } from 'class-validator';
export class OrderDto {
    @IsNotEmpty()
    public products: number[];
    
    @IsNotEmpty()
    public status: number;
}