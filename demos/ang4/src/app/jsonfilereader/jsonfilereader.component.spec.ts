import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfilereaderComponent } from './jsonfilereader.component';

describe('JsonfilereaderComponent', () => {
  let component: JsonfilereaderComponent;
  let fixture: ComponentFixture<JsonfilereaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonfilereaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonfilereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
