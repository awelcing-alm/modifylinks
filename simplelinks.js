document.querySelectorAll('a[target="_self"]').forEach(link => {
    link.setAttribute('target', '_blank');
});
