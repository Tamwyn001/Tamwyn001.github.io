class image {
  constructor(src, alt, title) {
    this.src = src;
    this.alt = alt;
    this.title = title;
  }
}

function clicArtImage (image) {
  console.log('image clicked');
};

console.log('openArt.js loaded');