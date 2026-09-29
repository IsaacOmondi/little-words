/**
 * SVG Graphics Library - Colorful, Friendly Vector Illustrations
 * Generates inline SVGs for all learning items with cute, toddler-friendly styling
 */

// Utility to create SVG wrapper
function createSVG(width, height, viewBox, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox || `0 0 ${width} ${height}`}">${content}</svg>`;
}

// Cute kawaii face helper
const kawaiiFace = (x, y, scale = 1) => `
  <circle cx="${x - 14 * scale}" cy="${y}" r="${4.5 * scale}" fill="#1e293b"/>
  <circle cx="${x + 14 * scale}" cy="${y}" r="${4.5 * scale}" fill="#1e293b"/>
  <circle cx="${x - 16 * scale}" cy="${y - 2}" r="${1.5 * scale}" fill="#ffffff"/>
  <circle cx="${x + 12 * scale}" cy="${y - 2}" r="${1.5 * scale}" fill="#ffffff"/>
  <path d="M ${x - 10 * scale} ${y + 12 * scale} Q ${x} ${y + 20 * scale} ${x + 10 * scale} ${y + 12 * scale}"
        stroke="#EF4444" stroke-width="${3 * scale}" fill="none" stroke-linecap="round"/>
  <ellipse cx="${x - 22 * scale}" cy="${y + 8 * scale}" rx="${5 * scale}" ry="${3 * scale}" fill="#FCA5A5" opacity="0.6"/>
  <ellipse cx="${x + 22 * scale}" cy="${y + 8 * scale}" rx="${5 * scale}" ry="${3 * scale}" fill="#FCA5A5" opacity="0.6"/>
`;

export const SVG_LIBRARY = {
  // Default Badge Fallback
  default: (color = '#64748B') => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.15"/>
    <circle cx="100" cy="100" r="55" fill="${color}"/>
    ${kawaiiFace(100, 100, 1)}
  `),

  // =========================================================================
  // SHAPES (With cute kawaii faces)
  // =========================================================================
  'shape-circle': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="85" fill="#EF4444"/>
    <circle cx="65" cy="65" r="20" fill="#FCA5A5" opacity="0.6"/>
    ${kawaiiFace(100, 100, 1.1)}
  `),

  'shape-square': () => createSVG(200, 200, null, `
    <rect x="20" y="20" width="160" height="160" rx="24" fill="#3B82F6"/>
    <circle cx="60" cy="60" r="18" fill="#93C5FD" opacity="0.6"/>
    ${kawaiiFace(100, 100, 1.1)}
  `),

  'shape-triangle': () => createSVG(200, 200, null, `
    <path d="M 100 15 L 185 175 L 15 175 Z" fill="#EAB308" stroke="#FACC15" stroke-width="6" stroke-linejoin="round"/>
    <circle cx="85" cy="70" r="14" fill="#FEF08A" opacity="0.7"/>
    ${kawaiiFace(100, 120, 1.1)}
  `),

  'shape-star': () => createSVG(200, 200, null, `
    <path d="M 100 10 L 125 65 L 185 70 L 140 115 L 155 175 L 100 142 L 45 175 L 60 115 L 15 70 L 75 65 Z"
          fill="#F59E0B" stroke="#FBBF24" stroke-width="5" stroke-linejoin="round"/>
    ${kawaiiFace(100, 108, 0.9)}
  `),

  'shape-heart': () => createSVG(200, 200, null, `
    <path d="M 100 175 C 100 175 25 115 25 70 C 25 40 45 20 70 20 C 85 20 95 30 100 40 C 105 30 115 20 130 20 C 155 20 175 40 175 70 C 175 115 100 175 100 175 Z"
          fill="#EC4899"/>
    <path d="M 50 50 Q 60 40 70 50" stroke="#FBCFE8" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.8"/>
    ${kawaiiFace(100, 95, 0.95)}
  `),

  'shape-rectangle': () => createSVG(220, 160, null, `
    <rect x="10" y="15" width="200" height="130" rx="20" fill="#10B981"/>
    <circle cx="50" cy="50" r="16" fill="#A7F3D0" opacity="0.6"/>
    ${kawaiiFace(110, 80, 1)}
  `),

  'shape-oval': () => createSVG(200, 160, null, `
    <ellipse cx="100" cy="80" rx="90" ry="65" fill="#8B5CF6"/>
    <ellipse cx="65" cy="55" rx="18" ry="12" fill="#DDD6FE" opacity="0.6"/>
    ${kawaiiFace(100, 80, 1)}
  `),

  'shape-diamond': () => createSVG(200, 200, null, `
    <path d="M 100 10 L 180 100 L 100 190 L 20 100 Z" fill="#06B6D4" stroke="#22D3EE" stroke-width="6" stroke-linejoin="round"/>
    <path d="M 60 70 L 100 30" stroke="#CFFAFE" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    ${kawaiiFace(100, 100, 1)}
  `),

  // =========================================================================
  // COLORS
  // =========================================================================
  'color-red': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#EF4444"/>
    <circle cx="70" cy="70" r="22" fill="#FCA5A5" opacity="0.7"/>
    <circle cx="130" cy="110" r="25" fill="#DC2626" opacity="0.5"/>
  `),

  'color-blue': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#3B82F6"/>
    <circle cx="75" cy="75" r="22" fill="#93C5FD" opacity="0.7"/>
    <circle cx="125" cy="115" r="28" fill="#1D4ED8" opacity="0.5"/>
  `),

  'color-yellow': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#FBBF24"/>
    <circle cx="70" cy="80" r="20" fill="#FDE047" opacity="0.8"/>
    <circle cx="130" cy="110" r="25" fill="#F59E0B" opacity="0.5"/>
  `),

  'color-green': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#22C55E"/>
    <circle cx="75" cy="75" r="22" fill="#86EFAC" opacity="0.7"/>
    <circle cx="125" cy="115" r="28" fill="#15803D" opacity="0.5"/>
  `),

  'color-orange': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#F97316"/>
    <circle cx="70" cy="75" r="20" fill="#FDBA74" opacity="0.7"/>
    <circle cx="130" cy="115" r="25" fill="#EA580C" opacity="0.5"/>
  `),

  'color-purple': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#A855F7"/>
    <circle cx="75" cy="75" r="22" fill="#D8B4FE" opacity="0.7"/>
    <circle cx="125" cy="115" r="28" fill="#7E22CE" opacity="0.5"/>
  `),

  'color-pink': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#F472B6"/>
    <circle cx="70" cy="75" r="20" fill="#FBCFE8" opacity="0.7"/>
    <circle cx="130" cy="115" r="25" fill="#DB2777" opacity="0.5"/>
  `),

  'color-brown': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#8D5B4C"/>
    <circle cx="75" cy="75" r="22" fill="#B4846C" opacity="0.7"/>
    <circle cx="125" cy="115" r="28" fill="#6D4534" opacity="0.5"/>
  `),

  'color-black': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#334155"/>
    <circle cx="75" cy="75" r="22" fill="#475569" opacity="0.7"/>
    <circle cx="125" cy="115" r="28" fill="#1E293B" opacity="0.8"/>
  `),

  'color-white': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="80" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="5"/>
    <circle cx="70" cy="75" r="20" fill="#FFFFFF" opacity="0.9"/>
    <circle cx="130" cy="115" r="25" fill="#E2E8F0" opacity="0.8"/>
  `),

  // =========================================================================
  // ANIMALS & CHARACTERS
  // =========================================================================
  'dog': () => createSVG(200, 200, null, `
    <ellipse cx="60" cy="85" rx="18" ry="35" fill="#D97706" transform="rotate(-15 60 85)"/>
    <ellipse cx="140" cy="85" rx="18" ry="35" fill="#D97706" transform="rotate(15 140 85)"/>
    <circle cx="100" cy="105" r="55" fill="#FBBF24"/>
    <circle cx="82" cy="98" r="6" fill="#1E293B"/>
    <circle cx="118" cy="98" r="6" fill="#1E293B"/>
    <ellipse cx="100" cy="115" rx="10" ry="8" fill="#334155"/>
    <path d="M 90 125 Q 100 135 110 125" stroke="#EF4444" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M 100 128 Q 100 142 105 138" stroke="#EF4444" stroke-width="4" fill="#F87171"/>
  `),

  'cat': () => createSVG(200, 200, null, `
    <polygon points="50,80 65,35 85,75" fill="#F472B6"/>
    <polygon points="150,80 135,35 115,75" fill="#F472B6"/>
    <circle cx="100" cy="110" r="52" fill="#FBCFE8"/>
    <circle cx="82" cy="105" r="6" fill="#1E293B"/>
    <circle cx="118" cy="105" r="6" fill="#1E293B"/>
    <polygon points="95,115 105,115 100,122" fill="#EC4899"/>
    <path d="M 90 124 Q 100 130 110 124" stroke="#DB2777" stroke-width="3" fill="none" stroke-linecap="round"/>
    <line x1="55" y1="115" x2="80" y2="118" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="145" y1="115" x2="120" y2="118" stroke="#94A3B8" stroke-width="2.5" stroke-linecap="round"/>
  `),

  'cow': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="55" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4"/>
    <ellipse cx="60" cy="65" rx="14" ry="8" fill="#F472B6" transform="rotate(-30 60 65)"/>
    <ellipse cx="140" cy="65" rx="14" ry="8" fill="#F472B6" transform="rotate(30 140 65)"/>
    <circle cx="75" cy="85" r="14" fill="#334155"/>
    <circle cx="120" cy="80" r="10" fill="#334155"/>
    <circle cx="82" cy="95" r="5" fill="#1E293B"/>
    <circle cx="118" cy="95" r="5" fill="#1E293B"/>
    <ellipse cx="100" cy="125" rx="30" ry="18" fill="#FBCFE8"/>
    <circle cx="90" cy="125" r="3.5" fill="#DB2777"/>
    <circle cx="110" cy="125" r="3.5" fill="#DB2777"/>
  `),

  'duck': () => createSVG(200, 200, null, `
    <circle cx="90" cy="100" r="45" fill="#FBBF24"/>
    <ellipse cx="130" cy="125" rx="45" ry="30" fill="#FBBF24"/>
    <circle cx="80" cy="90" r="5.5" fill="#1E293B"/>
    <path d="M 45 102 Q 30 105 45 115 Z" fill="#F97316"/>
    <ellipse cx="120" cy="125" rx="20" ry="12" fill="#F59E0B"/>
  `),

  'lion': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="68" fill="#EA580C"/>
    <circle cx="100" cy="100" r="48" fill="#FBBF24"/>
    <circle cx="82" cy="95" r="5.5" fill="#1E293B"/>
    <circle cx="118" cy="95" r="5.5" fill="#1E293B"/>
    <polygon points="94,106 106,106 100,114" fill="#78350F"/>
    <path d="M 90 120 Q 100 128 110 120" stroke="#78350F" stroke-width="3" fill="none" stroke-linecap="round"/>
  `),

  'elephant': () => createSVG(200, 200, null, `
    <circle cx="65" cy="85" r="28" fill="#A5B4FC"/>
    <circle cx="135" cy="85" r="28" fill="#A5B4FC"/>
    <circle cx="100" cy="100" r="50" fill="#818CF8"/>
    <circle cx="82" cy="92" r="5" fill="#1E293B"/>
    <circle cx="118" cy="92" r="5" fill="#1E293B"/>
    <path d="M 95 105 Q 100 145 115 135" stroke="#818CF8" stroke-width="14" fill="none" stroke-linecap="round"/>
  `),

  'fish': () => createSVG(200, 200, null, `
    <ellipse cx="90" cy="100" rx="55" ry="40" fill="#06B6D4"/>
    <polygon points="135,100 175,65 175,135" fill="#0891B2"/>
    <circle cx="65" cy="90" r="5.5" fill="#1E293B"/>
    <circle cx="63" cy="88" r="1.5" fill="#FFFFFF"/>
    <ellipse cx="95" cy="105" rx="14" ry="8" fill="#22D3EE" opacity="0.8"/>
    <path d="M 45 105 Q 40 100 45 95" stroke="#0891B2" stroke-width="3" fill="none" stroke-linecap="round"/>
    <circle cx="45" cy="70" r="6" fill="#A5F3FC" opacity="0.6"/>
    <circle cx="35" cy="55" r="4" fill="#A5F3FC" opacity="0.6"/>
  `),

  'heart': () => createSVG(200, 200, null, `
    <path d="M 100 160 C 20 100 35 45 75 45 C 90 45 98 58 100 65 C 102 58 110 45 125 45 C 165 45 180 100 100 160 Z"
          fill="#EC4899"/>
    ${kawaiiFace(100, 95, 0.9)}
  `),

  'monkey': () => createSVG(200, 200, null, `
    <circle cx="55" cy="90" r="18" fill="#B45309"/>
    <circle cx="145" cy="90" r="18" fill="#B45309"/>
    <circle cx="100" cy="100" r="48" fill="#92400E"/>
    <ellipse cx="100" cy="108" rx="35" ry="28" fill="#FDE68A"/>
    <circle cx="85" cy="98" r="5" fill="#1E293B"/>
    <circle cx="115" cy="98" r="5" fill="#1E293B"/>
    <path d="M 90 118 Q 100 126 110 118" stroke="#B45309" stroke-width="3" fill="none" stroke-linecap="round"/>
  `),

  'bird': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="45" fill="#0EA5E9"/>
    <polygon points="140,95 165,100 140,110" fill="#F97316"/>
    <circle cx="115" cy="90" r="5" fill="#1E293B"/>
    <path d="M 75 95 Q 60 115 85 125" stroke="#0284C7" stroke-width="8" fill="none" stroke-linecap="round"/>
  `),

  'frog': () => createSVG(200, 200, null, `
    <circle cx="70" cy="75" r="18" fill="#22C55E"/>
    <circle cx="130" cy="75" r="18" fill="#22C55E"/>
    <circle cx="70" cy="75" r="7" fill="#1E293B"/>
    <circle cx="130" cy="75" r="7" fill="#1E293B"/>
    <ellipse cx="100" cy="115" rx="55" ry="42" fill="#4ADE80"/>
    <path d="M 75 120 Q 100 135 125 120" stroke="#15803D" stroke-width="4" fill="none" stroke-linecap="round"/>
  `),

  'pig': () => createSVG(200, 200, null, `
    <polygon points="60,65 75,40 85,65" fill="#F472B6"/>
    <polygon points="140,65 125,40 115,65" fill="#F472B6"/>
    <circle cx="100" cy="100" r="50" fill="#F9A8D4"/>
    <circle cx="80" cy="90" r="5" fill="#1E293B"/>
    <circle cx="120" cy="90" r="5" fill="#1E293B"/>
    <ellipse cx="100" cy="112" rx="22" ry="14" fill="#F472B6"/>
    <circle cx="92" cy="112" r="3.5" fill="#DB2777"/>
    <circle cx="108" cy="112" r="3.5" fill="#DB2777"/>
  `),

  'sheep': () => createSVG(200, 200, null, `
    <circle cx="70" cy="70" r="25" fill="#F1F5F9"/>
    <circle cx="130" cy="70" r="25" fill="#F1F5F9"/>
    <circle cx="100" cy="60" r="25" fill="#F1F5F9"/>
    <circle cx="65" cy="115" r="25" fill="#F1F5F9"/>
    <circle cx="135" cy="115" r="25" fill="#F1F5F9"/>
    <circle cx="100" cy="120" r="35" fill="#F1F5F9"/>
    <ellipse cx="100" cy="100" rx="30" ry="24" fill="#334155"/>
    <circle cx="90" cy="95" r="4" fill="#FFFFFF"/>
    <circle cx="110" cy="95" r="4" fill="#FFFFFF"/>
  `),

  'horse': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="110" rx="42" ry="50" fill="#A16207"/>
    <polygon points="80,60 90,35 98,60" fill="#78350F"/>
    <polygon points="120,60 110,35 102,60" fill="#78350F"/>
    <circle cx="85" cy="95" r="5" fill="#1E293B"/>
    <circle cx="115" cy="95" r="5" fill="#1E293B"/>
    <ellipse cx="100" cy="130" rx="26" ry="16" fill="#CA8A04"/>
    <circle cx="90" cy="130" r="3.5" fill="#78350F"/>
    <circle cx="110" cy="130" r="3.5" fill="#78350F"/>
  `),

  // =========================================================================
  // OBJECTS & VOCABULARY
  // =========================================================================
  'apple': () => createSVG(200, 200, null, `
    <path d="M 100 25 Q 110 15 115 30" stroke="#16A34A" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="115" cy="28" rx="14" ry="8" fill="#4ADE80"/>
    <circle cx="78" cy="105" r="50" fill="#EF4444"/>
    <circle cx="122" cy="105" r="50" fill="#EF4444"/>
    <circle cx="65" cy="85" r="16" fill="#FCA5A5" opacity="0.6"/>
  `),

  'ball': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="75" fill="#3B82F6"/>
    <path d="M 35 100 Q 100 50 165 100" stroke="#1D4ED8" stroke-width="8" fill="none"/>
    <path d="M 35 100 Q 100 150 165 100" stroke="#93C5FD" stroke-width="8" fill="none"/>
    <circle cx="70" cy="70" r="15" fill="#DBEAFE" opacity="0.6"/>
  `),

  'cup': () => createSVG(200, 200, null, `
    <path d="M 50 50 L 65 150 Q 100 165 135 150 L 150 50 Z" fill="#38BDF8"/>
    <path d="M 140 70 Q 180 90 135 130" stroke="#0284C7" stroke-width="10" fill="none" stroke-linecap="round"/>
    <ellipse cx="100" cy="50" rx="50" ry="12" fill="#7DD3FC"/>
  `),

  'spoon': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="65" rx="35" ry="45" fill="#10B981"/>
    <path d="M 95 105 L 95 175 Q 100 185 105 175 L 105 105 Z" fill="#059669"/>
    <ellipse cx="92" cy="55" rx="8" ry="15" fill="#A7F3D0" opacity="0.7"/>
  `),

  'shoes': () => createSVG(200, 200, null, `
    <path d="M 30 130 Q 30 90 70 90 L 100 110 L 140 110 Q 170 110 170 140 Q 170 155 130 155 L 45 155 Q 30 155 30 130 Z" fill="#EC4899"/>
    <rect x="35" y="145" width="130" height="10" rx="4" fill="#FFFFFF"/>
    <line x1="80" y1="100" x2="100" y2="100" stroke="#FCE7F3" stroke-width="4" stroke-linecap="round"/>
    <line x1="85" y1="110" x2="105" y2="110" stroke="#FCE7F3" stroke-width="4" stroke-linecap="round"/>
  `),

  'bed': () => createSVG(200, 200, null, `
    <rect x="25" y="60" width="15" height="100" rx="5" fill="#78350F"/>
    <rect x="160" y="80" width="15" height="80" rx="5" fill="#78350F"/>
    <rect x="35" y="100" width="130" height="45" rx="8" fill="#8B5CF6"/>
    <rect x="40" y="85" width="35" height="25" rx="6" fill="#F8FAFC"/>
  `),

  'clock': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="75" fill="#F59E0B" stroke="#D97706" stroke-width="8"/>
    <circle cx="100" cy="100" r="60" fill="#FEF3C7"/>
    <circle cx="100" cy="100" r="6" fill="#1E293B"/>
    <line x1="100" y1="100" x2="100" y2="55" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="100" x2="135" y2="100" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>
  `),

  'book': () => createSVG(200, 200, null, `
    <path d="M 30 60 Q 100 45 100 65 L 100 155 Q 100 140 30 150 Z" fill="#06B6D4"/>
    <path d="M 170 60 Q 100 45 100 65 L 100 155 Q 100 140 170 150 Z" fill="#22D3EE"/>
    <line x1="100" y1="65" x2="100" y2="155" stroke="#0891B2" stroke-width="4"/>
  `),

  'car': () => createSVG(200, 200, null, `
    <path d="M 30 120 Q 30 100 50 100 L 70 70 Q 75 60 90 60 L 135 60 Q 150 60 155 75 L 170 100 Q 185 100 185 125 L 185 140 L 30 140 Z" fill="#EF4444"/>
    <rect x="75" y="70" width="35" height="25" rx="4" fill="#93C5FD"/>
    <rect x="120" y="70" width="30" height="25" rx="4" fill="#93C5FD"/>
    <circle cx="65" cy="145" r="18" fill="#1E293B"/>
    <circle cx="65" cy="145" r="7" fill="#CBD5E1"/>
    <circle cx="150" cy="145" r="18" fill="#1E293B"/>
    <circle cx="150" cy="145" r="7" fill="#CBD5E1"/>
  `),

  'toothbrush': () => createSVG(200, 200, null, `
    <rect x="85" y="20" width="30" height="150" rx="15" fill="#14B8A6"/>
    <rect x="90" y="25" width="20" height="45" rx="5" fill="#FFFFFF"/>
    <line x1="95" y1="35" x2="105" y2="35" stroke="#0D9488" stroke-width="3"/>
    <line x1="95" y1="45" x2="105" y2="45" stroke="#0D9488" stroke-width="3"/>
    <line x1="95" y1="55" x2="105" y2="55" stroke="#0D9488" stroke-width="3"/>
  `),

  'hat': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="140" rx="75" ry="20" fill="#EA580C"/>
    <path d="M 50 135 Q 50 60 100 60 Q 150 60 150 135 Z" fill="#F97316"/>
    <circle cx="100" cy="55" r="14" fill="#FDE047"/>
  `),

  // =========================================================================
  // BODY PARTS
  // =========================================================================
  'eyes': () => createSVG(200, 200, null, `
    <ellipse cx="65" cy="100" rx="32" ry="24" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4"/>
    <circle cx="65" cy="100" r="14" fill="#3B82F6"/>
    <circle cx="62" cy="96" r="5" fill="#FFFFFF"/>

    <ellipse cx="135" cy="100" rx="32" ry="24" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4"/>
    <circle cx="135" cy="100" r="14" fill="#3B82F6"/>
    <circle cx="132" cy="96" r="5" fill="#FFFFFF"/>
  `),

  'nose': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="50" fill="#FDA4AF"/>
    <ellipse cx="100" cy="105" rx="22" ry="16" fill="#F43F5E"/>
    <circle cx="92" cy="105" r="4" fill="#9F1239"/>
    <circle cx="108" cy="105" r="4" fill="#9F1239"/>
  `),

  'mouth': () => createSVG(200, 200, null, `
    <path d="M 30 90 Q 100 160 170 90 Q 100 110 30 90 Z" fill="#EF4444"/>
    <path d="M 50 96 Q 100 115 150 96" stroke="#FFFFFF" stroke-width="10" fill="none" stroke-linecap="round"/>
  `),

  'ears': () => createSVG(200, 200, null, `
    <path d="M 80 50 Q 40 70 50 120 Q 60 160 80 150 Z" fill="#FBBF24"/>
    <path d="M 120 50 Q 160 70 150 120 Q 140 160 120 150 Z" fill="#FBBF24"/>
    <ellipse cx="65" cy="100" rx="10" ry="20" fill="#F59E0B"/>
    <ellipse cx="135" cy="100" rx="10" ry="20" fill="#F59E0B"/>
  `),

  'hands': () => createSVG(200, 200, null, `
    <circle cx="100" cy="120" r="45" fill="#34D399"/>
    <rect x="65" y="55" width="12" height="40" rx="6" fill="#34D399"/>
    <rect x="82" y="45" width="12" height="50" rx="6" fill="#34D399"/>
    <rect x="99" y="40" width="12" height="55" rx="6" fill="#34D399"/>
    <rect x="116" y="50" width="12" height="45" rx="6" fill="#34D399"/>
    <rect x="130" y="75" width="12" height="30" rx="6" fill="#34D399" transform="rotate(30 130 75)"/>
  `),

  'feet': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="120" rx="35" ry="45" fill="#A78BFA"/>
    <circle cx="75" cy="65" r="10" fill="#A78BFA"/>
    <circle cx="92" cy="60" r="8" fill="#A78BFA"/>
    <circle cx="106" cy="62" r="7" fill="#A78BFA"/>
    <circle cx="118" cy="67" r="6" fill="#A78BFA"/>
    <circle cx="128" cy="74" r="5" fill="#A78BFA"/>
  `),

  'tummy': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="75" fill="#FDBA74"/>
    <circle cx="100" cy="105" r="6" fill="#C2410C"/>
    <path d="M 85 90 Q 100 80 115 90" stroke="#EA580C" stroke-width="3" fill="none" stroke-linecap="round"/>
  `),

  'head': () => createSVG(200, 200, null, `
    <circle cx="100" cy="105" r="65" fill="#67E8F9"/>
    <path d="M 50 80 Q 100 40 150 80" stroke="#0891B2" stroke-width="12" fill="none" stroke-linecap="round"/>
    ${kawaiiFace(100, 105, 1)}
  `),

  // =========================================================================
  // GREETINGS & OTHER ITEMS
  // =========================================================================
  'wave': () => createSVG(200, 200, null, `
    <circle cx="80" cy="90" r="40" fill="#FBBF24"/>
    <ellipse cx="120" cy="100" rx="35" ry="45" fill="#FBBF24"/>
    <path d="M 115 75 L 145 55 L 155 80" stroke="#F59E0B" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    ${kawaiiFace(80, 90, 0.9)}
  `),

  'please': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="75" fill="#C084FC"/>
    <path d="M 100 35 L 110 65 L 140 75 L 115 95 L 125 125 L 100 105 L 75 125 L 85 95 L 60 75 L 90 65 Z" fill="#FDE047"/>
    ${kawaiiFace(100, 105, 0.9)}
  `),

  'sun': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="50" fill="#FBBF24"/>
    ${[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + Math.cos(rad) * 60;
      const y1 = 100 + Math.sin(rad) * 60;
      const x2 = 100 + Math.cos(rad) * 85;
      const y2 = 100 + Math.sin(rad) * 85;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>`;
    }).join('')}
    ${kawaiiFace(100, 100, 1)}
  `),

  'moon': () => createSVG(200, 200, null, `
    <path d="M 140 40 Q 95 50 75 90 Q 60 130 85 165 Q 120 190 155 175 Q 125 155 115 125 Q 105 85 140 40 Z"
          fill="#818CF8"/>
    <circle cx="105" cy="80" r="7" fill="#C7D2FE" opacity="0.8"/>
    <circle cx="120" cy="120" r="6" fill="#C7D2FE" opacity="0.7"/>
    ${kawaiiFace(95, 115, 0.8)}
  `),

  'giraffe': () => createSVG(200, 200, null, `
    <rect x="88" y="50" width="24" height="100" rx="10" fill="#FBBF24"/>
    <circle cx="100" cy="50" r="30" fill="#FBBF24"/>
    <circle cx="85" cy="45" r="4" fill="#1E293B"/>
    <circle cx="115" cy="45" r="4" fill="#1E293B"/>
    <circle cx="95" cy="80" r="7" fill="#B45309"/>
    <circle cx="105" cy="110" r="8" fill="#B45309"/>
  `),

  'igloo': () => createSVG(200, 200, null, `
    <path d="M 30 150 Q 100 40 170 150 Z" fill="#BAE6FD" stroke="#38BDF8" stroke-width="5"/>
    <path d="M 80 150 Q 100 110 120 150 Z" fill="#0284C7"/>
  `),

  'jellyfish': () => createSVG(200, 200, null, `
    <path d="M 40 100 Q 100 30 160 100 Z" fill="#C084FC"/>
    <path d="M 60 100 Q 50 150 70 170" stroke="#A855F7" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 85 100 Q 95 150 85 175" stroke="#A855F7" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 115 100 Q 105 150 115 175" stroke="#A855F7" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 140 100 Q 150 150 130 170" stroke="#A855F7" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${kawaiiFace(100, 80, 0.9)}
  `),

  'kite': () => createSVG(200, 200, null, `
    <path d="M 100 30 L 160 90 L 100 150 L 40 90 Z" fill="#F97316"/>
    <line x1="100" y1="30" x2="100" y2="150" stroke="#FFFFFF" stroke-width="3"/>
    <line x1="40" y1="90" x2="160" y2="90" stroke="#FFFFFF" stroke-width="3"/>
    <path d="M 100 150 Q 130 175 100 190" stroke="#EA580C" stroke-width="3" fill="none"/>
  `),

  'nest': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="130" rx="70" ry="35" fill="#78350F"/>
    <ellipse cx="80" cy="115" rx="14" ry="18" fill="#67E8F9"/>
    <ellipse cx="105" cy="110" rx="14" ry="18" fill="#67E8F9"/>
    <ellipse cx="125" cy="118" rx="14" ry="18" fill="#67E8F9"/>
  `),

  'owl': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="110" rx="55" ry="60" fill="#818CF8"/>
    <circle cx="75" cy="95" r="20" fill="#FFFFFF"/>
    <circle cx="125" cy="95" r="20" fill="#FFFFFF"/>
    <circle cx="75" cy="95" r="8" fill="#1E293B"/>
    <circle cx="125" cy="95" r="8" fill="#1E293B"/>
    <polygon points="95,108 105,108 100,118" fill="#F59E0B"/>
  `),

  'penguin': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="110" rx="50" ry="65" fill="#1E293B"/>
    <ellipse cx="100" cy="120" rx="35" ry="48" fill="#FFFFFF"/>
    <circle cx="85" cy="85" r="4" fill="#1E293B"/>
    <circle cx="115" cy="85" r="4" fill="#1E293B"/>
    <polygon points="95,95 105,95 100,105" fill="#F97316"/>
  `),

  'queen': () => createSVG(200, 200, null, `
    <polygon points="40,110 40,60 70,85 100,45 130,85 160,60 160,110" fill="#FBBF24" stroke="#F59E0B" stroke-width="4"/>
    <circle cx="40" cy="55" r="6" fill="#EC4899"/>
    <circle cx="100" cy="40" r="8" fill="#3B82F6"/>
    <circle cx="160" cy="55" r="6" fill="#EC4899"/>
    <rect x="40" y="110" width="120" height="20" rx="4" fill="#EAB308"/>
  `),

  'rainbow': () => createSVG(200, 200, null, `
    <path d="M 30 160 A 70 70 0 0 1 170 160" stroke="#EF4444" stroke-width="12" fill="none"/>
    <path d="M 42 160 A 58 58 0 0 1 158 160" stroke="#F59E0B" stroke-width="12" fill="none"/>
    <path d="M 54 160 A 46 46 0 0 1 146 160" stroke="#10B981" stroke-width="12" fill="none"/>
    <path d="M 66 160 A 34 34 0 0 1 134 160" stroke="#3B82F6" stroke-width="12" fill="none"/>
    <path d="M 78 160 A 22 22 0 0 1 122 160" stroke="#8B5CF6" stroke-width="12" fill="none"/>
  `),

  'tree': () => createSVG(200, 200, null, `
    <rect x="88" y="120" width="24" height="60" rx="4" fill="#78350F"/>
    <circle cx="100" cy="80" r="50" fill="#22C55E"/>
    <circle cx="75" cy="95" r="30" fill="#16A34A"/>
    <circle cx="125" cy="95" r="30" fill="#16A34A"/>
  `),

  'umbrella': () => createSVG(200, 200, null, `
    <path d="M 30 110 Q 100 20 170 110 Z" fill="#A855F7"/>
    <line x1="100" y1="30" x2="100" y2="160" stroke="#6B21A8" stroke-width="6" stroke-linecap="round"/>
    <path d="M 100 160 Q 100 180 85 170" stroke="#6B21A8" stroke-width="6" fill="none" stroke-linecap="round"/>
  `),

  'violin': () => createSVG(200, 200, null, `
    <ellipse cx="100" cy="130" rx="45" ry="35" fill="#D97706"/>
    <ellipse cx="100" cy="80" rx="35" ry="25" fill="#D97706"/>
    <rect x="94" y="20" width="12" height="150" rx="4" fill="#78350F"/>
    <circle cx="100" cy="110" r="10" fill="#1E293B"/>
  `),

  'whale': () => createSVG(200, 200, null, `
    <ellipse cx="90" cy="115" rx="65" ry="40" fill="#0284C7"/>
    <polygon points="145,115 180,95 180,135" fill="#0369A1"/>
    <circle cx="60" cy="105" r="5" fill="#1E293B"/>
    <path d="M 70 70 Q 75 50 65 40" stroke="#38BDF8" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 75 70 Q 85 50 95 40" stroke="#38BDF8" stroke-width="4" fill="none" stroke-linecap="round"/>
  `),

  'xylophone': () => createSVG(200, 200, null, `
    <rect x="30" y="60" width="22" height="110" rx="4" fill="#EF4444"/>
    <rect x="58" y="70" width="22" height="100" rx="4" fill="#F59E0B"/>
    <rect x="86" y="80" width="22" height="90" rx="4" fill="#10B981"/>
    <rect x="114" y="90" width="22" height="80" rx="4" fill="#3B82F6"/>
    <rect x="142" y="100" width="22" height="70" rx="4" fill="#8B5CF6"/>
  `),

  'yoyo': () => createSVG(200, 200, null, `
    <circle cx="100" cy="110" r="55" fill="#FBBF24" stroke="#F59E0B" stroke-width="8"/>
    <circle cx="100" cy="110" r="30" fill="#EA580C"/>
    <path d="M 100 55 Q 100 20 80 20" stroke="#CBD5E1" stroke-width="4" fill="none"/>
  `),

  'zebra': () => createSVG(200, 200, null, `
    <circle cx="100" cy="100" r="52" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
    <line x1="60" y1="80" x2="85" y2="85" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
    <line x1="55" y1="105" x2="80" y2="105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
    <line x1="140" y1="80" x2="115" y2="85" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
    <line x1="145" y1="105" x2="120" y2="105" stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
    <circle cx="85" cy="95" r="5" fill="#1E293B"/>
    <circle cx="115" cy="95" r="5" fill="#1E293B"/>
    <ellipse cx="100" cy="122" rx="20" ry="12" fill="#475569"/>
  `)
};

// Generate SVG for any item
export function getSVG(svgKey, themeColor = '#64748B') {
  const generator = SVG_LIBRARY[svgKey];
  if (generator) {
    return generator(themeColor);
  }
  return SVG_LIBRARY.default(themeColor);
}
