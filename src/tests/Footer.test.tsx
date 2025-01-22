import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../app/modules/Footer';

describe('Footer Component', () => {
  it('deve renderizar o texto de copyright', () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/© 2025 FitTech | Todos os direitos reservados./i);
    expect(copyrightText).toBeInTheDocument();
  });
});
