import { MessageKey } from "src/app/entities/types/entities.type";
import { IPerson } from "../persons/persons.interface";

export interface IModalRequest {
    dialogStatus: boolean;
    modalFormValue: IPerson
}

export interface IActionPerson {
    action: string;
    person: IPerson;
}

export interface IActionModalClose {
    dialogStatus: boolean;
    modalFormValue: IPerson;
}

export interface IMessage {
    key: MessageKey;
    prefix: string;
    value: string;
}