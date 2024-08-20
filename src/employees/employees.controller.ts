import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ElasticService } from 'src/elastic/elastic.service';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly elasticService: ElasticService) {}

  @Get('count')
  @ApiOperation({ summary: 'Count' })
  async countEmployees(): Promise<any> {
    return await this.elasticService.countDocuments(
      'companydatabase',
      'employees',
    );
  }

  @Get('average-salary')
  @ApiOperation({ summary: 'Average Salary' })
  async getAverageSalary(): Promise<number> {
    return await this.elasticService.calculateAverageSalary(
      'companydatabase',
      'employees',
    );
  }

  @Get('min-max-salary')
  @ApiOperation({ summary: 'Min and Max Salary' })
  async getSalaryRange(): Promise<any> {
    return await this.elasticService.findMinAndMaxSalary(
      'companydatabase',
      'employees',
    );
  }

  @Get('age-distribution')
  @ApiOperation({ summary: 'Age Distribution' })
  async getAgeDistribution(): Promise<any> {
    return await this.elasticService.getAgeDistribution(
      'companydatabase',
      'employees',
    );
  }

  @Get('gender-distribution')
  @ApiOperation({ summary: 'Gender Distribution' })
  async getGenderDistribution(): Promise<any> {
    return await this.elasticService.getGenderDistribution(
      'companydatabase',
      'employees',
    );
  }

  @Get('marital-status-distribution')
  @ApiOperation({ summary: 'Marital Status Distribution' })
  async getMaritalStatusDistribution(): Promise<any> {
    return await this.elasticService.getMaritalStatusDistribution(
      'companydatabase',
      'employees',
    );
  }

  @Get('date-of-joining-distribution')
  @ApiOperation({ summary: 'Date of Joining Distribution' })
  async getDateOfJoiningDistribution(
    @Query('interval') interval: string = 'month',
  ): Promise<any> {
    return await this.elasticService.getDateOfJoiningDistribution(
      'companydatabase',
      'employees',
      interval,
    );
  }

  @Get('top-interests')
  @ApiOperation({ summary: 'Top Interests' })
  async getTopInterests(): Promise<any> {
    return await this.elasticService.getTopInterests(
      'companydatabase',
      'employees',
    );
  }

  @Get('designation-distribution')
  @ApiOperation({ summary: 'Designation Distribution' })
  async getDesignationDistribution(): Promise<any> {
    return await this.elasticService.getDesignationDistribution(
      'companydatabase',
      'employees',
    );
  }
}
