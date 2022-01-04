/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoctailDetailComponent } from './coctail-detail.component';

describe('CoctailDetailComponent', () => {
  let component: CoctailDetailComponent;
  let fixture: ComponentFixture<CoctailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
