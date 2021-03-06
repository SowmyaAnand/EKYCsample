import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { Chart } from "chart.js";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dchart',
  templateUrl: './dchart.page.html',
  styleUrls: ['./dchart.page.scss'],
})
export class DchartPage implements OnInit {
  private doughnutChart: Chart;
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  ngAfterViewInit()
  {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
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
