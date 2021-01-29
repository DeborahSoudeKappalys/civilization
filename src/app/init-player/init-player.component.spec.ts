import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPlayerComponent } from './init-player.component';

describe('InitPlayerComponent', () => {
  let component: InitPlayerComponent;
  let fixture: ComponentFixture<InitPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
