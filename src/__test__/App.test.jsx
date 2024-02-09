import { describe, it, expect, beforeAll } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    beforeAll(() => {
        render(<App />);
    });

    it('should be rendered correctly', () => {
        const app = screen.getByTestId('app');
        expect(app).toBeInTheDocument();
    });
});
