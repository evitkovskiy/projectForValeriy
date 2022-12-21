import { IMessage } from "../../interfaces";

// trackBy Item
export function trackItem(index: number, item: any): any {
    return item ? item.id : null;
}

// Show Message
export function message(config: any): string {
    console.log(config);
    const {key, prefix, value} = config;
    switch(key) {
        case "succes":
            return `Person ${value} has been ${prefix}`;
        case "error":
            return `${value}`;
        default: 
            return '';
    }
}