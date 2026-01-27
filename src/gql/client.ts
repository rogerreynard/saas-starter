import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const AvailabilityBlockDataFragmentDoc = gql`
    fragment AvailabilityBlockData on AvailabilityBlock {
  availability
  projectTypes
}
    `;
export const ContactBlockDataFragmentDoc = gql`
    fragment ContactBlockData on ContactBlock {
  title
  description
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const FooterColumnDataFragmentDoc = gql`
    fragment FooterColumnData on FooterColumn {
  title
  links {
    ...IContentListItem
  }
}
    `;
export const HelloWorldDataFragmentDoc = gql`
    fragment HelloWorldData on HelloWorld {
  message
  detailedmessage
}
    `;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  title
  subtitle
  showDecoration
  decorationColorsPrimary
  decorationColorsSecondary
}
    `;
export const LogoItemBlockDataFragmentDoc = gql`
    fragment LogoItemBlockData on LogoItemBlock {
  src
  alt
}
    `;
export const LogosBlockDataFragmentDoc = gql`
    fragment LogosBlockData on LogosBlock {
  logos {
    ...IContentListItem
  }
}
    `;
export const NavItemDataFragmentDoc = gql`
    fragment NavItemData on NavItem {
  label
  href
}
    `;
export const PortfolioGridBlockDataFragmentDoc = gql`
    fragment PortfolioGridBlockData on PortfolioGridBlock {
  title
  items {
    ...IContentListItem
  }
}
    `;
export const PortfolioItemBlockDataFragmentDoc = gql`
    fragment PortfolioItemBlockData on PortfolioItemBlock {
  title
  description
  imageUrl
  link
}
    `;
export const ProfileBlockDataFragmentDoc = gql`
    fragment ProfileBlockData on ProfileBlock {
  imageSrc
  name
  title
  bio
}
    `;
export const ServiceItemDataFragmentDoc = gql`
    fragment ServiceItemData on ServiceItem {
  title
  description
  icon
}
    `;
export const ServicesBlockDataFragmentDoc = gql`
    fragment ServicesBlockData on ServicesBlock {
  services {
    ...IContentListItem
  }
}
    `;
export const SocialLinkDataFragmentDoc = gql`
    fragment SocialLinkData on SocialLink {
  platform
  href
}
    `;
export const StoryBlockDataFragmentDoc = gql`
    fragment StoryBlockData on StoryBlock {
  story
  highlights
}
    `;
export const TedTestBlockDataFragmentDoc = gql`
    fragment TedTestBlockData on TedTestBlock {
  stringTest
}
    `;
export const TestimonialItemDataFragmentDoc = gql`
    fragment TestimonialItemData on TestimonialItem {
  fullName
  position
  content
  avatarSrc
}
    `;
export const TestimonialItemBlockDataFragmentDoc = gql`
    fragment TestimonialItemBlockData on TestimonialItemBlock {
  fullName
  position
  content
  avatarSrc
}
    `;
export const TestimonialsBlockDataFragmentDoc = gql`
    fragment TestimonialsBlockData on TestimonialsBlock {
  title
  testimonials {
    ...IContentListItem
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                  ... on ICompositionStructureNode {
                    nodes {
                      ...CompositionNodeData
                      ...CompositionComponentNodeData
                    }
                  }
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const SEOExperienceDataFragmentDoc = gql`
    fragment SEOExperienceData on SEOExperience {
  title
  shortDescription
  keywords
  ...ExperienceData
}
    `;
export const ImageMediaDataFragmentDoc = gql`
    fragment ImageMediaData on ImageMedia {
  empty: _metadata {
    key
  }
}
    `;
export const GenericMediaDataFragmentDoc = gql`
    fragment GenericMediaData on GenericMedia {
  empty: _metadata {
    key
  }
}
    `;
export const GenericMedia123DataFragmentDoc = gql`
    fragment GenericMedia123Data on GenericMedia123 {
  empty: _metadata {
    key
  }
}
    `;
export const CMSPageDataFragmentDoc = gql`
    fragment CMSPageData on CMSPage {
  title
  shortDescription
  keywords
  blocks {
    ...BlockData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
}
    `;
export const FooterDataFragmentDoc = gql`
    fragment FooterData on Footer {
  copyrightText
  columns {
    ...BlockData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
  socialLinks {
    ...BlockData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
}
    `;
export const HeaderDataFragmentDoc = gql`
    fragment HeaderData on Header {
  logo
  navItems {
    ...BlockData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
  ctaText
  ctaHref
}
    `;
export const HomePageDataFragmentDoc = gql`
    fragment HomePageData on HomePage {
  title
  shortDescription
  keywords
  blocks {
    ...BlockData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
}
    `;
export const StartPageDataFragmentDoc = gql`
    fragment StartPageData on StartPage {
  title
  shortDescription
  keywords
  blocks {
    ...BlockData
    ...AvailabilityBlockData
    ...ContactBlockData
    ...FooterColumnData
    ...HelloWorldData
    ...HeroBlockData
    ...LogoItemBlockData
    ...LogosBlockData
    ...NavItemData
    ...PortfolioGridBlockData
    ...PortfolioItemBlockData
    ...ProfileBlockData
    ...ServiceItemData
    ...ServicesBlockData
    ...SocialLinkData
    ...StoryBlockData
    ...TedTestBlockData
    ...TestimonialItemData
    ...TestimonialItemBlockData
    ...TestimonialsBlockData
  }
}
    `;
export const VideoMediaDataFragmentDoc = gql`
    fragment VideoMediaData on VideoMedia {
  empty: _metadata {
    key
  }
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...BlockData
      ...PageData
      ...AvailabilityBlockData
      ...ContactBlockData
      ...FooterColumnData
      ...HelloWorldData
      ...HeroBlockData
      ...LogoItemBlockData
      ...LogosBlockData
      ...NavItemData
      ...PortfolioGridBlockData
      ...PortfolioItemBlockData
      ...ProfileBlockData
      ...ServiceItemData
      ...ServicesBlockData
      ...SocialLinkData
      ...StoryBlockData
      ...TedTestBlockData
      ...TestimonialItemData
      ...TestimonialItemBlockData
      ...TestimonialsBlockData
      ...BlankExperienceData
      ...SEOExperienceData
      ...CMSPageData
      ...FooterData
      ...HeaderData
      ...HomePageData
      ...StartPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlockDataFragmentDoc}
${PageDataFragmentDoc}
${AvailabilityBlockDataFragmentDoc}
${ContactBlockDataFragmentDoc}
${FooterColumnDataFragmentDoc}
${IContentListItemFragmentDoc}
${HelloWorldDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${LogoItemBlockDataFragmentDoc}
${LogosBlockDataFragmentDoc}
${NavItemDataFragmentDoc}
${PortfolioGridBlockDataFragmentDoc}
${PortfolioItemBlockDataFragmentDoc}
${ProfileBlockDataFragmentDoc}
${ServiceItemDataFragmentDoc}
${ServicesBlockDataFragmentDoc}
${SocialLinkDataFragmentDoc}
${StoryBlockDataFragmentDoc}
${TedTestBlockDataFragmentDoc}
${TestimonialItemDataFragmentDoc}
${TestimonialItemBlockDataFragmentDoc}
${TestimonialsBlockDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${SEOExperienceDataFragmentDoc}
${CMSPageDataFragmentDoc}
${FooterDataFragmentDoc}
${HeaderDataFragmentDoc}
${HomePageDataFragmentDoc}
${StartPageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...SEOExperienceData
      ...CMSPageData
      ...FooterData
      ...HeaderData
      ...HomePageData
      ...StartPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${AvailabilityBlockDataFragmentDoc}
${ContactBlockDataFragmentDoc}
${FooterColumnDataFragmentDoc}
${IContentListItemFragmentDoc}
${HelloWorldDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${LogoItemBlockDataFragmentDoc}
${LogosBlockDataFragmentDoc}
${NavItemDataFragmentDoc}
${PortfolioGridBlockDataFragmentDoc}
${PortfolioItemBlockDataFragmentDoc}
${ProfileBlockDataFragmentDoc}
${ServiceItemDataFragmentDoc}
${ServicesBlockDataFragmentDoc}
${SocialLinkDataFragmentDoc}
${StoryBlockDataFragmentDoc}
${TedTestBlockDataFragmentDoc}
${TestimonialItemDataFragmentDoc}
${TestimonialItemBlockDataFragmentDoc}
${TestimonialsBlockDataFragmentDoc}
${SEOExperienceDataFragmentDoc}
${CMSPageDataFragmentDoc}
${FooterDataFragmentDoc}
${HeaderDataFragmentDoc}
${HomePageDataFragmentDoc}
${StartPageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;