import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}
  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const foundCurso = await this.cursoRepository.findOne({
      nome: createCursoDto.nome,
    });
    if (foundCurso) {
      throw new ConflictException();
    }
    const curso = this.cursoRepository.create(createCursoDto);
    this.cursoRepository.save(curso);
    return this.cursoRepository.save(curso);
  }

  findAll(): Promise<Curso[]> {
    return this.cursoRepository.find();
  }

  findOne(nome: string): Promise<Curso> {
    return this.cursoRepository.findOne({ where: { nome } });
  }

  async update(nome: string, updateCursoDto: UpdateCursoDto): Promise<Curso> {
    const curso = await this.cursoRepository.findOne({ where: { nome } });
    if (!curso) {
      throw new Error('Não foi possivel achar o curso');
    }
    for (const field in updateCursoDto) {
      curso[field] = updateCursoDto[field];
    }
    return this.cursoRepository.save(curso);
  }

  async remove(nome: string): Promise<Curso> {
    const curso = await this.cursoRepository.findOne({ nome });
    const success = await this.cursoRepository.remove(curso);
    if (!success) {
      throw new Error('Não foi possivel apagar o curso');
    }
    return success;
  }
}
