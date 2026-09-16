# Blogger AMP HTML Guidelines & Boilerplate Reference

This document outlines the syntax constraints and structure for AMP articles published on `https://ideguide.blogspot.com/`.

## 1. Standalone AMP Page Boilerplate

```html
<!doctype html>
<html ⚡ lang="en">
<head>
  <meta charset="utf-8">
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
  <title>[Article Title] - IDE Guide</title>
  <link rel="canonical" href="https://ideguide.blogspot.com/[article-slug].html">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <style amp-custom>
    /* Custom clean styling */
    :root { --primary: #2563eb; --surface: #f8fafc; --text: #0f172a; --border: #e2e8f0; --warning-bg: #fffbeb; --warning-border: #fef3c7; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: var(--text); line-height: 1.7; max-width: 820px; margin: 0 auto; padding: 24px 16px; }
    .disclaimer-card { background: var(--warning-bg); border-left: 4px solid #f59e0b; padding: 16px; border-radius: 6px; margin: 24px 0; font-size: 0.92rem; }
    .comparison-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 0.95rem; }
    .comparison-table th, .comparison-table td { border: 1px solid var(--border); padding: 12px; text-align: left; }
    .comparison-table th { background: #f1f5f9; font-weight: 600; }
  </style>
</head>
<body>
  ...
</body>
</html>
```

## 2. Mandatory Blogger Disclaimer Element

```html
<aside class="disclaimer-card" role="note">
  <strong>⚠️ Legal & Editorial Disclaimer:</strong>
  <p>
    <em>IDE Guide</em> (<a href="https://ideguide.blogspot.com/">ideguide.blogspot.com</a>) is an independent educational publication. We are not affiliated with, sponsored by, or endorsed by Microsoft, JetBrains, Anysphere, Google, or any other IDE creator. All reviews and benchmarks are formulated from public documentation, community feedback, and developer testing. All registered trademarks are property of their respective owners.
  </p>
</aside>
```
