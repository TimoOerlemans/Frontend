import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';

test('should render header component', () => {
    render(<Header/>);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
})
