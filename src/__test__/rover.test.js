import Rover from "../NewRover.js"
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

test("Testing forward button appears or not ", () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />)
    expect(screen.getByText(/Forward/i)).toBeInTheDocument();
})
test("Testing search button appears or not ", () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />)
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
})
test("Testing move to forword ", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const roverElement = await screen.findByTestId('8');
    await userEvent.click(screen.getByText(/Forward/i));
    await userEvent.click(screen.getByText(/RUN/i));

    expect(roverElement).toHaveStyle({ background: `url("up.png")` });


})
test("Testing move to Back", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const roverElement = await screen.findByTestId('56');
    await userEvent.click(screen.getByText(/Back/i));
    await userEvent.click(screen.getByText(/RUN/i));

    expect(roverElement).toHaveStyle({ background: `url("up.png")` });
})

test("Testing move to Right", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const roverElement = await screen.findByTestId('0');
    await userEvent.click(screen.getByText(/right/i));
    await userEvent.click(screen.getByText(/RUN/i));

    expect(roverElement).toHaveStyle({ background: `url("right.png")` });
})
test("Testing move to Left", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const roverElement = await screen.findByTestId('0');
    await userEvent.click(screen.getByText(/left/i));
    await userEvent.click(screen.getByText(/RUN/i));

    expect(roverElement).toHaveStyle({ background: `url("left.png")` });
})

test('Adding value to input field', async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const inputElement = await screen.findByTestId('goalInput');
    fireEvent.change(inputElement, { target: { value: 'Test Value' } });

    expect(inputElement.value).toBe('Test Value');
});

test("Adding Goal using input fieLd", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const inputElement = await screen.findByTestId('goalInput');
    fireEvent.change(inputElement, { target: { value: `5 0` } });

    const inputElement2 = await screen.findByTestId('goalBtn');
    await userEvent.click(inputElement2);


    const roverElement = await screen.findByTestId('5');
    await userEvent.click(screen.getByText(/Search/i));
    expect(roverElement).toHaveStyle({ background: `url("point1.png")` });
})
test("Adding Obstacle using input fieLd", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const inputElement = await screen.findByTestId('obstacleInput');
    fireEvent.change(inputElement, { target: { value: `5 0` } });

    const inputElement2 = await screen.findByTestId('obstacleBtn');
    await userEvent.click(inputElement2);


    const roverElement = await screen.findByTestId('5');
    await userEvent.click(screen.getByText(/Search/i));
    expect(roverElement).toHaveStyle({ background: `url("obstacle.png")` });
})

test("Testing Search a goal", async () => {
    render(<Rover dimensions={[8, 8]} start={[0, 0]} />);
    const inputElement = await screen.findByTestId('goalInput');
    fireEvent.change(inputElement, { target: { value: `5 0` } });

    const inputElement2 = await screen.findByTestId('goalBtn');
    await userEvent.click(inputElement2);


    const roverElement = await screen.findByTestId('4');
    await userEvent.click(screen.getByText(/Search/i));
    expect(roverElement).toHaveStyle({ background: `url("highlight.png")` });
})