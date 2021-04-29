import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { FilterAppointmentDto } from './dto/filter-appointment.dto';
import { FindOneAppointmentDto } from './dto/find-one-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  findAll(@Query() filterAppointmentDto: FilterAppointmentDto) {
    return this.appointmentService.findAll(filterAppointmentDto);
  }

  @Get(':id')
  findOne(@Param() findOneAppointmentDto: FindOneAppointmentDto) {
    return this.appointmentService.findOne(findOneAppointmentDto);
  }

  @Patch(':id')
  update(
    @Param() findOneAppointmentDto: FindOneAppointmentDto,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentService.update(
      findOneAppointmentDto,
      updateAppointmentDto,
    );
  }

  @Delete(':id')
  remove(@Param() findOneAppointmentDto: FindOneAppointmentDto) {
    return this.appointmentService.remove(findOneAppointmentDto);
  }
}
