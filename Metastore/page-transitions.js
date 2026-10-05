// @ts-nocheck
// ==========================================================================
// Meta Store — Fluid Subpage Transition Engine (page-transitions.js)
// Handles smooth cinematic fade-up enter and smooth exit transitions
// ==========================================================================

(function () {
  // On DOM loaded, trigger entrance animation
  function initTransitions() {
    document.body.classList.add('page-transition-enter');

    // Intercept clicks on internal navigation links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Skip anchors, javascript, external links, new tab clicks
      if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Skip external domains
      if (href.startsWith('http') && !href.startsWith(window.location.origin)) return;

      // Intercept and animate exit
      e.preventDefault();
      document.body.classList.remove('page-transition-enter');
      document.body.classList.add('page-transition-exit');

      setTimeout(() => {
        window.location.href = href;
      }, 190);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTransitions);
  } else {
    initTransitions();
  }
})();
