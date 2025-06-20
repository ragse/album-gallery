import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Album } from '@/interfaces/album.model';

@Component({
  selector: 'app-album-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './album-dialog.component.html',
})
export class AlbumDialogComponent {
  newSong = '';

  constructor(
    public dialogRef: MatDialogRef<AlbumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public album: Album
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  addSong(): void {
    if (this.newSong.trim()) {
      this.album.songs.push(this.newSong.trim());
      this.newSong = '';
    }
  }

  removeSong(index: number): void {
    this.album.songs.splice(index, 1);
  }
}
