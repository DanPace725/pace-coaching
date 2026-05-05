# Pace Coaching Site

This is a small Next.js site deployed on Vercel. The same update and deployment workflow should also work for the other coaching/marketing sites in this workspace that use the same `package.json` scripts.

## Quick Update Workflow

1. Open the site folder:

   ```bash
   cd pace-coaching-site/pace-coaching
   ```

2. Install dependencies if this is a fresh checkout:

   ```bash
   npm install
   ```

3. Run the local dev server while editing:

   ```bash
   npm run dev
   ```

   Next.js will print a local URL, usually `http://localhost:3000`.

4. Before deploying, check that the production build works:

   ```bash
   npm run build
   ```

5. Commit and push your changes. If the Vercel project is connected to Git, Vercel will automatically create a new deployment from the push.

## Vercel Deployments

### Normal Git-Based Deployment

Use this for most updates.

- Push to the production branch configured in Vercel, usually `main`, to update the live site.
- Push to another branch or open a pull request to get a preview deployment.
- Check the Vercel dashboard deployment page if a build fails.

### Manual CLI Deployment

Use this when you want to deploy directly from your machine.

First, make sure the Vercel CLI is available and you are logged in:

```bash
npx vercel login
```

If the local folder is not linked to the right Vercel project yet:

```bash
npx vercel link
```

Create a preview deployment:

```bash
npx vercel
```

Deploy directly to production:

```bash
npx vercel --prod
```

Force a fresh production deploy if Vercel cache seems stale:

```bash
npx vercel --prod --force
```

## Build Settings on Vercel

For this project, Vercel should detect Next.js automatically. If you need to configure it manually in the Vercel dashboard:

| Setting | Value |
| --- | --- |
| Framework Preset | Next.js |
| Root Directory | `pace-coaching` if deployed from the parent `pace-coaching-site` folder, or blank/default if this Git repo is connected directly |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | Let Vercel auto-detect |

If you deploy another coaching site from a sibling folder, set the Root Directory to that folder instead.

## Useful Commands

```bash
npm run dev      # local development server
npm run build    # production build check
npm run start    # serve the built app locally after npm run build
npm run lint     # lint check
```

Vercel CLI checks:

```bash
npx vercel ls
npx vercel inspect <deployment-url>
npx vercel logs <deployment-url>
npx vercel open
```

## Environment Variables

This site currently does not require environment variables. If you add any later:

1. Add them in Vercel Project Settings.
2. Pull them locally when needed:

   ```bash
   npx vercel env pull
   ```

3. Keep `.env.local` private and out of Git.

## Important Files

- `app/` - pages, layouts, and site UI.
- `public/downloads/` - static downloadable files, including the friction grid PDF.
- `next.config.ts` - Next.js configuration.
- `package.json` - scripts and dependencies.
- `.vercel/` - local Vercel project link. This is intentionally ignored by Git and should not be committed.

## If a Deploy Fails

1. Run `npm run build` locally from the site folder.
2. Confirm the Vercel Root Directory points to the correct site folder.
3. Check the deployment build logs in Vercel.
4. If using the CLI, run:

   ```bash
   npx vercel inspect <deployment-url>
   ```

5. If the live site still shows old content after a successful deploy, redeploy with:

   ```bash
   npx vercel --prod --force
   ```
