import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the MedicalRecordDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical-record-detail',
  templateUrl: 'medical-record-detail.html',
})
export class MedicalRecordDetailPage {
  title: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder
  ) {
    this.title = navParams.get('title');
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalRecordDetailPage');
  }
  tab: string = "form";
  data: any;
  recordForm: FormGroup;
  antigenic: any[] = [];
  functional: any[] = [];
  date: Date[] = [];
  chartOption: any;
  nowTime: string;
  antigenicColorList: string[] = [];
  functionalColorList: string[] = [];
  antigenicAreaTop: any[] = [];
  antigenicAreaBottom: any[] = [];
  functionalAreaTop: any[] = [];
  functionalAreaBottom: any[] = [];

  createForm() {
    this.nowTime = new Date().toISOString();
    this.recordForm = this.fb.group({
      antigenic: ['', Validators.required],
      functional: ['', Validators.required],
      date: [this.nowTime, Validators.required]
    });
  }

  checkRange(data: number, min: number, max: number): boolean {
    if ((data >= min) && (data <= max))
      return true;
    return false;
  }

  ngOnInit() {
    this.data = [
      {
        "id": 0,
        "antigenic": 22,
        "functional": 80,
        "date": "2011-12-02T17:57:28.556094Z"
      },
      {
        "id": 1,
        "antigenic": 30,
        "functional": 120,
        "date": "2011-12-03T17:57:28.556094Z"
      },
      {
        "id": 2,
        "antigenic": 40,
        "functional": 100,
        "date": "2011-12-04T17:57:28.556094Z"
      },
      {
        "id": 3,
        "antigenic": 24,
        "functional": 130,
        "date": "2011-12-05T17:57:28.556094Z"
      },
      {
        "id": 4,
        "antigenic": 18,
        "functional": 70,
        "date": "2011-12-06T02:08:21.199Z"
      },
      {
        "id": 5,
        "antigenic": 26,
        "functional": 150,
        "date": "2011-12-07T02:14:16.365Z"
      },
      {
        "id": 6,
        "antigenic": 36,
        "functional": 110,
        "date": "2011-12-08T02:30:10.570Z"
      },
      {
        "id": 7,
        "antigenic": 45,
        "functional": 132,
        "date": "2011-12-09T02:52:17.718Z"
      },
      {
        "id": 8,
        "antigenic": 35,
        "functional": 123,
        "date": "2011-12-10T01:38:47.452Z"
      }]

    for (let d of this.data) {
      this.date.push(new Date(d.date));
      this.antigenic.push([new Date(d.date), d.antigenic]);
      this.antigenicAreaTop.push([new Date(d.date), 39]);
      this.antigenicAreaBottom.push([new Date(d.date), 22]);
      this.functionalAreaTop.push([new Date(d.date), 130]);
      this.functionalAreaBottom.push([new Date(d.date), 80]);
      this.functional.push([new Date(d.date), d.functional]);

      if (this.checkRange(d.antigenic, 22, 39)) {
        this.antigenicColorList.push("#1A8D1A");
      } else {
        this.antigenicColorList.push("#ff0000");
      }
      if (this.checkRange(d.functional, 80, 130)) {
        this.functionalColorList.push("#1A8D1A");
      } else {
        this.functionalColorList.push("#ff0000");
      }
    }
    console.log(this.date);
    let self = this;
    this.chartOption = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Antigenic', 'Functional']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'time',
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            show: false
          }
        }
      ],
      series: [
        {
          type: 'line',
          symbol: 'none',
          itemStyle: {
            color: '#A5A5A5',
            normal: {
              lineStyle: {
                color: '#ffffff',
                opacity: 1
              },
              areaStyle: { type: 'default' }
            }
          },
          data: this.functionalAreaTop
        },
        {
          type: 'line',
          symbol: 'none',
          itemStyle: {
            color: '#A5A5A5',
            normal: {
              lineStyle: {
                color: '#ffffff',
                opacity: 1
              },
              areaStyle: {
                color: '#ffffff',
                opacity: 1
              }
            }
          },
          data: this.functionalAreaBottom
        },
        {
          type: 'line',
          symbol: 'none',
          itemStyle: {
            color: '#A5A5A5',
            normal: {
              lineStyle: {
                color: '#ffffff',
                opacity: 1
              },
              areaStyle: { type: 'default' }
            }
          },
          data: this.antigenicAreaTop
        },
        {
          type: 'line',
          symbol: 'none',
          itemStyle: {
            color: '#A5A5A5',
            normal: {
              lineStyle: {
                color: '#ffffff',
                opacity: 1
              },
              areaStyle: {
                color: '#ffffff',
                opacity: 1
              }
            }
          },
          data: this.antigenicAreaBottom
        },
        {
          name: 'Antigenic',
          type: 'line',
          data: this.antigenic,
          itemStyle: {
            normal: {

              color: function (params) {
                console.log(params);
                // build a color map as your need.
                return self.antigenicColorList[params.dataIndex]
              }
            }
          }
        },
        {
          name: 'Functional',
          type: 'line',
          data: this.functional,
          itemStyle: {
            normal: {
              color: function (params) {
                // build a color map as your need.
                return self.functionalColorList[params.dataIndex]
              }
            }
          }
        },
      ]
    }
  }

  doRefresh(refresher) {
    /*
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.trackerService.getAlcohols()
        .subscribe(alcohols => {
          alcohols.sort((a: Alcohol, b: Alcohol) => {
            var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
            var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
            if (shortdate_a > shortdate_b) {
              return -1;
            }
            if (shortdate_a < shortdate_b) {
              return 1;
            }
          });
          this.alcohols = alcohols;
        }, errmess => this.errMess = <any>errmess);
      console.log('Async operation has ended');
      refresher.complete();
    }, 1500);
    */
  }

  onSubmit() {
    /*
    this.alcohol = this.alcoholForm.value;
    this.trackerService.addAlcohol(this.alcohol);
    this.createForm();
    */
  }
}
