import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-lchart',
  templateUrl: './lchart.page.html',
  styleUrls: ['./lchart.page.scss'],
})
export class LchartPage implements OnInit {
  private lineChart: Chart;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  ngAfterViewInit()
  {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false
          }
        ]
      }
    });
  }

  Dchart()
  {
    this.navCtrl.navigateRoot('/dchart');
   
  }
  Lchart()
  {
    this.navCtrl.navigateRoot('/lchart');
   
  }
  Bchart()
  {
    this.navCtrl.navigateRoot('/dashboard');
  }

}
