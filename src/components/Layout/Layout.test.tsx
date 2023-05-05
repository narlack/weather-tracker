import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  test('Should pass content', () => {
    render(
      <Layout>
        <div data-testid="l-children">Should be inside of layout</div>
      </Layout>
    );
    const linkElement = screen.getByTestId('l-children');
    expect(linkElement).toBeVisible();
  });
})
