import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CommonThingService } from '../../services/common-thing.service';

@Component({
	selector: 'app-mupload-student-tc',
	templateUrl: './mupload-student-tc.component.html',
	styleUrls: ['./mupload-student-tc.component.css']
})
export class uploadStudentTcComponent implements OnInit {

	constructor(private HttpClient:HttpClient, private CommonThingService:CommonThingService) { }

	ngOnInit() {}
   
   	private ip = this.CommonThingService.getIp();

	
	pw = null;
	@ViewChild('f') uploadTcForm:NgForm;
	@ViewChild('fileInput') fileInput:ElementRef;

	selectedFile: File;

	certificateTc =  {
		"name": null,
		"admission_no": null,
		"certificate_description": null,
		"image":null
	}
	
	fileHaveSelected(event){
		this.selectedFile = event.target.files[0];
	}


  // overlay
  
  uploadOverlay:boolean = false;
  Errorr:boolean = false;
  success:boolean = false;  

	uploadTc(){
		this.uploadOverlay = true;
		
		let t = localStorage.getItem("token");      
		let reqHeader = new HttpHeaders({"Authorization":t});
		const 	uploadData = new FormData();
				uploadData.append('name', this.certificateTc.name);
				uploadData.append('admission_no', this.certificateTc.admission_no);
				uploadData.append('certificate_description', this.certificateTc.certificate_description);
				uploadData.append('image', this.selectedFile, this.selectedFile.name);

		this.HttpClient.post<any>(this.ip+'v1/students', uploadData, {headers:reqHeader}).subscribe((v)=>{
			if(v.status){	
				this.success = true; 
				this.uploadTcForm.reset();
				this.fileInput.nativeElement.value = "";
				setTimeout(()=>{               
				  this.uploadOverlay = false;
				  this.success = false;
				}, 2000);
			}
		}, 

		err=>{
			if(err.status == 422){				
				alert('Duplicate Transaction');
				this.uploadOverlay = false;
				this.Errorr = false;		
			}else{
				this.Errorr = true;
				setTimeout(()=>{               
				  this.uploadOverlay = false;
				  this.Errorr = false;
				}, 2000);
			}	
			
		})		
	}
}









