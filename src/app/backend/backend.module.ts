import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { BackendComponent } from './backend.component'
import { uploadGalleryImagesComponent } from './upload-gallery-images/mupload-gallery-images.component'
import { uploadStudentTcComponent } from './upload-student-tc/mupload-student-tc.component'
import { viewGalleryImagesComponent } from './view-gallery-images/mview-gallery-images.component'
import { viewStudentTcComponent } from './view-student-tc/mview-student-tc.component'
import { ManageGalleryComponent } from './manage-gallery/manage-gallery.component'
import { TcFilterPipe } from './tc-filter.pipe'
import { AuthGuard } from './auth.guard';
import { MarqueeComponent } from './marquee/marquee.component'
import { CKEditorModule } from 'ng2-ckeditor';
import { MessagesComponent } from './messages/messages.component';

// admin
const routes:Routes = [     
  {path:'',  component:LoginComponent },      
        {path:'dashboard',  component:BackendComponent, canActivate:[AuthGuard],  children:[
        {path:'manage-gallery',  component:ManageGalleryComponent},
        {path:'view-all-gallery-images', component:viewGalleryImagesComponent},
        {path:'upload-gallery-images', component:uploadGalleryImagesComponent},
        {path:'view-all-student-tc', component:viewStudentTcComponent},
        {path:'upload-student-tc', component:uploadStudentTcComponent},
        {path:'marquee', component:MarqueeComponent},
        {path:'message', component:MessagesComponent}
      ]}
]
@NgModule({
  imports: [
    CommonModule,FormsModule,CKEditorModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, ManageGalleryComponent, BackendComponent, viewGalleryImagesComponent, uploadGalleryImagesComponent, viewStudentTcComponent, uploadStudentTcComponent, TcFilterPipe, MarqueeComponent, MessagesComponent],
  providers: [AuthGuard]
})
export class BackendModule { }




