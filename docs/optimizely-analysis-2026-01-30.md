# Optimizely CMS Analysis Report

**Generated**: 2026-01-30
**Project Path**: c:\repos\Optimizely\saas-starter

## Summary

- **Platform**: Optimizely CMS SaaS (Headless) with Next.js 14
- **SDK Version**: @remkoj/optimizely-* v5.2.0
- **Runtime**: Node.js with Yarn 4.12.0
- **Deployment**: Headless Content Cloud (Vercel/Netlify compatible)
- **Features**: Optimizely Graph, Visual Builder, CMS Preview, On-Page Editing, DAM Integration
- **Issues Found**: 47 (2 Critical, 22 Warning, 23 Info)

## Scores

| Category | Score | Critical | Warning | Info |
|----------|-------|----------|---------|------|
| Architecture | B+ | 0 | 2 | 4 |
| Content Modeling | B | 0 | 15 | 23+ |
| Security | D | 2 | 3 | 2 |
| Performance | B+ | 0 | 4 | 2 |
| Code Quality | B+ | 0 | 2 | 5 |
| Dependencies | C | 0 | 4 | 3 |
| Conventions | B- | 0 | 12 | 7 |

---

## Critical Issues

### SEC-002: Hardcoded Credentials in .env File (CRITICAL)

**Location**: `c:\repos\Optimizely\saas-starter\.env`

The `.env` file contains actual credentials and is committed to the repository. The `.gitignore` only excludes `.env*.local` but NOT the base `.env` file.

**Exposed credentials**:
- `OPTIMIZELY_CMS_CLIENT_ID` / `OPTIMIZELY_CMS_CLIENT_SECRET`
- `OPTIMIZELY_GRAPH_SECRET` / `OPTIMIZELY_GRAPH_APP_KEY` / `OPTIMIZELY_GRAPH_SINGLE_KEY`

**Immediate Actions Required**:
1. Rotate all exposed credentials immediately
2. Add `.env` to `.gitignore`
3. Create `.env.example` with placeholder values
4. Use deployment platform environment variables

### SEC-002: Hardcoded Fallback CMS URL in Source Code

**Location**: `src/channel.ts:4`

```typescript
const cms_url = process.env.OPTIMIZELY_CMS_URL ?? 'https://app-rba101saasx6b3qt002.cms.optimizely.com';
```

**Action**: Remove hardcoded fallback or use explicit error if not configured.

---

## Warnings

### Security Warnings

| Code | Location | Description |
|------|----------|-------------|
| SEC-004 | `.env:20` | Weak placeholder publish token `optly-PUBLISH_TOKEN` |
| SEC-006 | `next.config.mjs:28` | Trailing slash in allowedOrigins may cause issues |
| SEC-HDR | `next.config.mjs` | Missing security headers (X-Frame-Options, CSP, etc.) |

### Architecture Warnings

| Code | Location | Description |
|------|----------|-------------|
| ARCH-W001 | `src/components/cms/**` | All 30 components render placeholder JSON instead of UI |
| ARCH-W002 | `src/components/cms/page/**/index.tsx` | Unused `sdk` variable in getMetaData functions |

### Content Modeling Warnings

| Code | Location | Description |
|------|----------|-------------|
| CM-002 | `component/TestimonialItem/` | Duplicate of TestimonialItemBlock |
| CM-002 | `media/GenericMedia123/` | Duplicate of GenericMedia |
| CM-003 | Multiple files | 13 content areas without item limits |
| CM-004 | Multiple files | 9 essential properties missing `required: true` |

### Performance Warnings

| Code | Location | Description |
|------|----------|-------------|
| PERF-001 | `src/gql/client.ts` | GraphQL queries without explicit limits |
| PERF-IMG | `src/components/cms/image/` | ImageMedia not using next/image optimization |
| PERF-FRAG | `src/gql/client.ts` | All 20+ block fragments included in every query |
| PERF-PLACEHOLDER | `src/components/cms/**` | Components use JSON.stringify for output |

### Code Quality Warnings

| Code | Location | Description |
|------|----------|-------------|
| CQ-003 | Multiple async functions | 9 instances missing try/catch error handling |
| CQ-ERR | `src/app/layout.tsx` | Missing React Error Boundary |

### Dependency Warnings

| Code | Package | Description |
|------|---------|-------------|
| DEP-001 | next@14.2.35 | High severity vulnerability (GHSA-h25m-26qc-wcjf) |
| DEP-001 | next@14.2.35 | Moderate vulnerability (GHSA-9g9p-9gw9-jx7f) |
| DEP-001 | eslint@8.57.1 | Moderate vulnerability (GHSA-p5wg-g6qr-c7cg) |
| DEP-002 | @remkoj/optimizely-cms-api | Version 5.1.7 mismatched with other packages at 5.2.0 |

### Convention Warnings

| Code | Location | Description |
|------|----------|-------------|
| CONV-001 | 8 component types | Missing proper suffixes (Block/Element/Page) |
| CONV-001 | `HelloWorld.opti-type.json` | Property naming issues |
| CONV-008 | TestimonialItem/TestimonialItemBlock | Duplicate content types |
| CONV-008 | GenericMedia/GenericMedia123 | Duplicate media types |

---

## Informational Items

### Architecture
- Limited API routes (only publish webhook) - expected for starter
- Hardcoded CMS URL fallback in channel.ts
- Duplicate domain resolution logic across files
- Custom header component not using CMS data

### Content Modeling
- 14+ content types missing descriptions
- Nearly all properties have empty description fields
- Minor property naming inconsistencies (src vs imageSource)

### Performance
- Redundant IContentListItem fragment wrapper
- 100% server components (excellent)

### Code Quality
- 7 unused `sdk` variables in getMetaData functions
- 1 console.log statement in production code
- Generated GraphQL code contains `any` types (expected)

### Dependencies
- Major updates available: Next.js 16, React 19, ESLint 9
- Patched graphql-codegen package may block upgrades
- Dual lock files (yarn.lock and package-lock.json)

### Conventions
- Redundant component naming (HomePagePage, BlankExperienceExperience)
- Header/Footer in page/ folder but not page types
- Test content type TedTestBlock found

---

## Recommendations

### Immediate Priority (Security)

1. **Rotate all credentials** exposed in the committed `.env` file
2. **Add `.env` to `.gitignore`** and create `.env.example`
3. **Remove hardcoded CMS URL** from `src/channel.ts`
4. **Set strong publish token** for production (`OPTIMIZELY_PUBLISH_TOKEN`)

### High Priority

5. **Add security headers** to `next.config.mjs`:
   ```javascript
   async headers() {
     return [{
       source: '/:path*',
       headers: [
         { key: 'X-Content-Type-Options', value: 'nosniff' },
         { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
       ],
     }];
   }
   ```

6. **Add error handling** to async operations in sitemap.ts and getMetaData functions

7. **Add React Error Boundary** to layout.tsx

8. **Align @remkoj package versions** - update to ^5.2.0:
   ```json
   "@remkoj/optimizely-cms-api": "^5.2.0",
   "@remkoj/optimizely-cms-cli": "^5.2.0"
   ```

### Medium Priority

9. **Implement actual UI rendering** in placeholder components
10. **Implement ImageMedia** using `next/image` for optimization
11. **Add item limits** to content areas with `maxItems` in editorSettings
12. **Add required validation** to essential fields (titles, labels, URLs)
13. **Remove duplicate content types**:
    - Delete `TestimonialItem` (keep `TestimonialItemBlock`)
    - Delete `GenericMedia123` (keep `GenericMedia`)

### Low Priority

14. **Add descriptions** to content types and properties for editor experience
15. **Standardize naming conventions** - add proper suffixes to element types
16. **Remove unused code** - sdk variables in getMetaData, console.log statements
17. **Remove package-lock.json** (project uses Yarn)
18. **Extract domain resolution** to shared utility function

---

## Content Types Summary

| Type | Count | Examples |
|------|-------|----------|
| Pages | 5 | CMSPage, HomePage, StartPage, Header, Footer |
| Blocks | 19 | HeroBlock, ServicesBlock, ContactBlock, TestimonialsBlock |
| Experiences | 2 | BlankExperience, SEOExperience |
| Media | 4 | ImageMedia, VideoMedia, GenericMedia, GenericMedia123 |
| **Total** | **30** | |

---

## Dependency Status

| Package | Version | Status |
|---------|---------|--------|
| next | ^14.2.35 | 3 vulnerabilities, upgrade blocked by @remkoj |
| react | ^18.3.1 | OK |
| @remkoj/optimizely-cms-nextjs | ^5.2.0 | OK |
| @remkoj/optimizely-cms-api | ^5.1.7 | Needs update to 5.2.0 |
| @remkoj/optimizely-cms-cli | ^5.1.7 | Needs update to 5.2.0 |
| eslint | ^8.57.1 | 1 vulnerability, upgrade blocked by eslint-config-next |
| typescript | ^5.9.3 | OK |

---

## Positive Findings

- **100% Server Components** - No client-side rendering, optimal for SEO and performance
- **Proper caching configuration** - On-demand revalidation via webhooks
- **Type-safe GraphQL** - Generated types from codegen
- **Clean component factory pattern** - Follows SDK best practices
- **No N+1 query patterns** - Single GraphQL queries with fragments
- **Proper HMAC authentication** - Draft content protected
- **Good folder structure** - Clear separation of concerns
- **Excellent GraphQL conventions** - Consistent fragment and file naming

---

*Report generated by Optimizely CMS Analyzer*
