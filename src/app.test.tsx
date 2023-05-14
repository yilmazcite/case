import { render, screen, fireEvent } from '@testing-library/react';
import Input from './components/UI/Input';

test('handles input value change', () => {
    const handleChange = jest.fn();
  
    render(
      <Input
        placeholder="Enter a value"
        value=""
        onChange={handleChange}
      />
    );
  
    const inputElement = screen.getByPlaceholderText('Enter a value');
  
    fireEvent.change(inputElement, { target: { value: 'Test value' } });
  
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });