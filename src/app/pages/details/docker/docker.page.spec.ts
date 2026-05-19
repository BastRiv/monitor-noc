import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DockerPage } from './docker.page';

describe('DockerPage', () => {
  let component: DockerPage;
  let fixture: ComponentFixture<DockerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
