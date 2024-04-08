import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

test('Renders the Header heading', async() => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByTestId('reserve-button');
    fireEvent.click(reserveButton);

    await waitFor(() => {
            const bookingForm = screen.getByTestId('booking-form');
            expect(bookingForm).toBeInTheDocument();
        });
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByTestId('submit-button');
  fireEvent.click(reserveButton);

})