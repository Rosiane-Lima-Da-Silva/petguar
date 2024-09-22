import '@testing-library/react-native/extend-expect';
import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { Itens } from '../../../src/telas/Itens';
import App from '../../../App';

describe("Testes de Componentes - Tela de Menu", () => {
    test("Testar se a tela Menu abre através do App", () => {
        render(<App />);
        expect(screen.getByText('Menu')).toBeOnTheScreen();
    });

    test("Testar se os itens do menu estão presentes", () => {
        render(<Itens />);
        expect(screen.getByText('Comida')).toBeOnTheScreen();
        expect(screen.getByText('Água')).toBeOnTheScreen();
        expect(screen.getByText('Monitoramento')).toBeOnTheScreen();
        expect(screen.getByText('Porta')).toBeOnTheScreen();
    });
});