import React from 'react'; // Adicione esta linha
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../app/modules/Header';

describe('Header Component', () => {
  it('deve renderizar o logo e o link Inscreva-se', () => {
    render(<Header />);

 
    

    // Testa se o link Inscreva-se foi renderizado
    const navLink = screen.getByRole('link', { name: /Inscreva-se/i });
    expect(navLink).toBeInTheDocument();
  });
});
