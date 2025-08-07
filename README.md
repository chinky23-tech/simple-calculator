# simple-calculator


A web-based calculator with basic and advanced functions, built using HTML, CSS, and JavaScript.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division
- Square root and percentage calculations
- Memory functions: M+, M-, MR, MC
- Clear and backspace buttons
- Responsive design for desktop and mobile

## How to Use

1.**Visit the [Live Calculator](https://chinky23-tech.github.io/simple-calculator/)** in your web browser.
2. **Enter numbers and operations** using the on-screen buttons.
3. **Advanced functions:**
   - `√`: Calculates the square root of the current value.
   - `%`: Converts the current value to a percentage.
   - `M+`: Adds the current value to memory.
   - `M-`: Subtracts the current value from memory.
   - `MR`: Recalls the value stored in memory.
   - `MC`: Clears the memory.
4. **Clear (`C`)** resets the display to zero.
5. **Backspace (`⌫`)** deletes the last character.

## Difficulties Faced

- **Input Validation:** Ensuring that invalid expressions (like consecutive operators) are handled gracefully.
- **Memory Functions:** Implementing memory operations so they work intuitively and persist until cleared.
- **Responsive Layout:** Making the calculator look good and function well on both desktop and mobile devices.
- **Operator Handling:** Preventing multiple operators from being entered in sequence and replacing them correctly.
- **Error Handling:** Displaying user-friendly error messages for invalid operations ( division by zero, square root of negative numbers).

