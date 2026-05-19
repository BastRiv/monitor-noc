import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interfaces';
import { Ping, WAN } from '../interfaces/checkmk-interface';

@Pipe({ 
    name: 'okCount',
    standalone: false
 })
export class OkCountPipe implements PipeTransform {
  transform(items: (Item | Ping)[]): number {
    return items.filter(i => i.ok).length;
  }
}

@Pipe({ 
    name: 'downCount',
    standalone: false})
export class DownCountPipe implements PipeTransform {
  transform(items: (Item | Ping)[]): number {
    return items.filter(i => !i.ok).length;
  }
}

@Pipe({ name: 'okWan', standalone: false })
export class OkWanPipe implements PipeTransform {
  transform(items: WAN[]): number {
    return items.filter(i => i.status === 'OK').length;
  }
}