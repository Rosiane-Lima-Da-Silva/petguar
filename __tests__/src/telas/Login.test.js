import '@testing-library/react-native/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Login } from '../../../src/telas/Login';
import App from '../../../App';

describe("Testes de Componentes - Tela de Login", () => {
    test("Testar se a tela Login abre de forma independente", () => {
        render(<Login />);
    });

    test("Testar se a tela Login abre através do App", () => {
        render(<App />);
        expect(screen.getByPlaceholderText('E-mail')).toBeOnTheScreen();
    });

    test("Testar se o botão de Login está funcionando", () => {
        render(<Login />);
        fireEvent.press(screen.getByText('Logar'));
        expect(screen.getByText('Logar')).toBeTruthy();
    });
});