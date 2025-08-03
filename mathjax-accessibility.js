// this script enables digital accessibility for math equation rendered by MathJax
window.MathJax = {
  options: {
    renderActions: {
      addAssistiveMml: [200, function (doc) {
        for (const math of doc.math) {
          math.typesetRoot.setAttribute('role', 'math');
        }
      }, '']
    }
  },
  loader: { load: ['[a11y]/assistive-mml'] }
};
