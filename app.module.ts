import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrdersModule } from './orders/orders.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';


@Module({
  imports: [
    ProductsModule, 
    OrdersModule, 
    UsersModule, 
    AuthModule,
    InMemoryDBModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
