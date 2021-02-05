import { Component, OnInit } from '@angular/core';
// importare la nuova classe
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
   // il nostro raccoglitore di ricette sara' un matrice
   recipes: Recipe[] = [
    //  inserire i dettagli del model.ts della ricetta (mew recipe)
     new Recipe('Test Recipe', 'prova test', 'https://primochef.it/wp-content/uploads/2016/10/SH_gnocchi_gorgonzola_speck-640x350.jpg.webp')
     new Recipe('Test Recipe', 'prova test', 'https://primochef.it/wp-content/uploads/2016/10/SH_gnocchi_gorgonzola_speck-640x350.jpg.webp')

    ];


  constructor() { }

  ngOnInit(): void {
  }

}
