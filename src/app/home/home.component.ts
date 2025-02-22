import {Component, inject} from '@angular/core';
import {HighlightDirective} from '../highlight.directive';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {Movie} from '../model/movie.model';
import {MoviesService} from '../services/movies.service';
import {FavoritesService} from '../services/favorites.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HighlightDirective,
        MovieItemComponent,
        AsyncPipe
    ],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss'
})
export class HomeComponent {
  protected movies$: Observable<Movie[]> = inject(MoviesService).getMovies();
  protected favoritesService = inject(FavoritesService);
  private moviesService = inject(MoviesService);
  filter(title: string, year: string) {
    this.movies$ = this.moviesService.filterMovieList(title, year);
 }
}
