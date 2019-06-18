import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ModalController } from '@ionic/angular';
import { ModalRegisterPage } from '../modal-register/modal-register.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  barChart : any;
  lineChart: any;
  pieChart: any;
  doughnutChart : any;

  colorGreen : string = 'rgb(0, 244, 97)';
  colorPink : string = 'rgb(255,128,237)';
  colorYellow : string = 'rgb(255, 207, 0)';

  monthOfTheYear: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agost', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor(public modalController: ModalController) {}

  async presentModal() {
    debugger
    const modal = await this.modalController.create({
      component: ModalRegisterPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    setTimeout(() => {
      this.barChart = this.getBarChart();
      this.lineChart = this.getLineChart();
      this.pieChart = this.getPieChart();
      this.doughnutChart = this.getDoughnutChart();
    }, 150);
  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType
    })
  }

  getBarChart(){
    const data = {
      labels: ['Homens', 'Mulheres', 'Outros'],
      datasets: [{
        label: 'Numero de sexo',
        data: [12, 23, 15, 90, 5],
        backgroundColor: [
          this.colorGreen,
          this.colorPink,
          this.colorYellow
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

  getLineChart(){
    const data = {
      labels: this.monthOfTheYear,
      datasets: [{
        label: 'Homens',
        fill: false,
        lineTension: 0.1,
        backgroundColor: this.colorGreen,
        borderColor: this.colorGreen,
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[20, 15, 98, 4],
        scanGaps: false,
      }, {
        label: 'Mulheres',
        fill: false,
        lineTension: 0.1,
        backgroundColor: this.colorPink,
        borderColor: this.colorPink,
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[29, 135, 13, 70],
        scanGaps: false,
      }, {
        label: 'Outros',
        fill: false,
        lineTension: 0.1,
        backgroundColor: this.colorYellow,
        borderColor: this.colorYellow,
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[29, 135, 13, 70],
        scanGaps: false,
      }
    ]
    }

    return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  }

  getPieChart(){
    const data = {
      labels: ['Vermelho', 'Azul', 'Amarelo'],
      datasets: [{
        data: [300, 75, 224],
        backgroundColor: [this.colorGreen,
          this.colorPink,
          this.colorYellow]
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  getDoughnutChart(){
    const data = {
      labels: ['Homens', 'Mulheres', 'Outros'],
      datasets: [{
        label: 'Teste Chart',
        data: [12, 65, 32],
        backgroundColor: [
          this.colorGreen,
          this.colorPink,
          this.colorYellow
        ]
      }]
    }

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }

}
