import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ElasticModule } from './elastic/elastic.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ElasticModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
