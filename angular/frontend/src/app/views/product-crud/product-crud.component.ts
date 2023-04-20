import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) {  // Uma vez que o angular perceber que dentro do construtor do componente "ProductCrudComponent" eu declarei que eu vou precisar de um Router ele vai ser capaz de fornecer um Router sem necessidade de eu me preocupar em que ir instanciar um router. Quem é responsavel em criar essa classe é o angular

  }

  ngOnInit(): void {
    
  }

  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }

}
