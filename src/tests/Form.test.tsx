// __tests__/Form.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../app/modules/Form';
import React from 'react';
describe('Form Component', () => {
  it('deve renderizar os campos de entrada e o botão de envio', () => {
    render(<Form />);

    // Testa se os campos de entrada estão presentes
    const nameInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/E-mail:/i);
    const submitButton = screen.getByRole('button', { name: /Enviar/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('deve permitir preencher os campos e enviar o formulário', () => {
    render(<Form />);

    const nameInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/E-mail:/i);
    const submitButton = screen.getByRole('button', { name: /Enviar/i });

    // Preenche os campos
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

    // Verifica os valores
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');

    // Envia o formulário
    fireEvent.click(submitButton);

    // Verifica a mensagem de sucesso ou erro
    const successMessage = screen.queryByText(/Cadastro realizado com sucesso!/i);
    expect(successMessage).toBeNull(); // Mocked API call does nothing
  });
});
