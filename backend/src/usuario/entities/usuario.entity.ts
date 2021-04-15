import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Instituicao } from '../../instituicao/entities/instituicao.entity';

export type Cargo =
  | 'funcionario'
  | 'diretor'
  | 'dirigente'
  | 'superintendente'
  | 'coordenador CARE';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column({ unique: true })
  cpf: string;

  @Column()
  telefone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column()
  cargo: Cargo;

  @ManyToOne(() => Instituicao, (instituicao) => instituicao.funcionario)
  intituição: Instituicao;
}
