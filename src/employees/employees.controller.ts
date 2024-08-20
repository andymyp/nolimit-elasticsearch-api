import { Controller, Get } from '@nestjs/common';
import { ElasticService } from 'src/elastic/elastic.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly elasticService: ElasticService) {}

  @Get('count')
  async countEmployees(): Promise<any> {
    return await this.elasticService.countDocuments(
      'companydatabase',
      'employees',
    );
  }

  @Get('average-salary')
  async getAverageSalary(): Promise<number> {
    return await this.elasticService.calculateAverageSalary(
      'companydatabase',
      'employees',
    );
  }
}
