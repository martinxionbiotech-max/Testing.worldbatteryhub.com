import standards from '../data/standards.json';

export const prerender = true;

const esc = (v: unknown): string => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function GET() {
  const cols = ['id','code','region','chemistry','object','scope'];
  const header = cols.join(',');
  const rows = standards.standards.map((s) =>
    cols.map((c) => esc((s as Record<string, unknown>)[c])).join(','),
  );
  const csv = [header, ...rows].join('\n');
  return new Response(csv, {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
}
