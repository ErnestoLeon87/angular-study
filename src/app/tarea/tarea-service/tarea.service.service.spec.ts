import { TestBed } from '@angular/core/testing';

import { Tarea.ServiceService } from './tarea.service.service';

describe('Tarea.ServiceService', () => {
  let service: Tarea.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tarea.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
