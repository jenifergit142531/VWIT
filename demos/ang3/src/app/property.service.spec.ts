import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';

describe('PropertyService', () => {
  let service: PropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a property',()=>
  {
    const property={id:4,pname:'ddd',ptype:'coliving',price:12000};
    service.addProperty(property);
    expect(service.getProperties()).toContain(property);
  })

  it('should delete a property',()=>
  {
    const property={id:4,pname:'ddd',ptype:'coliving',price:12000};
    service.addProperty(property);
    service.DeleteProperty(4);
    expect(service.getProperties()).not.toContain(property);
  })

  it('should get property by id',()=>
  {
    const prop1={id:4,pname:'ddd',ptype:'coliving',price:12000};
    const prop2={id:5,pname:'eee',ptype:'coliving',price:12000};
    service.addProperty(prop1);
    service.addProperty(prop2);
    expect(service.getProprtyById(4)).toEqual(prop1);
  })



});
