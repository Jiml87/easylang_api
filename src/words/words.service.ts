import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
// import sequelize from '../database';
import { Word } from './word.model';

@Injectable()
export class WordsService {
  constructor(
    @InjectModel(Word)
    private wordModel: typeof Word,
  ) {}

  create(createWordDto: CreateWordDto) {
    return 'This action adds a new word';
  }

  findAll() {
    return `This action returns all words`;
  }

  findOne(id: number) {
    return `This action returns a #${id} word`;
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
