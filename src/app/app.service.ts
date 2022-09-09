import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
