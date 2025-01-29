import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
        },
        {
          titulo: 'Avengers: Endgame',
          fechaLanzamiento: new Date(),
          precio: 300.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
        },
      ];

      this.peliculasProximosEstrenos = [
        {
          titulo: 'Deadpool & Wolverine',
          fechaLanzamiento: new Date(),
          precio: 500.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
        },
        {
          titulo: 'Fast and furious',
          fechaLanzamiento: new Date(),
          precio: 400.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Furious_7_poster.jpg/220px-Furious_7_poster.jpg',
        },
        {
          titulo: 'The Dark Knight',
          fechaLanzamiento: new Date(),
          precio: 700.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
        },
        {
          titulo: 'Transformers',
          fechaLanzamiento: new Date(),
          precio: 800.99,
          poster:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Transformers_One_Official_Poster.jpg/220px-Transformers_One_Official_Poster.jpg',
        },
      ];
    }, 100);
  }

  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];
}
