import React from 'react'
import { render, fireEvent, screen, act } from '@testing-library/react'

import Shooter from './shooters'

describe('<Shooters />', () => {
    it('Should display error message for negative number', async () => {
        render(<Shooter />)
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "-3" }} );
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        })
        screen.getByText("Entrez s'il vous plaît une valeur intégrale comprise entre 0 et 99")
        expect(document.body).toMatchSnapshot();
    })
    it('Should display an error message for numbers greater than 99', async () => {
        render(<Shooter />)
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "101" }} )
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        })
        screen.getByText("Entrez s'il vous plaît une valeur intégrale comprise entre 0 et 99")
        expect(document.body).toMatchSnapshot();
    })
    it('Should display an error message for anything else than numbers', async () => {
        render(<Shooter />)
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "AHA!" }} )
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        })
        screen.getByText("Entrez s'il vous plaît une valeur intégrale comprise entre 0 et 99")
        expect(document.body).toMatchSnapshot();
    })
    it('Should display the song of zero shooters if value equal 0', async () => {
        render(<Shooter />)
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "0" }} )
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        })
        screen.getByText("Plus de shooters sans alcool sur le mur, plus de shooters sans alcool. Vas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.")
        expect(document.body).toMatchSnapshot();
    })
    it('Should display the song of zero shooters if value equal 1', async () => {
        render(<Shooter />)
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "1" }} )
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        })
        screen.getByText("1 shooter sans alcool sur le mur, 1 shooter sans alcool. Bois en un et au suivant ! plus de shooters sans alcool sur le mur.")
        expect(document.body).toMatchSnapshot();
    })
    it('Should display the song of zero shooters if value equal 2', async () => {
        render(<Shooter />)
        fireEvent.change(document.querySelector('.form-control'), { target: {value: "2" }} )
        await act(async () => {
            fireEvent.click(document.querySelectorAll('input')[1])
        })
        screen.getByText("2 shooters sans alcool sur le mur, 2 shooters sans alcool. Bois en un et au suivant! 1 shooter sans alcool sur le mur.")
        expect(document.body).toMatchSnapshot();
    })
})