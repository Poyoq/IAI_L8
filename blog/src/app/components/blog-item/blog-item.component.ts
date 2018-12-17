import { Component, Input, OnInit } from '@angular/core';

@Input() image: string;
@Input() text: string;

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
