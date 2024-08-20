import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async countDocuments(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.count({ index, type });

    return {
      index: index,
      type: type,
      count: result.body.count,
    };
  }

  async calculateAverageSalary(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          average_salary: {
            avg: {
              field: 'Salary',
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      average_salary: result.body.aggregations.average_salary.value,
    };
  }
}
