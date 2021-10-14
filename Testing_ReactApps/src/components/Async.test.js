import { render } from "@testing-library/react";
import Async from "./Async";

describe('Async Component', () => {
    test('tendrs post if req succeeds ', async() => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json : async () => [{id: 'p1', title: 'First Post'}],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    }); 
});
