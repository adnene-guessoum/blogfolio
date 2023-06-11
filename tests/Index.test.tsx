/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import IndexPage from '../pages/index';
import '@testing-library/jest-dom/extend-expect';

describe('IndexPage', () => {
  it('should render the heading', () => {
    render(<IndexPage />);

    expect(screen.getByTestId('accueil')).toBeInTheDocument();
    expect(screen.getByTestId('index-title')).toHaveTextContent(
      'Bienvenue Sur Mon Blogfolio !'
    );
    expect(screen.getByTestId('bio-section')).toBeInTheDocument();
  });
});
