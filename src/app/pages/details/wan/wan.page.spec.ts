import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WanPage } from './wan.page';

describe('WanPage', () => {
  let component: WanPage;
  let fixture: ComponentFixture<WanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
