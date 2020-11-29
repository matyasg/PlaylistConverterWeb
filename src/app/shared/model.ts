export interface User {
  id: string;
  name: string;
  url: string;
}
export interface UserResponse {
  id: string;
  display_name: string;
  images: [{
    url: string
  }];
}
export interface PlaylistResponse {
  playlists: [[{
    attributes: []
  }]];
}
