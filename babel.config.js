module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }], // Suporte para sintaxe moderna do JavaScript
      '@babel/preset-react', // Suporte para React
      '@babel/preset-typescript', // Suporte para TypeScript
    ],
  };
  