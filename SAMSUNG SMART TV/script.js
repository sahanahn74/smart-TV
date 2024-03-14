// Function to show the "About" section
function showAbout() {
    document.getElementById('about').style.display = 'block';
    document.getElementById('features').style.display = 'none';
    document.getElementById('buy-now').style.display = 'none';
}

// Function to show the "Features" section
function showFeatures() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('features').style.display = 'block';
    document.getElementById('buy-now').style.display = 'none';
}

// Function to show the "Buy Now" section
function showBuyNow() {
    document.getElementById('about').style.display = 'none';
    document.getElementById('features').style.display = 'none';
    document.getElementById('buy-now').style.display = 'block';
}

