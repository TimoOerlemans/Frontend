import { render, screen, cleanup } from '@testing-library/react';
import Content from '../../pages/Content.js';
import '@testing-library/jest-dom';

test("should render home", () => {
    render(<Content/>);
    const welkom = screen.getByTestId('welkom');
    expect(welkom).toBeInTheDocument("hier is mijn app");

});