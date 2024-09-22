import '@testing-library/react-native/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Cadastro } from '../../../src/telas/Cadastro';
import App from '../../../App';

describe("Testes de Componentes - Tela de Cadastro", () => {
    test("Testar se a tela Cadastro abre de forma independente", () => {
        render(<Cadastro />);
    });

    test("Testar se a tela Cadastro abre através do App", () => {
        render(<App />);
        expect(screen.getByPlaceholderText('Nome')).toBeOnTheScreen();
    });

    test("Testar se o botão de Cadastro está funcionando", () => {
        render(<Cadastro />);
        fireEvent.press(screen.getByText('Cadastrar'));
        expect(screen.getByText('Cadastrar')).toBeTruthy();
    });
});