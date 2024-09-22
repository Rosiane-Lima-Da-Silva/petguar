import '@testing-library/react-native/extend-expect';
import { render } from '@testing-library/react-native';
import React from 'react';

import Index from '../../../src/telas/Index';
import App from '../../../App';

describe("Testes de Componentes", () => {

    test("Testar se a tela abre de forma independente", () => {
        render(<Index />);
    })
})

describe("Testes de Componentes", () => {

    test("Testar se a tela abre através de App", () => {
        render(<App/>);
    })

    test("Testar se o texto de Index apareceu", ()=>{
    render(<App />);
    expect(screen.getByText("BEM VINDO")).toBeOnTheScreen();
    })

})