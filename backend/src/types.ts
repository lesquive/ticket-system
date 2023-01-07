export type Args = {
  id: number;
  email: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  company_name: string;
  phone: string;
  time_zone: string;
  lat: number;
  long: number;
};

export type UserUpdate = {
  email: string;
  data: User;
};

export type TicketUpdate = {
  id: number;
  data: Ticket;
};

export type Ticket = {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  problem: string;
  solved: Boolean;
  status: string;
  viewCount: number;
  authorId: number;
};
