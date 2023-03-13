import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{LocalStorageService} from 'src/app/local-storage.service'

@Component({
  selector: 'app-userview',
  templateUrl: './userview.page.html',
  styleUrls: ['./userview.page.scss'],
})

export class UserviewPage implements OnInit {

  userlist :any =[];
  userData: any=[];
  getdata:any;
  holder:any={}
  id:any;
  constructor(
    public  localStorageService :   LocalStorageService,
    private actRoute:ActivatedRoute
  ) { 
this.id=this.actRoute.snapshot.paramMap.get('id');
console.log(this.id);
  }
 
//  Get data in local storge & view data
  ngOnInit() {

  this.userlist = JSON.parse(this.localStorageService.getData('userList'));
   this.holder=this.userlist[this.id]
    console.log("string",this.userlist[this.id])
  }

  // viewData(index){
  // this.userlist.slice(index, 1,2);
  // console.log(this.userlist);
    

}

