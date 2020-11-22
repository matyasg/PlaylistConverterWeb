import { TestBed } from '@angular/core/testing';

import { SpotifyAuthInterceptor } from './spotify-auth.interceptor';

describe('SpotifyAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SpotifyAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SpotifyAuthInterceptor = TestBed.inject(SpotifyAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
