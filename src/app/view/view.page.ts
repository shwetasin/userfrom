import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import{LocalStorageService} from 'src/app/local-storage.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class ViewPage implements OnInit  {
 
  userlist :any =[];
  userData: any=[];
  getdata:any;
  handlerMessage: string;
  roleMessage: string;
  username: any;
  constructor(
  public  localStorageService :   LocalStorageService,
private alertCtrl:AlertController
  ) { 

    
  }

  ngOnInit():void {
    // <!-- ----------------------------Get data in LocalStorge----------------------------->
  
    if(this.localStorageService.getData('userList')){
      console.log("ok")
      this.userlist = JSON.parse(this.localStorageService.getData('userList'));
      console.log("string",this.userlist)
    }else{
      console.log("data not find")
    }
   

   // <!-------------------Clear Data On Local Storage-----------------------> 
  }
  async clearData(index){
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      message: "Are you sure want to delete this user?",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            this.alertCtrl.dismiss();
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.userlist.splice(index, 1);
            console.log(this.userlist);
            this.localStorageService.saveData("userList", this.userlist)
          },
        },
      ],
    });
    await alert.present();
  }
  
  userview(){
  console.log("ok")
  
}

   
  








 
  }

