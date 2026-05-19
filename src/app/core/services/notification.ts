import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({ providedIn: 'root' })
export class Notification {

  private notifId = 1;

  async requestPermission() {
    const { display } = await LocalNotifications.requestPermissions();
    return display === 'granted';
  }

  async notify(title: string, body: string) {
    await LocalNotifications.schedule({
      notifications: [{
        id: this.notifId++,
        title,
        body,
        schedule: { at: new Date(Date.now() + 100) }
      }]
    });
  }
}