---
name: ide-guide-release-pipeline
description: Workflow and release pipeline standards for automating GitHub Releases that bundle YouTube video scripts and Blogger AMP HTML posts. Covers git tag triggers, manual dispatch parameters, asset verification, and publishing checklists.
license: Apache-2.0
metadata:
  ci: GitHub Actions
  target: GitHub Releases
---

# IDE Guide Release Pipeline Skill

This skill outlines the standards for the automated CI/CD pipeline using **GitHub Actions** to package and publish releases for the IDE Guide channel and blog.

## Pipeline Architecture

The release workflow produces structured content bundles whenever a version tag (`v*.*.*`) is pushed or when triggered manually via `workflow_dispatch`.

### Pipeline Stages

1. **Validation**:
   - Executes `npm run validate:skills` to ensure all skills adhere to specification.
   - Executes `npm run validate:content` to verify that all generated YouTube scripts and Blogger AMP HTML pages contain mandatory disclaimers, valid tags, and required structure.
2. **Compilation & Generation**:
   - Runs `npm run generate` to produce YouTube scripts (`.md`) and Blogger AMP files (`.html`) in `dist/releases/`.
3. **Packaging**:
   - Compresses all release files into a single bundle: `dist/ide-guide-content-release.zip`.
   - Generates dynamic release notes: `dist/RELEASE_NOTES.md`.
4. **GitHub Release Publishing**:
   - Deploys a GitHub Release with:
     - Release notes detailing topics covered, episode links, and publishing guidance.
     - Direct attachments of individual `.md` scripts and `.html` files.
     - Direct attachment of the bundled `.zip` archive.
