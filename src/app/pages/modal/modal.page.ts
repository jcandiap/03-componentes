import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalController:ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Jose',
        pais: 'Chile'
      }
    });
    await modal.present();

    //const { data } = await modal.onDidDismiss(); <-- la informacion aparece al momento de que termina la animacion del cambio de modal
    const { data } = await modal.onWillDismiss(); //<-- la informacion aparece en el momento en donde se preciona el boton ignorando si la animacion se completo o no
    //console.log('onDidDismiss');
    console.log('onWillDismiss');

    console.log(data);
  }

}
