import sharp from "sharp";

// Branded 1200x630 social card — new ascending-chevron mark + positioning.
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#1a1610"/>
      <stop offset="55%" stop-color="#0a0a0c"/>
      <stop offset="100%" stop-color="#0a0a0c"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="none" stroke="#1f2127" stroke-width="2"/>

  <!-- Brand mark -->
  <g transform="translate(540,150) scale(0.235)">
    <g fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M116 312 L256 176 L396 312" stroke="#C4A35A" stroke-width="56"/>
      <path d="M156 392 L256 296 L356 392" stroke="#6E5C32" stroke-width="34"/>
    </g>
    <circle cx="256" cy="106" r="22" fill="#3CD8FF"/>
  </g>

  <!-- Wordmark -->
  <text x="600" y="380" text-anchor="middle"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="92" font-weight="800"
        letter-spacing="-2" fill="#f5f3ed">Prevail</text>

  <!-- Tagline -->
  <text x="600" y="446" text-anchor="middle"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="38" font-weight="600"
        fill="#C4A35A">AI for your life, not your job.</text>

  <!-- URL -->
  <text x="600" y="520" text-anchor="middle"
        font-family="Inter, Helvetica, Arial, sans-serif" font-size="26" font-weight="500"
        letter-spacing="1" fill="#8a8270">docs.prevail.sh</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("wrote public/og-image.png");
