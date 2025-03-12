(function() {
    const observedLinks = new WeakSet();

    function modifyLinks() {
        document.querySelectorAll('a[target="_self"]').forEach(link => {
            if (!observedLinks.has(link)) {
                link.setAttribute('target', '_blank');
                observedLinks.add(link); // Prevent duplicate processing
            }
        });
    }

    // Run immediately on page load
    modifyLinks();

    // Efficiently handle dynamically loaded content
    const observer = new MutationObserver(() => {
        clearTimeout(observer.timer);
        observer.timer = setTimeout(modifyLinks, 100); // Debounce changes
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
