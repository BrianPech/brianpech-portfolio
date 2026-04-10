/**
 * Injects Material Symbols Outlined stylesheet after first paint.
 *
 * Uses a raw `<script>` tag instead of next/script to avoid shipping
 * any React client runtime for this loader. The `dangerouslySetInnerHTML`
 * renders as a plain inline <script> in the HTML — no hydration, no
 * client boundary, zero JS bundle cost.
 *
 * This is a Server Component (no "use client" directive).
 */
export default function MaterialSymbolsLoader() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          requestIdleCallback(function(){
            var l=document.createElement('link');
            l.rel='stylesheet';
            l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
            document.head.appendChild(l);
          });
        `,
      }}
    />
  );
}
