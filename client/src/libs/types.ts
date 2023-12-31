export type EventProps = {
    _id: string,
    name: string,
    description: string,
    event_start_date: string,
    event_end_date: string,
    registration_open: string,
    max_team_members: number,
    registration_fee: number,
    created_at: string,
    __v: number
  }

  export type ParticipantProps = {
    name: string;
    phone_number: string;
    email: string;
    institution: string;
  }

  export type RegistrationProps = {
    team_name: string;
    team_members: ParticipantProps [];
    email: string;
    event: string;
    payment_phone_number: string;
    trxId: string;
  }

  export type ApiResponse = {
    error: boolean,
    message?: string,
    [key:string]: unknown,
  }