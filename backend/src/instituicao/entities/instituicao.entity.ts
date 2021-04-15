import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity()
export class Instituicao {
  @PrimaryColumn()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  cidade: string;

  @Column()
  mantenedora: string;

  @Column()
  @Generated('uuid')
  credencial: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  dirigente: Usuario;

  @OneToOne(() => Usuario)
  @JoinColumn()
  diretor: Usuario;

  @ManyToOne(() => Usuario, (usuario) => usuario.intituição)
  funcionario: Usuario;
}
