import { Module } from '@nestjs/common';
import { AdministrationService } from './administration.service';
import { AdministrationController } from './administration.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AdministrationController],
  providers: [AdministrationService, PrismaService],
})
export class AdministrationModule {}
