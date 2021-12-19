import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  addSuccess() {
    const message = '¡Se ha guardado con éxito!';
    const color = 'success';
    
    this.toastClose(message, color);
  }

  addFailed() {
    const message = '¡No se ha podido guardar';
    const color: string = 'danger';

    this.toastClose(message, color);
  }

  private async toastClose(msg: string, color: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color,
      buttons: [
        {
          icon: 'close',
          side: 'end'
        }
      ]
    });

    toast.present();
  }
}
