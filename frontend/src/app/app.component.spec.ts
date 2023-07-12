import {fireEvent, render, screen} from '@testing-library/angular';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BddWorkshopService} from "./services/bdd-workshop.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {
  let spyService = jest.spyOn(BddWorkshopService.prototype, 'getStates');

  it('should create the app', async () => {
    await render(AppComponent);

    expect(screen.getByText('Rocket Ship')).toBeTruthy();
  });

  it('should display the field required error for first name when touched and empty', async () => {
    await render(AppComponent, {imports: [ReactiveFormsModule, HttpClientTestingModule], providers: [{provide: BddWorkshopService, useClass: BddWorkshopService}]});

    fireEvent.blur(screen.getByLabelText('First Name'));

    expect(screen.getByText('Field is required')).toBeTruthy();
  });
});
