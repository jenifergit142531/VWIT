import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../calculator.service';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  

  beforeEach(async () => {

    
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports:[FormsModule],
      providers:[{provide:CalculatorService}]
    })
    .compileComponents();

   
    
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add method',()=>
  {
    component.a=3;
    component.b=5;
    component.operator='add';
    component.calculate();
    expect(component.result).toEqual(8);
  })
  it('divide method',()=>
  {
    component.a=10;
    component.b=5;
    component.operator='divide';
    component.calculate();
    expect(component.result).toEqual(2);
  })
  it('subtract method',()=>
  {
    component.a=5;
    component.b=5;
    component.operator='subtract';
    component.calculate();
    expect(component.result).toEqual(0);
  })
  it('Multiply method',()=>
  {
    component.a=3;
    component.b=5;
    component.operator='multiply';
    component.calculate();
    expect(component.result).toEqual(15);
  })
});
