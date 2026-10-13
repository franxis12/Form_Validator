# Formly — Form Validator

A responsive registration-form demo, redesigned around the original blue, charcoal, and white palette. Built with HTML, CSS, and vanilla JavaScript.

[Live demo](https://franxis12.github.io/Form_Validator/)

![Desktop preview](docs/preview.jpg)

## Features

- Live password checklist, password visibility controls, and progress indicator.
- Inline field errors with accessible labels and first-invalid-field focus.
- Confirmation is revalidated whenever either password changes.
- Optional bio with a character counter.
- No backend, account creation, storage, or transmission of form data. Passwords are never logged.
- Responsive layout and reduced-motion support.

## Run locally

```sh
python3 -m http.server 8767
```

Open http://localhost:8767. No installation or external styling dependencies are required.

## Validation

JavaScript syntax checked with `node --check script.js`. Browser checks cover empty submission, invalid email, valid submission, changed-password mismatch, and desktop/mobile layout.
