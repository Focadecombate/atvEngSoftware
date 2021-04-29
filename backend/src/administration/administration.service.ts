import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { toHash } from '../util';
import { CreateAdministrationDto } from './dto/create-administration.dto';
import { UpdateAdministrationDto } from './dto/update-administration.dto';

@Injectable()
export class AdministrationService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createAdministrationDto: CreateAdministrationDto) {
    const hash = await toHash(createAdministrationDto.password);
    return this.prisma.adminstration.create({
      data: { ...createAdministrationDto, password: hash },
      select: { name: true, id: true, clinicId: true, email: true },
    });
  }

  findAll() {
    return this.prisma.adminstration.findMany({
      select: {
        clinicId: true,
        email: true,
        id: true,
        name: true,
        Clinic: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.adminstration.findUnique({
      where: { id },
      select: {
        name: true,
        clinicId: true,
        cpf: true,
        email: true,
        id: true,
        Clinic: true,
      },
    });
  }

  async update(id: string, updateAdministrationDto: UpdateAdministrationDto) {
    if (updateAdministrationDto) {
      updateAdministrationDto.password = await toHash(
        updateAdministrationDto.password,
      );
    }

    return this.prisma.adminstration.update({
      where: { id },
      data: updateAdministrationDto,
    });
  }

  remove(id: string) {
    return this.prisma.adminstration.delete({
      where: { id },
    });
  }
}
