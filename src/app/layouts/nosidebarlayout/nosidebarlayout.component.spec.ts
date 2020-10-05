import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosidebarlayoutComponent } from './nosidebarlayout.component';

describe('NosidebarlayoutComponent', () => {
  let component: NosidebarlayoutComponent;
  let fixture: ComponentFixture<NosidebarlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosidebarlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosidebarlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
