module.exports = {
  '{apps,libs}/**/*': (filenames) => {
    return [
      `npx nx affected:lint --parallel --files ${filenames.join(',')}`,
      `npx nx format:write --files ${filenames.join(',')}`,
    ];
  },
};
