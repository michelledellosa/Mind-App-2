import { Injectable } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private network: Network) { }

  networkDisconnected() {
    // watch network for a disconnection
    let disconnectSubscription = this.network.onDisconnect().subscribe((response) => {
      console.log('network disconnected! = ', response);
    });

    // stop disconnect watch
    disconnectSubscription.unsubscribe();

  }

  networkConnected() {
    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe((response) => {
      console.log('network connected! = ', response);
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      /*setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);*/
    });

    // stop connect watch
    connectSubscription.unsubscribe();
  }
}
