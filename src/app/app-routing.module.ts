import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { ResultComponent } from './result/result.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'vision', component:VisionComponent },
  { path: 'course', component:CoursesComponent },
  { path: 'intro', component:IntroComponent },
  { path: 'result', component:ResultComponent },
  { path: 'mobileapp', component:MobileappComponent },
  { path: 'contact', component:ContactusComponent },
  { path: 'about', component:AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
