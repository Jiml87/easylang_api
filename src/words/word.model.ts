import { Column, Model, Table, AllowNull } from 'sequelize-typescript';
// import * as sequelize from 'sequelize-typescript';

// console.log('sequelize', sequelize);

@Table
export class Word extends Model {
  @AllowNull(false)
  @Column
  nativePhrase: string;

  @AllowNull
  @Column
  translatedPhrase: string;
}
