module.exports = {
  '{apps,libs}/**/*': (filenames) => {
    return [
      `npx nx affected:lint --parallel --fix --files ${filenames.join(',')}`,
      `npx nx format:write --files ${filenames.join(',')}`,
    ];
  },
  '{apps,libs}/**/*.scss': ['stylelint --max-warnings 0 --fix'],
};
