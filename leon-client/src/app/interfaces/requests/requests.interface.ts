import { IPerson } from "../persons/persons.interface";

export interface IRequestPersons {
    data: IPerson[];
    limit: number;
}