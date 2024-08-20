import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ElasticModule } from './elastic/elastic.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ElasticModule,
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
