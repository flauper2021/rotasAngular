import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navigated: Router
    ) {

    //http://localhost:4200/portfolio/1
    this.activeRoute.params.subscribe(
      res => (console.log(res))
    )

    //http://localhost:4200/portfolio/1?mane=felipe&token=123
    this.activeRoute.queryParams.subscribe(
      res => (console.log(res))
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    setInterval( () =>{
      this.navigated.navigate(['/'])}, 5000)

  }

}
