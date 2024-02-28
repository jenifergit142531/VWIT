import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers',()=>
  {
     expect(service.add(3,5)).toEqual(8);
  })
  it('should subtract two numbers',()=>
  {
    expect(service.substract(8,5)).toEqual(3);
  })
  it('should multiply two numbers',()=>
  {
    expect(service.multiply(8,5)).toEqual(40);
  })
  it('should divide two numbers',()=>
  {
    expect(service.divide(8,2)).toEqual(4);
  })

  it('should throw error when dividing by zero',()=>
  {
    expect(()=>service.divide(10,0)).toThrowError("Divide by zero not allowed");
  })
 
});
