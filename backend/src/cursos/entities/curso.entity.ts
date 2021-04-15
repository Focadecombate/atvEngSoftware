import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type Grau = 'Pos' | 'Mestrado' | 'Doutorado';

@Entity()
export class Curso {
  @Column({ unique: true })
  nome: string;

  @Column()
  grau: Grau;

  @PrimaryGeneratedColumn()
  eMec: string;

  @Column()
  atoAutorização: Date;

  @Column()
  atoReconhecimento: Date;

  @Column()
  atoRenovacao: Date;

  @Column()
  Observacao: string;
}
