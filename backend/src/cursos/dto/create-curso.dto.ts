import { IsDate, IsIn, IsString } from 'class-validator';
import { Grau } from '../entities/curso.entity';

export class CreateCursoDto {
  @IsString({ message: 'nome precisa ser uma string valida' })
  nome: string;
  @IsString({ message: 'grau precisa ser uma string valida' })
  @IsIn(['Pos', 'Mestrado', 'Doutorado'], {
    message: 'grau precisa ser: Pos, Mestrado ou Doutorado.',
  })
  grau: Grau;
  @IsDate({ message: 'Ato autorização precisa ser uma data valida' })
  atoAutorização: Date;
  @IsDate({ message: 'Ato reconhecimento precisa ser uma data valida' })
  atoReconhecimento: Date;
  @IsDate({ message: 'Ato renovação precisa ser uma data valida' })
  atoRenovacao: Date;
  @IsString()
  Observacao: string;
}
