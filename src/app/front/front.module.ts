import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcedmicComponent } from './acedmic/acedmic.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SecurityComponent } from './security/security.component';
import { SliderFooterComponent } from './slider-footer/slider-footer.component';
import { StudentTcComponent } from './student-tc/student-tc.component';
import { ThreeSixtyComponent } from './three-sixty/three-sixty.component';
import { EnsuringHolisticComponent } from './home/ensuring-holistic/ensuring-holistic.component';
import { LeftButtonsComponent } from './home/left-buttons/left-buttons.component';
import { DpsEdgeComponent } from './home/dps-edge/dps-edge.component';
import { OurCampusComponent } from './home/our-campus/our-campus.component';
import { StudentAchiverComponent } from './home/student-achiver/student-achiver.component';
import { BannerComponent } from './home/banner/banner.component';
import { CampusComponent } from './home/our-campus/campus/campus.component';
import { FacilityComponent } from './home/our-campus/facility/facility.component';
import { ActivitiesComponent } from './home/our-campus/activities/activities.component';
import { SteamsComponent } from './home/our-campus/steams/steams.component';
import { StageofstudyComponent } from './home/our-campus/stageofstudy/stageofstudy.component';
import { ScrollDirective } from './scroll.directive';
import { NurseryPreFirstComponent } from './admission/nursery-pre-first/nursery-pre-first.component';
import { SecondFifthComponent } from './admission/second-fifth/second-fifth.component';
import { SixthTenthComponent } from './admission/sixth-tenth/sixth-tenth.component';
import { ElevenTwelthComponent } from './admission/eleven-twelth/eleven-twelth.component';
import { FaqComponent } from './admission/faq/faq.component';
import { OurPartnerComponent } from './home/our-campus/our-partner/our-partner.component';
import { CurrentSessionComponent } from './current-session/current-session.component';
import { BooklistComponent } from './home/our-campus/booklist/booklist.component';








  const routes:Routes = [     
      {path:'', redirectTo:'/home', pathMatch:'full'},
      {path:'', component:FrontComponent, children:[
          {path:'home', component:HomeComponent},
          {path:'about-us', component:AboutUsComponent},
          {path:'contact-us', component:ContactUsComponent},
          {path:'student-tc', component:StudentTcComponent},
          {path:'admission', component:AdmissionComponent},
          {path:'gallery', component:GalleryComponent},
          {path:'acedmic', component:AcedmicComponent},
          {path:'security', component:SecurityComponent},
          {path:'fscs', component:CurrentSessionComponent},
      ]}
     
   ]



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)

  ],
  declarations: [ScrollDirective, FrontComponent,AboutUsComponent, AcedmicComponent, AdmissionComponent, ContactUsComponent, FooterComponent, GalleryComponent, HeaderComponent, HomeComponent, NavComponent, SecurityComponent, SliderFooterComponent, StudentTcComponent, ThreeSixtyComponent, EnsuringHolisticComponent, LeftButtonsComponent, DpsEdgeComponent, OurCampusComponent, StudentAchiverComponent, BannerComponent, CampusComponent, FacilityComponent, ActivitiesComponent, SteamsComponent, StageofstudyComponent, NurseryPreFirstComponent, SecondFifthComponent, SixthTenthComponent, ElevenTwelthComponent, FaqComponent, OurPartnerComponent, CurrentSessionComponent, BooklistComponent]
})
export class FrontModule { }
