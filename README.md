# Unit Converter

A simple web-based Unit Converter built using Node.js, Express.js, and EJS.  
The application allows users to convert values between different units of length, weight, and temperature.

## Project URL

https://roadmap.sh/projects/unit-converter

This project was built as part of the [roadmap.sh Unit Converter](https://roadmap.sh/projects/unit-converter) backend project.

## Features

- Convert between different length units
- Convert between different weight units
- Convert between different temperature units
- Select the unit to convert from and to
- Display the converted result on the same webpage
- Simple server-side form handling
- No database required

## Supported Units

### Length

- Millimeter (mm)
- Centimeter (cm)
- Meter (m)
- Kilometer (km)
- Inch (in)
- Foot (ft)
- Yard (yd)
- Mile (mi)

### Weight

- Milligram (mg)
- Gram (g)
- Kilogram (kg)
- Ounce (oz)
- Pound (lb)

### Temperature

- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)

## Technologies Used

- Node.js
- Express.js
- EJS
- HTML
- CSS
- JavaScript

## Project Structure

```text
backend/
├── server.js
├── package.json
├── package-lock.json
└── src/
    ├── app.js
    ├── models/
    │   ├── lengthModel.js
    │   ├── weightModel.js
    │   ├── temperatureModel.js
    │   └── unit.models.js
    ├── public/
    │   └── style.css
    └── views/
        └── converter.ejs
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Tanishdete333/unit-converter.git
```

Navigate to the backend directory:

```bash
cd unit-converter/backend
```

Install the dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
node server.js
```

Then open the following URL in your browser:

```text
http://localhost:3000
```

The application will automatically redirect to the Length Converter.

## Routes

| Route | Description |
| --- | --- |
| `/length` | Length converter |
| `/weight` | Weight converter |
| `/temperature` | Temperature converter |

## Example Conversions

- 1000 mm → 1 m
- 1000 g → 1 kg
- 0°C → 32°F
- 1 mile → 1.609344 km

## Author

**Tanish Dete**
## Project URL

https://roadmap.sh/projects/unit-converter
