import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe('Header test', () => {
    it('renders header component', () => {
        render(<Header title='title'/>);
        const headerElement = screen.getByText(/title/i);
        expect(headerElement).toBeInTheDocument();
    });

    it('renders the heading element by name', async () => {
        render(<Header title='title'/>);
        const headerElement = screen.getByRole('heading', {name: 'title'});
        expect(headerElement).toBeInTheDocument();
    });
});
