export enum PingStatus {
    Critical = "CRITICAL",
    Ok = "OK",
}

export interface Ping {
    host:   string;
    state:  number;
    status: PingStatus;
    output: string;
    ok:     boolean;
    folder: string;  
}

export interface WAN {
    name:     string;
    iface:    string;
    state:    number;
    status:   PingStatus;
    output:   string;
    in_mbps:  number;
    out_mbps: number;
}

export interface Checkmk {
    ping:      Ping[];
    ping_down: Ping[];
    wan:       WAN[];
    problems:  any[]; 
    down:      number; 
}