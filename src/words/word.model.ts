import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Word extends Model {
  @Column
  nativePhrase: string;

  @Column
  translatedPhrase: string;
}
