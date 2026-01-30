# Optimizely CMS SaaS Content Types

This skill teaches Claude how to create and modify content type definitions for this Optimizely CMS SaaS/Next.js project.

## Content Type Definition Structure

Content types are defined in `.opti-type.json` files located at:
```
src/components/cms/{category}/{TypeName}/{TypeName}.opti-type.json
```

### Base Types

| baseType | Purpose | Location |
|----------|---------|----------|
| `page` | Routable pages | `cms/page/` |
| `component` | Reusable blocks | `cms/component/` |
| `experience` | Visual Builder experiences | `cms/experience/` |
| `image` | Image media | `cms/image/` |
| `video` | Video media | `cms/video/` |
| `media` | Generic media | `cms/media/` |

### Naming Conventions

| Type | Pattern | Examples |
|------|---------|----------|
| Pages | `{Name}Page` or plain | `HomePage`, `CMSPage`, `StartPage` |
| Blocks | `{Name}Block` | `HeroBlock`, `ServicesBlock` |
| Item blocks | `{Name}ItemBlock` | `ServiceItem`, `TestimonialItemBlock` |
| Experiences | `{Name}Experience` | `BlankExperience`, `SEOExperience` |
| Media | `{Type}Media` | `ImageMedia`, `VideoMedia` |

## Property Types

### String Property (Short)
```json
{
  "title": {
    "type": "string",
    "format": "shortString",
    "displayName": "Title",
    "description": "Page title for SEO",
    "localized": true,
    "required": false,
    "group": "Information",
    "sortOrder": 0,
    "editorSettings": {}
  }
}
```

### String Property (Long/Default)
```json
{
  "description": {
    "type": "string",
    "displayName": "Description",
    "localized": true,
    "required": false,
    "group": "Information",
    "sortOrder": 10,
    "editorSettings": {}
  }
}
```

### Boolean Property
```json
{
  "showDecoration": {
    "type": "boolean",
    "displayName": "Show Decoration",
    "localized": false,
    "required": false,
    "group": "Information",
    "sortOrder": 25,
    "editorSettings": {}
  }
}
```

### Select One (Enum)
```json
{
  "platform": {
    "type": "string",
    "format": "selectOne",
    "required": true,
    "displayName": "Platform",
    "localized": false,
    "group": "Information",
    "sortOrder": 10,
    "editorSettings": {
      "options": ["facebook", "twitter", "linkedin", "github"]
    }
  }
}
```

### Content Area (Array of Content References)
```json
{
  "blocks": {
    "type": "array",
    "displayName": "Blocks",
    "localized": true,
    "required": false,
    "group": "Information",
    "sortOrder": 40,
    "editorSettings": {},
    "items": {
      "type": "content",
      "allowedTypes": ["HeroBlock", "ServicesBlock", "ContactBlock"],
      "restrictedTypes": []
    }
  }
}
```

### String Array
```json
{
  "highlights": {
    "type": "array",
    "displayName": "Highlights",
    "localized": true,
    "required": false,
    "group": "Information",
    "sortOrder": 10,
    "editorSettings": {},
    "items": {
      "type": "string",
      "format": "shortString"
    }
  }
}
```

## Complete Examples

### Page Type
```json
{
  "key": "ArticlePage",
  "displayName": "Article Page",
  "description": "A page for blog articles or news",
  "baseType": "page",
  "sortOrder": 100,
  "mayContainTypes": ["*"],
  "mediaFileExtensions": [],
  "compositionBehaviors": [],
  "properties": {
    "title": {
      "type": "string",
      "format": "shortString",
      "displayName": "Title",
      "localized": true,
      "required": true,
      "group": "Information",
      "sortOrder": 0,
      "editorSettings": {}
    },
    "summary": {
      "type": "string",
      "displayName": "Summary",
      "localized": true,
      "required": false,
      "group": "Information",
      "sortOrder": 10,
      "editorSettings": {}
    },
    "content": {
      "type": "array",
      "displayName": "Content Blocks",
      "localized": true,
      "required": false,
      "group": "Content",
      "sortOrder": 20,
      "editorSettings": {
        "maxItems": 20
      },
      "items": {
        "type": "content",
        "allowedTypes": ["HeroBlock", "TextBlock", "ImageBlock"],
        "restrictedTypes": []
      }
    }
  }
}
```

### Block Type
```json
{
  "key": "FeatureBlock",
  "displayName": "Feature Block",
  "description": "Highlights a single feature with icon and description",
  "baseType": "component",
  "sortOrder": 0,
  "mayContainTypes": [],
  "mediaFileExtensions": [],
  "compositionBehaviors": [],
  "properties": {
    "icon": {
      "type": "string",
      "format": "shortString",
      "displayName": "Icon Name",
      "description": "Lucide icon name (e.g., 'star', 'check')",
      "localized": false,
      "required": false,
      "group": "Information",
      "sortOrder": 0,
      "editorSettings": {}
    },
    "title": {
      "type": "string",
      "format": "shortString",
      "displayName": "Title",
      "localized": true,
      "required": true,
      "group": "Information",
      "sortOrder": 10,
      "editorSettings": {}
    },
    "description": {
      "type": "string",
      "displayName": "Description",
      "localized": true,
      "required": false,
      "group": "Information",
      "sortOrder": 20,
      "editorSettings": {}
    }
  }
}
```

## Best Practices

1. **Always include `key`** - Must match the type name exactly
2. **Add descriptions** - Help editors understand what the type is for
3. **Use `required: true`** for essential fields like titles
4. **Add `maxItems`** to content areas via `editorSettings` to prevent unbounded lists
5. **Group related properties** using the `group` field
6. **Use `sortOrder`** to control property display order in editor
7. **Set `localized: true`** for user-facing text, `false` for settings/config

## After Creating Content Types

1. Create the React component in `index.tsx`
2. Create the GraphQL fragment in `{TypeName}.{category}.graphql`
3. Run `yarn compile` to regenerate GraphQL types
4. The CLI will auto-register in the factory index
