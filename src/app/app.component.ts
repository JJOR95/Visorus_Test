import { Component, OnInit } from '@angular/core';
import { TareaService } from './services/tarea.service';
import { Categoria } from './models/producto';
import { Articulo } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  categoriaArray: Categoria[]=[];
  articuloArray: Articulo[]=[];

  constructor(private tareaService: TareaService){}

  ngOnInit() {
    this.tareaService.getCat().subscribe(data => this.categoriaArray = data);
    this.tareaService.getCat().subscribe(data => this.categoriaN = data);
    this.tareaService.getArt().subscribe(data => this.articuloArray = data);
    this.tareaService.getArt().subscribe(data => this.articuloN = data);
  }

  categoriaN: Categoria[]=[];
  articuloN: Articulo[]=[];
  
  saveNew(){
    const articuloNew = this.articuloArray.concat(this.articuloN)
    console.log(articuloNew);
    this.tareaService.addNewArticle(this.articuloN).subscribe(articulo => this.articuloArray.concat(articulo))
  }
  

}
