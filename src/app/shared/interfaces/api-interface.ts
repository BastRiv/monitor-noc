import { Checkmk } from './checkmk-interface';
import { Docker } from './docker-interface';
import { Unify } from './unify-interface';

export interface ApiInterface {
    ts:      number;
    alerts:  number;
    checkmk: Checkmk;
    docker:  Docker;
    ups:     Docker;
    unifi:   Unify;
}










