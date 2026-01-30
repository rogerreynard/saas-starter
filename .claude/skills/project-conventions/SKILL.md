# Project Conventions

This skill documents the conventions and patterns used in this Optimizely CMS SaaS/Next.js project.

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [[...path]]/page.tsx      # Dynamic CMS page route
│   ├── api/content/publish/      # Webhook API
│   ├── preview/page.tsx          # Preview mode
│   ├── layout.tsx                # Root layout
│   ├── sitemap.ts                # Dynamic sitemap
│   └── robots.ts                 # Robots.txt
├── components/
│   ├── cms/                      # CMS content components
│   │   ├── component/            # Blocks (baseType: component)
│   │   ├── page/                 # Pages (baseType: page)
│   │   ├── experience/           # Visual Builder (baseType: experience)
│   │   ├── image/                # Images (baseType: image)
│   │   ├── video/                # Videos (baseType: video)
│   │   ├── media/                # Generic media (baseType: media)
│   │   ├── node.tsx              # Visual Builder node renderer
│   │   └── index.ts              # Main factory aggregator
│   ├── error-boundary.tsx        # React Error Boundary
│   └── factory.ts                # Component factory init
├── gql/                          # Generated GraphQL (do not edit)
├── lib/
│   ├── utils.ts                  # Utility functions (cn)
│   └── domain.ts                 # Domain resolution utility
├── api.ts                        # Shared client/SDK instances
└── channel.ts                    # Channel configuration
```

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **CMS SDK**: @remkoj/optimizely-* v5.2.0
- **Package Manager**: Yarn 4.x
- **GraphQL**: Codegen with Optimizely Graph preset

## Commands

| Command | Purpose |
|---------|---------|
| `yarn dev` | Start development server |
| `yarn build` | Build + create webhook |
| `yarn compile` | Generate GraphQL types |
| `yarn lint` | Run ESLint |
| `yarn format` | Run Prettier |

## Creating New Content Types

1. **Create folder structure**:
   ```
   src/components/cms/{category}/{TypeName}/
   ├── index.tsx
   ├── {TypeName}.opti-type.json
   └── {TypeName}.{category}.graphql
   ```

2. **Define content type** in `.opti-type.json`

3. **Create GraphQL fragment** with `{TypeName}Data` naming

4. **Create React component** implementing `CmsComponent<{TypeName}DataFragment>`

5. **Run `yarn compile`** to generate types

6. **Factory registration** is automatic via CLI

## Naming Conventions

### Content Types
- Pages: `{Name}Page` or plain name (e.g., `HomePage`, `CMSPage`)
- Blocks: `{Name}Block` (e.g., `HeroBlock`, `ServicesBlock`)
- Items: `{Name}Item` or `{Name}ItemBlock` (e.g., `ServiceItem`)
- Experiences: `{Name}Experience` (e.g., `BlankExperience`)
- Media: `{Type}Media` (e.g., `ImageMedia`, `VideoMedia`)

### Files
- GraphQL: `{TypeName}.{category}.graphql`
- Types: `{TypeName}.opti-type.json`
- Components: `index.tsx` (default export)

### Code
- Components: `{TypeName}Component` or `{TypeName}{Category}` (e.g., `HeroBlockComponent`, `HomePagePage`)
- Fragments: `{TypeName}Data` (e.g., `HeroBlockData`)
- Fragment docs: `{TypeName}DataFragmentDoc`

## Import Patterns

```typescript
// SDK imports
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";

// Project imports (use aliases)
import { getSdk } from "@/gql";
import { TypeDataFragmentDoc, type TypeDataFragment } from "@/gql/graphql";
import { cn } from "@/lib/utils";
import { getSiteUrl } from "@/lib/domain";
```

## Component Requirements

Every CMS component must have:

1. **Type annotation**: `CmsComponent<FragmentType>`
2. **`displayName`**: `"{Display Name} ({Category}/{TypeName})"`
3. **`getDataFragment`**: Returns `[fragmentName, fragmentDoc]`
4. **`getMetaData`** (pages/experiences): Async metadata function

## Server Components

- All CMS components are Server Components (no `'use client'`)
- Use `@remkoj/optimizely-cms-react/rsc` imports
- No React hooks (useState, useEffect, etc.)
- Client components go in separate files with `'use client'` directive

## Environment Variables

Required in `.env.local`:
```
OPTIMIZELY_CMS_URL=https://your-instance.cms.optimizely.com/
OPTIMIZELY_CMS_CLIENT_ID=...
OPTIMIZELY_CMS_CLIENT_SECRET=...
OPTIMIZELY_GRAPH_SECRET=...
OPTIMIZELY_GRAPH_APP_KEY=...
OPTIMIZELY_GRAPH_SINGLE_KEY=...
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com
OPTIMIZELY_PUBLISH_TOKEN=...
SITE_DOMAIN=your-domain.vercel.app
```

## Styling

- Use Tailwind CSS classes
- Use `cn()` utility for conditional classes:
  ```typescript
  import { cn } from "@/lib/utils";

  <div className={cn("base-class", condition && "conditional-class")} />
  ```

## Error Handling

- Wrap async operations in try/catch
- Use `ErrorBoundary` component for graceful UI failures
- Log errors with `console.error()` for debugging

## Caching

- Pages use ISR with webhook-based revalidation
- `revalidate = false` - cache until webhook
- `fetchCache = "default-cache"` - cache fetch results
- Preview mode disables caching automatically
