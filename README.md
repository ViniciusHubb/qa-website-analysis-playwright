# Playwright project structure

This repository uses a simple, scalable structure for small and medium Playwright projects, with a clear path to Page Object Model (POM):

```text
.
├── tests/
│   └── e2e/
│       └── example.spec.js
├── pages/
├── components/
├── fixtures/
├── utils/
├── playwright.config.js
└── package.json
```

## Folder purpose

- `tests/e2e`: end-to-end test specs.
- `pages`: page objects (screen-level abstractions).
- `components`: reusable UI component objects/helpers shared by pages.
- `fixtures`: Playwright fixtures and test data setup helpers.
- `utils`: generic utility functions used by tests/pages/fixtures.
