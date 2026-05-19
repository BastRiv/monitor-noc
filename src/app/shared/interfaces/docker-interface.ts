export enum ItemStatus {
    Offline  = "OFFLINE",
    Online   = "OL",     
    Running  = "running",
}

export interface Item {
    name:    string;
    status:  ItemStatus;
    ok:      boolean;
    charge?: number;
}

export interface Docker {
    total:    number;
    down:     number;
    items:    Item[];
    problems: Item[];
}