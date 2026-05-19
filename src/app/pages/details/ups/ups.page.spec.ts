import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpsPage } from './ups.page';

describe('UpsPage', () => {
  let component: UpsPage;
  let fixture: ComponentFixture<UpsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
