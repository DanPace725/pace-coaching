# Friction Point Website

This is the canonical public website for Friction Point. It is a Next.js site deployed through the existing GitHub repository and Vercel project.

## Linkage

- GitHub remote: `https://github.com/DanPace725/pace-coaching.git`
- Local Vercel linkage remains in `.vercel/project.json`.
- Moving this folder locally does not change the GitHub repository or Vercel project.

## Update Workflow

1. Run `npm run dev` for local review.
2. Run `npm run lint` and `npm run build` before committing.
3. Commit and push to the repository. Vercel will follow the branch configuration already set for the project.

## Canonical Content Sources

- Practice architecture: `../strategy/brand_architecture.md`
- Offer definitions: `../offers/offer_architecture.md`
- Method and boundaries: `../method/friction_point_method.md`
- Friction Grid family: `../../projects/friction-grid/`

The integrated interactive Grid is implemented at `app/grid/` and published at `/grid`. Its labels, prompts, scale, and boundaries should remain aligned with the canonical Grid family.

The website should translate those sources into plain public language. It should not introduce new offers, pricing, or diagnostic claims on its own.
