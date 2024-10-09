const images = [
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUFsUUpuUVQ3cUdJUXc0NW5mTVpFdE9MekhWSGZtV1pvV240QzNuTk80VXhseHVZcEw1SmhqcElaQkJMTm9FMytEdlJGYjQxc1NwMWpTZjJjMXIvZnE&traceId=1',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OUtONFJuV1pCdWVXaWp6ZXpQQi9FWXF2TWlpSzUzejRCZGt2SjJUNGl1VEtsS0dZaHBma3VTb3UwU2F6dkc4TGV4VWh5Y2UwMXBvc0pMNmE5MmxpdHg&traceId=1',
    'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-yellow?wid=5120&hei=2880&fmt=webp&qlt=70&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OVBYaW5IbkNlYTVSSU9KZTY4cW9ENTBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0R2N1VyNEplcjgvcjN0dkF3OE9LSmZmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1'
];

let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const dots = document.querySelectorAll('.dot');

function updateImage() {
    currentImage.src = images[currentIndex];
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateImage();
    });
});


updateImage();
