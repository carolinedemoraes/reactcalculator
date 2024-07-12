# React + Vite

<h1>Overview </h1>

<p>This project is a simple calculator application built using React. The application allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also supports percentage calculations and the use of decimal points.</p>

<h1>Features</h1>

<p>Basic Arithmetic Operations: Users can perform addition, subtraction, multiplication, and division.</p>
<p>Percentage Calculation: The calculator can compute percentages based on the input values.</p>
<p>Decimal Support: Users can input and calculate with decimal numbers.</p>
<p>Clear Functions: The application includes functions to clear the current input (C) and to reset the entire calculator (CE).</p>

<h1>Key Components</h1>

<p>
State Management: Utilizes React's useState hook to manage the input numbers and operator.</p>
<p>Button Component: A reusable button component is used to handle various inputs and operations.</p>
<p>Display: Shows the current equation and the solution dynamically as the user inputs numbers and operators.</p>

<h1>How It Works</h1>
<p>
Number Input: Numbers are concatenated to the current input string.</p>
<p>Operator Handling: When an operator is selected, the first number is stored, and the operator is set.</p>
<p>Calculation: Upon pressing the equals (=) button, the application performs the calculation based on the stored numbers and operator.</p>
<p>Percentage Calculation: The percentage button computes the percentage of the first number relative to the second number.</p>
<p>Clear Functions: C clears the current input, while CE resets the entire state.</p>

<h1>Code Highlights</h1>
<p>
State Management: The application effectively uses state to manage the calculator's inputs and operations.</p>
<p>Conditional Logic: Conditional statements handle different arithmetic operations and edge cases, such as division by zero.</p>
<p>Component-Based Design: The use of a reusable button component promotes clean and maintainable code.
</p>

<h1>Conclusion</h1>
<p>This calculator application is a straightforward yet functional tool that demonstrates fundamental React concepts, including state management and component-based architecture. It provides users with a clean and intuitive interface to perform basic arithmetic operations.</p>
