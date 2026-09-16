import { CONFIG } from '../config.mjs';

/**
 * Generates pure content-only HTML for Blogger post editor (HTML viewer).
 * Excludes <html>, <head>, <body>, and site headers.
 * Includes: Mandatory Disclaimer banner, Table of Contents (TOC), comparison tables,
 * pros & cons, AMP-compatible embeds, and channel CTA.
 *
 * @param {object} episode
 * @returns {string} Clean HTML string for Blogger HTML view
 */
export function generateBloggerPostContent(episode) {
  const { channel, blog, legal } = CONFIG;

  const comparisonRows = episode.featureComparisons
    .map(
      (feat) => `
        <tr>
          <td><strong>${feat.category}</strong></td>
          <td>${feat.vsCodeNotes}</td>
          <td>${feat.cursorNotes}</td>
          <td><span class="badge-verdict">${feat.verdict}</span></td>
        </tr>`
    )
    .join('');

  const idesCards = episode.ides
    .map(
      (ide) => `
      <div class="ide-spec-card">
        <h3>${ide.name}</h3>
        <p class="meta-tag"><strong>Vendor:</strong> ${ide.vendor} &bull; <strong>License:</strong> ${ide.license}</p>
        <ul>
          <li><strong>Architecture:</strong> ${ide.architecture}</li>
          <li><strong>AI Engine:</strong> ${ide.aiEngine}</li>
          <li><strong>Idle RAM:</strong> ${ide.memoryIdle}</li>
          <li><strong>Startup Time:</strong> ${ide.startupTime}</li>
          <li><strong>Pricing:</strong> ${ide.pricing}</li>
        </ul>
      </div>`
    )
    .join('');

  const prosConsHtml = Object.entries(episode.prosCons)
    .map(([key, value]) => {
      const title = key.toUpperCase();
      const prosList = value.pros.map((p) => `<li>✅ ${p}</li>`).join('');
      const consList = value.cons.map((c) => `<li>⚠️ ${c}</li>`).join('');
      return `
      <div class="pros-cons-box">
        <h4>${title} Deep-Dive</h4>
        <div class="pros-block">
          <strong>Strengths & Advantages:</strong>
          <ul>${prosList}</ul>
        </div>
        <div class="cons-block">
          <strong>Trade-offs & Limitations:</strong>
          <ul>${consList}</ul>
        </div>
      </div>`;
    })
    .join('');

  return `<!-- ================================================================= -->
<!-- IDE Guide Content: ${episode.title} -->
<!-- Paste directly into Blogger HTML View (https://ideguide.blogspot.com/) -->
<!-- ================================================================= -->

<div class="ideguide-post-container">
  <style>
    .ideguide-post-container {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.8;
      color: #0f172a;
      max-width: 840px;
      margin: 0 auto;
    }
    .ideguide-post-container .disclaimer-banner {
      background: #fffbeb;
      border: 1px solid #fcd34d;
      border-left: 5px solid #d97706;
      border-radius: 8px;
      padding: 16px 20px;
      margin: 16px 0 24px 0;
      font-size: 0.92rem;
      color: #78350f;
    }
    .ideguide-post-container .disclaimer-header {
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
      font-size: 1rem;
    }
    .ideguide-post-container .disclaimer-body {
      margin: 0;
      line-height: 1.6;
    }
    .ideguide-post-container .disclaimer-body a {
      color: #92400e;
      font-weight: 600;
      text-decoration: underline;
    }
    .ideguide-post-container .lead-paragraph {
      font-size: 1.15rem;
      line-height: 1.75;
      color: #1e293b;
      margin: 20px 0;
    }
    .ideguide-post-container .post-toc {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px 24px;
      margin: 28px 0;
    }
    .ideguide-post-container .toc-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin: 0 0 12px 0;
      color: #0f172a;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .ideguide-post-container .toc-list {
      margin: 0;
      padding-left: 20px;
    }
    .ideguide-post-container .toc-list li {
      margin-bottom: 8px;
    }
    .ideguide-post-container .toc-list a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
    }
    .ideguide-post-container .toc-list a:hover {
      text-decoration: underline;
    }
    .ideguide-post-container h2.section-heading {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin: 40px 0 16px 0;
      padding-bottom: 8px;
      border-bottom: 2px solid #2563eb;
    }
    .ideguide-post-container .video-box {
      margin: 28px 0;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .ideguide-post-container .ides-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      margin: 20px 0;
    }
    @media (min-width: 640px) {
      .ideguide-post-container .ides-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .ideguide-post-container .ide-spec-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 18px 20px;
    }
    .ideguide-post-container .ide-spec-card h3 {
      margin: 0 0 8px 0;
      color: #2563eb;
      font-size: 1.25rem;
    }
    .ideguide-post-container .meta-tag {
      font-size: 0.85rem;
      color: #64748b;
      margin: 0 0 12px 0;
    }
    .ideguide-post-container .ide-spec-card ul {
      margin: 0;
      padding-left: 18px;
    }
    .ideguide-post-container .ide-spec-card li {
      margin-bottom: 6px;
      font-size: 0.92rem;
    }
    .ideguide-post-container .table-wrapper {
      overflow-x: auto;
      margin: 24px 0;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .ideguide-post-container table.comparison-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.92rem;
    }
    .ideguide-post-container table.comparison-table th,
    .ideguide-post-container table.comparison-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
    }
    .ideguide-post-container table.comparison-table th {
      background: #f1f5f9;
      color: #0f172a;
      font-weight: 700;
    }
    .ideguide-post-container .badge-verdict {
      display: inline-block;
      background: #dbeafe;
      color: #1d4ed8;
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 0.82rem;
      font-weight: 600;
    }
    .ideguide-post-container .pros-cons-grid {
      margin: 20px 0;
    }
    .ideguide-post-container .pros-cons-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 18px;
    }
    .ideguide-post-container .pros-cons-box h4 {
      margin: 0 0 12px 0;
      font-size: 1.15rem;
      color: #0f172a;
    }
    .ideguide-post-container .pros-cons-box ul {
      margin: 6px 0 14px 0;
      padding-left: 18px;
      font-size: 0.93rem;
    }
    .ideguide-post-container .cta-callout {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #ffffff;
      border-radius: 10px;
      padding: 28px 24px;
      text-align: center;
      margin: 40px 0 20px 0;
    }
    .ideguide-post-container .cta-callout h3 {
      margin: 0 0 8px 0;
      color: #ffffff;
      font-size: 1.45rem;
    }
    .ideguide-post-container .cta-callout p {
      margin: 0 0 18px 0;
      opacity: 0.95;
      font-size: 1rem;
    }
    .ideguide-post-container .cta-btn {
      display: inline-block;
      background: #ffffff;
      color: #1d4ed8;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.95rem;
    }
  </style>

  <!-- 1. Mandatory Non-Affiliation Disclaimer Banner -->
  ${legal.bloggerDisclaimerHtml}

  <!-- 2. Lead Introduction -->
  <p class="lead-paragraph"><strong>${episode.hook}</strong></p>
  <p>${episode.summary}</p>

  <!-- 3. Table of Contents (TOC) -->
  <nav class="post-toc" aria-label="Table of Contents">
    <div class="toc-title">📑 Table of Contents</div>
    <ol class="toc-list">
      <li><a href="#video-overview">1. Video Walkthrough & Hands-On Demo</a></li>
      <li><a href="#architectural-deep-dive">2. Architectural Specs & Capabilities</a></li>
      <li><a href="#feature-comparison">3. Head-to-Head Feature Comparison Matrix</a></li>
      <li><a href="#strengths-limitations">4. Strengths & Limitations (Pros & Cons)</a></li>
      <li><a href="#verdict-recommendations">5. Final Verdict & Who Should Choose What</a></li>
    </ol>
  </nav>

  <!-- 4. Video Embed Section (AMP Compatible) -->
  <section id="video-overview">
    <div class="video-box">
      <amp-youtube
        data-videoid="${episode.youtubeVideoId}"
        layout="responsive"
        width="480"
        height="270"
        credentials="omit">
      </amp-youtube>
    </div>
  </section>

  <!-- 5. Architectural Deep Dive -->
  <section id="architectural-deep-dive">
    <h2 class="section-heading">2. Architectural Specs & Capabilities</h2>
    <div class="ides-grid">
      ${idesCards}
    </div>
  </section>

  <!-- 6. Comparison Table -->
  <section id="feature-comparison">
    <h2 class="section-heading">3. Head-to-Head Feature Comparison</h2>
    <div class="table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Evaluation Category</th>
            <th>Tool A Details</th>
            <th>Tool B Details</th>
            <th>Verdict / Takeaway</th>
          </tr>
        </thead>
        <tbody>
          ${comparisonRows}
        </tbody>
      </table>
    </div>
  </section>

  <!-- 7. Pros & Cons -->
  <section id="strengths-limitations">
    <h2 class="section-heading">4. Strengths & Limitations</h2>
    <div class="pros-cons-grid">
      ${prosConsHtml}
    </div>
  </section>

  <!-- 8. Final Verdict & YouTube Call-to-Action -->
  <section id="verdict-recommendations">
    <h2 class="section-heading">5. Final Verdict & Recommendations</h2>
    <p>Choosing the right development environment depends on whether you prioritize instant keystroke latency, AST-safe refactoring, or autonomous AI pair programming.</p>

    <div class="cta-callout">
      <h3>Watch the Full Episode on YouTube</h3>
      <p>Subscribe to <strong>@IDEguide</strong> for weekly deep dives, hidden features, and real-time coding benchmarks.</p>
      <a href="${channel.url}" target="_blank" rel="noopener" class="cta-btn">Subscribe to @IDEguide on YouTube 🔔</a>
    </div>
  </section>
</div>
`.trim();
}

// Alias for backwards compatibility
export const generateBloggerAmpHtml = generateBloggerPostContent;
export const generateBloggerPostSnippet = generateBloggerPostContent;

export default { generateBloggerPostContent, generateBloggerAmpHtml, generateBloggerPostSnippet };
