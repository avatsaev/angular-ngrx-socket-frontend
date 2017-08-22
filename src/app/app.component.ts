import {Component, OnInit} from '@angular/core';
import {SocketService} from './core/services/socket.service';
import * as fromRoot from './core/store';
import * as uiActions from './core/store/actions/ui.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`

    .connected {
      color: green;

    }

    .connected:after {
      content: 'CONNECTED';
    }

    .disconnected {
      color: red;
    }

    .disconnected:after {
      content: 'DISONNECTED';
    }
  
  `]
})
export class AppComponent implements OnInit {

  socketStatus$: Observable<string>;

  constructor(private socket: SocketService, private store: Store<fromRoot.State>) {}

  ngOnInit() {

    this.socketStatus$ = this.store
        .select(fromRoot.getSocketStatus)
        .map(connected => connected ? 'connected' : 'disconnected');

    this.socket.connected$
        .map(connected => new uiActions.SetSocketConnected(connected))
        .subscribe(this.store);
  }


}
