import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild("barCanvas") barCanvas: ElementRef;

  private barChart: Chart;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {


  }

  ngAfterViewInit()
  {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 8, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          },
      


        ]
      },
      options: {
        
        scales: {
          yAxes: [
            {
              ticks: {
                // beginAtZero: true
                min: 3,
                max: 21,
                stepSize: 3,
                
              },
            
            }
          ]
        }
      }
    });
  }

  Dchart()
  {
    this.navCtrl.navigateRoot('/dchart')
   
  }
  Lchart()
  {
    this.navCtrl.navigateRoot('/lchart')
   
  }
  Bchart()
  {
    this.navCtrl.navigateRoot('/dashboard')
  }
}
