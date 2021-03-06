/* tslint:disable:no-unused-variable */
import { ThemeDirective } from './theme.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('Directive: Theme1', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    fixture = await TestBed.configureTestingModule({
      declarations: [AppComponent, ThemeDirective]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('Debe crear una DIV con el backgroundColor #333 y el texto color Snow', () => {
    const element: HTMLDivElement = fixture.debugElement.query(By.directive(ThemeDirective)).nativeElement
    expect(element.style.backgroundColor).toEqual('rgb(51, 51, 51)');
    expect(element.style.color).toEqual('snow');
  });

});
