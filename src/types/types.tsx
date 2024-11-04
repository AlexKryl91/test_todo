export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  count: number;
}

export interface ITodo {
  userId: number;
}
