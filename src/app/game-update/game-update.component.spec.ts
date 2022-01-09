import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameUpdateComponent } from './game-update.component';

describe('GameUpdateComponent', () => {
  let component: GameUpdateComponent;
  let fixture: ComponentFixture<GameUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
