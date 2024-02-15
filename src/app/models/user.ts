import { Message } from "./message";
import { Specialty } from "./specialty";

export class User{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    password:string;
    photo:string;
    specialty:Specialty;
    messages: Message[] = [];
}