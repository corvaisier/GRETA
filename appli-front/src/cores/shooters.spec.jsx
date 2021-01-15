import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react'

import Shooter from './shooters'

describe('<Shooters />', () => {
    it('Should display error message for negative number', async () => {
        render(<Shooter />);
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "-3" }} );
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        });
        screen.getByText("Entrez s'il vous plaît une valeur intégrale comprise entre 0 ett 99")
        expect(document.body).toMatchSnapshot();
    })

})