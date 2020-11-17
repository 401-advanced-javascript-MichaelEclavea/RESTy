import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import App from '../components/App.jsx';


describe('Testing our app components', () =>{
    it('should display h1 RESTy', async () => {
        render(<App />);
        screen.findAllByText('RESTy');
        expect('RESTy').toStrictEqual('RESTy');

    });
})