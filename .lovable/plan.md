## What's happening

The Lovable preview renders correctly (I loaded `/cv` in a headless browser: no runtime errors, no console errors, all sections show). So the code isn't broken — the broken site is the deployed one at **alisaloosen.com** (GitHub Pages).

The project ships with:
- `.github/workflows/deploy.yml` that builds with `npm run build` and publishes `./dist` to GitHub Pages.
- `CNAME` files (root + `public/CNAME`) pointing to `alisaloosen.com`.
- `BrowserRouter` in `src/App.tsx` (needs SPA fallback on GH Pages for deep links like `/cv`).

Two things are likely going on:

1. **The latest workflow run failed or hasn't run**, so GH Pages is still serving an old/broken build (or the deploy step errored on a new commit).
2. **GitHub Pages repository settings** aren't set to "GitHub Actions" as the source, or the custom domain got detached.

## Recommended GitHub Pages settings

In the repo on GitHub → **Settings → Pages**:

- **Source**: `GitHub Actions` (NOT "Deploy from a branch"). The workflow in `.github/workflows/deploy.yml` uses `actions/deploy-pages@v4`, which requires this.
- **Custom domain**: `alisaloosen.com` (matches the `CNAME` file). Leave it set; don't remove.
- **Enforce HTTPS**: enabled.
- **Branch protection / environment**: the workflow needs the `github-pages` environment (created automatically on first deploy). Make sure it exists under Settings → Environments.
- **Workflow permissions** (Settings → Actions → General → Workflow permissions): "Read and write" is not required, but the workflow itself already declares `contents: read`, `pages: write`, `id-token: write`, which is correct.
- **DNS at your registrar** for `alisaloosen.com`:
  - Apex `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www` `CNAME` → `<username>.github.io`

## Plan to fix the broken site

1. **Check the latest Actions run** (`Actions` tab on GitHub). If the most recent "Deploy to GitHub Pages" run is red, open it and read the failed step:
   - If `Build` failed → paste the error here and I'll fix the code.
   - If `Deploy` failed with a Pages permission error → confirm Pages source is set to "GitHub Actions" (above).
2. **Verify Pages source** is "GitHub Actions" as described above. If it was set to a branch, switch it and re-run the workflow (`Actions → Deploy to GitHub Pages → Run workflow`).
3. **Verify the custom domain** is still set to `alisaloosen.com` in Settings → Pages, and that DNS still resolves (the four `A` records above).
4. **Add an SPA 404 fallback for deep links.** GitHub Pages doesn't do SPA fallback like Lovable hosting. Right now `alisaloosen.com/cv` on a hard refresh will 404. The standard fix is to add `public/404.html` that redirects into the SPA and a small script in `index.html` that restores the path. I'll add both if you want.
5. **Rebuild locally to catch build errors** (`npm run build`) once we know the Actions log. If the build works locally but fails in CI, it's usually a Node version or lockfile issue — easy to patch in `deploy.yml`.

## What I need from you

- Open the repo's **Actions** tab and tell me whether the latest run is green, red, or missing. If red, paste the failing step's log (or a screenshot).
- Confirm what you actually see at `alisaloosen.com` — blank page, 404, old content, or something else? That tells us whether it's a build failure vs a routing/DNS issue.

Once I know that, I'll either patch the workflow, add the SPA 404 fallback, or walk you through the exact Pages setting to flip.
