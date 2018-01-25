import {Component, ViewChild, ViewChildren} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CityProvider} from "../../../providers/cityprovider";
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the SetoutSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setout-search',
  templateUrl: 'setout-search.html',
  providers: [CityProvider]
})
export class SetoutSearchPage {
  indexes: Array<string> = [];
  cities: Array<any> = [];
  filterCities: Array<any> = [];

  @ViewChildren('cityGroup') cityGroup;
  @ViewChild(Content) content: Content;


  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController, public appService: AppService, public cityProvider: CityProvider) {
    this.indexes = cityProvider.getIndexes();
    this.cities = cityProvider.getGroupCities();
  }


  ionViewDidLoad() {
    this.appService.loadingShow();
    let $this = this;
    function alphabetMove(e, move) {
      let pPositionY = e.changedTouches[0].clientY;
      let currentItem, targetItem;
      let d = document;
      currentItem = d.elementFromPoint(d.body.clientWidth - 1, pPositionY);
      if (!currentItem || currentItem.className.indexOf('index-bar') < 0) return;
      targetItem = document.getElementById(currentItem.innerText);
      document.getElementById('indexs-title').style.display = 'block';
      document.getElementById('indexs-title').innerText = currentItem.innerText;
      if (move) {
        let index = $this.indexes.join('').indexOf(currentItem.innerText);
        $this.content.scrollTo(0, $this.cityGroup._results[index].nativeElement.offsetTop, 300);
      }
    }
    let indexsBar = document.getElementById('indexs-bar');
    indexsBar.addEventListener('touchstart', function (e) {
      alphabetMove(e, false);
    });
    indexsBar.addEventListener('touchmove', e => {
      alphabetMove(e, false);
    });
    indexsBar.addEventListener('touchend', function (e) {
      alphabetMove(e, true);
      document.getElementById('indexs-title').style.display = 'none';
    });
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  citySelect(city) {
    console.log(JSON.stringify(city));
    window.localStorage["cache_currentCity"] = JSON.stringify(city);
  }

  getItems(e) {
    let newVal = e.target.value;
    if (newVal) {
      this.filterCities = this.cityProvider.filterCities(newVal);
    }
    else {
      this.filterCities = [];
    }
    this.content.scrollToTop(500);
  }

  //关闭
  dismiss() {
    this.viewCtrl.dismiss();
  }
  //搜索
  filterItems(ev: any) {
/*    let val = ev.target.value;*/
  }

  cityList = [
    {name:'北京'},
    {name:'长沙'},
    {name:'成都'},
    {name:'重庆'},
    {name:'广州'},
    {name:'杭州'},
    {name:'昆明'},
    {name:'南京'},
    {name:'三亚'},
    {name:'上海'},
    {name:'深圳'},
    {name:'天津'},
    {name:'武汉'},
    {name:'厦门'},
    {name:'西安'},
  ];

}
