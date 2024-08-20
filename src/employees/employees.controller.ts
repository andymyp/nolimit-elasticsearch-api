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

  @Get('min-max-salary')
  async getSalaryRange(): Promise<any> {
    return await this.elasticService.findMinAndMaxSalary(
      'companydatabase',
      'employees',
    );
  }

  @Get('age-distribution')
  async getAgeDistribution(): Promise<any> {
    return await this.elasticService.getAgeDistribution(
      'companydatabase',
      'employees',
    );
  }

  @Get('gender-distribution')
  async getGenderDistribution(): Promise<any> {
    return await this.elasticService.getGenderDistribution(
      'companydatabase',
      'employees',
    );
  }
}
