import { Injectable } from '@angular/core';
import { Album } from '@/interfaces/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  getAlbums(): Album[] {
    return [
      {
        id: 1,
        name: 'The Midnight Vibes',
        coverImage: 'https://via.placeholder.com/300x300?text=Midnight+Vibes',
        songs: ['Intro', 'Moonlight Drive', 'After Hours', 'Stars Align'],
      },
      {
        id: 2,
        name: 'Neon Dreams',
        coverImage: 'https://via.placeholder.com/300x300?text=Neon+Dreams',
        songs: ['Start Again', 'Fluorescent Skies', 'Pulse', 'Slow Burn'],
      },
      {
        id: 3,
        name: 'Retro Echoes',
        coverImage: 'https://via.placeholder.com/300x300?text=Retro+Echoes',
        songs: ['Flashback', 'Echo Chamber', 'Time Loop', 'Finale'],
      },
    ];
  }
}
