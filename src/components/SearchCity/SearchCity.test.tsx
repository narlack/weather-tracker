import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchCity from './SearchCity';
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('SearchCity', () => {
  test('Search value should be passed to store', () => {
    render(<SearchCity />);

    act(()=> {
      userEvent.type(screen.getByTestId('sc-input'), 'City');
      userEvent.click(screen.getByTestId('sc-button'));
    })
    // TODO: validate sending search value

    expect(screen.getByTestId('sc-input')).toHaveDisplayValue('City');
  });


  test('Should call alert if provided empty value', () => {
    const alertMock = jest.spyOn(window, 'alert');
    alertMock.mockImplementation(() => {})
    render(<SearchCity />);

    act(()=> {
      userEvent.click(screen.getByTestId('sc-button'));
    })

    expect(alertMock).toBeCalled();
  });
});
