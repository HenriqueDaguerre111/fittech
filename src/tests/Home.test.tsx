// __tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import React from 'react';
describe('Home Page', () => {
  it('deve renderizar corretamente os componentes principais', () => {
    render(<Home />);

    // Testa se o canvas foi renderizado
    const canvas = screen.getByRole('presentation', { hidden: true });
    expect(canvas).toBeInTheDocument();

    

    // Testa o título principal
    const mainHeading = screen.getByText(/Alcance o Melhor de Si com o FitTech Tracker/i);
    expect(mainHeading).toBeInTheDocument();

    // Testa se o formulário está presente
    const nameInput = screen.getByLabelText(/Nome:/i);
    const emailInput = screen.getByLabelText(/E-mail:/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    // Testa o Footer
    const footerText = screen.getByText(/© 2025 FitTech/i);
    expect(footerText).toBeInTheDocument();
  });
});
