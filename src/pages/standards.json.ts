import standards from '../data/standards.json';

export const prerender = true;

export function GET() {
  const dataset = {
    name: 'Battery Testing Standards Reference Data',
    description:
      'Reference data for battery testing standards — SAE J537, EN 50342, JIS D5301, DIN 43539, IEC 60095/62660/62133, UN 38.3, UL 1973/2580 — with region, chemistry and what each standard governs.',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    version: '2026-09',
    dateModified: '2026-09-19',
    creator: 'World Battery Hub',
    creatorUrl: 'https://worldbatteryhub.com',
    recordCount: standards.standards.length,
    data: standards.standards,
  };
  return new Response(JSON.stringify(dataset, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
