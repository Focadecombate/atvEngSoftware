import { Patient } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { toFormat, toHash } from '../util';
import { CreatePatientDto } from './dto/create-patient.dto';
import { FindPatientDto } from './dto/find-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const {
      email,
      phone,
      password,
      name,
      cpf,
      clinicId,
      address,
      birthday,
    } = createPatientDto;
    const formattedBirthDay = toFormat(birthday);
    const hash = await toHash(password);
    return this.prisma.patient.create({
      data: {
        Address: {
          create: { ...address },
        },
        birthday: formattedBirthDay,
        cpf,
        email,
        name,
        phone,
        clinicId,
        password: hash,
      },
    });
  }

  findAll(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  findOne(findPatientDto: FindPatientDto): Promise<Patient> {
    return this.prisma.patient.findUnique({ where: findPatientDto });
  }

  async update(
    findPatientDto: FindPatientDto,
    updatePatientDto: UpdatePatientDto,
  ): Promise<Patient> {
    if (updatePatientDto.password) {
      updatePatientDto.password = await toHash(updatePatientDto.password);
    }
    return this.prisma.patient.update({
      data: updatePatientDto,
      where: findPatientDto,
    });
  }

  remove(id: string): Promise<Patient> {
    return this.prisma.patient.delete({
      where: { id },
      include: { Address: true, Appointment: true },
    });
  }
}
