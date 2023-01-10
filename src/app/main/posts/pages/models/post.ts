export interface IPost {
    image: string;
    description: string;
    createdAt: string;
    user: IUser
}

interface IUser {
    _id: string;
    email: string;
    name: string;
}