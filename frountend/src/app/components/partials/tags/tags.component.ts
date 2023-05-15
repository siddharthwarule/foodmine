import { Component, OnInit } from '@angular/core';
import { FoodservicesService } from 'src/app/services/foodservices.service';
import { Tag } from 'src/app/shared/modeles/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {


  tags?:Tag[]=[];

  constructor(private foodservice:FoodservicesService) {

   this.tags=foodservice.getAllTags();

   }



  ngOnInit(): void {
  }

}
