import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AppService} from "../../../providers/util/app.service";

/**
 * Generated class for the StoreChoosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-choose',
  templateUrl: 'store-choose.html',
})
export class StoreChoosePage {
  selectFlg:number = 1;

  placeList = [
    {index: 1, place: "附近网点",places:[{name:'成华区SM广场送车点',distance:'1.28km',address:'成华区二环路东二段29号'},{name:'汇融点',distance:'1.28km',address:'成都市成华区二环路北四段9号维也纳酒店大厅内部'},
      {name:'成都皇冠假日酒店送',distance:'1.28km',address:'锦江区总府街31号'}]},
    {index: 2, place: "机场/火车站",places:[{name:'成华区SM广场送车点',distance:'',address:'门店位置：成都市双流区航枢大道700号富园国际物流停车场内',jiesongji:'接送机位置：双流区双流国际机场T2航站楼地面停车场E4区域（T2到达5号门前行50米，C区）'},
      {name:'成都火车东站服务点',distance:'',address:'成都东站长途汽车站停车场内（客户出站向左往东广场方向步行150米上扶梯以后，右转往长途汽车）'},
      {name:'成都火车北站服务点',distance:'',address:'成都火车北站公交总站耳环路对面城市宾馆停车场'}]},
    {index: 3, place: "武侯区",places:[{name:'成华区SM广场送车点',distance:'',address:'成华区二环路东二段29号'},{name:'汇融点',distance:'',address:'成都市成华区二环路北四段9号维也纳酒店大厅内部'},
      {name:'成都皇冠假日酒店送',distance:'',address:'锦江区总府街31号'}]},
    {index: 4, place: "金牛区",places:[{name:'成华区SM广场送车点',distance:'',address:'成华区二环路东二段29号'},{name:'汇融点',distance:'',address:'成都市成华区二环路北四段9号维也纳酒店大厅内部'},
      {name:'成都皇冠假日酒店送',distance:'',address:'锦江区总府街31号'}]},
    {index: 5, place: "锦江区"},
    {index: 6, place: "成华区"},
    {index: 7, place: "青羊区"},
    {index: 8, place: "市中心区"},
    {index: 9, place: "郫县"},
    {index: 10, place: "高新区"},
    {index: 11, place: "双流县"},
    {index: 12, place: "新都区"},
    {index: 13, place: "温江区"},
    {index: 14, place: "龙泉驿区"},
    {index: 15, place: "青白江区"},
    {index: 16, place: "金堂县"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public appService: AppService,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.appService.loadingShow();
  }

  ionViewWillEnter(){
    this.appService.loadingHide();
  }

  //关闭
  dismiss() {
    this.viewCtrl.dismiss();
  }

  placeSelect(flg:number){
    this.selectFlg = flg;
  }

}
