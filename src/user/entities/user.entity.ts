import { Currency } from '../../currency/entities/currency.entity';
import { Record } from '../../record/entities/record.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Record, (record) => record.user)
  records: Record[];

  @ManyToOne(() => Currency, (currency) => currency.user, { nullable: true })
  @JoinColumn({ name: 'defaultCurrencyId', referencedColumnName: 'id' })
  defaultCurrency?: Currency;
}
