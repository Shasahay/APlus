import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { MobileappComponent } from './mobileapp/mobileapp.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {SharedModule } from './shared/shared.module'
import {MatCardModule} from '@angular/material/card';
import { VisionComponent } from './vision/vision.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    CoursesComponent,
    MobileappComponent,
    VisionComponent,
    IntroComponent,
    ResultComponent
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    CoreModule,
    SharedModule,
    CarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
