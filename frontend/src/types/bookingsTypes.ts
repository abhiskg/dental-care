export interface BookingsInputTypes {
  patientName: string;
  userEmail: string;
  appointmentDate: string;
  phone: number;
  slot: string;
  treatment: string;
}

export interface BookingsDataTypes extends BookingsInputTypes {
  _id: string;
}
