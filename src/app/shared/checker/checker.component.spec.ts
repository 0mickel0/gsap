import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BoolToArrowComponent } from './checker.component';

describe('BoolToArrowComponent', () => {
  let component: BoolToArrowComponent;
  let fixture: ComponentFixture<BoolToArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoolToArrowComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolToArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
