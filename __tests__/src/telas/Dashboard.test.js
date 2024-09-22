import '@testing-library/react-native/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react-native';
import React from 'react';
import { Dashboard } from '../../../src/telas/Dashboard';
import App from '../../../App';

describe("Testes de Componentes - Tela de Dashboard", () => {
    test("Testar se a tela Dashboard abre de forma independente", () => {
        render(<Dashboard />);
    });

    test("Testar se a tela Dashboard abre através do App", () => {
        render(<App />);
        expect(screen.getByText('Nome Atual:')).toBeOnTheScreen();
    });

    test("Testar se o botão de Atualizar Nome está funcionando", () => {
        render(<Dashboard />);
        fireEvent.press(screen.getByText('Atualizar Nome'));
        expect(screen.getByText('Atualizar Nome')).toBeTruthy();
    });

    test("Testar se o botão de Deletar Conta está funcionando", () => {
        render(<Dashboard />);
        fireEvent.press(screen.getByText('Deletar Conta'));
        expect(screen.getByText('Deletar Conta')).toBeTruthy();
    });
});