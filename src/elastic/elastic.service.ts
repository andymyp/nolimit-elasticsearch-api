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

  async findMinAndMaxSalary(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          min_salary: {
            min: {
              field: 'Salary',
            },
          },
          max_salary: {
            max: {
              field: 'Salary',
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      min_salary: result.body.aggregations.min_salary.value,
      max_salary: result.body.aggregations.max_salary.value,
    };
  }

  async getAgeDistribution(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          age_distribution: {
            histogram: {
              field: 'Age',
              interval: 5,
              min_doc_count: 1,
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      age_distribution: result.body.aggregations.age_distribution.buckets,
    };
  }

  async getGenderDistribution(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          gender_distribution: {
            terms: {
              field: 'Gender.keyword',
              size: 10,
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      gender_distribution: result.body.aggregations.gender_distribution.buckets,
    };
  }

  async getMaritalStatusDistribution(
    index: string,
    type: string,
  ): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          marital_status_distribution: {
            terms: {
              field: 'MaritalStatus.keyword',
              size: 10,
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      marital_status_distribution:
        result.body.aggregations.marital_status_distribution.buckets,
    };
  }
}
