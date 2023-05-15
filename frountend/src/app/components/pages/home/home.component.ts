import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodservicesService } from 'src/app/services/foodservices.service';
import { Food } from 'src/app/shared/modeles/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   foods:Food[]=[];

  constructor(private FoodService:FoodservicesService , ActivatedRoute:ActivatedRoute) {



  ActivatedRoute.params.subscribe((params)=>
  {
    if(params['searchTerm'])
    this.foods=this.FoodService.getAllFoodBySearchTerm(params.searchTerm);

    else if(params.tag)
    this.foods=this.FoodService.getAllFoodByTagName(params.tag);

    else
    this.foods=FoodService.getAll();
  });

    // this.foods=FoodService.getAll();

   }

  ngOnInit(): void {
  }





}
