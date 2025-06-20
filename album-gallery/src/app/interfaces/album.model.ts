export interface Album {
  id: number;
  name: string;
  coverImage: string;
  songs: string[];
}

export interface AlbumWithDetails extends Album {
  artist: string;
  releaseDate: string;
  genre: string;
  description: string;
}