export type Users = User[];

export type User = {
    id?: number;
    name: string;
    email: string;
    password: string;
    birthday: string;
    phone: string;
    rating?: number;
    role: 'admin' | 'user';
};
