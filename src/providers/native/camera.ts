import {Injectable} from '@angular/core';
import {Camera} from '@ionic-native/camera';
import {ActionSheetController} from "ionic-angular";


/**
 * 调用相机和图库插件
 */
@Injectable()
export class CameraProvider {

  constructor(private camera: Camera, public actionSheetCtrl: ActionSheetController) {
  }

  /**
   * 上传图片ActionSheet
   */
  cameraActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '上传图片',
      buttons: [

        {
          text: '拍照',
          handler: () => {

              this.getPictureFromCamera();

          }
        },
        {
          text: '从相册选择',
          handler: () => {
              this.getPictureFromPhotoLibrary();

          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  getPictureFromCamera() {
    return this.getImage(this.camera.PictureSourceType.CAMERA, true);
  }

  getPictureFromPhotoLibrary() {
    return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
  }

  /**
   * 该方法采用可选参数使其更加可定制 获取图片
   * @param pictureSourceType
   * @param {boolean} crop
   * @param {number} quality
   * @param {boolean} allowEdit
   * @param {boolean} saveToAlbum
   * @returns {Promise<any>}
   */
  getImage(pictureSourceType, crop = false, quality = 50, allowEdit = true, saveToAlbum = true) {
    const options = {
      quality,
      allowEdit,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: pictureSourceType,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: saveToAlbum
    };

    // If set to crop, restricts the image to a square of 600 by 600
    if (crop) {
      options['targetWidth'] = 600;
      options['targetHeight'] = 600;
    }

    return this.camera.getPicture(options).then(imageData => {
      const base64Image = 'data:image/png;base64,' + imageData;
      return base64Image;
    }, error => {
      console.log('CAMERA ERROR -> ' + JSON.stringify(error));
    });
  }
}
