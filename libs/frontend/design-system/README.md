# DesignSystem

## Icons

You can find updates for icons in the [repository](https://heroicons.com/).

## Add to new project

1. Follow instructions for [tailwind builder](https://github.com/mw-angular/toolbox/tree/main/libs/mw-angular/tailwindcss-builder#mw-angulartailwindcss-builder)

2. Add assets in build and test targets in `workspace.json`

```
"assets": [
  "apps/website/website/src/favicon.ico",
  "apps/website/website/src/assets",
  {
    "glob": "**/*",
    "input": "libs/frontend/design-system/src/assets",
    "output": "design-system"
  }
],
```

3. Add to `index.html`

```
<link rel="stylesheet" href="design-system/fonts/fonts.css">
```

4. Set zero budgets for css in `workspace.json`

```
{
  "type": "anyComponentStyle",
  "maximumWarning": "2kb",
  "maximumError": "0kb"
}
```
