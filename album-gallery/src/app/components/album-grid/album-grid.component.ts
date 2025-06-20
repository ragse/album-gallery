import { Component, inject } from '@angular/core';
import { AlbumService } from '@/services/album.service.service';
import { Album } from '@/interfaces/album.model';
import { AlbumDialogComponent } from '../album-dialog/album-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-grid',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './album-grid.component.html',
  styleUrl: './album-grid.component.scss',
})
export class AlbumGridComponent {
  private readonly albumService = inject(AlbumService);
  private readonly dialog = inject(MatDialog);

  albums: Album[] = this.albumService.getAlbums();
  of: any;

  openAlbum(album: Album) {
    this.dialog.open(AlbumDialogComponent, {
      width: '600px',
      data: album,
    });
  }
}
