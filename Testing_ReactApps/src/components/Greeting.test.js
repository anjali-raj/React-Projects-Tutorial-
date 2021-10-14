import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe('Greeeting Component', () => {
    test('should render hello world as a test', () => {
        //Arrange
       render(<Greetings />);
    
       //Act
       //...nothing
    
       //Assert
       const helloWorldElement = screen.getByText('Hello World!');
       expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders asking all good', () => {
        //Arrange
        render(<Greetings />);

        //Act
        //...nothing

        //Assert
        const outputElement = screen.getByText('Hey there all good?', {exact : false});
        expect(outputElement).toBeInTheDocument();  
    });

    test('renders the assumption of the reply if the button was clicked', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        
        //Assert
        const outputElement = screen.getByText('I believe you doing great!', {exact : false});
        expect(outputElement).toBeInTheDocument();  
    });

    test('renders the first paragraph conditionally ', () => {
        //Arrange
        render(<Greetings />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        
        //Assert
        const outputElement = screen.queryByText('Hey there all good?', {exact : false});
        expect(outputElement).toBeNull();   
    }); 
});

