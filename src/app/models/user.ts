import { Message } from "./message";
import { Specialty } from "./specialty";

export class User{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    phone:string;
    photo:string;
    sex:string;
    specialty:string;
    messages: Message[] = [];
}