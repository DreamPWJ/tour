import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import ECharts from 'echarts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('chart') chart: ElementRef;
  @ViewChild(Slides) slides: Slides;
  backgroundImage = 'assets/imgs/main/home-bg.jpg';

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.initChart();
  }

  slideChanged() {
/*    let currentIndex = this.slides.getActiveIndex();*/
/*    console.log('Current index is', currentIndex);*/
  }

  initChart() {
    let element = this.chart.nativeElement;
    /*    element.style.width = (document.body.clientWidth - 16) + 'px';//设置容器宽度*/
    var data = [
      {name: '成都', value: 80},
      {name: '武汉', value: 50},

    ];
    var geoCoordMap = {
      '成都': [104.06, 30.67],
      '武汉': [114.31, 30.52],

    };

    var convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };
    let myChart = ECharts.init(element);
    myChart.setOption({
      backgroundColor: '',
      title: {
        text: '',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: [''],
        textStyle: {
          color: '#fff'
        }
      },
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        center: [115.97, 29.71],
        zoom:0.3,
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#323c48',
            borderColor: '#111'
          },
          emphasis: {
            areaColor: '#2a333d'
          }
        }
      },
      series: [
        {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: false
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#ddb926'
            }
          }
        },
        {
          name: 'Top 5',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: convertData(data.sort(function (a, b) {
            return b.value - a.value;
          }).slice(0, 6)),
          symbolSize: function (val) {
            return val[2] / 10;
          },
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#f4e925',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          zlevel: 1
        }
      ]
    });
  }

}
