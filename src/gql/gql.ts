/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment AvailabilityBlockData on AvailabilityBlock {\n  availability\n  projectTypes\n}": typeof types.AvailabilityBlockDataFragmentDoc,
    "fragment ContactBlockData on ContactBlock {\n  title\n  description\n}": typeof types.ContactBlockDataFragmentDoc,
    "fragment FooterColumnData on FooterColumn {\n  title\n  links {\n    ...IContentListItem\n  }\n}": typeof types.FooterColumnDataFragmentDoc,
    "fragment HelloWorldData on HelloWorld {\n  message\n  detailedmessage\n}": typeof types.HelloWorldDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  title\n  subtitle\n  showDecoration\n  decorationColorsPrimary\n  decorationColorsSecondary\n}": typeof types.HeroBlockDataFragmentDoc,
    "fragment LogoItemBlockData on LogoItemBlock {\n  src\n  alt\n}": typeof types.LogoItemBlockDataFragmentDoc,
    "fragment LogosBlockData on LogosBlock {\n  logos {\n    ...IContentListItem\n  }\n}": typeof types.LogosBlockDataFragmentDoc,
    "fragment NavItemData on NavItem {\n  label\n  href\n}": typeof types.NavItemDataFragmentDoc,
    "fragment PortfolioGridBlockData on PortfolioGridBlock {\n  title\n  items {\n    ...IContentListItem\n  }\n}": typeof types.PortfolioGridBlockDataFragmentDoc,
    "fragment PortfolioItemBlockData on PortfolioItemBlock {\n  title\n  description\n  imageUrl\n  link\n}": typeof types.PortfolioItemBlockDataFragmentDoc,
    "fragment ProfileBlockData on ProfileBlock {\n  imageSrc\n  name\n  title\n  bio\n}": typeof types.ProfileBlockDataFragmentDoc,
    "fragment ServiceItemData on ServiceItem {\n  title\n  description\n  icon\n}": typeof types.ServiceItemDataFragmentDoc,
    "fragment ServicesBlockData on ServicesBlock {\n  services {\n    ...IContentListItem\n  }\n}": typeof types.ServicesBlockDataFragmentDoc,
    "fragment SocialLinkData on SocialLink {\n  platform\n  href\n}": typeof types.SocialLinkDataFragmentDoc,
    "fragment StoryBlockData on StoryBlock {\n  story\n  highlights\n}": typeof types.StoryBlockDataFragmentDoc,
    "fragment TedTestBlockData on TedTestBlock {\n  stringTest\n}": typeof types.TedTestBlockDataFragmentDoc,
    "fragment TestimonialItemData on TestimonialItem {\n  fullName\n  position\n  content\n  avatarSrc\n}": typeof types.TestimonialItemDataFragmentDoc,
    "fragment TestimonialItemBlockData on TestimonialItemBlock {\n  fullName\n  position\n  content\n  avatarSrc\n}": typeof types.TestimonialItemBlockDataFragmentDoc,
    "fragment TestimonialsBlockData on TestimonialsBlock {\n  title\n  testimonials {\n    ...IContentListItem\n  }\n}": typeof types.TestimonialsBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment SEOExperienceData on SEOExperience {\n  title\n  shortDescription\n  keywords\n  ...ExperienceData\n}": typeof types.SEOExperienceDataFragmentDoc,
    "fragment ImageMediaData on ImageMedia {\n  empty: _metadata {\n    key\n  }\n}": typeof types.ImageMediaDataFragmentDoc,
    "fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}": typeof types.GenericMediaDataFragmentDoc,
    "fragment GenericMedia123Data on GenericMedia123 {\n  empty: _metadata {\n    key\n  }\n}": typeof types.GenericMedia123DataFragmentDoc,
    "fragment CMSPageData on CMSPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}": typeof types.CMSPageDataFragmentDoc,
    "fragment FooterData on Footer {\n  copyrightText\n  columns {\n    ...BlockData\n  }\n  socialLinks {\n    ...BlockData\n  }\n}": typeof types.FooterDataFragmentDoc,
    "fragment HeaderData on Header {\n  logo\n  navItems {\n    ...BlockData\n  }\n  ctaText\n  ctaHref\n}": typeof types.HeaderDataFragmentDoc,
    "fragment HomePageData on HomePage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}": typeof types.HomePageDataFragmentDoc,
    "fragment StartPageData on StartPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}": typeof types.StartPageDataFragmentDoc,
    "fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}": typeof types.VideoMediaDataFragmentDoc,
    "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": typeof types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": typeof types.getContentByIdDocument,
};
const documents: Documents = {
    "fragment AvailabilityBlockData on AvailabilityBlock {\n  availability\n  projectTypes\n}": types.AvailabilityBlockDataFragmentDoc,
    "fragment ContactBlockData on ContactBlock {\n  title\n  description\n}": types.ContactBlockDataFragmentDoc,
    "fragment FooterColumnData on FooterColumn {\n  title\n  links {\n    ...IContentListItem\n  }\n}": types.FooterColumnDataFragmentDoc,
    "fragment HelloWorldData on HelloWorld {\n  message\n  detailedmessage\n}": types.HelloWorldDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  title\n  subtitle\n  showDecoration\n  decorationColorsPrimary\n  decorationColorsSecondary\n}": types.HeroBlockDataFragmentDoc,
    "fragment LogoItemBlockData on LogoItemBlock {\n  src\n  alt\n}": types.LogoItemBlockDataFragmentDoc,
    "fragment LogosBlockData on LogosBlock {\n  logos {\n    ...IContentListItem\n  }\n}": types.LogosBlockDataFragmentDoc,
    "fragment NavItemData on NavItem {\n  label\n  href\n}": types.NavItemDataFragmentDoc,
    "fragment PortfolioGridBlockData on PortfolioGridBlock {\n  title\n  items {\n    ...IContentListItem\n  }\n}": types.PortfolioGridBlockDataFragmentDoc,
    "fragment PortfolioItemBlockData on PortfolioItemBlock {\n  title\n  description\n  imageUrl\n  link\n}": types.PortfolioItemBlockDataFragmentDoc,
    "fragment ProfileBlockData on ProfileBlock {\n  imageSrc\n  name\n  title\n  bio\n}": types.ProfileBlockDataFragmentDoc,
    "fragment ServiceItemData on ServiceItem {\n  title\n  description\n  icon\n}": types.ServiceItemDataFragmentDoc,
    "fragment ServicesBlockData on ServicesBlock {\n  services {\n    ...IContentListItem\n  }\n}": types.ServicesBlockDataFragmentDoc,
    "fragment SocialLinkData on SocialLink {\n  platform\n  href\n}": types.SocialLinkDataFragmentDoc,
    "fragment StoryBlockData on StoryBlock {\n  story\n  highlights\n}": types.StoryBlockDataFragmentDoc,
    "fragment TedTestBlockData on TedTestBlock {\n  stringTest\n}": types.TedTestBlockDataFragmentDoc,
    "fragment TestimonialItemData on TestimonialItem {\n  fullName\n  position\n  content\n  avatarSrc\n}": types.TestimonialItemDataFragmentDoc,
    "fragment TestimonialItemBlockData on TestimonialItemBlock {\n  fullName\n  position\n  content\n  avatarSrc\n}": types.TestimonialItemBlockDataFragmentDoc,
    "fragment TestimonialsBlockData on TestimonialsBlock {\n  title\n  testimonials {\n    ...IContentListItem\n  }\n}": types.TestimonialsBlockDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "fragment SEOExperienceData on SEOExperience {\n  title\n  shortDescription\n  keywords\n  ...ExperienceData\n}": types.SEOExperienceDataFragmentDoc,
    "fragment ImageMediaData on ImageMedia {\n  empty: _metadata {\n    key\n  }\n}": types.ImageMediaDataFragmentDoc,
    "fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}": types.GenericMediaDataFragmentDoc,
    "fragment GenericMedia123Data on GenericMedia123 {\n  empty: _metadata {\n    key\n  }\n}": types.GenericMedia123DataFragmentDoc,
    "fragment CMSPageData on CMSPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}": types.CMSPageDataFragmentDoc,
    "fragment FooterData on Footer {\n  copyrightText\n  columns {\n    ...BlockData\n  }\n  socialLinks {\n    ...BlockData\n  }\n}": types.FooterDataFragmentDoc,
    "fragment HeaderData on Header {\n  logo\n  navItems {\n    ...BlockData\n  }\n  ctaText\n  ctaHref\n}": types.HeaderDataFragmentDoc,
    "fragment HomePageData on HomePage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}": types.HomePageDataFragmentDoc,
    "fragment StartPageData on StartPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}": types.StartPageDataFragmentDoc,
    "fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}": types.VideoMediaDataFragmentDoc,
    "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment AvailabilityBlockData on AvailabilityBlock {\n  availability\n  projectTypes\n}"): (typeof documents)["fragment AvailabilityBlockData on AvailabilityBlock {\n  availability\n  projectTypes\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContactBlockData on ContactBlock {\n  title\n  description\n}"): (typeof documents)["fragment ContactBlockData on ContactBlock {\n  title\n  description\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FooterColumnData on FooterColumn {\n  title\n  links {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment FooterColumnData on FooterColumn {\n  title\n  links {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HelloWorldData on HelloWorld {\n  message\n  detailedmessage\n}"): (typeof documents)["fragment HelloWorldData on HelloWorld {\n  message\n  detailedmessage\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlockData on HeroBlock {\n  title\n  subtitle\n  showDecoration\n  decorationColorsPrimary\n  decorationColorsSecondary\n}"): (typeof documents)["fragment HeroBlockData on HeroBlock {\n  title\n  subtitle\n  showDecoration\n  decorationColorsPrimary\n  decorationColorsSecondary\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LogoItemBlockData on LogoItemBlock {\n  src\n  alt\n}"): (typeof documents)["fragment LogoItemBlockData on LogoItemBlock {\n  src\n  alt\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LogosBlockData on LogosBlock {\n  logos {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment LogosBlockData on LogosBlock {\n  logos {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NavItemData on NavItem {\n  label\n  href\n}"): (typeof documents)["fragment NavItemData on NavItem {\n  label\n  href\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PortfolioGridBlockData on PortfolioGridBlock {\n  title\n  items {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment PortfolioGridBlockData on PortfolioGridBlock {\n  title\n  items {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PortfolioItemBlockData on PortfolioItemBlock {\n  title\n  description\n  imageUrl\n  link\n}"): (typeof documents)["fragment PortfolioItemBlockData on PortfolioItemBlock {\n  title\n  description\n  imageUrl\n  link\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ProfileBlockData on ProfileBlock {\n  imageSrc\n  name\n  title\n  bio\n}"): (typeof documents)["fragment ProfileBlockData on ProfileBlock {\n  imageSrc\n  name\n  title\n  bio\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ServiceItemData on ServiceItem {\n  title\n  description\n  icon\n}"): (typeof documents)["fragment ServiceItemData on ServiceItem {\n  title\n  description\n  icon\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ServicesBlockData on ServicesBlock {\n  services {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment ServicesBlockData on ServicesBlock {\n  services {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SocialLinkData on SocialLink {\n  platform\n  href\n}"): (typeof documents)["fragment SocialLinkData on SocialLink {\n  platform\n  href\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment StoryBlockData on StoryBlock {\n  story\n  highlights\n}"): (typeof documents)["fragment StoryBlockData on StoryBlock {\n  story\n  highlights\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TedTestBlockData on TedTestBlock {\n  stringTest\n}"): (typeof documents)["fragment TedTestBlockData on TedTestBlock {\n  stringTest\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialItemData on TestimonialItem {\n  fullName\n  position\n  content\n  avatarSrc\n}"): (typeof documents)["fragment TestimonialItemData on TestimonialItem {\n  fullName\n  position\n  content\n  avatarSrc\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialItemBlockData on TestimonialItemBlock {\n  fullName\n  position\n  content\n  avatarSrc\n}"): (typeof documents)["fragment TestimonialItemBlockData on TestimonialItemBlock {\n  fullName\n  position\n  content\n  avatarSrc\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialsBlockData on TestimonialsBlock {\n  title\n  testimonials {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment TestimonialsBlockData on TestimonialsBlock {\n  title\n  testimonials {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SEOExperienceData on SEOExperience {\n  title\n  shortDescription\n  keywords\n  ...ExperienceData\n}"): (typeof documents)["fragment SEOExperienceData on SEOExperience {\n  title\n  shortDescription\n  keywords\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageMediaData on ImageMedia {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ImageMediaData on ImageMedia {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment GenericMediaData on GenericMedia {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenericMedia123Data on GenericMedia123 {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment GenericMedia123Data on GenericMedia123 {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CMSPageData on CMSPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment CMSPageData on CMSPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FooterData on Footer {\n  copyrightText\n  columns {\n    ...BlockData\n  }\n  socialLinks {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment FooterData on Footer {\n  copyrightText\n  columns {\n    ...BlockData\n  }\n  socialLinks {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeaderData on Header {\n  logo\n  navItems {\n    ...BlockData\n  }\n  ctaText\n  ctaHref\n}"): (typeof documents)["fragment HeaderData on Header {\n  logo\n  navItems {\n    ...BlockData\n  }\n  ctaText\n  ctaHref\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HomePageData on HomePage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment HomePageData on HomePage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment StartPageData on StartPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}"): (typeof documents)["fragment StartPageData on StartPage {\n  title\n  shortDescription\n  keywords\n  blocks {\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}"): (typeof documents)["fragment VideoMediaData on VideoMedia {\n  empty: _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentData on _IContent\n{\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent  {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent  {\n  ...IContentData\n}\n\nfragment PageData on _IContent {\n  ...IContentData\n}\n\nfragment LinkData on ContentUrl {\n  type\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}\n\nfragment ExperienceData on _IExperience {\n  composition {\n    # Experience level\n    ...CompositionNodeData\n    nodes {\n      # Section level\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          # Row level\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              # Column level\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  # Element level\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                  ... on ICompositionStructureNode {\n                    nodes {\n                      # Form element level level\n                      ...CompositionNodeData\n                      ...CompositionComponentNodeData\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String, $changeset: String) {\n      content: _Content(\n        variation: { include: ALL }\n        where: {\n          _or: [\n            { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n            {\n              _metadata: {\n                url: { default: { eq: $path }, base: { eq: $domain } }\n                version: { eq: $version }\n              }\n            }\n          ]\n          _metadata: { changeset: { eq: $changeset } }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...BlockData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {\n      content: _Content(\n        where: {\n          _metadata: {\n            url: { default: { in: $path }, base: { eq: $siteId } }\n            changeset: { eq: $changeset }\n          }\n        }\n        locale: $locale\n      ) {\n        total\n        items: item {\n          ...IContentData\n          ...PageData\n        }\n      }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = \"-\", $domain: String) {\n        content: _Content(\n            variation: { include: ALL }\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items: item {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;