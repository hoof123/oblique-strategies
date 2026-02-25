export const systemTheme = `
  (function() {
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var stored = localStorage.getItem('theme');
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;
