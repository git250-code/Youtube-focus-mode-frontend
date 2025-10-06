const hideDistractions = () => {
  const selectors = [
    '#related',                 // sidebar recommendations
    '#comments',                // comment section
    'ytd-merch-shelf-renderer', // merch shelf
    '#secondary',               // right column
    '#guide',                   // left navigation
    'ytd-watch-next-secondary-results-renderer', // next up list
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = 'none';
    });
  });
};

// re-run when YouTube dynamically changes pages
const observer = new MutationObserver(hideDistractions);
observer.observe(document.body, { childList: true, subtree: true });

hideDistractions();
