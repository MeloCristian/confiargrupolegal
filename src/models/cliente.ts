import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  AutoIncrement,
} from "sequelize-typescript";

@Table
export class cliente extends Model<cliente> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id_cliente!: string;

  @Column(DataType.STRING)
  nombre!: string;
}
