export class CreatePatientDto {
  name: string;
  email: string;
  address: {
    road: string;
    cep: string;
    state: string;
    number: number;
  };
  cpf: string;
  phone: string;
  password: string;
  birthday: string;
  clinicId: string;
}
