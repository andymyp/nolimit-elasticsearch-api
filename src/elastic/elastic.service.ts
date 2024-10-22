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
      distribution: result.body.aggregations.age_distribution.buckets,
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
      distribution: result.body.aggregations.gender_distribution.buckets,
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
      distribution:
        result.body.aggregations.marital_status_distribution.buckets,
    };
  }

  async getDateOfJoiningDistribution(
    index: string,
    type: string,
    interval: string,
  ): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          date_of_joining_distribution: {
            date_histogram: {
              field: 'DateOfJoining',
              interval,
              format: 'yyyy-MM-dd',
              min_doc_count: 1,
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      interval: interval,
      distribution:
        result.body.aggregations.date_of_joining_distribution.buckets,
    };
  }

  async getTopInterests(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          top_interests: {
            terms: {
              field: 'Interests.keyword',
              size: 10,
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      top_interests: result.body.aggregations.top_interests.buckets,
    };
  }

  async getDesignationDistribution(index: string, type: string): Promise<any> {
    const result = await this.elasticsearchService.search({
      index,
      type,
      body: {
        size: 0,
        aggs: {
          designation_distribution: {
            terms: {
              field: 'Designation.keyword',
              size: 10,
            },
          },
        },
      },
    });

    return {
      index: index,
      type: type,
      distribution: result.body.aggregations.designation_distribution.buckets,
    };
  }
}
