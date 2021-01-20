# Install

- Replace in all places `starter-nx-workspace` with your monorepo name
- Change in nx.json `defaultBase`

# Notes

```
nx g @nrwl/angular:application website/website --linter=eslint --prefix=app --strict=true
nx g @nrwl/angular:library frontend/design-system --linter=eslint --prefix=ds --strict=true
```

After generation lib or app:

- add rules in .eslintrc.json
- add tags in nx.json
