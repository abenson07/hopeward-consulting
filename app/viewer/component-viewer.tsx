"use client";

import * as React from "react";

const MAX_WIDTH = 1440;

type ViewerItem = {
  slug: string;
  name: string;
  file: string;
};

function getImportStatement(item: ViewerItem) {
  const importPath = item.file
    .replace(/^components\//, "@/components/")
    .replace(/\.tsx$/, "");
  return `import { ${item.name} } from "${importPath}";`;
}

function GridCard({
  item,
  isCopied,
  onCopy,
}: {
  item: ViewerItem;
  isCopied: boolean;
  onCopy: (item: ViewerItem) => void;
}) {
  const frameRef = React.useRef<HTMLDivElement>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [box, setBox] = React.useState({ w: 0, h: 0 });
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () =>
      setBox({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const measure = React.useCallback(() => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    const height = Math.max(
      doc.documentElement.scrollHeight,
      doc.body?.scrollHeight ?? 0,
    );
    if (height > 0) setContentHeight(height);
  }, []);

  const handleLoad = React.useCallback(() => {
    measure();
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    // Recompute as fonts/images load and in-view animations reveal content.
    const ro = new ResizeObserver(() => measure());
    ro.observe(doc.documentElement);
    if (doc.body) ro.observe(doc.body);
    const t1 = window.setTimeout(measure, 300);
    const t2 = window.setTimeout(measure, 1200);
    return () => {
      ro.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [measure]);

  const scale =
    box.w > 0 && contentHeight > 0
      ? Math.min(box.w / MAX_WIDTH, box.h / contentHeight)
      : 0;
  const scaledW = MAX_WIDTH * scale;
  const scaledH = contentHeight * scale;
  const offsetX = (box.w - scaledW) / 2;
  const offsetY = (box.h - scaledH) / 2;

  return (
    <button
      type="button"
      onClick={() => onCopy(item)}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white text-left shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
    >
      <div
        ref={frameRef}
        className="relative aspect-[4/3] w-full overflow-hidden border-b border-neutral-200 bg-neutral-50"
      >
        {box.w > 0 && (
          <iframe
            ref={iframeRef}
            src={`/preview/${item.slug}`}
            title={item.name}
            loading="lazy"
            tabIndex={-1}
            onLoad={handleLoad}
            className="absolute origin-top-left border-0 bg-white"
            style={{
              left: scale > 0 ? offsetX : 0,
              top: scale > 0 ? offsetY : 0,
              width: MAX_WIDTH,
              height: contentHeight || MAX_WIDTH,
              transform: scale > 0 ? `scale(${scale})` : undefined,
              pointerEvents: "none",
            }}
          />
        )}
        <div className="absolute inset-0" aria-hidden />
      </div>

      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <span className="truncate text-sm font-medium text-neutral-900">
          {item.name}
        </span>
        <span
          className={`shrink-0 text-[10px] font-semibold tracking-wide uppercase ${
            isCopied
              ? "text-emerald-500"
              : "text-neutral-400 opacity-0 group-hover:opacity-100"
          }`}
        >
          {isCopied ? "Copied" : "Copy"}
        </span>
      </div>
    </button>
  );
}

export function ComponentViewer({ items }: { items: ViewerItem[] }) {
  const [copiedSlug, setCopiedSlug] = React.useState<string | null>(null);
  const copyResetRef = React.useRef<number | null>(null);

  const copyImport = React.useCallback((item: ViewerItem) => {
    const done = () => {
      setCopiedSlug(item.slug);
      if (copyResetRef.current) window.clearTimeout(copyResetRef.current);
      copyResetRef.current = window.setTimeout(() => setCopiedSlug(null), 1600);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(getImportStatement(item))
        .then(done)
        .catch(done);
    } else {
      done();
    }
  }, []);

  React.useEffect(
    () => () => {
      if (copyResetRef.current) window.clearTimeout(copyResetRef.current);
    },
    [],
  );

  return (
    <div className="min-h-screen w-full bg-neutral-100 text-neutral-900">
      <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/85 px-6 py-4 backdrop-blur">
        <h1 className="text-sm font-semibold tracking-tight">Components</h1>
        <p className="mt-0.5 text-xs text-neutral-500">
          {items.length} sections · click a card to copy import
        </p>
      </header>

      <main className="px-6 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <GridCard
              key={item.slug}
              item={item}
              isCopied={item.slug === copiedSlug}
              onCopy={copyImport}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
