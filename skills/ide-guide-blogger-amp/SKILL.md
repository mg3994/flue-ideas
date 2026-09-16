---
name: ide-guide-blogger-amp
description: Rules and specifications for generating pure content-only AMP-compatible HTML articles for Blogger (ideguide.blogspot.com). Enforces non-affiliation disclaimers, Table of Contents (TOC), comparison matrices, pros/cons, and excludes outer site headers and doctypes for direct HTML viewer editing.
license: Apache-2.0
metadata:
  blog: "IDE Guide"
  url: "https://ideguide.blogspot.com/"
  standard: "Blogger Post HTML (AMP Compatible) ⚡"
---

# IDE Guide Blogger Post Content Skill

This skill defines the formatting and technical constraints for producing **content-only post HTML** tailored specifically for the Blogger HTML editor view on `https://ideguide.blogspot.com/`.

## Core Requirements for Blogger Post Content

1. **Content-Only Body (No Outer Boilerplate)**:
   - Do NOT include `<!doctype html>`, `<html>`, `<head>`, `<body>`, or `<header class="site-header">`.
   - The user's Blogger template provides the site header, title, and page frame. This HTML goes directly into the Blogger Post HTML view.
2. **Mandatory Disclaimer Banner**:
   - Every post MUST display the non-affiliation disclaimer at the very top of the post body:
     "Transparency & Editorial Disclaimer: IDE Guide is an independent educational platform. We are not affiliated with, endorsed by, or sponsored by..."
3. **Table of Contents (TOC)**:
   - Include a clean, numbered `<nav class="post-toc">` with anchor jumps to sections (`#video-overview`, `#architectural-deep-dive`, `#feature-comparison`, `#strengths-limitations`, `#verdict-recommendations`).
4. **AMP-Compatible Components**:
   - Embed YouTube videos via `<amp-youtube data-videoid="..." layout="responsive" width="480" height="270"></amp-youtube>`.
   - Use `<amp-img>` for images where applicable.
   - Avoid disallowed external scripts.
5. **Scoped Styling**:
   - All CSS is scoped inside a `<style>` block under `.ideguide-post-container` so styles never bleed into the surrounding Blogger layout.
