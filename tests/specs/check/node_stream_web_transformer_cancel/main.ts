// Empty entrypoint: `check --remote` eagerly resolves the bundled node lib
// type aliases, which previously surfaced TS2724 for
// `globalThis.TransformerCancelCallback` in node/stream/web.d.cts.
export {};
