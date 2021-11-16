import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  @Input() title:string | undefined;
  @Input() SubTitle: string | undefined
  @Input() content: string | undefined
  @Input() image: string | undefined
  @Input() buttonTitle: string | undefined
  @Input() buttonHlink: string | undefined
  @Input() imgheading:string | undefined;
  @Input() imgDetail:string | undefined;

  coverImage: string = 'assets/images/afavicon60.png'
  constructor() { }

  ngOnInit(): void {
  }

}
