import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Word } from './word.model';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';

@Module({
  imports: [SequelizeModule.forFeature([Word])],
  controllers: [WordsController],
  providers: [WordsService],
})
export class WordsModule {}
