/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoctailSearchComponent } from './coctail-search.component';

describe('CoctailSearchComponent', () => {
  let component: CoctailSearchComponent;
  let fixture: ComponentFixture<CoctailSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it(`should have default chosen Filter as 'Name'`, () => {
    const fixture = TestBed.createComponent(CoctailSearchComponent);
    const app = fixture.componentInstance;
    expect(app.chosenFilter).toEqual('Name');
  });

  it(`should have default filter value as 'margarita'`, () => {
    const fixture = TestBed.createComponent(CoctailSearchComponent);
    const app = fixture.componentInstance;
    expect(app.filterValue).toEqual('margarita');
  });
});
