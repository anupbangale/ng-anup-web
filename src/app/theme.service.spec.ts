import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';


describe('ThemeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemesService = TestBed.get(ThemeService);
    expect(service).toBeTruthy();
  });
});
