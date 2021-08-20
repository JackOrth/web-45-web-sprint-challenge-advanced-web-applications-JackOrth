import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

const emptyList = []
const filledList = [
    {
        code: {hex:"#CCFFFF"},
        color: "Teal",
        id: 1,
    },
    {
        code: {hex:"#3300ff"},
        color: "Blue",
        id: 2, 
    }

]
test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={emptyList}/>)
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={filledList}/>)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const {rerender} = render(
        <ColorList colors={filledList} editing={true}/>
    )
    const editForm = screen.getByText(/edit color/i)
    expect(editForm).toBeInTheDocument()
    const colorLabel = screen.getByText(/color name/i)
    expect(colorLabel).toBeInTheDocument()
    const hexLabel = screen.getByText(/hex code/i)
    expect(hexLabel).toBeInTheDocument()

    rerender(
        <ColorList colors={filledList} editing={false}/>
    )
    expect(editForm).not.toBeInTheDocument()
    expect(colorLabel).not.toBeInTheDocument()
    expect(hexLabel).not.toBeInTheDocument()
});
