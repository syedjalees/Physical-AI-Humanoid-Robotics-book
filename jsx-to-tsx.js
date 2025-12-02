// jsx-to-tsx.js
module.exports = function transformer(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Ensure React import is there (basic TSX compatibility)
  root.find(j.ImportDeclaration, { source: { value: 'react' } })
      .forEach(path => {
          if (!path.node.specifiers.some(s => s.importKind === 'type')) {
              path.node.specifiers.forEach(s => s.importKind = 'value');
          }
      });

  return root.toSource();
};
