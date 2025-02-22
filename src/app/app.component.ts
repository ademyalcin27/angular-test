import { Component, Signal, inject } from '@angular/core';
import { Movie } from './model/movie.model';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesService } from './services/movies.service';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [MovieItemComponent, HighlightDirective],
})
export class AppComponent {
  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();
}
