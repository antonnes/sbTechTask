import { IsNumber, IsNotEmpty } from 'class-validator';
export class OrderDto {
    
    public Products: number[];
    
    @IsNumber()
    public Status: number;
}