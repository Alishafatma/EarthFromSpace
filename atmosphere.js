// ATMOSPHERE SCROLL ANIMATION
const layers = document.querySelectorAll(".layer");

// Scroll reveal using Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.3
    }
);

// Observe each layer
layers.forEach((layer) => {
    observer.observe(layer);
});

// CLICK HIGHLIGHT EFFECT
layers.forEach((layer) => {
    layer.addEventListener("click", () => {
        layers.forEach((l) => l.classList.remove("active"));
        layer.classList.add("active");
    });
});