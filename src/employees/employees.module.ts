import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { ElasticModule } from 'src/elastic/elastic.module';

@Module({
  imports: [ElasticModule],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
