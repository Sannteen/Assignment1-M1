// Question 9: Retrieves and displays style properties
function myFunction9() {
  const styleEl = document.querySelector('style');
  const demo = document.getElementById('demo9');

  if (!demo) return;

  if (styleEl) {
    const cssText = styleEl.textContent.trim();
    demo.textContent = cssText || 'No CSS rules found inside <style>.';
  } else {
    demo.textContent = 'No <style> element found in the document.';
  }
}