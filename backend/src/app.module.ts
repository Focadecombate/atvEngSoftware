import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { ClinicModule } from './clinic/clinic.module';
import { AdministrationModule } from './administration/administration.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    PatientModule,
    DoctorModule,
    ClinicModule,
    AdministrationModule,
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
