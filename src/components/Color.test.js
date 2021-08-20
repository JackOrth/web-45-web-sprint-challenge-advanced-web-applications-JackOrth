import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    code: {hex: ""},
    color: "",
    id: null,
}
const completeColor = {
    code: {hex: "#dd9a99"},
    color: "bisque",
    id: 1,
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={completeColor}/>)
    const color = screen.getByText(/bisque/i)
    expect(color).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
    const mockDelete = jest.fn();
    const mockToggle = jest.fn();
    render(<Color color={blankColor} deleteColor={mockDelete} toggleEdit={mockToggle}/>)
    const deleteColor = screen.getByText(/x/i)
    userEvent.click(deleteColor)
    expect(mockDelete).toHaveBeenCalled()
    expect(mockToggle).toHaveBeenCalled()
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const mockSetEdit = jest.fn()
    const mockToggle = jest.fn()
    render(<Color color={blankColor} setEditColor={mockSetEdit} toggleEdit={mockToggle}/>)
    const colors = screen.getByTestId(/color/i)
    userEvent.click(colors)
    expect(mockSetEdit).toHaveBeenCalled()
    expect(mockToggle).toHaveBeenCalled()

});