module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'],
              alias: {
                '@components': './src/components',
                '@contexts': './src/contexts',
                '@hooks': './src/hooks',
                '@lib': './src/lib',
                '@screens': './src/screens',
              },
            },
          ],
        ],
      },
    },
  }
}
