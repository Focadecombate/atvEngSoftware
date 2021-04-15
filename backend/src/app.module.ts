import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { UsuarioModule } from './usuario/usuario.module';
import { InstituicaoModule } from './instituicao/instituicao.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [CursosModule, InstituicaoModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
