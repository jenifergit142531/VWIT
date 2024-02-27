import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcomponentListComponent } from './parentcomponent-list.component';

describe('ParentcomponentListComponent', () => {
  let component: ParentcomponentListComponent;
  let fixture: ComponentFixture<ParentcomponentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentcomponentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentcomponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
