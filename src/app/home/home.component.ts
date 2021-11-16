import { Component, OnInit } from '@angular/core';
import { Application_Constants } from '../shared/constant/application-constant';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  foundation11thTileTitle: string =   Application_Constants.foundation_11th_Title;
  foundation11thTileSubTitle: string = Application_Constants.foundation_11th_SubTitle;
  foundation11thTileContent: string =  Application_Constants.foundation_11th_Content;
  foundation11thTileImage: string = Application_Constants.foundation_11th_Image;
  tileButtonTitle: string = Application_Constants.tileButtonTitle;
  tileButtonLink: string = Application_Constants.tileButtonLink;
  foundation12thTileTitle: string =   Application_Constants.foundation_12th_Title;
  foundation12thTileSubTitle: string = Application_Constants.foundation_12th_SubTitle;
  foundation12thTileContent: string =  Application_Constants.foundation_12th_Content;
  foundation12thTileImage: string = Application_Constants.foundation_12th_Image;
  neetTargetTileTitle: string =   Application_Constants.neetTarget_Title;
  neetTargetTileSubTitle: string = Application_Constants.neetTarget_SubTitle;
  neetTargetTileContent: string =  Application_Constants.neetTarget_Content;
  neetTargetTileImage: string = Application_Constants.neetTarget_Image;
  iitTargetTileTitle: string =   Application_Constants.iitTarget_Title;
  iitTargetTileSubTitle: string = Application_Constants.iitTarget_SubTitle;
  iitTargetTileContent: string =  Application_Constants.iitTarget_Content;
  iitTargetTileImage: string = Application_Constants.iitTarget_Image;
  tileButtonTitleEnquiry: string = Application_Constants.tileButtonTitleEnquiry
  imgheading11:string = "Batch Started : Join Quickly"
  imgDetail11:string="The sooner the better"
  imgheading12:string = "Batch Started : Join Quickly"
  imgDetail12:string="The sooner the better"
  imgheadingNeet:string = "Batch will start Shortly : Get Enquiry"
  imgDetailNeet:string="Limited number of seats"
  imgheadingIIT:string = "Batch will start Shortly : Get Enquiry"
  imgDetailIIT:string="Limited number of seats"
  images: any[] | undefined;
  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.images= [];
    this.images.push('assets/images/neet2020.png');
    this.images.push('assets/images/citytopper.png');
    this.images.push('assets/images/neet2021.png');
  }

}
