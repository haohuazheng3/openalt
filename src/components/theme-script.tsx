/**
 * Applies the saved (or system) theme before first paint to avoid a flash of
 * the wrong theme. Rendered as the first child of <body>.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
