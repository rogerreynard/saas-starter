# Optimizely CMS React Components

This skill teaches Claude how to create React components for Optimizely CMS content types in this project.

## Component File Structure

Each content type has a folder with three files:
```
src/components/cms/{category}/{TypeName}/
├── index.tsx                      # React component
├── {TypeName}.opti-type.json      # Content type definition
└── {TypeName}.{category}.graphql  # GraphQL fragment
```

## Component Patterns

### Block/Component Pattern

For content types with `baseType: "component"`:

```typescript
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { FeatureBlockDataFragmentDoc, type FeatureBlockDataFragment } from "@/gql/graphql";

/**
 * Feature Block
 * Highlights a single feature with icon and description
 */
export const FeatureBlockComponent : CmsComponent<FeatureBlockDataFragment> = ({ data, editProps }) => {
    return (
        <CmsEditable
            as="div"
            className="p-6 rounded-lg bg-white shadow-sm"
            {...editProps}
        >
            {data.icon && (
                <div className="text-blue-600 mb-4">
                    {/* Icon rendering */}
                </div>
            )}
            {data.title && (
                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
            )}
            {data.description && (
                <p className="text-gray-600">{data.description}</p>
            )}
        </CmsEditable>
    );
}

FeatureBlockComponent.displayName = "Feature Block (Component/FeatureBlock)"
FeatureBlockComponent.getDataFragment = () => ['FeatureBlockData', FeatureBlockDataFragmentDoc]

export default FeatureBlockComponent
```

### Page Pattern

For content types with `baseType: "page"`:

```typescript
import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { ArticlePageDataFragmentDoc, type ArticlePageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql";

/**
 * Article Page
 */
export const ArticlePagePage : CmsComponent<ArticlePageDataFragment> = ({ data }) => {
    return (
        <article className="mx-auto px-4 max-w-4xl">
            {data.title && (
                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            )}
            {data.summary && (
                <p className="text-xl text-gray-600 mb-8">{data.summary}</p>
            )}
            {/* Content blocks rendered via factory */}
        </article>
    );
}

ArticlePagePage.displayName = "Article Page (Page/ArticlePage)"
ArticlePagePage.getDataFragment = () => ['ArticlePageData', ArticlePageDataFragmentDoc]
ArticlePagePage.getMetaData = async (contentLink, locale, client) => {
    // Fetch additional data if needed for metadata
    return {
        // Return Next.js Metadata object
    }
}

export default ArticlePagePage
```

### Experience Pattern (Visual Builder)

For content types with `baseType: "experience"`:

```typescript
import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import {
    ExperienceDataFragmentDoc,
    CustomExperienceDataFragmentDoc,
    type CustomExperienceDataFragment
} from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql";

/**
 * Custom Experience
 */
export const CustomExperienceExperience : CmsComponent<CustomExperienceDataFragment> = ({ data, ctx }) => {
    const composition = getFragmentData(ExperienceDataFragmentDoc, data)?.composition;

    return (
        <CmsEditable
            as="div"
            className="mx-auto px-2 container"
            cmsFieldName="unstructuredData"
            ctx={ctx}
        >
            {composition && isNode(composition) && (
                <OptimizelyComposition node={composition} ctx={ctx} />
            )}
        </CmsEditable>
    );
}

CustomExperienceExperience.displayName = "Custom Experience (Experience/CustomExperience)"
CustomExperienceExperience.getDataFragment = () => ['CustomExperienceData', CustomExperienceDataFragmentDoc]
CustomExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    return {}
}

export default CustomExperienceExperience
```

## Key Imports

```typescript
// For blocks/components
import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

// For pages/experiences
import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";

// For Visual Builder composition
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";

// For fragment data extraction
import { getFragmentData } from "@/gql/fragment-masking";

// For SDK access in getMetaData
import { getSdk } from "@/gql";

// Generated types (after yarn compile)
import { TypeNameDataFragmentDoc, type TypeNameDataFragment } from "@/gql/graphql";
```

## Component Props

| Prop | Available In | Type | Purpose |
|------|--------------|------|---------|
| `data` | All | Fragment type | Content data from GraphQL |
| `editProps` | Blocks | Object | Visual editing attributes |
| `ctx` | Pages/Experiences | Context | Request context for nested rendering |

## Required Component Properties

Every component must have:

1. **`displayName`** - Format: `"{Display Name} ({Category}/{TypeName})"`
2. **`getDataFragment`** - Returns tuple: `[fragmentName, fragmentDoc]`
3. **`getMetaData`** (pages/experiences only) - Async function for metadata

## CmsEditable Usage

Wrap content in `CmsEditable` for on-page editing support:

```typescript
// As a div (default)
<CmsEditable className="..." {...editProps}>
    {content}
</CmsEditable>

// As a specific element
<CmsEditable as="section" className="..." {...editProps}>
    {content}
</CmsEditable>

// With field name for Visual Builder
<CmsEditable as="div" cmsFieldName="fieldName" ctx={ctx}>
    {content}
</CmsEditable>
```

## Best Practices

1. **All components are Server Components** - No `'use client'` directive
2. **Null-check all data** - Properties may be undefined
3. **Use Tailwind CSS** for styling
4. **Keep components focused** - One component per content type
5. **Import from `@/gql/graphql`** after running `yarn compile`

## After Creating Components

1. Run `yarn compile` to generate GraphQL types
2. Factory registration is automatic via CLI-generated index files
3. Test with `yarn dev` and create content in CMS
