import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.page.html',
  styleUrls: ['./modal-register.page.scss'],
})
export class ModalRegisterPage implements OnInit {

  public form = [
    { val: 'Masculino', isChecked: true },
    { val: 'Feminino', isChecked: false },
    { val: 'Outro', isChecked: false }
  ];

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

}
