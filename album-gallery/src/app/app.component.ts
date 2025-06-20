import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlbumGridComponent } from './components/album-grid/album-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlbumGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'album-gallery';
}
