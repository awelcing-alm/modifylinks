(function() {
    function modifyLinks() {
        document.querySelectorAll('a[target="_self"]').forEach(link => {
            link.setAttribute('target', '_blank');
        });
    }

    // Run immediately on page load
    modifyLinks();

    // Watch for dynamically added links in Nuxt.js (SPA)
    new MutationObserver(modifyLinks).observe(document.body, { childList: true, subtree: true });
})();
