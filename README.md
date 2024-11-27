# Mathematical Toolkit

A modern, responsive web application built with React and TypeScript that provides a comprehensive suite of mathematical tools and calculators.

## Features

- **Basic Mathematics**
  - Arithmetic Operations (Addition, Subtraction, Multiplication, Division)
  - Powers and Roots
  - Percentage Calculations
  - Modular Arithmetic

- **Statistics**
  - Mean, Median, Mode
  - Variance and Standard Deviation
  - Real-time calculations with multiple numbers

- **Advanced Features**
  - Real-time input validation
  - Error handling and boundary checks
  - Responsive design for all devices
  - Modern, user-friendly interface

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mathematical-toolkit.git
```

2. Navigate to the project directory:
```bash
cd mathematical-toolkit
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
mathematical-toolkit/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main application component
│   └── main.tsx          # Application entry point
├── public/                # Static assets
└── index.html            # HTML entry point
```

## Key Components

- **Calculator Card**: Reusable component for different calculators
- **Number Input**: Validated input component for numbers
- **Error Boundary**: Global error handling component
- **Navigation**: Responsive navigation component

## Error Handling

The application includes comprehensive error handling:
- Input validation for all numerical inputs
- Error boundaries for component-level error catching
- User-friendly error messages
- Edge case handling (e.g., division by zero)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

No License

## Acknowledgments

- Icons provided by Lucide React
- UI components inspired by Tailwind UI
- Mathematical functions based on standard mathematical libraries
