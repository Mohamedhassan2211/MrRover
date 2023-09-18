import Rover from "../NewRover"
import userEvent from '@testing-library/user-event'
import {render, screen } from '@testing-library/react'

test("Testing Rover MOve ",()=> {
    render (<Rover/>)
    expect(screen.getByText(/F/i)).toBeInDocument();
})
test("Testing move to forword ", async()=>{
    render(<Rover/>)
    await userEvent.click(screen.getByText(/F/i));
    await userEvent.click(screen.getByText(/RUN/i));
    
    

})
