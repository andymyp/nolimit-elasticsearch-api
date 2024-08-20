import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async countDocuments(index: string): Promise<number> {
    const result = await this.elasticsearchService.count({ index });
    return result.body.count;
  }
}
