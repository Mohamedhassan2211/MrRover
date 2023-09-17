import Rover from "../NewRover.js"
// import { Renderer } from "react-test-renderer";
import { render, screen, userEvent} from '@testing-library/react';


it("Test Rover moves forward", () => {
    const component = render (<Rover dimensions={[8, 8]} start={[0, 0]} />);
    // const instance = component.root;
    // component.findByText("button", { text: "F" }).props.onClick();


    const searchBtn = screen.getByRole("button", { name: "F" });
   expect(searchBtn).not.toBeDisabled();
   userEvent.click(searchBtn);

    expect(Rover.state.history[0].position[1]).toEqual(1);
});

