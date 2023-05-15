import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

      searchTerm='';

  constructor(activatedRoute:ActivatedRoute,private router:Router) {

    activatedRoute.params.subscribe((params)=>{

      if(params.searchTerm)
      this.searchTerm=params.searchTerm;


    });

   }

  ngOnInit(): void {
  }

  search(term:String):void{

    if(term){

       this.router.navigateByUrl('/search/'+term);

      // this.router.navigate();
    }

  }

}
