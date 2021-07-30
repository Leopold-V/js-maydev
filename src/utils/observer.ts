import store from '../app/store';
import { getUserNotifications } from '../actions/notifications.actions';

export class NotifObserver {
  listObserver: string[] = [];

  constructor(listObserver: any) {
    this.listObserver = listObserver;
  }

  subscribe(userId: string) {
    this.listObserver.push(userId);
  }

  unsubscribe(userIndex: any) {
    this.listObserver.slice(1, userIndex);
  }

  onSubscribe() {
    setInterval(() => {
      for (let id of this.listObserver) {
        store.dispatch(getUserNotifications(id));
        console.log('hello');
      }
    }, 10000);
  }
}
