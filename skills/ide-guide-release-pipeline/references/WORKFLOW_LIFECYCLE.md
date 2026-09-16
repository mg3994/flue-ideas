# GitHub Action Release Workflow Lifecycle

This document describes how GitHub Actions triggers and orchestrates releases for the IDE Guide project.

## Triggers

1. **Tag Push (`refs/tags/v*`)**: Automatically triggers a production release when a semantic version tag (e.g. `v1.0.0`) is pushed to the repository.
2. **Manual Dispatch (`workflow_dispatch`)**: Allows manual execution from the GitHub Actions tab with optional parameters (e.g., target episode ID or draft release mode).
3. **Pull Requests / Main Push**: Runs automated validation tests to guard against regressions without creating a public release.

## Release Artifacts

Every release contains:
- `episode-*-youtube-script.md`: Markdown script for recording and YouTube upload.
- `episode-*-blogger-amp.html`: Valid standalone AMP HTML document.
- `episode-*-blogger-snippet.html`: Clean HTML body snippet to paste into Blogger post editor.
- `ide-guide-content-release.zip`: Complete bundle archive.
