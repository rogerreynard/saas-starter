# Optimizely GraphQL Patterns

This skill teaches Claude how to write GraphQL fragments for Optimizely CMS content types in this project.

## Fragment File Naming

| Content Category | File Pattern | Location |
|------------------|--------------|----------|
| Pages | `{TypeName}.page.graphql` | `cms/page/{TypeName}/` |
| Components/Blocks | `{TypeName}.component.graphql` | `cms/component/{TypeName}/` |
| Experiences | `{TypeName}.experience.graphql` | `cms/experience/{TypeName}/` |
| Images | `{TypeName}.image.graphql` | `cms/image/{TypeName}/` |
| Videos | `{TypeName}.video.graphql` | `cms/video/{TypeName}/` |
| Media | `{TypeName}.media.graphql` | `cms/media/{TypeName}/` |

## Fragment Naming Convention

All fragments use `{TypeName}Data` suffix:

```graphql
fragment HeroBlockData on HeroBlock {
  # properties
}
```

## Basic Fragment Patterns

### Simple Block Fragment
```graphql
fragment FeatureBlockData on FeatureBlock {
  icon
  title
  description
}
```

### Page Fragment with Content Area
```graphql
fragment ArticlePageData on ArticlePage {
  title
  summary
  publishDate
  content { ...BlockData }
}
```

### Block with Nested Content
```graphql
fragment ServicesBlockData on ServicesBlock {
  title
  subtitle
  services { ...IContentListItem }
}
```

### Experience Fragment
```graphql
fragment CustomExperienceData on CustomExperience {
  title
  description
  ...ExperienceData
}
```

### Media Placeholder Fragment
For media types without custom properties:
```graphql
fragment ImageMediaData on ImageMedia {
  empty: _metadata { key }
}
```

## Built-in Fragment References

| Fragment | Purpose | Use Case |
|----------|---------|----------|
| `...BlockData` | Base block data + all block fragments | Content areas with mixed blocks |
| `...IContentListItem` | Content list item with metadata | Inline content arrays |
| `...ExperienceData` | Visual Builder composition data | Experience types |
| `...IContentData` | Base content metadata | All content types |
| `...ElementData` | Visual Builder element data | Element types |

## Property Type Mapping

| .opti-type.json Type | GraphQL Field |
|---------------------|---------------|
| `string` | Direct field name |
| `boolean` | Direct field name |
| `array` with `items.type: "content"` | `fieldName { ...BlockData }` |
| `array` with `items.type: "string"` | Direct field name (returns `[String]`) |

## Complete Examples

### Page with SEO Fields
```graphql
fragment BlogPageData on BlogPage {
  # SEO fields
  title
  shortDescription
  keywords

  # Content fields
  heroImage { ...IContentData }
  author
  publishDate

  # Content area
  body { ...BlockData }
}
```

### Block with Multiple Content References
```graphql
fragment TeamBlockData on TeamBlock {
  title
  subtitle
  teamMembers { ...IContentListItem }
  ctaText
  ctaLink
}
```

### Experience with SEO
```graphql
fragment LandingExperienceData on LandingExperience {
  # SEO fields (optional for experiences)
  title
  shortDescription
  keywords

  # Required for Visual Builder
  ...ExperienceData
}
```

## Codegen Injection Rules

The codegen automatically injects fragments based on file paths:

| Path Pattern | Injected Into |
|--------------|---------------|
| `cms/page/**/*.graphql` | `PageData` |
| `cms/experience/**/*.graphql` | `PageData` |
| `cms/component/**/*.graphql` | `BlockData` |
| `cms/element/**/*.graphql` | `ElementData` |

This means all page/experience fragments are available via `...PageData` and all block fragments via `...BlockData`.

## After Creating Fragments

1. Run `yarn compile` to regenerate types
2. Import from `@/gql/graphql`:
   ```typescript
   import {
     TypeNameDataFragmentDoc,
     type TypeNameDataFragment
   } from "@/gql/graphql";
   ```
3. Use in component's `getDataFragment`:
   ```typescript
   Component.getDataFragment = () => ['TypeNameData', TypeNameDataFragmentDoc]
   ```

## Troubleshooting

If types aren't generated:
1. Check fragment name matches `{TypeName}Data`
2. Check file extension matches category (`.page.graphql`, `.component.graphql`, etc.)
3. Run `yarn compile --verbose` for detailed errors
4. Ensure the content type exists in CMS with matching `key`
