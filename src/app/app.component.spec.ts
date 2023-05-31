import { TestBed } from '@angular/core/testing';
import { AppComponent } from '@app/app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [AppComponent] }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Repro App' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Repro App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const against = 'Hello World';
    expect(compiled.querySelector('span')?.textContent).toContain(against);
  });
});
