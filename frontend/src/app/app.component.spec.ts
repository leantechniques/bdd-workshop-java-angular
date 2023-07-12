import {fireEvent, render, screen} from '@testing-library/angular';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";


describe('AppComponent', () => {

  it('should show "field is required" when user does not enter first name', async () => {
    await render(AppComponent, {imports: [ReactiveFormsModule]});

    fireEvent.blur(screen.getByLabelText('First Name'));

    expect(screen.getByText('Field is required')).toBeTruthy();
  });

  it('should not show error message when valid first name input', async () => {
    await render(AppComponent, {imports: [ReactiveFormsModule]});

    fireEvent.input(screen.getByLabelText('First Name'), {target: {value: 't'}});

    expect(screen.queryByText('First Name is required')).toBeFalsy();
  });

  it('should show "field is required" when user does not enter last name', async () => {
    await render(AppComponent, {imports: [ReactiveFormsModule]});

    fireEvent.blur(screen.getByLabelText('Last Name'));

    expect(screen.getByText('Last Name is required')).toBeTruthy();
  });

  it('should not show error message when valid last name input', async () => {
    await render(AppComponent, {imports: [ReactiveFormsModule]});

    fireEvent.input(screen.getByLabelText('Last Name'), {target: {value: 't'}});

    expect(screen.queryByText('Last Name is required')).toBeFalsy();
  });


});
