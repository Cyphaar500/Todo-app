import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn()

describe('AddInput test', () => {
    describe('Addinput events', () => {
        it('renders input by placeholder text', async () => {
            render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
            );
            const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
            expect(inputElement).toBeInTheDocument();
        });
    
        it('renders input on change of value', async () => {
            render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
            );
            const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
            fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } });
            expect(inputElement.value).toBe('Go grocery shopping');
        });
    })

    describe('button events', () => {
        it('renders button element by role', async () => {
            render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
            );
            const buttonElement = screen.getByRole('button', {name: /Add/i});
            expect(buttonElement).toBeInTheDocument();
        });
    
        it('renders input element to be empty on click of the button', async () => {
            render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
            );
            const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
            const buttonElement = screen.getByRole('button', {name: /Add/i});
            fireEvent.change(inputElement, { target: { value: 'Go grocery shopping' } });
            fireEvent.click(buttonElement);
            expect(inputElement.value).toBe('');
        });
    })
});