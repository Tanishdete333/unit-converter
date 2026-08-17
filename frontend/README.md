# Frontend files for Unit Converter

This folder contains the frontend pieces to drop into your existing project
(`Unit Converter/src/`).

## Where each file goes

```
src/
  app.js              <- REPLACE your existing src/app.js with this one
  views/
    converter.ejs      <- NEW folder + file
  public/
    style.css           <- NEW folder + file
```

Your existing files stay untouched:
```
src/models/lengthModel.js
src/models/weightModel.js
src/models/temperatureModel.js
src/models/unit.models.js
server.js
```

## Setup steps

1. Copy `views/` and `public/` folders into your `src/` folder.
2. Replace your current `src/app.js` with the `app.js` from this bundle.
3. Install EJS (if not already installed):
   ```bash
   npm install ejs
   ```
4. Start your server:
   ```bash
   npx nodemon server.js
   ```
5. Open in your browser:
   ```
   http://localhost:3000/length
   http://localhost:3000/weight
   http://localhost:3000/temperature
   ```

## How it works

- `GET /length` (etc.) renders `converter.ejs` with a blank form.
- Submitting the form does a real `POST` to the same URL (`target="_self"`,
  matching the project spec) which recalculates the result and re-renders
  the same page with the answer shown instead of the form.
- `unit.models.js` (your existing conversion logic) is untouched — only the
  routes changed from returning JSON to rendering HTML.
