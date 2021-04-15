import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':id')
  findOne(@Param('nomeCurso') nomeCurso: string) {
    return this.cursosService.findOne(nomeCurso);
  }

  @Patch(':id')
  update(
    @Param('nomeCurso') nomeCurso: string,
    @Body() updateCursoDto: UpdateCursoDto,
  ) {
    return this.cursosService.update(nomeCurso, updateCursoDto);
  }

  @Delete(':id')
  remove(@Param('nomeCurso') nomeCurso: string) {
    return this.cursosService.remove(nomeCurso);
  }
}
