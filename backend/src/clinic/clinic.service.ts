import { Clinic } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';

@Injectable()
export class ClinicService {
  constructor(private readonly prisma: PrismaService) {}

  create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    return this.prisma.clinic.create({ data: createClinicDto });
  }

  findAll(): Promise<Clinic[]> {
    return this.prisma.clinic.findMany();
  }

  findOne(id: string): Promise<Clinic> {
    return this.prisma.clinic.findUnique({ where: { id } });
  }

  update(id: string, updateClinicDto: UpdateClinicDto): Promise<Clinic> {
    return this.prisma.clinic.update({ data: updateClinicDto, where: { id } });
  }

  remove(id: string): Promise<Clinic> {
    return this.prisma.clinic.update({
      data: { active: false },
      where: { id },
    });
  }
  reactivate(id: string): Promise<Clinic> {
    return this.prisma.clinic.update({
      data: { active: true },
      where: { id },
    });
  }
}
