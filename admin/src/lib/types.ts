export type CSEvent = {
  _id: string;
  name: string;
  description: string;
  event_start_date: string;
  event_end_date: string;
  registration_open: boolean;
  max_team_members: number;
  created_at: string;
  __v: string;
  registration_fee: string;
};

export type RegCountByEvent = {
  event_id: string;
  event_name: string;
  count: number;
};

export type Registration = {
  _id: string;
  team_name: string;
  team_members: Participant[];
  email: string;
  status: string;
  verified: false;
  event: string;
  trxId: string;
  payment_phone_number: string;
  created_at: string;
  __v: string;
};

export type Participant = {
  name: string;
  phone_number: string;
  email: string;
  institution: string;
  _id: string;
};
