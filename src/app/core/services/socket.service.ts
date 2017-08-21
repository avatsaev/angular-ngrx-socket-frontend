import { Injectable } from '@angular/core';
import * as socketio from 'socket.io-client';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SocketService {

  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = socketio(environment.socket.baseUrl, environment.socket.config);
  }

  join(room: string) {
    this.socket.emit('join', {room});
  }

  emit(event: string, data?: any) {
    this.socket.emit(event, data);
  }

  listen(event: string): Observable<any> {
    return new Observable( observer => {
      this.socket.on(event, data => observer.next(data));
      return () => this.socket.off(event);
    });
  }

}
