import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {BddWorkshopService} from "./bdd-workshop.service";

describe('Bdd Workshop Service', () => {
  let service: BddWorkshopService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.get(BddWorkshopService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should make call to retrieve content', () => {
    const expected = ['string1', 'string2']
    service.getStates().subscribe(x => {
      expect(x).toEqual(expected)
    });

    const request = httpMock.expectOne('http://localhost:8080/states');
    expect(request.request.method).toBe('GET');
    request.flush(expected);
  });
});
