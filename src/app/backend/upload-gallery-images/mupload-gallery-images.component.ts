import { Component, OnInit, ViewChild, ElementRef, Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonThingService } from '../../services/common-thing.service';


@Component({
  selector: 'app-mupload-gallery-images',
  templateUrl: './mupload-gallery-images.component.html',
  styleUrls: ['./mupload-gallery-images.component.css']
})
export class uploadGalleryImagesComponent implements OnInit {

  constructor(private HttpClient: HttpClient, private CommonThingService: CommonThingService) { }
  @ViewChild('r') uploadImage: NgForm;
  @ViewChild('fileInput') fileInput: ElementRef;


  private ip = this.CommonThingService.getIp();
  ngOnInit() {
    this.getCategory();
    this.getEvents();
  }

  categoryArr = [];
  eventsArr = [];

  // getCategories
  getCategory() {
    this.HttpClient.get<any>(this.ip + 'v1/category').subscribe(item => {
      this.categoryArr = item.result.categories;
      // console.log(this.categoryArr);
    }, err => { })
  }


  // get events
  getEvents() {
    this.HttpClient.get<any>(this.ip + 'v1/events').subscribe(item => {
      this.eventsArr = item.result.events;
    }, err => { })
  }

  AddCategory: boolean = false;
  AddEvent: boolean = false;
  addEvent() {
    this.AddEvent = true;
  }
  addCategory() {
    this.AddCategory = true;
  }

  saveCategory() {
    this.AddCategory = false;
  }
  saveEvent() {
    this.AddEvent = false;
  }

  selectedFile: File[] = [];
  uploadGalleryImage = { "category_id": null, "event_id": null, "image": null }

  // myFiles:string [] = [];

  fileHaveSelected(event) {
    let filearrlength = event.target.files.length;
    console.log(event.target.files.length);
    if (filearrlength <= 30) {
      // this.selectedFile = event.target.files[0];
      this.isdisabled = false;
      for (var i = 0; i < event.target.files.length; i++) {
        console.log(event.target.files[i]);
        this.selectedFile.push(event.target.files[i]);
        // this.isdisabled = false;
      }
    } else {
      this.CommonThingService.msgFun('More than 30 images selected', true, 'error');
      //console.log('more than 30');
      this.isdisabled = true;
    }
  }

  // overlay

  uploadOverlay: boolean = false;
  Errorr: boolean = false;
  success: boolean = false;
  isdisabled = false;
  upload() {
    this.uploadOverlay = true;
    let t = localStorage.getItem("token");
    let reqHeader = new HttpHeaders({ "Authorization": t });
    const uploadData = new FormData();
    for (var i = 0; i < this.selectedFile.length; i++) {
      uploadData.append('image', this.selectedFile[i]);

    }

    uploadData.append('category_id', this.uploadGalleryImage.category_id);
    uploadData.append('event_id', this.uploadGalleryImage.event_id);
    // uploadData.append('image', this.selectedFile, this.selectedFile.name);       
    this.HttpClient.post<any>(this.ip + 'v1/gallery', uploadData, { headers: reqHeader }).subscribe(v => {
      if (v.status) {
        //  this.msgFun(v.result.message, true, 'success')
        console.log(v);
        this.success = true;
        // this.uploadImage.reset();
        this.fileInput.nativeElement.value = "";
        setTimeout(() => {
          this.uploadOverlay = false;
          this.success = false;
        }, 2000);
      }
      else {
        console.log("fun");
        //alert(v.result.error);
        this.CommonThingService.msgFun(v.result.error, true, 'error');
        // setTimeout(() => {
        this.uploadOverlay = false;
        //  this.Errorr = false;
        //  }, 2000) 
      }
    },

      err => {
        // console.log(err.error.result);
        // this.Errorr = true;
        // setTimeout(() => {

        //   this.uploadOverlay = false;
        //   this.Errorr = false;
        // }, 2000);
        this.CommonThingService.msgFun(err.error.result.error, true, 'error');
        //  setTimeout(() => { this.msgObj.flag = false 
        //  this.uploadOverlay = false;
        // this.Errorr = false;
        // }, 4000) 

      }
    )
  }
}
