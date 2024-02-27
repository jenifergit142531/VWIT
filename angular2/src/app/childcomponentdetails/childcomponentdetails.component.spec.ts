import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponentdetailsComponent } from './childcomponentdetails.component';

describe('ChildcomponentdetailsComponent', () => {
  let component: ChildcomponentdetailsComponent;
  let fixture: ComponentFixture<ChildcomponentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildcomponentdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildcomponentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
