// Simple validation script to check if data files are properly structured

// Read the data.js file
const fs = require('fs');

// Read data.js file
const dataJsContent = fs.readFileSync('./data.js', 'utf8');

// Check if it contains the export statement
if (dataJsContent.includes('window.components = components;')) {
    console.log('✓ data.js has proper export statement');
} else {
    console.log('✗ data.js is missing export statement');
}

// Check if it contains the new components
if (dataJsContent.includes('ryzen-9-9950x3d')) {
    console.log('✓ data.js contains new Ryzen 9 9950X3D CPU');
} else {
    console.log('✗ data.js is missing new Ryzen 9 9950X3D CPU');
}

if (dataJsContent.includes('rtx-5090')) {
    console.log('✓ data.js contains new RTX 5090 GPU');
} else {
    console.log('✗ data.js is missing new RTX 5090 GPU');
}

if (dataJsContent.includes('starfield')) {
    console.log('✓ data.js contains new Starfield game');
} else {
    console.log('✗ data.js is missing new Starfield game');
}

// Read index.html file
const indexHtmlContent = fs.readFileSync('./index.html', 'utf8');

// Check if it loads data.js
if (indexHtmlContent.includes('<script src="data.js"></script>')) {
    console.log('✓ index.html loads data.js');
} else {
    console.log('✗ index.html does not load data.js');
}

// Check if it no longer contains embedded data
if (!indexHtmlContent.includes('const components = {') || 
    indexHtmlContent.indexOf('const components = {') > indexHtmlContent.indexOf('<script src="data.js"></script>')) {
    console.log('✓ index.html no longer contains embedded component data');
} else {
    console.log('✗ index.html still contains embedded component data');
}

// Check if games dropdown is populated dynamically
if (indexHtmlContent.includes('components.games.forEach') && indexHtmlContent.includes('gameSelect')) {
    console.log('✓ index.html populates games dropdown dynamically');
} else {
    console.log('✗ index.html does not populate games dropdown dynamically');
}

// Check if hardcoded game options are removed
if (indexHtmlContent.includes('<option value="">General Gaming</option>') && 
    !indexHtmlContent.includes('<option value="cyberpunk-2077">Cyberpunk 2077</option>')) {
    console.log('✓ index.html has removed hardcoded game options');
} else {
    console.log('✗ index.html still has hardcoded game options');
}

// Check if DOM elements are accessed properly (inside DOMContentLoaded)
if (indexHtmlContent.includes('document.addEventListener(\'DOMContentLoaded\'') && 
    indexHtmlContent.includes('cpuSelect = document.getElementById(\'cpu\');')) {
    console.log('✓ index.html accesses DOM elements properly after DOM is loaded');
} else {
    console.log('✗ index.html may have issues with DOM element access timing');
}

console.log('\nValidation complete!');