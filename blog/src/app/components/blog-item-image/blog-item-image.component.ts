import { Component,Input, OnInit } from '@angular/core';

@Input() image: string;
@Component({
  selector: 'app-blog-item-image',
  templateUrl: './blog-item-image.component.html',
  styleUrls: ['./blog-item-image.component.css']
})
export class BlogItemImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
