import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';
import ColorList from './ColorList'
const colors = [
    {
        code: {hex:"#CCFFFF"},
        color: "Teal",
        id: 1,
    },
    {
        code: {hex:"#3300FF"},
        color: "Blue",
        id: 2
    },
]
test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    const mockColors = jest.fn(()=> {
        return(colors)
    })
    render(<ColorList colors={mockColors()}/>)
    await waitFor(()=>{
    const colorsTest = screen.queryAllByTestId(/color/i);
    expect(colorsTest).toHaveLength(2);
    })
});