import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'})
export class BddWorkshopService {
  constructor(private client: HttpClient) {}

  public getStates(): Observable<string[]> {
    return this.client.get<string[]>('http://localhost:8080/states');
  }
}
