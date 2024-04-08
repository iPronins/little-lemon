import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/BookingForm';

// Mock props with minimal necessary setup
const mockProps = {
    submitForm: jest.fn(),
    dispatch: jest.fn(),
    availableTimes: { availableTimes: ['10:00', '11:00'] }
};

describe('BookingForm', () => {
    beforeEach(() => {
        // Clear all mocks before each test
        jest.clearAllMocks();
    });

    test('submits form when all fields are filled', async () => {
        render(<BookingForm {...mockProps} />);

        await userEvent.type(screen.getByLabelText(/Choose Date:/i), '2024-04-15');
        await userEvent.selectOptions(screen.getByLabelText(/Choose Time:/i), '10:00');
        await userEvent.type(screen.getByLabelText(/Number of Guests:/i), '4');
        await userEvent.selectOptions(screen.getByLabelText(/Occasion:/i), 'Birthday');

        await userEvent.click(screen.getByTestId('submit-button'));

        expect(mockProps.submitForm).toHaveBeenCalled();
    });

    test('form submits only if all fields are filled', async () => {
        render(<BookingForm {...mockProps} />);

        await userEvent.type(screen.getByLabelText(/Choose Date:/i), '2024-04-15');
        await userEvent.type(screen.getByLabelText(/Number of Guests:/i), '4');

        await userEvent.click(screen.getByTestId('submit-button'));

        // Check if submitForm was not called due to incomplete form
        expect(mockProps.submitForm).not.toHaveBeenCalled();
    });
});
