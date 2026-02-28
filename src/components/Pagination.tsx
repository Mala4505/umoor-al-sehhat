// Pagination.tsx
interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
  maxButtons?: number; // max page buttons to show
}

export function Pagination({ current, total, onPageChange, maxButtons = 5 }: PaginationProps) {
  if (total <= 1) return null;

  const pages: (number | '...')[] = [];
  const half = Math.floor(maxButtons / 2);
  let start = Math.max(current - half, 1);
  let end = Math.min(start + maxButtons - 1, total);

  if (end - start < maxButtons - 1) start = Math.max(end - maxButtons + 1, 1);

  if (start > 1) pages.push(1, '...');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total) pages.push('...', total);

  return (
    <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
      <button
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
        className="px-3 py-1 rounded-xl bg-slate-200 disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((p, idx) =>
        p === '...' ? (
          <span key={idx} className="px-2 py-1 text-slate-400">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={`px-3 py-1 rounded-xl ${p === current ? 'bg-teal-600 text-white' : 'bg-slate-200'}`}
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={current === total}
        onClick={() => onPageChange(current + 1)}
        className="px-3 py-1 rounded-xl bg-slate-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}