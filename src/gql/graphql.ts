/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type AvailabilityBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'AvailabilityBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  availability?: Maybe<Scalars['String']['output']>;
  projectTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type AvailabilityBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete?: Maybe<AvailabilityBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<AvailabilityBlockFacet>;
  item?: Maybe<AvailabilityBlock>;
  items?: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type CMSPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<_IContent>>>;
  keywords?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type CMSPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type CMSPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CMSPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  blocks?: Maybe<_IContentAutocomplete>;
};

export type CMSPageFacet = {
  __typename?: 'CMSPageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  blocks?: Maybe<_IContentFacet>;
};

export type CMSPageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  blocks?: InputMaybe<_IContentOrderByInput>;
};

export type CMSPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete?: Maybe<CMSPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CMSPageFacet>;
  item?: Maybe<CMSPage>;
  items?: Maybe<Array<Maybe<CMSPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CMSPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CMSPageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<CMSPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CMSPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CMSPageWhereInput>>>;
  blocks?: InputMaybe<_IContentWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompletevalueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetvalueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletelayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component?: Maybe<_IComponentFacet>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetlayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component?: InputMaybe<_IComponentOrderByInput>;
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component?: InputMaybe<_IComponentWhereInput>;
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContactBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete?: Maybe<ContactBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContactBlockFacet>;
  item?: Maybe<ContactBlock>;
  items?: Maybe<Array<Maybe<ContactBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompletebaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletedefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletegraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletehierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteinternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetbaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetdefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetgraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacethierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetinternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Data_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  MINUTE = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  LOG = 'LOG',
  /** Do not apply any multiplier to the field value */
  NONE = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  RECIPROCAL = 'RECIPROCAL',
  /** Take the square root of the field value */
  SQRT = 'SQRT',
  /** Square the field value (multiply it by itself) */
  SQUARE = 'SQUARE'
}

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type Footer = IData & _IContent & _IItem & _IPage & {
  __typename?: 'Footer';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<Maybe<_IContent>>>;
  copyrightText?: Maybe<Scalars['String']['output']>;
  socialLinks?: Maybe<Array<Maybe<_IContent>>>;
};


export type Footer_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Footer_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  columns?: Maybe<_IContentAutocomplete>;
  socialLinks?: Maybe<_IContentAutocomplete>;
};

export type FooterColumn = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'FooterColumn';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  links?: Maybe<Array<Maybe<_IContent>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type FooterColumn_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FooterColumn_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  links?: Maybe<_IContentAutocomplete>;
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  links?: Maybe<_IContentFacet>;
};

export type FooterColumnOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  links?: InputMaybe<_IContentOrderByInput>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete?: Maybe<FooterColumnAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FooterColumnFacet>;
  item?: Maybe<FooterColumn>;
  items?: Maybe<Array<Maybe<FooterColumn>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  links?: InputMaybe<_IContentWhereInput>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  columns?: Maybe<_IContentFacet>;
  socialLinks?: Maybe<_IContentFacet>;
};

export type FooterOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  columns?: InputMaybe<_IContentOrderByInput>;
  socialLinks?: InputMaybe<_IContentOrderByInput>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete?: Maybe<FooterAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FooterFacet>;
  item?: Maybe<Footer>;
  items?: Maybe<Array<Maybe<Footer>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  columns?: InputMaybe<_IContentWhereInput>;
  socialLinks?: InputMaybe<_IContentWhereInput>;
};

export type GenericMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMedia123 = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia123';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type GenericMedia123_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia123_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMedia123Autocomplete = {
  __typename?: 'GenericMedia123Autocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMedia123Facet = {
  __typename?: 'GenericMedia123Facet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMedia123OrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMedia123Output = {
  __typename?: 'GenericMedia123Output';
  autocomplete?: Maybe<GenericMedia123Autocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMedia123Facet>;
  item?: Maybe<GenericMedia123>;
  items?: Maybe<Array<Maybe<GenericMedia123>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMedia123OutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMedia123WhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type Header = IData & _IContent & _IItem & _IPage & {
  __typename?: 'Header';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  ctaHref?: Maybe<Scalars['String']['output']>;
  ctaText?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  navItems?: Maybe<Array<Maybe<_IContent>>>;
};


export type Header_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Header_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  navItems?: Maybe<_IContentAutocomplete>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  navItems?: Maybe<_IContentFacet>;
};

export type HeaderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  navItems?: InputMaybe<_IContentOrderByInput>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete?: Maybe<HeaderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeaderFacet>;
  item?: Maybe<Header>;
  items?: Maybe<Array<Maybe<Header>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  navItems?: InputMaybe<_IContentWhereInput>;
};

export type HelloWorld = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HelloWorld';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  detailedmessage?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};


export type HelloWorld_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HelloWorld_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HelloWorldAutocomplete = {
  __typename?: 'HelloWorldAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HelloWorldFacet = {
  __typename?: 'HelloWorldFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HelloWorldOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HelloWorldOutput = {
  __typename?: 'HelloWorldOutput';
  autocomplete?: Maybe<HelloWorldAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HelloWorldFacet>;
  item?: Maybe<HelloWorld>;
  items?: Maybe<Array<Maybe<HelloWorld>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HelloWorldOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HelloWorldWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HelloWorldWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HelloWorldWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HelloWorldWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'HeroBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  decorationColorsPrimary?: Maybe<Scalars['String']['output']>;
  decorationColorsSecondary?: Maybe<Scalars['String']['output']>;
  showDecoration?: Maybe<Scalars['Boolean']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeroBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete?: Maybe<HeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeroBlockFacet>;
  item?: Maybe<HeroBlock>;
  items?: Maybe<Array<Maybe<HeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type HomePage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'HomePage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<_IContent>>>;
  keywords?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type HomePage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HomePage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HomePageAutocomplete = {
  __typename?: 'HomePageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  blocks?: Maybe<_IContentAutocomplete>;
};

export type HomePageFacet = {
  __typename?: 'HomePageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  blocks?: Maybe<_IContentFacet>;
};

export type HomePageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  blocks?: InputMaybe<_IContentOrderByInput>;
};

export type HomePageOutput = {
  __typename?: 'HomePageOutput';
  autocomplete?: Maybe<HomePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HomePageFacet>;
  item?: Maybe<HomePage>;
  items?: Maybe<Array<Maybe<HomePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HomePageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HomePageWhereInput>>>;
  blocks?: InputMaybe<_IContentWhereInput>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompletedisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletedisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletelayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletenodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetdisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetlayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetnodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  variation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompletechangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletefallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletelocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletestatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletetypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletevariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteversionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  variation?: Maybe<Array<Maybe<StringFacet>>>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetchangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetcreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetfallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetlocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetpublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetsortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetstatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacettypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetvariationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetversionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  variation?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  variation?: InputMaybe<StringFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type IData_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageMedia = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: 'ImageMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  ASSETS = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  DEFAULT = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  ITEMS = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  PATH = 'PATH'
}

export enum Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en',
  pl = 'pl',
  sv = 'sv'
}

export type LogoItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LogoItemBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  alt?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
};


export type LogoItemBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type LogoItemBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete?: Maybe<LogoItemBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LogoItemBlockFacet>;
  item?: Maybe<LogoItemBlock>;
  items?: Maybe<Array<Maybe<LogoItemBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
};

export type LogosBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'LogosBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  logos?: Maybe<Array<Maybe<_IContent>>>;
};


export type LogosBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LogosBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  logos?: Maybe<_IContentAutocomplete>;
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  logos?: Maybe<_IContentFacet>;
};

export type LogosBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  logos?: InputMaybe<_IContentOrderByInput>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete?: Maybe<LogosBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LogosBlockFacet>;
  item?: Maybe<LogosBlock>;
  items?: Maybe<Array<Maybe<LogosBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  logos?: InputMaybe<_IContentWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadatacontentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type NavItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'NavItem';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};


export type NavItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NavItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NavItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete?: Maybe<NavItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NavItemFacet>;
  item?: Maybe<NavItem>;
  items?: Maybe<Array<Maybe<NavItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum OrderByFacetType {
  COUNT = 'COUNT',
  VALUE = 'VALUE'
}

export type PinnedInput = {
  /** Pinned collection keys */
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type PortfolioGridBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PortfolioGridBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PortfolioGridBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  items?: Maybe<_IContentAutocomplete>;
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  items?: Maybe<_IContentFacet>;
};

export type PortfolioGridBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  items?: InputMaybe<_IContentOrderByInput>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete?: Maybe<PortfolioGridBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PortfolioGridBlockFacet>;
  item?: Maybe<PortfolioGridBlock>;
  items?: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  items?: InputMaybe<_IContentWhereInput>;
};

export type PortfolioItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'PortfolioItemBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PortfolioItemBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type PortfolioItemBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete?: Maybe<PortfolioItemBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PortfolioItemBlockFacet>;
  item?: Maybe<PortfolioItemBlock>;
  items?: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
};

export type ProfileBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ProfileBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  imageSrc?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ProfileBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ProfileBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete?: Maybe<ProfileBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ProfileBlockFacet>;
  item?: Maybe<ProfileBlock>;
  items?: Maybe<Array<Maybe<ProfileBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  AvailabilityBlock?: Maybe<AvailabilityBlockOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  CMSPage?: Maybe<CMSPageOutput>;
  ContactBlock?: Maybe<ContactBlockOutput>;
  Data?: Maybe<DataOutput>;
  Footer?: Maybe<FooterOutput>;
  FooterColumn?: Maybe<FooterColumnOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  GenericMedia123?: Maybe<GenericMedia123Output>;
  Header?: Maybe<HeaderOutput>;
  HelloWorld?: Maybe<HelloWorldOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  HomePage?: Maybe<HomePageOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LogoItemBlock?: Maybe<LogoItemBlockOutput>;
  LogosBlock?: Maybe<LogosBlockOutput>;
  NavItem?: Maybe<NavItemOutput>;
  PortfolioGridBlock?: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock?: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock?: Maybe<ProfileBlockOutput>;
  SEOExperience?: Maybe<SEOExperienceOutput>;
  ServiceItem?: Maybe<ServiceItemOutput>;
  ServicesBlock?: Maybe<ServicesBlockOutput>;
  SocialLink?: Maybe<SocialLinkOutput>;
  StartPage?: Maybe<StartPageOutput>;
  StoryBlock?: Maybe<StoryBlockOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TedTestBlock?: Maybe<TedTestBlockOutput>;
  TestimonialItem?: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock?: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock?: Maybe<TestimonialsBlockOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _AssetItem?: Maybe<_AssetItemOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _ImageItem?: Maybe<_ImageItemOutput>;
  _Item?: Maybe<_ItemOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryAvailabilityBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryCMSPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CMSPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CMSPageWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContactBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContactBlockWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FooterWhereInput>;
};


export type QueryFooterColumnArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FooterColumnOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FooterColumnWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryGenericMedia123Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMedia123OrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryHeaderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeaderWhereInput>;
};


export type QueryHelloWorldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HelloWorldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HelloWorldWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryHomePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLogoItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LogoItemBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryLogosBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LogosBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LogosBlockWhereInput>;
};


export type QueryNavItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<NavItemWhereInput>;
};


export type QueryPortfolioGridBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryPortfolioItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryProfileBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProfileBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ProfileBlockWhereInput>;
};


export type QuerySEOExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SEOExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SEOExperienceWhereInput>;
};


export type QueryServiceItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ServiceItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ServiceItemWhereInput>;
};


export type QueryServicesBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ServicesBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ServicesBlockWhereInput>;
};


export type QuerySocialLinkArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SocialLinkOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SocialLinkWhereInput>;
};


export type QueryStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryStoryBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StoryBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<StoryBlockWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTedTestBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TedTestBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TedTestBlockWhereInput>;
};


export type QueryTestimonialItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryTestimonialItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryTestimonialsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type Query_AssetItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_AssetItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_AssetItemWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_ImageItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageItemWhereInput>;
};


export type Query_ItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ItemWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AvailabilityBlock?: Maybe<AvailabilityBlockOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  CMSPage?: Maybe<CMSPageOutput>;
  ContactBlock?: Maybe<ContactBlockOutput>;
  Data?: Maybe<DataOutput>;
  Footer?: Maybe<FooterOutput>;
  FooterColumn?: Maybe<FooterColumnOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  GenericMedia123?: Maybe<GenericMedia123Output>;
  Header?: Maybe<HeaderOutput>;
  HelloWorld?: Maybe<HelloWorldOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  HomePage?: Maybe<HomePageOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LogoItemBlock?: Maybe<LogoItemBlockOutput>;
  LogosBlock?: Maybe<LogosBlockOutput>;
  NavItem?: Maybe<NavItemOutput>;
  PortfolioGridBlock?: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock?: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock?: Maybe<ProfileBlockOutput>;
  SEOExperience?: Maybe<SEOExperienceOutput>;
  ServiceItem?: Maybe<ServiceItemOutput>;
  ServicesBlock?: Maybe<ServicesBlockOutput>;
  SocialLink?: Maybe<SocialLinkOutput>;
  StartPage?: Maybe<StartPageOutput>;
  StoryBlock?: Maybe<StoryBlockOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TedTestBlock?: Maybe<TedTestBlockOutput>;
  TestimonialItem?: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock?: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock?: Maybe<TestimonialsBlockOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _AssetItem?: Maybe<_AssetItemOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _ImageItem?: Maybe<_ImageItemOutput>;
  _Item?: Maybe<_ItemOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryRefAvailabilityBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefCMSPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CMSPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<CMSPageWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContactBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<system_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefFooterArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FooterOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FooterWhereInput>;
};


export type QueryRefFooterColumnArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FooterColumnOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefGenericMedia123Args = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMedia123OrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryRefHeaderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeaderWhereInput>;
};


export type QueryRefHelloWorldArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HelloWorldOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HelloWorldWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefHomePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HomePageWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLogoItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LogoItemBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryRefLogosBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LogosBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LogosBlockWhereInput>;
};


export type QueryRefNavItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<NavItemWhereInput>;
};


export type QueryRefPortfolioGridBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryRefPortfolioItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryRefProfileBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProfileBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryRefSEOExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SEOExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SEOExperienceWhereInput>;
};


export type QueryRefServiceItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ServiceItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ServiceItemWhereInput>;
};


export type QueryRefServicesBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ServicesBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ServicesBlockWhereInput>;
};


export type QueryRefSocialLinkArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SocialLinkOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryRefStoryBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StoryBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<StoryBlockWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTedTestBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TedTestBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TedTestBlockWhereInput>;
};


export type QueryRefTestimonialItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryRefTestimonialItemBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryRefTestimonialsBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_AssetItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_AssetItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_AssetItemWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_ImageItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageItemWhereInput>;
};


export type QueryRef_ItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ItemWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BOOST_ONLY = 'BOOST_ONLY',
  DOC = 'DOC',
  RELEVANCE = 'RELEVANCE',
  SEMANTIC = 'SEMANTIC'
}

export type SEOExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'SEOExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
  keywords?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type SEOExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SEOExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SEOExperienceAutocomplete = {
  __typename?: 'SEOExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type SEOExperienceFacet = {
  __typename?: 'SEOExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type SEOExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type SEOExperienceOutput = {
  __typename?: 'SEOExperienceOutput';
  autocomplete?: Maybe<SEOExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SEOExperienceFacet>;
  item?: Maybe<SEOExperience>;
  items?: Maybe<Array<Maybe<SEOExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SEOExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SEOExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SEOExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SEOExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SEOExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type ServiceItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ServiceItem';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ServiceItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ServiceItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ServiceItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete?: Maybe<ServiceItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ServiceItemFacet>;
  item?: Maybe<ServiceItem>;
  items?: Maybe<Array<Maybe<ServiceItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
};

export type ServicesBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ServicesBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  services?: Maybe<Array<Maybe<_IContent>>>;
};


export type ServicesBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  services?: Maybe<_IContentAutocomplete>;
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  services?: Maybe<_IContentFacet>;
};

export type ServicesBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  services?: InputMaybe<_IContentOrderByInput>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete?: Maybe<ServicesBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ServicesBlockFacet>;
  item?: Maybe<ServicesBlock>;
  items?: Maybe<Array<Maybe<ServicesBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  services?: InputMaybe<_IContentWhereInput>;
};

export type SocialLink = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'SocialLink';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
};


export type SocialLink_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SocialLink_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SocialLinkOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete?: Maybe<SocialLinkAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SocialLinkFacet>;
  item?: Maybe<SocialLink>;
  items?: Maybe<Array<Maybe<SocialLink>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
};

export type StartPage = IData & _IContent & _IItem & _IPage & {
  __typename?: 'StartPage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  blocks?: Maybe<Array<Maybe<_IContent>>>;
  keywords?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type StartPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StartPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  blocks?: Maybe<_IContentAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  blocks?: Maybe<_IContentFacet>;
};

export type StartPageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  blocks?: InputMaybe<_IContentOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete?: Maybe<StartPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StartPageFacet>;
  item?: Maybe<StartPage>;
  items?: Maybe<Array<Maybe<StartPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  blocks?: InputMaybe<_IContentWhereInput>;
};

export type StoryBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'StoryBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story?: Maybe<Scalars['String']['output']>;
};


export type StoryBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StoryBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type StoryBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete?: Maybe<StoryBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StoryBlockFacet>;
  item?: Maybe<StoryBlock>;
  items?: Maybe<Array<Maybe<StoryBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = 'ONE',
  /** synonym slot 2 */
  TWO = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & _IItem & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TedTestBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TedTestBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  stringTest?: Maybe<Scalars['String']['output']>;
};


export type TedTestBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TedTestBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TedTestBlockAutocomplete = {
  __typename?: 'TedTestBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TedTestBlockFacet = {
  __typename?: 'TedTestBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TedTestBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TedTestBlockOutput = {
  __typename?: 'TedTestBlockOutput';
  autocomplete?: Maybe<TedTestBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TedTestBlockFacet>;
  item?: Maybe<TedTestBlock>;
  items?: Maybe<Array<Maybe<TedTestBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TedTestBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TedTestBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TedTestBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TedTestBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TedTestBlockWhereInput>>>;
};

export type TestimonialItem = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialItem';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  avatarSrc?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
};


export type TestimonialItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialItemAutocomplete = {
  __typename?: 'TestimonialItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialItemBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  avatarSrc?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
};


export type TestimonialItemBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete?: Maybe<TestimonialItemBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialItemBlockFacet>;
  item?: Maybe<TestimonialItemBlock>;
  items?: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
};

export type TestimonialItemFacet = {
  __typename?: 'TestimonialItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemOutput = {
  __typename?: 'TestimonialItemOutput';
  autocomplete?: Maybe<TestimonialItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialItemFacet>;
  item?: Maybe<TestimonialItem>;
  items?: Maybe<Array<Maybe<TestimonialItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
};

export type TestimonialsBlock = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'TestimonialsBlock';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  testimonials?: Maybe<Array<Maybe<_IContent>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type TestimonialsBlock_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  testimonials?: Maybe<_IContentAutocomplete>;
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  testimonials?: Maybe<_IContentFacet>;
};

export type TestimonialsBlockOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  testimonials?: InputMaybe<_IContentOrderByInput>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete?: Maybe<TestimonialsBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TestimonialsBlockFacet>;
  item?: Maybe<TestimonialsBlock>;
  items?: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  testimonials?: InputMaybe<_IContentWhereInput>;
};

export enum VariationIncludeMode {
  ALL = 'ALL',
  NONE = 'NONE',
  SOME = 'SOME'
}

export type VariationInput = {
  include?: InputMaybe<VariationIncludeMode>;
  includeOriginal?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _AssetItem = IData & _IAssetItem & _IItem & {
  __typename?: '_AssetItem';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _AssetItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _AssetItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _AssetItemAutocomplete = {
  __typename?: '_AssetItemAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _AssetItemFacet = {
  __typename?: '_AssetItemFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _AssetItemOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _AssetItemOutput = {
  __typename?: '_AssetItemOutput';
  autocomplete?: Maybe<_AssetItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_AssetItemFacet>;
  item?: Maybe<_IAssetItem>;
  items?: Maybe<Array<Maybe<_IAssetItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _AssetItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _AssetItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
};

export type _AssetMetadata = {
  __typename?: '_AssetMetadata';
  fileSize?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type _AssetMetadataAutocomplete = {
  __typename?: '_AssetMetadataAutocomplete';
  mimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _AssetMetadataAutocompletemimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _AssetMetadataAutocompleteurlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _AssetMetadataFacet = {
  __typename?: '_AssetMetadataFacet';
  fileSize?: Maybe<Array<Maybe<NumberFacet>>>;
  mimeType?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type _AssetMetadataFacetfileSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _AssetMetadataFacetmimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _AssetMetadataFaceturlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _AssetMetadataOrderByInput = {
  fileSize?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

export type _AssetMetadataWhereInput = {
  fileSize?: InputMaybe<FloatFilterInput>;
  mimeType?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type _Component = IData & _IComponent & _IContent & _IItem & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Component_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & _IItem & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Content_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & _IItem & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Folder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IAssetItem = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IAssetItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IAssetItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IComponent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IContent_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IFolder_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImageItem = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImageItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImageItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IItem = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IMedia_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IPage_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IVideo_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: '_Image';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Image_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageItem = IData & _IAssetItem & _IImageItem & _IItem & {
  __typename?: '_ImageItem';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _ImageItem_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ImageItem_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageItemAutocomplete = {
  __typename?: '_ImageItemAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _ImageItemFacet = {
  __typename?: '_ImageItemFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _ImageItemOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageItemOutput = {
  __typename?: '_ImageItemOutput';
  autocomplete?: Maybe<_ImageItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageItemFacet>;
  item?: Maybe<_IImageItem>;
  items?: Maybe<Array<Maybe<_IImageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
};

export type _ImageMetadata = {
  __typename?: '_ImageMetadata';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type _ImageMetadataFacet = {
  __typename?: '_ImageMetadataFacet';
  height?: Maybe<Array<Maybe<NumberFacet>>>;
  width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type _ImageMetadataFacetheightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _ImageMetadataFacetwidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type _ImageMetadataOrderByInput = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

export type _ImageMetadataWhereInput = {
  height?: InputMaybe<IntFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type _ImageOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Item = IData & _IItem & {
  __typename?: '_Item';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Item_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Item_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ItemAutocomplete = {
  __typename?: '_ItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _ItemFacet = {
  __typename?: '_ItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _ItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ItemOutput = {
  __typename?: '_ItemOutput';
  autocomplete?: Maybe<_ItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ItemFacet>;
  item?: Maybe<_IItem>;
  items?: Maybe<Array<Maybe<_IItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ItemOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
};

export type _Media = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: '_Media';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Media_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type _MetadatadisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _MetadataAutocomplete = {
  __typename?: '_MetadataAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _MetadataAutocompletekeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompletetypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _MetadataFacet = {
  __typename?: '_MetadataFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type _MetadataFacetdisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetkeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetlastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type _MetadataFacettypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _MetadataOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type _MetadataWhereInput = {
  displayName?: InputMaybe<SearchableStringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type _Page = IData & _IContent & _IItem & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Page_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: '_Video';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Video_fulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_linkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputtotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum system_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL'
}

export type usePinnedInput = {
  collectionId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type AvailabilityBlockDataFragment = { __typename?: 'AvailabilityBlock', availability?: string | null, projectTypes?: Array<string | null> | null } & { ' $fragmentName'?: 'AvailabilityBlockDataFragment' };

export type ContactBlockDataFragment = { __typename?: 'ContactBlock', title?: string | null, description?: string | null } & { ' $fragmentName'?: 'ContactBlockDataFragment' };

export type FooterColumnDataFragment = { __typename?: 'FooterColumn', title?: string | null, links?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_AvailabilityBlock_Fragment': IContentListItem_AvailabilityBlock_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankExperience_Fragment': IContentListItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankSection_Fragment': IContentListItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'CMSPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CMSPage_Fragment': IContentListItem_CMSPage_Fragment } }
  ) | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContactBlock_Fragment': IContentListItem_ContactBlock_Fragment } }
  ) | (
    { __typename?: 'Footer' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Footer_Fragment': IContentListItem_Footer_Fragment } }
  ) | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'IContentListItem_FooterColumn_Fragment': IContentListItem_FooterColumn_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia_Fragment': IContentListItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'GenericMedia123' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia123_Fragment': IContentListItem_GenericMedia123_Fragment } }
  ) | (
    { __typename?: 'Header' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Header_Fragment': IContentListItem_Header_Fragment } }
  ) | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HelloWorld_Fragment': IContentListItem_HelloWorld_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeroBlock_Fragment': IContentListItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HomePage_Fragment': IContentListItem_HomePage_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageMedia_Fragment': IContentListItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogoItemBlock_Fragment': IContentListItem_LogoItemBlock_Fragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogosBlock_Fragment': IContentListItem_LogosBlock_Fragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_NavItem_Fragment': IContentListItem_NavItem_Fragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioGridBlock_Fragment': IContentListItem_PortfolioGridBlock_Fragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioItemBlock_Fragment': IContentListItem_PortfolioItemBlock_Fragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ProfileBlock_Fragment': IContentListItem_ProfileBlock_Fragment } }
  ) | (
    { __typename?: 'SEOExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SEOExperience_Fragment': IContentListItem_SEOExperience_Fragment } }
  ) | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServiceItem_Fragment': IContentListItem_ServiceItem_Fragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServicesBlock_Fragment': IContentListItem_ServicesBlock_Fragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SocialLink_Fragment': IContentListItem_SocialLink_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StartPage_Fragment': IContentListItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StoryBlock_Fragment': IContentListItem_StoryBlock_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SysContentFolder_Fragment': IContentListItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TedTestBlock_Fragment': IContentListItem_TedTestBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItem_Fragment': IContentListItem_TestimonialItem_Fragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItemBlock_Fragment': IContentListItem_TestimonialItemBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialsBlock_Fragment': IContentListItem_TestimonialsBlock_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoMedia_Fragment': IContentListItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Component_Fragment': IContentListItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Content_Fragment': IContentListItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Experience_Fragment': IContentListItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Folder_Fragment': IContentListItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Image_Fragment': IContentListItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Media_Fragment': IContentListItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Page_Fragment': IContentListItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Section_Fragment': IContentListItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Video_Fragment': IContentListItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'FooterColumnDataFragment' };

export type HelloWorldDataFragment = { __typename?: 'HelloWorld', message?: string | null, detailedmessage?: string | null } & { ' $fragmentName'?: 'HelloWorldDataFragment' };

export type HeroBlockDataFragment = { __typename?: 'HeroBlock', title?: string | null, subtitle?: string | null, showDecoration?: boolean | null, decorationColorsPrimary?: string | null, decorationColorsSecondary?: string | null } & { ' $fragmentName'?: 'HeroBlockDataFragment' };

export type LogoItemBlockDataFragment = { __typename?: 'LogoItemBlock', src?: string | null, alt?: string | null } & { ' $fragmentName'?: 'LogoItemBlockDataFragment' };

export type LogosBlockDataFragment = { __typename?: 'LogosBlock', logos?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_AvailabilityBlock_Fragment': IContentListItem_AvailabilityBlock_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankExperience_Fragment': IContentListItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankSection_Fragment': IContentListItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'CMSPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CMSPage_Fragment': IContentListItem_CMSPage_Fragment } }
  ) | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContactBlock_Fragment': IContentListItem_ContactBlock_Fragment } }
  ) | (
    { __typename?: 'Footer' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Footer_Fragment': IContentListItem_Footer_Fragment } }
  ) | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'IContentListItem_FooterColumn_Fragment': IContentListItem_FooterColumn_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia_Fragment': IContentListItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'GenericMedia123' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia123_Fragment': IContentListItem_GenericMedia123_Fragment } }
  ) | (
    { __typename?: 'Header' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Header_Fragment': IContentListItem_Header_Fragment } }
  ) | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HelloWorld_Fragment': IContentListItem_HelloWorld_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeroBlock_Fragment': IContentListItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HomePage_Fragment': IContentListItem_HomePage_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageMedia_Fragment': IContentListItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogoItemBlock_Fragment': IContentListItem_LogoItemBlock_Fragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogosBlock_Fragment': IContentListItem_LogosBlock_Fragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_NavItem_Fragment': IContentListItem_NavItem_Fragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioGridBlock_Fragment': IContentListItem_PortfolioGridBlock_Fragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioItemBlock_Fragment': IContentListItem_PortfolioItemBlock_Fragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ProfileBlock_Fragment': IContentListItem_ProfileBlock_Fragment } }
  ) | (
    { __typename?: 'SEOExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SEOExperience_Fragment': IContentListItem_SEOExperience_Fragment } }
  ) | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServiceItem_Fragment': IContentListItem_ServiceItem_Fragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServicesBlock_Fragment': IContentListItem_ServicesBlock_Fragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SocialLink_Fragment': IContentListItem_SocialLink_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StartPage_Fragment': IContentListItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StoryBlock_Fragment': IContentListItem_StoryBlock_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SysContentFolder_Fragment': IContentListItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TedTestBlock_Fragment': IContentListItem_TedTestBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItem_Fragment': IContentListItem_TestimonialItem_Fragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItemBlock_Fragment': IContentListItem_TestimonialItemBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialsBlock_Fragment': IContentListItem_TestimonialsBlock_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoMedia_Fragment': IContentListItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Component_Fragment': IContentListItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Content_Fragment': IContentListItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Experience_Fragment': IContentListItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Folder_Fragment': IContentListItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Image_Fragment': IContentListItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Media_Fragment': IContentListItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Page_Fragment': IContentListItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Section_Fragment': IContentListItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Video_Fragment': IContentListItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'LogosBlockDataFragment' };

export type NavItemDataFragment = { __typename?: 'NavItem', label?: string | null, href?: string | null } & { ' $fragmentName'?: 'NavItemDataFragment' };

export type PortfolioGridBlockDataFragment = { __typename?: 'PortfolioGridBlock', title?: string | null, items?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_AvailabilityBlock_Fragment': IContentListItem_AvailabilityBlock_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankExperience_Fragment': IContentListItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankSection_Fragment': IContentListItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'CMSPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CMSPage_Fragment': IContentListItem_CMSPage_Fragment } }
  ) | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContactBlock_Fragment': IContentListItem_ContactBlock_Fragment } }
  ) | (
    { __typename?: 'Footer' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Footer_Fragment': IContentListItem_Footer_Fragment } }
  ) | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'IContentListItem_FooterColumn_Fragment': IContentListItem_FooterColumn_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia_Fragment': IContentListItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'GenericMedia123' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia123_Fragment': IContentListItem_GenericMedia123_Fragment } }
  ) | (
    { __typename?: 'Header' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Header_Fragment': IContentListItem_Header_Fragment } }
  ) | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HelloWorld_Fragment': IContentListItem_HelloWorld_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeroBlock_Fragment': IContentListItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HomePage_Fragment': IContentListItem_HomePage_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageMedia_Fragment': IContentListItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogoItemBlock_Fragment': IContentListItem_LogoItemBlock_Fragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogosBlock_Fragment': IContentListItem_LogosBlock_Fragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_NavItem_Fragment': IContentListItem_NavItem_Fragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioGridBlock_Fragment': IContentListItem_PortfolioGridBlock_Fragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioItemBlock_Fragment': IContentListItem_PortfolioItemBlock_Fragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ProfileBlock_Fragment': IContentListItem_ProfileBlock_Fragment } }
  ) | (
    { __typename?: 'SEOExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SEOExperience_Fragment': IContentListItem_SEOExperience_Fragment } }
  ) | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServiceItem_Fragment': IContentListItem_ServiceItem_Fragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServicesBlock_Fragment': IContentListItem_ServicesBlock_Fragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SocialLink_Fragment': IContentListItem_SocialLink_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StartPage_Fragment': IContentListItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StoryBlock_Fragment': IContentListItem_StoryBlock_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SysContentFolder_Fragment': IContentListItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TedTestBlock_Fragment': IContentListItem_TedTestBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItem_Fragment': IContentListItem_TestimonialItem_Fragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItemBlock_Fragment': IContentListItem_TestimonialItemBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialsBlock_Fragment': IContentListItem_TestimonialsBlock_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoMedia_Fragment': IContentListItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Component_Fragment': IContentListItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Content_Fragment': IContentListItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Experience_Fragment': IContentListItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Folder_Fragment': IContentListItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Image_Fragment': IContentListItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Media_Fragment': IContentListItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Page_Fragment': IContentListItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Section_Fragment': IContentListItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Video_Fragment': IContentListItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'PortfolioGridBlockDataFragment' };

export type PortfolioItemBlockDataFragment = { __typename?: 'PortfolioItemBlock', title?: string | null, description?: string | null, imageUrl?: string | null, link?: string | null } & { ' $fragmentName'?: 'PortfolioItemBlockDataFragment' };

export type ProfileBlockDataFragment = { __typename?: 'ProfileBlock', imageSrc?: string | null, name?: string | null, title?: string | null, bio?: string | null } & { ' $fragmentName'?: 'ProfileBlockDataFragment' };

export type ServiceItemDataFragment = { __typename?: 'ServiceItem', title?: string | null, description?: string | null, icon?: string | null } & { ' $fragmentName'?: 'ServiceItemDataFragment' };

export type ServicesBlockDataFragment = { __typename?: 'ServicesBlock', services?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_AvailabilityBlock_Fragment': IContentListItem_AvailabilityBlock_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankExperience_Fragment': IContentListItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankSection_Fragment': IContentListItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'CMSPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CMSPage_Fragment': IContentListItem_CMSPage_Fragment } }
  ) | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContactBlock_Fragment': IContentListItem_ContactBlock_Fragment } }
  ) | (
    { __typename?: 'Footer' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Footer_Fragment': IContentListItem_Footer_Fragment } }
  ) | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'IContentListItem_FooterColumn_Fragment': IContentListItem_FooterColumn_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia_Fragment': IContentListItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'GenericMedia123' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia123_Fragment': IContentListItem_GenericMedia123_Fragment } }
  ) | (
    { __typename?: 'Header' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Header_Fragment': IContentListItem_Header_Fragment } }
  ) | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HelloWorld_Fragment': IContentListItem_HelloWorld_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeroBlock_Fragment': IContentListItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HomePage_Fragment': IContentListItem_HomePage_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageMedia_Fragment': IContentListItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogoItemBlock_Fragment': IContentListItem_LogoItemBlock_Fragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogosBlock_Fragment': IContentListItem_LogosBlock_Fragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_NavItem_Fragment': IContentListItem_NavItem_Fragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioGridBlock_Fragment': IContentListItem_PortfolioGridBlock_Fragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioItemBlock_Fragment': IContentListItem_PortfolioItemBlock_Fragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ProfileBlock_Fragment': IContentListItem_ProfileBlock_Fragment } }
  ) | (
    { __typename?: 'SEOExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SEOExperience_Fragment': IContentListItem_SEOExperience_Fragment } }
  ) | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServiceItem_Fragment': IContentListItem_ServiceItem_Fragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServicesBlock_Fragment': IContentListItem_ServicesBlock_Fragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SocialLink_Fragment': IContentListItem_SocialLink_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StartPage_Fragment': IContentListItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StoryBlock_Fragment': IContentListItem_StoryBlock_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SysContentFolder_Fragment': IContentListItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TedTestBlock_Fragment': IContentListItem_TedTestBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItem_Fragment': IContentListItem_TestimonialItem_Fragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItemBlock_Fragment': IContentListItem_TestimonialItemBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialsBlock_Fragment': IContentListItem_TestimonialsBlock_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoMedia_Fragment': IContentListItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Component_Fragment': IContentListItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Content_Fragment': IContentListItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Experience_Fragment': IContentListItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Folder_Fragment': IContentListItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Image_Fragment': IContentListItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Media_Fragment': IContentListItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Page_Fragment': IContentListItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Section_Fragment': IContentListItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Video_Fragment': IContentListItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'ServicesBlockDataFragment' };

export type SocialLinkDataFragment = { __typename?: 'SocialLink', platform?: string | null, href?: string | null } & { ' $fragmentName'?: 'SocialLinkDataFragment' };

export type StoryBlockDataFragment = { __typename?: 'StoryBlock', story?: string | null, highlights?: Array<string | null> | null } & { ' $fragmentName'?: 'StoryBlockDataFragment' };

export type TedTestBlockDataFragment = { __typename?: 'TedTestBlock', stringTest?: string | null } & { ' $fragmentName'?: 'TedTestBlockDataFragment' };

export type TestimonialItemDataFragment = { __typename?: 'TestimonialItem', fullName?: string | null, position?: string | null, content?: string | null, avatarSrc?: string | null } & { ' $fragmentName'?: 'TestimonialItemDataFragment' };

export type TestimonialItemBlockDataFragment = { __typename?: 'TestimonialItemBlock', fullName?: string | null, position?: string | null, content?: string | null, avatarSrc?: string | null } & { ' $fragmentName'?: 'TestimonialItemBlockDataFragment' };

export type TestimonialsBlockDataFragment = { __typename?: 'TestimonialsBlock', title?: string | null, testimonials?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_AvailabilityBlock_Fragment': IContentListItem_AvailabilityBlock_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankExperience_Fragment': IContentListItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankSection_Fragment': IContentListItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'CMSPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CMSPage_Fragment': IContentListItem_CMSPage_Fragment } }
  ) | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContactBlock_Fragment': IContentListItem_ContactBlock_Fragment } }
  ) | (
    { __typename?: 'Footer' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Footer_Fragment': IContentListItem_Footer_Fragment } }
  ) | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'IContentListItem_FooterColumn_Fragment': IContentListItem_FooterColumn_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia_Fragment': IContentListItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'GenericMedia123' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia123_Fragment': IContentListItem_GenericMedia123_Fragment } }
  ) | (
    { __typename?: 'Header' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Header_Fragment': IContentListItem_Header_Fragment } }
  ) | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HelloWorld_Fragment': IContentListItem_HelloWorld_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeroBlock_Fragment': IContentListItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HomePage_Fragment': IContentListItem_HomePage_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageMedia_Fragment': IContentListItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogoItemBlock_Fragment': IContentListItem_LogoItemBlock_Fragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LogosBlock_Fragment': IContentListItem_LogosBlock_Fragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_NavItem_Fragment': IContentListItem_NavItem_Fragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioGridBlock_Fragment': IContentListItem_PortfolioGridBlock_Fragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PortfolioItemBlock_Fragment': IContentListItem_PortfolioItemBlock_Fragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ProfileBlock_Fragment': IContentListItem_ProfileBlock_Fragment } }
  ) | (
    { __typename?: 'SEOExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SEOExperience_Fragment': IContentListItem_SEOExperience_Fragment } }
  ) | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServiceItem_Fragment': IContentListItem_ServiceItem_Fragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ServicesBlock_Fragment': IContentListItem_ServicesBlock_Fragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SocialLink_Fragment': IContentListItem_SocialLink_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StartPage_Fragment': IContentListItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StoryBlock_Fragment': IContentListItem_StoryBlock_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SysContentFolder_Fragment': IContentListItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TedTestBlock_Fragment': IContentListItem_TedTestBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItem_Fragment': IContentListItem_TestimonialItem_Fragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialItemBlock_Fragment': IContentListItem_TestimonialItemBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialsBlock_Fragment': IContentListItem_TestimonialsBlock_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoMedia_Fragment': IContentListItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Component_Fragment': IContentListItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Content_Fragment': IContentListItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Experience_Fragment': IContentListItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Folder_Fragment': IContentListItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Image_Fragment': IContentListItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Media_Fragment': IContentListItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Page_Fragment': IContentListItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Section_Fragment': IContentListItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Video_Fragment': IContentListItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'TestimonialsBlockDataFragment' };

export type BlankExperienceDataFragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'ExperienceData_BlankExperience_Fragment': ExperienceData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type SEOExperienceDataFragment = (
  { __typename?: 'SEOExperience', title?: string | null, shortDescription?: string | null, keywords?: string | null }
  & { ' $fragmentRefs'?: { 'ExperienceData_SEOExperience_Fragment': ExperienceData_SEOExperience_Fragment } }
) & { ' $fragmentName'?: 'SEOExperienceDataFragment' };

export type ImageMediaDataFragment = { __typename?: 'ImageMedia', empty?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'ImageMediaDataFragment' };

export type GenericMediaDataFragment = { __typename?: 'GenericMedia', empty?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'GenericMediaDataFragment' };

export type GenericMedia123DataFragment = { __typename?: 'GenericMedia123', empty?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'GenericMedia123DataFragment' };

export type CMSPageDataFragment = { __typename?: 'CMSPage', title?: string | null, shortDescription?: string | null, keywords?: string | null, blocks?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | { __typename?: 'BlankExperience' } | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | { __typename?: 'CMSPage' } | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | { __typename?: 'Footer' } | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | { __typename?: 'GenericMedia' } | { __typename?: 'GenericMedia123' } | { __typename?: 'Header' } | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename?: 'HomePage' } | { __typename?: 'ImageMedia' } | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | { __typename?: 'SEOExperience' } | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | { __typename?: 'StartPage' } | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | { __typename?: 'SysContentFolder' } | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | { __typename?: 'VideoMedia' } | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | { __typename?: '_Video' } | null> | null } & { ' $fragmentName'?: 'CMSPageDataFragment' };

export type FooterDataFragment = { __typename?: 'Footer', copyrightText?: string | null, columns?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | { __typename?: 'BlankExperience' } | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | { __typename?: 'CMSPage' } | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | { __typename?: 'Footer' } | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | { __typename?: 'GenericMedia' } | { __typename?: 'GenericMedia123' } | { __typename?: 'Header' } | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename?: 'HomePage' } | { __typename?: 'ImageMedia' } | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | { __typename?: 'SEOExperience' } | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | { __typename?: 'StartPage' } | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | { __typename?: 'SysContentFolder' } | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | { __typename?: 'VideoMedia' } | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | { __typename?: '_Video' } | null> | null, socialLinks?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | { __typename?: 'BlankExperience' } | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | { __typename?: 'CMSPage' } | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | { __typename?: 'Footer' } | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | { __typename?: 'GenericMedia' } | { __typename?: 'GenericMedia123' } | { __typename?: 'Header' } | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename?: 'HomePage' } | { __typename?: 'ImageMedia' } | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | { __typename?: 'SEOExperience' } | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | { __typename?: 'StartPage' } | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | { __typename?: 'SysContentFolder' } | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | { __typename?: 'VideoMedia' } | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | { __typename?: '_Video' } | null> | null } & { ' $fragmentName'?: 'FooterDataFragment' };

export type HeaderDataFragment = { __typename?: 'Header', logo?: string | null, ctaText?: string | null, ctaHref?: string | null, navItems?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | { __typename?: 'BlankExperience' } | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | { __typename?: 'CMSPage' } | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | { __typename?: 'Footer' } | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | { __typename?: 'GenericMedia' } | { __typename?: 'GenericMedia123' } | { __typename?: 'Header' } | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename?: 'HomePage' } | { __typename?: 'ImageMedia' } | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | { __typename?: 'SEOExperience' } | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | { __typename?: 'StartPage' } | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | { __typename?: 'SysContentFolder' } | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | { __typename?: 'VideoMedia' } | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | { __typename?: '_Video' } | null> | null } & { ' $fragmentName'?: 'HeaderDataFragment' };

export type HomePageDataFragment = { __typename?: 'HomePage', title?: string | null, shortDescription?: string | null, keywords?: string | null, blocks?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | { __typename?: 'BlankExperience' } | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | { __typename?: 'CMSPage' } | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | { __typename?: 'Footer' } | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | { __typename?: 'GenericMedia' } | { __typename?: 'GenericMedia123' } | { __typename?: 'Header' } | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename?: 'HomePage' } | { __typename?: 'ImageMedia' } | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | { __typename?: 'SEOExperience' } | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | { __typename?: 'StartPage' } | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | { __typename?: 'SysContentFolder' } | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | { __typename?: 'VideoMedia' } | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | { __typename?: '_Video' } | null> | null } & { ' $fragmentName'?: 'HomePageDataFragment' };

export type StartPageDataFragment = { __typename?: 'StartPage', title?: string | null, shortDescription?: string | null, keywords?: string | null, blocks?: Array<(
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | { __typename?: 'BlankExperience' } | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment } }
  ) | { __typename?: 'CMSPage' } | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | { __typename?: 'Footer' } | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | { __typename?: 'GenericMedia' } | { __typename?: 'GenericMedia123' } | { __typename?: 'Header' } | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename?: 'HomePage' } | { __typename?: 'ImageMedia' } | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | { __typename?: 'SEOExperience' } | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | { __typename?: 'StartPage' } | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | { __typename?: 'SysContentFolder' } | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | { __typename?: 'VideoMedia' } | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | { __typename?: '_Video' } | null> | null } & { ' $fragmentName'?: 'StartPageDataFragment' };

export type VideoMediaDataFragment = { __typename?: 'VideoMedia', empty?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'VideoMediaDataFragment' };

type IContentData_AvailabilityBlock_Fragment = { __typename?: 'AvailabilityBlock', _type: 'AvailabilityBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_AvailabilityBlock_Fragment' };

type IContentData_BlankExperience_Fragment = { __typename?: 'BlankExperience', _type: 'BlankExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankExperience_Fragment' };

type IContentData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankSection_Fragment' };

type IContentData_CMSPage_Fragment = { __typename?: 'CMSPage', _type: 'CMSPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CMSPage_Fragment' };

type IContentData_ContactBlock_Fragment = { __typename?: 'ContactBlock', _type: 'ContactBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContactBlock_Fragment' };

type IContentData_Footer_Fragment = { __typename?: 'Footer', _type: 'Footer', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Footer_Fragment' };

type IContentData_FooterColumn_Fragment = { __typename?: 'FooterColumn', _type: 'FooterColumn', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_FooterColumn_Fragment' };

type IContentData_GenericMedia_Fragment = { __typename?: 'GenericMedia', _type: 'GenericMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_GenericMedia_Fragment' };

type IContentData_GenericMedia123_Fragment = { __typename?: 'GenericMedia123', _type: 'GenericMedia123', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_GenericMedia123_Fragment' };

type IContentData_Header_Fragment = { __typename?: 'Header', _type: 'Header', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Header_Fragment' };

type IContentData_HelloWorld_Fragment = { __typename?: 'HelloWorld', _type: 'HelloWorld', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HelloWorld_Fragment' };

type IContentData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeroBlock_Fragment' };

type IContentData_HomePage_Fragment = { __typename?: 'HomePage', _type: 'HomePage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HomePage_Fragment' };

type IContentData_ImageMedia_Fragment = { __typename?: 'ImageMedia', _type: 'ImageMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageMedia_Fragment' };

type IContentData_LogoItemBlock_Fragment = { __typename?: 'LogoItemBlock', _type: 'LogoItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LogoItemBlock_Fragment' };

type IContentData_LogosBlock_Fragment = { __typename?: 'LogosBlock', _type: 'LogosBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LogosBlock_Fragment' };

type IContentData_NavItem_Fragment = { __typename?: 'NavItem', _type: 'NavItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_NavItem_Fragment' };

type IContentData_PortfolioGridBlock_Fragment = { __typename?: 'PortfolioGridBlock', _type: 'PortfolioGridBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PortfolioGridBlock_Fragment' };

type IContentData_PortfolioItemBlock_Fragment = { __typename?: 'PortfolioItemBlock', _type: 'PortfolioItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PortfolioItemBlock_Fragment' };

type IContentData_ProfileBlock_Fragment = { __typename?: 'ProfileBlock', _type: 'ProfileBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ProfileBlock_Fragment' };

type IContentData_SEOExperience_Fragment = { __typename?: 'SEOExperience', _type: 'SEOExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SEOExperience_Fragment' };

type IContentData_ServiceItem_Fragment = { __typename?: 'ServiceItem', _type: 'ServiceItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ServiceItem_Fragment' };

type IContentData_ServicesBlock_Fragment = { __typename?: 'ServicesBlock', _type: 'ServicesBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ServicesBlock_Fragment' };

type IContentData_SocialLink_Fragment = { __typename?: 'SocialLink', _type: 'SocialLink', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SocialLink_Fragment' };

type IContentData_StartPage_Fragment = { __typename?: 'StartPage', _type: 'StartPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_StartPage_Fragment' };

type IContentData_StoryBlock_Fragment = { __typename?: 'StoryBlock', _type: 'StoryBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_StoryBlock_Fragment' };

type IContentData_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _type: 'SysContentFolder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SysContentFolder_Fragment' };

type IContentData_TedTestBlock_Fragment = { __typename?: 'TedTestBlock', _type: 'TedTestBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TedTestBlock_Fragment' };

type IContentData_TestimonialItem_Fragment = { __typename?: 'TestimonialItem', _type: 'TestimonialItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialItem_Fragment' };

type IContentData_TestimonialItemBlock_Fragment = { __typename?: 'TestimonialItemBlock', _type: 'TestimonialItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialItemBlock_Fragment' };

type IContentData_TestimonialsBlock_Fragment = { __typename?: 'TestimonialsBlock', _type: 'TestimonialsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialsBlock_Fragment' };

type IContentData_VideoMedia_Fragment = { __typename?: 'VideoMedia', _type: 'VideoMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoMedia_Fragment' };

type IContentData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Component_Fragment' };

type IContentData__Content_Fragment = { __typename?: '_Content', _type: '_Content', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Content_Fragment' };

type IContentData__Experience_Fragment = { __typename?: '_Experience', _type: '_Experience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Experience_Fragment' };

type IContentData__Folder_Fragment = { __typename?: '_Folder', _type: '_Folder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Folder_Fragment' };

type IContentData__Image_Fragment = { __typename?: '_Image', _type: '_Image', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Image_Fragment' };

type IContentData__Media_Fragment = { __typename?: '_Media', _type: '_Media', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Media_Fragment' };

type IContentData__Page_Fragment = { __typename?: '_Page', _type: '_Page', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Page_Fragment' };

type IContentData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Section_Fragment' };

type IContentData__Video_Fragment = { __typename?: '_Video', _type: '_Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Video_Fragment' };

export type IContentDataFragment = IContentData_AvailabilityBlock_Fragment | IContentData_BlankExperience_Fragment | IContentData_BlankSection_Fragment | IContentData_CMSPage_Fragment | IContentData_ContactBlock_Fragment | IContentData_Footer_Fragment | IContentData_FooterColumn_Fragment | IContentData_GenericMedia_Fragment | IContentData_GenericMedia123_Fragment | IContentData_Header_Fragment | IContentData_HelloWorld_Fragment | IContentData_HeroBlock_Fragment | IContentData_HomePage_Fragment | IContentData_ImageMedia_Fragment | IContentData_LogoItemBlock_Fragment | IContentData_LogosBlock_Fragment | IContentData_NavItem_Fragment | IContentData_PortfolioGridBlock_Fragment | IContentData_PortfolioItemBlock_Fragment | IContentData_ProfileBlock_Fragment | IContentData_SEOExperience_Fragment | IContentData_ServiceItem_Fragment | IContentData_ServicesBlock_Fragment | IContentData_SocialLink_Fragment | IContentData_StartPage_Fragment | IContentData_StoryBlock_Fragment | IContentData_SysContentFolder_Fragment | IContentData_TedTestBlock_Fragment | IContentData_TestimonialItem_Fragment | IContentData_TestimonialItemBlock_Fragment | IContentData_TestimonialsBlock_Fragment | IContentData_VideoMedia_Fragment | IContentData__Component_Fragment | IContentData__Content_Fragment | IContentData__Experience_Fragment | IContentData__Folder_Fragment | IContentData__Image_Fragment | IContentData__Media_Fragment | IContentData__Page_Fragment | IContentData__Section_Fragment | IContentData__Video_Fragment;

type IElementData_AvailabilityBlock_Fragment = { __typename?: 'AvailabilityBlock', _type: 'AvailabilityBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_AvailabilityBlock_Fragment' };

type IElementData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_BlankSection_Fragment' };

type IElementData_ContactBlock_Fragment = { __typename?: 'ContactBlock', _type: 'ContactBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContactBlock_Fragment' };

type IElementData_FooterColumn_Fragment = { __typename?: 'FooterColumn', _type: 'FooterColumn', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_FooterColumn_Fragment' };

type IElementData_HelloWorld_Fragment = { __typename?: 'HelloWorld', _type: 'HelloWorld', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HelloWorld_Fragment' };

type IElementData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeroBlock_Fragment' };

type IElementData_LogoItemBlock_Fragment = { __typename?: 'LogoItemBlock', _type: 'LogoItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_LogoItemBlock_Fragment' };

type IElementData_LogosBlock_Fragment = { __typename?: 'LogosBlock', _type: 'LogosBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_LogosBlock_Fragment' };

type IElementData_NavItem_Fragment = { __typename?: 'NavItem', _type: 'NavItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_NavItem_Fragment' };

type IElementData_PortfolioGridBlock_Fragment = { __typename?: 'PortfolioGridBlock', _type: 'PortfolioGridBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_PortfolioGridBlock_Fragment' };

type IElementData_PortfolioItemBlock_Fragment = { __typename?: 'PortfolioItemBlock', _type: 'PortfolioItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_PortfolioItemBlock_Fragment' };

type IElementData_ProfileBlock_Fragment = { __typename?: 'ProfileBlock', _type: 'ProfileBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ProfileBlock_Fragment' };

type IElementData_ServiceItem_Fragment = { __typename?: 'ServiceItem', _type: 'ServiceItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ServiceItem_Fragment' };

type IElementData_ServicesBlock_Fragment = { __typename?: 'ServicesBlock', _type: 'ServicesBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ServicesBlock_Fragment' };

type IElementData_SocialLink_Fragment = { __typename?: 'SocialLink', _type: 'SocialLink', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_SocialLink_Fragment' };

type IElementData_StoryBlock_Fragment = { __typename?: 'StoryBlock', _type: 'StoryBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_StoryBlock_Fragment' };

type IElementData_TedTestBlock_Fragment = { __typename?: 'TedTestBlock', _type: 'TedTestBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TedTestBlock_Fragment' };

type IElementData_TestimonialItem_Fragment = { __typename?: 'TestimonialItem', _type: 'TestimonialItem', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialItem_Fragment' };

type IElementData_TestimonialItemBlock_Fragment = { __typename?: 'TestimonialItemBlock', _type: 'TestimonialItemBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialItemBlock_Fragment' };

type IElementData_TestimonialsBlock_Fragment = { __typename?: 'TestimonialsBlock', _type: 'TestimonialsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialsBlock_Fragment' };

type IElementData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Component_Fragment' };

type IElementData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Section_Fragment' };

export type IElementDataFragment = IElementData_AvailabilityBlock_Fragment | IElementData_BlankSection_Fragment | IElementData_ContactBlock_Fragment | IElementData_FooterColumn_Fragment | IElementData_HelloWorld_Fragment | IElementData_HeroBlock_Fragment | IElementData_LogoItemBlock_Fragment | IElementData_LogosBlock_Fragment | IElementData_NavItem_Fragment | IElementData_PortfolioGridBlock_Fragment | IElementData_PortfolioItemBlock_Fragment | IElementData_ProfileBlock_Fragment | IElementData_ServiceItem_Fragment | IElementData_ServicesBlock_Fragment | IElementData_SocialLink_Fragment | IElementData_StoryBlock_Fragment | IElementData_TedTestBlock_Fragment | IElementData_TestimonialItem_Fragment | IElementData_TestimonialItemBlock_Fragment | IElementData_TestimonialsBlock_Fragment | IElementData__Component_Fragment | IElementData__Section_Fragment;

type ElementData_AvailabilityBlock_Fragment = (
  { __typename?: 'AvailabilityBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_AvailabilityBlock_Fragment': IElementData_AvailabilityBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_AvailabilityBlock_Fragment' };

type ElementData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IElementData_BlankSection_Fragment': IElementData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'ElementData_BlankSection_Fragment' };

type ElementData_ContactBlock_Fragment = (
  { __typename?: 'ContactBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ContactBlock_Fragment': IElementData_ContactBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContactBlock_Fragment' };

type ElementData_FooterColumn_Fragment = (
  { __typename?: 'FooterColumn' }
  & { ' $fragmentRefs'?: { 'IElementData_FooterColumn_Fragment': IElementData_FooterColumn_Fragment } }
) & { ' $fragmentName'?: 'ElementData_FooterColumn_Fragment' };

type ElementData_HelloWorld_Fragment = (
  { __typename?: 'HelloWorld' }
  & { ' $fragmentRefs'?: { 'IElementData_HelloWorld_Fragment': IElementData_HelloWorld_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HelloWorld_Fragment' };

type ElementData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HeroBlock_Fragment': IElementData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeroBlock_Fragment' };

type ElementData_LogoItemBlock_Fragment = (
  { __typename?: 'LogoItemBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_LogoItemBlock_Fragment': IElementData_LogoItemBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_LogoItemBlock_Fragment' };

type ElementData_LogosBlock_Fragment = (
  { __typename?: 'LogosBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_LogosBlock_Fragment': IElementData_LogosBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_LogosBlock_Fragment' };

type ElementData_NavItem_Fragment = (
  { __typename?: 'NavItem' }
  & { ' $fragmentRefs'?: { 'IElementData_NavItem_Fragment': IElementData_NavItem_Fragment } }
) & { ' $fragmentName'?: 'ElementData_NavItem_Fragment' };

type ElementData_PortfolioGridBlock_Fragment = (
  { __typename?: 'PortfolioGridBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_PortfolioGridBlock_Fragment': IElementData_PortfolioGridBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_PortfolioGridBlock_Fragment' };

type ElementData_PortfolioItemBlock_Fragment = (
  { __typename?: 'PortfolioItemBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_PortfolioItemBlock_Fragment': IElementData_PortfolioItemBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_PortfolioItemBlock_Fragment' };

type ElementData_ProfileBlock_Fragment = (
  { __typename?: 'ProfileBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ProfileBlock_Fragment': IElementData_ProfileBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ProfileBlock_Fragment' };

type ElementData_ServiceItem_Fragment = (
  { __typename?: 'ServiceItem' }
  & { ' $fragmentRefs'?: { 'IElementData_ServiceItem_Fragment': IElementData_ServiceItem_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ServiceItem_Fragment' };

type ElementData_ServicesBlock_Fragment = (
  { __typename?: 'ServicesBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ServicesBlock_Fragment': IElementData_ServicesBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ServicesBlock_Fragment' };

type ElementData_SocialLink_Fragment = (
  { __typename?: 'SocialLink' }
  & { ' $fragmentRefs'?: { 'IElementData_SocialLink_Fragment': IElementData_SocialLink_Fragment } }
) & { ' $fragmentName'?: 'ElementData_SocialLink_Fragment' };

type ElementData_StoryBlock_Fragment = (
  { __typename?: 'StoryBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_StoryBlock_Fragment': IElementData_StoryBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_StoryBlock_Fragment' };

type ElementData_TedTestBlock_Fragment = (
  { __typename?: 'TedTestBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_TedTestBlock_Fragment': IElementData_TedTestBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TedTestBlock_Fragment' };

type ElementData_TestimonialItem_Fragment = (
  { __typename?: 'TestimonialItem' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialItem_Fragment': IElementData_TestimonialItem_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialItem_Fragment' };

type ElementData_TestimonialItemBlock_Fragment = (
  { __typename?: 'TestimonialItemBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialItemBlock_Fragment': IElementData_TestimonialItemBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialItemBlock_Fragment' };

type ElementData_TestimonialsBlock_Fragment = (
  { __typename?: 'TestimonialsBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialsBlock_Fragment': IElementData_TestimonialsBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialsBlock_Fragment' };

type ElementData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IElementData__Component_Fragment': IElementData__Component_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Component_Fragment' };

type ElementData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IElementData__Section_Fragment': IElementData__Section_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Section_Fragment' };

export type ElementDataFragment = ElementData_AvailabilityBlock_Fragment | ElementData_BlankSection_Fragment | ElementData_ContactBlock_Fragment | ElementData_FooterColumn_Fragment | ElementData_HelloWorld_Fragment | ElementData_HeroBlock_Fragment | ElementData_LogoItemBlock_Fragment | ElementData_LogosBlock_Fragment | ElementData_NavItem_Fragment | ElementData_PortfolioGridBlock_Fragment | ElementData_PortfolioItemBlock_Fragment | ElementData_ProfileBlock_Fragment | ElementData_ServiceItem_Fragment | ElementData_ServicesBlock_Fragment | ElementData_SocialLink_Fragment | ElementData_StoryBlock_Fragment | ElementData_TedTestBlock_Fragment | ElementData_TestimonialItem_Fragment | ElementData_TestimonialItemBlock_Fragment | ElementData_TestimonialsBlock_Fragment | ElementData__Component_Fragment | ElementData__Section_Fragment;

type BlockData_AvailabilityBlock_Fragment = (
  { __typename?: 'AvailabilityBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_AvailabilityBlock_Fragment': IContentData_AvailabilityBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_AvailabilityBlock_Fragment' };

type BlockData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankSection_Fragment' };

type BlockData_ContactBlock_Fragment = (
  { __typename?: 'ContactBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContactBlock_Fragment': IContentData_ContactBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContactBlock_Fragment' };

type BlockData_FooterColumn_Fragment = (
  { __typename?: 'FooterColumn' }
  & { ' $fragmentRefs'?: { 'IContentData_FooterColumn_Fragment': IContentData_FooterColumn_Fragment } }
) & { ' $fragmentName'?: 'BlockData_FooterColumn_Fragment' };

type BlockData_HelloWorld_Fragment = (
  { __typename?: 'HelloWorld' }
  & { ' $fragmentRefs'?: { 'IContentData_HelloWorld_Fragment': IContentData_HelloWorld_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HelloWorld_Fragment' };

type BlockData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeroBlock_Fragment' };

type BlockData_LogoItemBlock_Fragment = (
  { __typename?: 'LogoItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LogoItemBlock_Fragment': IContentData_LogoItemBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LogoItemBlock_Fragment' };

type BlockData_LogosBlock_Fragment = (
  { __typename?: 'LogosBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LogosBlock_Fragment': IContentData_LogosBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LogosBlock_Fragment' };

type BlockData_NavItem_Fragment = (
  { __typename?: 'NavItem' }
  & { ' $fragmentRefs'?: { 'IContentData_NavItem_Fragment': IContentData_NavItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_NavItem_Fragment' };

type BlockData_PortfolioGridBlock_Fragment = (
  { __typename?: 'PortfolioGridBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_PortfolioGridBlock_Fragment': IContentData_PortfolioGridBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PortfolioGridBlock_Fragment' };

type BlockData_PortfolioItemBlock_Fragment = (
  { __typename?: 'PortfolioItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_PortfolioItemBlock_Fragment': IContentData_PortfolioItemBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PortfolioItemBlock_Fragment' };

type BlockData_ProfileBlock_Fragment = (
  { __typename?: 'ProfileBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ProfileBlock_Fragment': IContentData_ProfileBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ProfileBlock_Fragment' };

type BlockData_ServiceItem_Fragment = (
  { __typename?: 'ServiceItem' }
  & { ' $fragmentRefs'?: { 'IContentData_ServiceItem_Fragment': IContentData_ServiceItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ServiceItem_Fragment' };

type BlockData_ServicesBlock_Fragment = (
  { __typename?: 'ServicesBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ServicesBlock_Fragment': IContentData_ServicesBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ServicesBlock_Fragment' };

type BlockData_SocialLink_Fragment = (
  { __typename?: 'SocialLink' }
  & { ' $fragmentRefs'?: { 'IContentData_SocialLink_Fragment': IContentData_SocialLink_Fragment } }
) & { ' $fragmentName'?: 'BlockData_SocialLink_Fragment' };

type BlockData_StoryBlock_Fragment = (
  { __typename?: 'StoryBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_StoryBlock_Fragment': IContentData_StoryBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_StoryBlock_Fragment' };

type BlockData_TedTestBlock_Fragment = (
  { __typename?: 'TedTestBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TedTestBlock_Fragment': IContentData_TedTestBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TedTestBlock_Fragment' };

type BlockData_TestimonialItem_Fragment = (
  { __typename?: 'TestimonialItem' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialItem_Fragment': IContentData_TestimonialItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialItem_Fragment' };

type BlockData_TestimonialItemBlock_Fragment = (
  { __typename?: 'TestimonialItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialItemBlock_Fragment': IContentData_TestimonialItemBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialItemBlock_Fragment' };

type BlockData_TestimonialsBlock_Fragment = (
  { __typename?: 'TestimonialsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialsBlock_Fragment': IContentData_TestimonialsBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialsBlock_Fragment' };

type BlockData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Component_Fragment' };

type BlockData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Section_Fragment' };

export type BlockDataFragment = BlockData_AvailabilityBlock_Fragment | BlockData_BlankSection_Fragment | BlockData_ContactBlock_Fragment | BlockData_FooterColumn_Fragment | BlockData_HelloWorld_Fragment | BlockData_HeroBlock_Fragment | BlockData_LogoItemBlock_Fragment | BlockData_LogosBlock_Fragment | BlockData_NavItem_Fragment | BlockData_PortfolioGridBlock_Fragment | BlockData_PortfolioItemBlock_Fragment | BlockData_ProfileBlock_Fragment | BlockData_ServiceItem_Fragment | BlockData_ServicesBlock_Fragment | BlockData_SocialLink_Fragment | BlockData_StoryBlock_Fragment | BlockData_TedTestBlock_Fragment | BlockData_TestimonialItem_Fragment | BlockData_TestimonialItemBlock_Fragment | BlockData_TestimonialsBlock_Fragment | BlockData__Component_Fragment | BlockData__Section_Fragment;

type PageData_AvailabilityBlock_Fragment = (
  { __typename?: 'AvailabilityBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_AvailabilityBlock_Fragment': IContentData_AvailabilityBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_AvailabilityBlock_Fragment' };

type PageData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankExperience_Fragment' };

type PageData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankSection_Fragment' };

type PageData_CMSPage_Fragment = (
  { __typename?: 'CMSPage' }
  & { ' $fragmentRefs'?: { 'IContentData_CMSPage_Fragment': IContentData_CMSPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_CMSPage_Fragment' };

type PageData_ContactBlock_Fragment = (
  { __typename?: 'ContactBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContactBlock_Fragment': IContentData_ContactBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContactBlock_Fragment' };

type PageData_Footer_Fragment = (
  { __typename?: 'Footer' }
  & { ' $fragmentRefs'?: { 'IContentData_Footer_Fragment': IContentData_Footer_Fragment } }
) & { ' $fragmentName'?: 'PageData_Footer_Fragment' };

type PageData_FooterColumn_Fragment = (
  { __typename?: 'FooterColumn' }
  & { ' $fragmentRefs'?: { 'IContentData_FooterColumn_Fragment': IContentData_FooterColumn_Fragment } }
) & { ' $fragmentName'?: 'PageData_FooterColumn_Fragment' };

type PageData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_GenericMedia_Fragment' };

type PageData_GenericMedia123_Fragment = (
  { __typename?: 'GenericMedia123' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia123_Fragment': IContentData_GenericMedia123_Fragment } }
) & { ' $fragmentName'?: 'PageData_GenericMedia123_Fragment' };

type PageData_Header_Fragment = (
  { __typename?: 'Header' }
  & { ' $fragmentRefs'?: { 'IContentData_Header_Fragment': IContentData_Header_Fragment } }
) & { ' $fragmentName'?: 'PageData_Header_Fragment' };

type PageData_HelloWorld_Fragment = (
  { __typename?: 'HelloWorld' }
  & { ' $fragmentRefs'?: { 'IContentData_HelloWorld_Fragment': IContentData_HelloWorld_Fragment } }
) & { ' $fragmentName'?: 'PageData_HelloWorld_Fragment' };

type PageData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeroBlock_Fragment' };

type PageData_HomePage_Fragment = (
  { __typename?: 'HomePage' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePage_Fragment': IContentData_HomePage_Fragment } }
) & { ' $fragmentName'?: 'PageData_HomePage_Fragment' };

type PageData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageMedia_Fragment' };

type PageData_LogoItemBlock_Fragment = (
  { __typename?: 'LogoItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LogoItemBlock_Fragment': IContentData_LogoItemBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_LogoItemBlock_Fragment' };

type PageData_LogosBlock_Fragment = (
  { __typename?: 'LogosBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LogosBlock_Fragment': IContentData_LogosBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_LogosBlock_Fragment' };

type PageData_NavItem_Fragment = (
  { __typename?: 'NavItem' }
  & { ' $fragmentRefs'?: { 'IContentData_NavItem_Fragment': IContentData_NavItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_NavItem_Fragment' };

type PageData_PortfolioGridBlock_Fragment = (
  { __typename?: 'PortfolioGridBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_PortfolioGridBlock_Fragment': IContentData_PortfolioGridBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_PortfolioGridBlock_Fragment' };

type PageData_PortfolioItemBlock_Fragment = (
  { __typename?: 'PortfolioItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_PortfolioItemBlock_Fragment': IContentData_PortfolioItemBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_PortfolioItemBlock_Fragment' };

type PageData_ProfileBlock_Fragment = (
  { __typename?: 'ProfileBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ProfileBlock_Fragment': IContentData_ProfileBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ProfileBlock_Fragment' };

type PageData_SEOExperience_Fragment = (
  { __typename?: 'SEOExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_SEOExperience_Fragment': IContentData_SEOExperience_Fragment } }
) & { ' $fragmentName'?: 'PageData_SEOExperience_Fragment' };

type PageData_ServiceItem_Fragment = (
  { __typename?: 'ServiceItem' }
  & { ' $fragmentRefs'?: { 'IContentData_ServiceItem_Fragment': IContentData_ServiceItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_ServiceItem_Fragment' };

type PageData_ServicesBlock_Fragment = (
  { __typename?: 'ServicesBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ServicesBlock_Fragment': IContentData_ServicesBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ServicesBlock_Fragment' };

type PageData_SocialLink_Fragment = (
  { __typename?: 'SocialLink' }
  & { ' $fragmentRefs'?: { 'IContentData_SocialLink_Fragment': IContentData_SocialLink_Fragment } }
) & { ' $fragmentName'?: 'PageData_SocialLink_Fragment' };

type PageData_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_StartPage_Fragment' };

type PageData_StoryBlock_Fragment = (
  { __typename?: 'StoryBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_StoryBlock_Fragment': IContentData_StoryBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_StoryBlock_Fragment' };

type PageData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'PageData_SysContentFolder_Fragment' };

type PageData_TedTestBlock_Fragment = (
  { __typename?: 'TedTestBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TedTestBlock_Fragment': IContentData_TedTestBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TedTestBlock_Fragment' };

type PageData_TestimonialItem_Fragment = (
  { __typename?: 'TestimonialItem' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialItem_Fragment': IContentData_TestimonialItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialItem_Fragment' };

type PageData_TestimonialItemBlock_Fragment = (
  { __typename?: 'TestimonialItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialItemBlock_Fragment': IContentData_TestimonialItemBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialItemBlock_Fragment' };

type PageData_TestimonialsBlock_Fragment = (
  { __typename?: 'TestimonialsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialsBlock_Fragment': IContentData_TestimonialsBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialsBlock_Fragment' };

type PageData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoMedia_Fragment' };

type PageData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'PageData__Component_Fragment' };

type PageData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'PageData__Content_Fragment' };

type PageData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'PageData__Experience_Fragment' };

type PageData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'PageData__Folder_Fragment' };

type PageData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'PageData__Image_Fragment' };

type PageData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'PageData__Media_Fragment' };

type PageData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'PageData__Page_Fragment' };

type PageData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'PageData__Section_Fragment' };

type PageData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'PageData__Video_Fragment' };

export type PageDataFragment = PageData_AvailabilityBlock_Fragment | PageData_BlankExperience_Fragment | PageData_BlankSection_Fragment | PageData_CMSPage_Fragment | PageData_ContactBlock_Fragment | PageData_Footer_Fragment | PageData_FooterColumn_Fragment | PageData_GenericMedia_Fragment | PageData_GenericMedia123_Fragment | PageData_Header_Fragment | PageData_HelloWorld_Fragment | PageData_HeroBlock_Fragment | PageData_HomePage_Fragment | PageData_ImageMedia_Fragment | PageData_LogoItemBlock_Fragment | PageData_LogosBlock_Fragment | PageData_NavItem_Fragment | PageData_PortfolioGridBlock_Fragment | PageData_PortfolioItemBlock_Fragment | PageData_ProfileBlock_Fragment | PageData_SEOExperience_Fragment | PageData_ServiceItem_Fragment | PageData_ServicesBlock_Fragment | PageData_SocialLink_Fragment | PageData_StartPage_Fragment | PageData_StoryBlock_Fragment | PageData_SysContentFolder_Fragment | PageData_TedTestBlock_Fragment | PageData_TestimonialItem_Fragment | PageData_TestimonialItemBlock_Fragment | PageData_TestimonialsBlock_Fragment | PageData_VideoMedia_Fragment | PageData__Component_Fragment | PageData__Content_Fragment | PageData__Experience_Fragment | PageData__Folder_Fragment | PageData__Image_Fragment | PageData__Media_Fragment | PageData__Page_Fragment | PageData__Section_Fragment | PageData__Video_Fragment;

export type LinkDataFragment = { __typename?: 'ContentUrl', type?: string | null, base?: string | null, default?: string | null } & { ' $fragmentName'?: 'LinkDataFragment' };

type IContentInfo_ContentMetadata_Fragment = { __typename?: 'ContentMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ContentMetadata_Fragment' };

type IContentInfo_InstanceMetadata_Fragment = { __typename?: 'InstanceMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_InstanceMetadata_Fragment' };

type IContentInfo_ItemMetadata_Fragment = { __typename?: 'ItemMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ItemMetadata_Fragment' };

type IContentInfo_MediaMetadata_Fragment = { __typename?: 'MediaMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_MediaMetadata_Fragment' };

export type IContentInfoFragment = IContentInfo_ContentMetadata_Fragment | IContentInfo_InstanceMetadata_Fragment | IContentInfo_ItemMetadata_Fragment | IContentInfo_MediaMetadata_Fragment;

type IContentListItem_AvailabilityBlock_Fragment = (
  { __typename?: 'AvailabilityBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_AvailabilityBlock_Fragment': IContentData_AvailabilityBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_AvailabilityBlock_Fragment' };

type IContentListItem_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankExperience_Fragment' };

type IContentListItem_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankSection_Fragment' };

type IContentListItem_CMSPage_Fragment = (
  { __typename?: 'CMSPage' }
  & { ' $fragmentRefs'?: { 'IContentData_CMSPage_Fragment': IContentData_CMSPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CMSPage_Fragment' };

type IContentListItem_ContactBlock_Fragment = (
  { __typename?: 'ContactBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContactBlock_Fragment': IContentData_ContactBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContactBlock_Fragment' };

type IContentListItem_Footer_Fragment = (
  { __typename?: 'Footer' }
  & { ' $fragmentRefs'?: { 'IContentData_Footer_Fragment': IContentData_Footer_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Footer_Fragment' };

type IContentListItem_FooterColumn_Fragment = (
  { __typename?: 'FooterColumn' }
  & { ' $fragmentRefs'?: { 'IContentData_FooterColumn_Fragment': IContentData_FooterColumn_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_FooterColumn_Fragment' };

type IContentListItem_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_GenericMedia_Fragment' };

type IContentListItem_GenericMedia123_Fragment = (
  { __typename?: 'GenericMedia123' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia123_Fragment': IContentData_GenericMedia123_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_GenericMedia123_Fragment' };

type IContentListItem_Header_Fragment = (
  { __typename?: 'Header' }
  & { ' $fragmentRefs'?: { 'IContentData_Header_Fragment': IContentData_Header_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Header_Fragment' };

type IContentListItem_HelloWorld_Fragment = (
  { __typename?: 'HelloWorld' }
  & { ' $fragmentRefs'?: { 'IContentData_HelloWorld_Fragment': IContentData_HelloWorld_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HelloWorld_Fragment' };

type IContentListItem_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeroBlock_Fragment' };

type IContentListItem_HomePage_Fragment = (
  { __typename?: 'HomePage' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePage_Fragment': IContentData_HomePage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HomePage_Fragment' };

type IContentListItem_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageMedia_Fragment' };

type IContentListItem_LogoItemBlock_Fragment = (
  { __typename?: 'LogoItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LogoItemBlock_Fragment': IContentData_LogoItemBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LogoItemBlock_Fragment' };

type IContentListItem_LogosBlock_Fragment = (
  { __typename?: 'LogosBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LogosBlock_Fragment': IContentData_LogosBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LogosBlock_Fragment' };

type IContentListItem_NavItem_Fragment = (
  { __typename?: 'NavItem' }
  & { ' $fragmentRefs'?: { 'IContentData_NavItem_Fragment': IContentData_NavItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_NavItem_Fragment' };

type IContentListItem_PortfolioGridBlock_Fragment = (
  { __typename?: 'PortfolioGridBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_PortfolioGridBlock_Fragment': IContentData_PortfolioGridBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PortfolioGridBlock_Fragment' };

type IContentListItem_PortfolioItemBlock_Fragment = (
  { __typename?: 'PortfolioItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_PortfolioItemBlock_Fragment': IContentData_PortfolioItemBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PortfolioItemBlock_Fragment' };

type IContentListItem_ProfileBlock_Fragment = (
  { __typename?: 'ProfileBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ProfileBlock_Fragment': IContentData_ProfileBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ProfileBlock_Fragment' };

type IContentListItem_SEOExperience_Fragment = (
  { __typename?: 'SEOExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_SEOExperience_Fragment': IContentData_SEOExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SEOExperience_Fragment' };

type IContentListItem_ServiceItem_Fragment = (
  { __typename?: 'ServiceItem' }
  & { ' $fragmentRefs'?: { 'IContentData_ServiceItem_Fragment': IContentData_ServiceItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ServiceItem_Fragment' };

type IContentListItem_ServicesBlock_Fragment = (
  { __typename?: 'ServicesBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ServicesBlock_Fragment': IContentData_ServicesBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ServicesBlock_Fragment' };

type IContentListItem_SocialLink_Fragment = (
  { __typename?: 'SocialLink' }
  & { ' $fragmentRefs'?: { 'IContentData_SocialLink_Fragment': IContentData_SocialLink_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SocialLink_Fragment' };

type IContentListItem_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_StartPage_Fragment' };

type IContentListItem_StoryBlock_Fragment = (
  { __typename?: 'StoryBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_StoryBlock_Fragment': IContentData_StoryBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_StoryBlock_Fragment' };

type IContentListItem_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SysContentFolder_Fragment' };

type IContentListItem_TedTestBlock_Fragment = (
  { __typename?: 'TedTestBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TedTestBlock_Fragment': IContentData_TedTestBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TedTestBlock_Fragment' };

type IContentListItem_TestimonialItem_Fragment = (
  { __typename?: 'TestimonialItem' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialItem_Fragment': IContentData_TestimonialItem_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialItem_Fragment' };

type IContentListItem_TestimonialItemBlock_Fragment = (
  { __typename?: 'TestimonialItemBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialItemBlock_Fragment': IContentData_TestimonialItemBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialItemBlock_Fragment' };

type IContentListItem_TestimonialsBlock_Fragment = (
  { __typename?: 'TestimonialsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialsBlock_Fragment': IContentData_TestimonialsBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialsBlock_Fragment' };

type IContentListItem_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoMedia_Fragment' };

type IContentListItem__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Component_Fragment' };

type IContentListItem__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Content_Fragment' };

type IContentListItem__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Experience_Fragment' };

type IContentListItem__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Folder_Fragment' };

type IContentListItem__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Image_Fragment' };

type IContentListItem__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Media_Fragment' };

type IContentListItem__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Page_Fragment' };

type IContentListItem__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Section_Fragment' };

type IContentListItem__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Video_Fragment' };

export type IContentListItemFragment = IContentListItem_AvailabilityBlock_Fragment | IContentListItem_BlankExperience_Fragment | IContentListItem_BlankSection_Fragment | IContentListItem_CMSPage_Fragment | IContentListItem_ContactBlock_Fragment | IContentListItem_Footer_Fragment | IContentListItem_FooterColumn_Fragment | IContentListItem_GenericMedia_Fragment | IContentListItem_GenericMedia123_Fragment | IContentListItem_Header_Fragment | IContentListItem_HelloWorld_Fragment | IContentListItem_HeroBlock_Fragment | IContentListItem_HomePage_Fragment | IContentListItem_ImageMedia_Fragment | IContentListItem_LogoItemBlock_Fragment | IContentListItem_LogosBlock_Fragment | IContentListItem_NavItem_Fragment | IContentListItem_PortfolioGridBlock_Fragment | IContentListItem_PortfolioItemBlock_Fragment | IContentListItem_ProfileBlock_Fragment | IContentListItem_SEOExperience_Fragment | IContentListItem_ServiceItem_Fragment | IContentListItem_ServicesBlock_Fragment | IContentListItem_SocialLink_Fragment | IContentListItem_StartPage_Fragment | IContentListItem_StoryBlock_Fragment | IContentListItem_SysContentFolder_Fragment | IContentListItem_TedTestBlock_Fragment | IContentListItem_TestimonialItem_Fragment | IContentListItem_TestimonialItemBlock_Fragment | IContentListItem_TestimonialsBlock_Fragment | IContentListItem_VideoMedia_Fragment | IContentListItem__Component_Fragment | IContentListItem__Content_Fragment | IContentListItem__Experience_Fragment | IContentListItem__Folder_Fragment | IContentListItem__Image_Fragment | IContentListItem__Media_Fragment | IContentListItem__Page_Fragment | IContentListItem__Section_Fragment | IContentListItem__Video_Fragment;

type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode', nodes?: Array<(
              { __typename?: 'CompositionComponentNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
            ) | (
              { __typename?: 'CompositionNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
            ) | (
              { __typename?: 'CompositionStructureNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
            ) | null> | null }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_BlankExperience_Fragment' };

type ExperienceData_SEOExperience_Fragment = { __typename?: 'SEOExperience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode', nodes?: Array<(
              { __typename?: 'CompositionComponentNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
            ) | (
              { __typename?: 'CompositionNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
            ) | (
              { __typename?: 'CompositionStructureNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
            ) | null> | null }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_SEOExperience_Fragment' };

type ExperienceData__Experience_Fragment = { __typename?: '_Experience', composition?: (
    { __typename?: 'CompositionStructureNode', nodes?: Array<(
      { __typename?: 'CompositionComponentNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
    ) | (
      { __typename?: 'CompositionNode' }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
    ) | (
      { __typename?: 'CompositionStructureNode', nodes?: Array<(
        { __typename?: 'CompositionComponentNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
      ) | (
        { __typename?: 'CompositionNode' }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
      ) | (
        { __typename?: 'CompositionStructureNode', nodes?: Array<(
          { __typename?: 'CompositionComponentNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment } }
        ) | (
          { __typename?: 'CompositionNode' }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
        ) | (
          { __typename?: 'CompositionStructureNode', nodes?: Array<(
            { __typename?: 'CompositionComponentNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
          ) | (
            { __typename?: 'CompositionNode' }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
          ) | (
            { __typename?: 'CompositionStructureNode', nodes?: Array<(
              { __typename?: 'CompositionComponentNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionComponentNode_Fragment': CompositionNodeData_CompositionComponentNode_Fragment;'CompositionComponentNodeDataFragment': CompositionComponentNodeDataFragment } }
            ) | (
              { __typename?: 'CompositionNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionNode_Fragment': CompositionNodeData_CompositionNode_Fragment } }
            ) | (
              { __typename?: 'CompositionStructureNode' }
              & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
            ) | null> | null }
            & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
          ) | null> | null }
          & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
        ) | null> | null }
        & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
      ) | null> | null }
      & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
    ) | null> | null }
    & { ' $fragmentRefs'?: { 'CompositionNodeData_CompositionStructureNode_Fragment': CompositionNodeData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData__Experience_Fragment' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData_SEOExperience_Fragment | ExperienceData__Experience_Fragment;

type CompositionNodeData_CompositionComponentNode_Fragment = { __typename?: 'CompositionComponentNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionComponentNode_Fragment' };

type CompositionNodeData_CompositionNode_Fragment = { __typename?: 'CompositionNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionNode_Fragment' };

type CompositionNodeData_CompositionStructureNode_Fragment = { __typename?: 'CompositionStructureNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionNodeData_CompositionStructureNode_Fragment' };

export type CompositionNodeDataFragment = CompositionNodeData_CompositionComponentNode_Fragment | CompositionNodeData_CompositionNode_Fragment | CompositionNodeData_CompositionStructureNode_Fragment;

export type CompositionComponentNodeDataFragment = { __typename?: 'CompositionComponentNode', component?: (
    { __typename?: 'AvailabilityBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'ElementData_AvailabilityBlock_Fragment': ElementData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'ElementData_BlankSection_Fragment': ElementData_BlankSection_Fragment } }
  ) | (
    { __typename?: 'ContactBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'ElementData_ContactBlock_Fragment': ElementData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
  ) | (
    { __typename?: 'FooterColumn' }
    & { ' $fragmentRefs'?: { 'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'ElementData_FooterColumn_Fragment': ElementData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
  ) | (
    { __typename?: 'HelloWorld' }
    & { ' $fragmentRefs'?: { 'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'ElementData_HelloWorld_Fragment': ElementData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'ElementData_HeroBlock_Fragment': ElementData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | (
    { __typename?: 'LogoItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'ElementData_LogoItemBlock_Fragment': ElementData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
  ) | (
    { __typename?: 'LogosBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'ElementData_LogosBlock_Fragment': ElementData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
  ) | (
    { __typename?: 'NavItem' }
    & { ' $fragmentRefs'?: { 'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'ElementData_NavItem_Fragment': ElementData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
  ) | (
    { __typename?: 'PortfolioGridBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'ElementData_PortfolioGridBlock_Fragment': ElementData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
  ) | (
    { __typename?: 'PortfolioItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'ElementData_PortfolioItemBlock_Fragment': ElementData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
  ) | (
    { __typename?: 'ProfileBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'ElementData_ProfileBlock_Fragment': ElementData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
  ) | (
    { __typename?: 'ServiceItem' }
    & { ' $fragmentRefs'?: { 'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'ElementData_ServiceItem_Fragment': ElementData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
  ) | (
    { __typename?: 'ServicesBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'ElementData_ServicesBlock_Fragment': ElementData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
  ) | (
    { __typename?: 'SocialLink' }
    & { ' $fragmentRefs'?: { 'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'ElementData_SocialLink_Fragment': ElementData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
  ) | (
    { __typename?: 'StoryBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'ElementData_StoryBlock_Fragment': ElementData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
  ) | (
    { __typename?: 'TedTestBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'ElementData_TedTestBlock_Fragment': ElementData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialItem' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'ElementData_TestimonialItem_Fragment': ElementData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
  ) | (
    { __typename?: 'TestimonialItemBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'ElementData_TestimonialItemBlock_Fragment': ElementData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
  ) | (
    { __typename?: 'TestimonialsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'ElementData_TestimonialsBlock_Fragment': ElementData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'ElementData__Component_Fragment': ElementData__Component_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'ElementData__Section_Fragment': ElementData__Section_Fragment } }
  ) | null } & { ' $fragmentName'?: 'CompositionComponentNodeDataFragment' };

export type getContentByIdQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  changeset?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByIdQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: (
      { __typename?: 'AvailabilityBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_AvailabilityBlock_Fragment': IContentData_AvailabilityBlock_Fragment;'BlockData_AvailabilityBlock_Fragment': BlockData_AvailabilityBlock_Fragment;'PageData_AvailabilityBlock_Fragment': PageData_AvailabilityBlock_Fragment;'AvailabilityBlockDataFragment': AvailabilityBlockDataFragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment;'BlankExperienceDataFragment': BlankExperienceDataFragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment;'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'CMSPage' }
      & { ' $fragmentRefs'?: { 'IContentData_CMSPage_Fragment': IContentData_CMSPage_Fragment;'PageData_CMSPage_Fragment': PageData_CMSPage_Fragment;'CMSPageDataFragment': CMSPageDataFragment } }
    ) | (
      { __typename?: 'ContactBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ContactBlock_Fragment': IContentData_ContactBlock_Fragment;'BlockData_ContactBlock_Fragment': BlockData_ContactBlock_Fragment;'PageData_ContactBlock_Fragment': PageData_ContactBlock_Fragment;'ContactBlockDataFragment': ContactBlockDataFragment } }
    ) | (
      { __typename?: 'Footer' }
      & { ' $fragmentRefs'?: { 'IContentData_Footer_Fragment': IContentData_Footer_Fragment;'PageData_Footer_Fragment': PageData_Footer_Fragment;'FooterDataFragment': FooterDataFragment } }
    ) | (
      { __typename?: 'FooterColumn' }
      & { ' $fragmentRefs'?: { 'IContentData_FooterColumn_Fragment': IContentData_FooterColumn_Fragment;'BlockData_FooterColumn_Fragment': BlockData_FooterColumn_Fragment;'PageData_FooterColumn_Fragment': PageData_FooterColumn_Fragment;'FooterColumnDataFragment': FooterColumnDataFragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment;'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'GenericMedia123' }
      & { ' $fragmentRefs'?: { 'IContentData_GenericMedia123_Fragment': IContentData_GenericMedia123_Fragment;'PageData_GenericMedia123_Fragment': PageData_GenericMedia123_Fragment } }
    ) | (
      { __typename?: 'Header' }
      & { ' $fragmentRefs'?: { 'IContentData_Header_Fragment': IContentData_Header_Fragment;'PageData_Header_Fragment': PageData_Header_Fragment;'HeaderDataFragment': HeaderDataFragment } }
    ) | (
      { __typename?: 'HelloWorld' }
      & { ' $fragmentRefs'?: { 'IContentData_HelloWorld_Fragment': IContentData_HelloWorld_Fragment;'BlockData_HelloWorld_Fragment': BlockData_HelloWorld_Fragment;'PageData_HelloWorld_Fragment': PageData_HelloWorld_Fragment;'HelloWorldDataFragment': HelloWorldDataFragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
    ) | (
      { __typename?: 'HomePage' }
      & { ' $fragmentRefs'?: { 'IContentData_HomePage_Fragment': IContentData_HomePage_Fragment;'PageData_HomePage_Fragment': PageData_HomePage_Fragment;'HomePageDataFragment': HomePageDataFragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LogoItemBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LogoItemBlock_Fragment': IContentData_LogoItemBlock_Fragment;'BlockData_LogoItemBlock_Fragment': BlockData_LogoItemBlock_Fragment;'PageData_LogoItemBlock_Fragment': PageData_LogoItemBlock_Fragment;'LogoItemBlockDataFragment': LogoItemBlockDataFragment } }
    ) | (
      { __typename?: 'LogosBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LogosBlock_Fragment': IContentData_LogosBlock_Fragment;'BlockData_LogosBlock_Fragment': BlockData_LogosBlock_Fragment;'PageData_LogosBlock_Fragment': PageData_LogosBlock_Fragment;'LogosBlockDataFragment': LogosBlockDataFragment } }
    ) | (
      { __typename?: 'NavItem' }
      & { ' $fragmentRefs'?: { 'IContentData_NavItem_Fragment': IContentData_NavItem_Fragment;'BlockData_NavItem_Fragment': BlockData_NavItem_Fragment;'PageData_NavItem_Fragment': PageData_NavItem_Fragment;'NavItemDataFragment': NavItemDataFragment } }
    ) | (
      { __typename?: 'PortfolioGridBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_PortfolioGridBlock_Fragment': IContentData_PortfolioGridBlock_Fragment;'BlockData_PortfolioGridBlock_Fragment': BlockData_PortfolioGridBlock_Fragment;'PageData_PortfolioGridBlock_Fragment': PageData_PortfolioGridBlock_Fragment;'PortfolioGridBlockDataFragment': PortfolioGridBlockDataFragment } }
    ) | (
      { __typename?: 'PortfolioItemBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_PortfolioItemBlock_Fragment': IContentData_PortfolioItemBlock_Fragment;'BlockData_PortfolioItemBlock_Fragment': BlockData_PortfolioItemBlock_Fragment;'PageData_PortfolioItemBlock_Fragment': PageData_PortfolioItemBlock_Fragment;'PortfolioItemBlockDataFragment': PortfolioItemBlockDataFragment } }
    ) | (
      { __typename?: 'ProfileBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ProfileBlock_Fragment': IContentData_ProfileBlock_Fragment;'BlockData_ProfileBlock_Fragment': BlockData_ProfileBlock_Fragment;'PageData_ProfileBlock_Fragment': PageData_ProfileBlock_Fragment;'ProfileBlockDataFragment': ProfileBlockDataFragment } }
    ) | (
      { __typename?: 'SEOExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_SEOExperience_Fragment': IContentData_SEOExperience_Fragment;'PageData_SEOExperience_Fragment': PageData_SEOExperience_Fragment;'SEOExperienceDataFragment': SEOExperienceDataFragment } }
    ) | (
      { __typename?: 'ServiceItem' }
      & { ' $fragmentRefs'?: { 'IContentData_ServiceItem_Fragment': IContentData_ServiceItem_Fragment;'BlockData_ServiceItem_Fragment': BlockData_ServiceItem_Fragment;'PageData_ServiceItem_Fragment': PageData_ServiceItem_Fragment;'ServiceItemDataFragment': ServiceItemDataFragment } }
    ) | (
      { __typename?: 'ServicesBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ServicesBlock_Fragment': IContentData_ServicesBlock_Fragment;'BlockData_ServicesBlock_Fragment': BlockData_ServicesBlock_Fragment;'PageData_ServicesBlock_Fragment': PageData_ServicesBlock_Fragment;'ServicesBlockDataFragment': ServicesBlockDataFragment } }
    ) | (
      { __typename?: 'SocialLink' }
      & { ' $fragmentRefs'?: { 'IContentData_SocialLink_Fragment': IContentData_SocialLink_Fragment;'BlockData_SocialLink_Fragment': BlockData_SocialLink_Fragment;'PageData_SocialLink_Fragment': PageData_SocialLink_Fragment;'SocialLinkDataFragment': SocialLinkDataFragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment;'PageData_StartPage_Fragment': PageData_StartPage_Fragment;'StartPageDataFragment': StartPageDataFragment } }
    ) | (
      { __typename?: 'StoryBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_StoryBlock_Fragment': IContentData_StoryBlock_Fragment;'BlockData_StoryBlock_Fragment': BlockData_StoryBlock_Fragment;'PageData_StoryBlock_Fragment': PageData_StoryBlock_Fragment;'StoryBlockDataFragment': StoryBlockDataFragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TedTestBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TedTestBlock_Fragment': IContentData_TedTestBlock_Fragment;'BlockData_TedTestBlock_Fragment': BlockData_TedTestBlock_Fragment;'PageData_TedTestBlock_Fragment': PageData_TedTestBlock_Fragment;'TedTestBlockDataFragment': TedTestBlockDataFragment } }
    ) | (
      { __typename?: 'TestimonialItem' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialItem_Fragment': IContentData_TestimonialItem_Fragment;'BlockData_TestimonialItem_Fragment': BlockData_TestimonialItem_Fragment;'PageData_TestimonialItem_Fragment': PageData_TestimonialItem_Fragment;'TestimonialItemDataFragment': TestimonialItemDataFragment } }
    ) | (
      { __typename?: 'TestimonialItemBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialItemBlock_Fragment': IContentData_TestimonialItemBlock_Fragment;'BlockData_TestimonialItemBlock_Fragment': BlockData_TestimonialItemBlock_Fragment;'PageData_TestimonialItemBlock_Fragment': PageData_TestimonialItemBlock_Fragment;'TestimonialItemBlockDataFragment': TestimonialItemBlockDataFragment } }
    ) | (
      { __typename?: 'TestimonialsBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialsBlock_Fragment': IContentData_TestimonialsBlock_Fragment;'BlockData_TestimonialsBlock_Fragment': BlockData_TestimonialsBlock_Fragment;'PageData_TestimonialsBlock_Fragment': PageData_TestimonialsBlock_Fragment;'TestimonialsBlockDataFragment': TestimonialsBlockDataFragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment;'BlockData__Component_Fragment': BlockData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment;'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment;'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment;'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment;'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment;'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment;'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment;'BlockData__Section_Fragment': BlockData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment;'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null } | null };

export type getContentByPathQueryVariables = Exact<{
  path: Array<Scalars['String']['input']> | Scalars['String']['input'];
  locale?: InputMaybe<Array<Locales> | Locales>;
  siteId?: InputMaybe<Scalars['String']['input']>;
  changeset?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByPathQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: (
      { __typename?: 'AvailabilityBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_AvailabilityBlock_Fragment': IContentData_AvailabilityBlock_Fragment;'PageData_AvailabilityBlock_Fragment': PageData_AvailabilityBlock_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment;'BlankExperienceDataFragment': BlankExperienceDataFragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'CMSPage' }
      & { ' $fragmentRefs'?: { 'IContentData_CMSPage_Fragment': IContentData_CMSPage_Fragment;'PageData_CMSPage_Fragment': PageData_CMSPage_Fragment;'CMSPageDataFragment': CMSPageDataFragment } }
    ) | (
      { __typename?: 'ContactBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ContactBlock_Fragment': IContentData_ContactBlock_Fragment;'PageData_ContactBlock_Fragment': PageData_ContactBlock_Fragment } }
    ) | (
      { __typename?: 'Footer' }
      & { ' $fragmentRefs'?: { 'IContentData_Footer_Fragment': IContentData_Footer_Fragment;'PageData_Footer_Fragment': PageData_Footer_Fragment;'FooterDataFragment': FooterDataFragment } }
    ) | (
      { __typename?: 'FooterColumn' }
      & { ' $fragmentRefs'?: { 'IContentData_FooterColumn_Fragment': IContentData_FooterColumn_Fragment;'PageData_FooterColumn_Fragment': PageData_FooterColumn_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment;'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'GenericMedia123' }
      & { ' $fragmentRefs'?: { 'IContentData_GenericMedia123_Fragment': IContentData_GenericMedia123_Fragment;'PageData_GenericMedia123_Fragment': PageData_GenericMedia123_Fragment } }
    ) | (
      { __typename?: 'Header' }
      & { ' $fragmentRefs'?: { 'IContentData_Header_Fragment': IContentData_Header_Fragment;'PageData_Header_Fragment': PageData_Header_Fragment;'HeaderDataFragment': HeaderDataFragment } }
    ) | (
      { __typename?: 'HelloWorld' }
      & { ' $fragmentRefs'?: { 'IContentData_HelloWorld_Fragment': IContentData_HelloWorld_Fragment;'PageData_HelloWorld_Fragment': PageData_HelloWorld_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePage' }
      & { ' $fragmentRefs'?: { 'IContentData_HomePage_Fragment': IContentData_HomePage_Fragment;'PageData_HomePage_Fragment': PageData_HomePage_Fragment;'HomePageDataFragment': HomePageDataFragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LogoItemBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LogoItemBlock_Fragment': IContentData_LogoItemBlock_Fragment;'PageData_LogoItemBlock_Fragment': PageData_LogoItemBlock_Fragment } }
    ) | (
      { __typename?: 'LogosBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LogosBlock_Fragment': IContentData_LogosBlock_Fragment;'PageData_LogosBlock_Fragment': PageData_LogosBlock_Fragment } }
    ) | (
      { __typename?: 'NavItem' }
      & { ' $fragmentRefs'?: { 'IContentData_NavItem_Fragment': IContentData_NavItem_Fragment;'PageData_NavItem_Fragment': PageData_NavItem_Fragment } }
    ) | (
      { __typename?: 'PortfolioGridBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_PortfolioGridBlock_Fragment': IContentData_PortfolioGridBlock_Fragment;'PageData_PortfolioGridBlock_Fragment': PageData_PortfolioGridBlock_Fragment } }
    ) | (
      { __typename?: 'PortfolioItemBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_PortfolioItemBlock_Fragment': IContentData_PortfolioItemBlock_Fragment;'PageData_PortfolioItemBlock_Fragment': PageData_PortfolioItemBlock_Fragment } }
    ) | (
      { __typename?: 'ProfileBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ProfileBlock_Fragment': IContentData_ProfileBlock_Fragment;'PageData_ProfileBlock_Fragment': PageData_ProfileBlock_Fragment } }
    ) | (
      { __typename?: 'SEOExperience' }
      & { ' $fragmentRefs'?: { 'IContentData_SEOExperience_Fragment': IContentData_SEOExperience_Fragment;'PageData_SEOExperience_Fragment': PageData_SEOExperience_Fragment;'SEOExperienceDataFragment': SEOExperienceDataFragment } }
    ) | (
      { __typename?: 'ServiceItem' }
      & { ' $fragmentRefs'?: { 'IContentData_ServiceItem_Fragment': IContentData_ServiceItem_Fragment;'PageData_ServiceItem_Fragment': PageData_ServiceItem_Fragment } }
    ) | (
      { __typename?: 'ServicesBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ServicesBlock_Fragment': IContentData_ServicesBlock_Fragment;'PageData_ServicesBlock_Fragment': PageData_ServicesBlock_Fragment } }
    ) | (
      { __typename?: 'SocialLink' }
      & { ' $fragmentRefs'?: { 'IContentData_SocialLink_Fragment': IContentData_SocialLink_Fragment;'PageData_SocialLink_Fragment': PageData_SocialLink_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment;'PageData_StartPage_Fragment': PageData_StartPage_Fragment;'StartPageDataFragment': StartPageDataFragment } }
    ) | (
      { __typename?: 'StoryBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_StoryBlock_Fragment': IContentData_StoryBlock_Fragment;'PageData_StoryBlock_Fragment': PageData_StoryBlock_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TedTestBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TedTestBlock_Fragment': IContentData_TedTestBlock_Fragment;'PageData_TedTestBlock_Fragment': PageData_TedTestBlock_Fragment } }
    ) | (
      { __typename?: 'TestimonialItem' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialItem_Fragment': IContentData_TestimonialItem_Fragment;'PageData_TestimonialItem_Fragment': PageData_TestimonialItem_Fragment } }
    ) | (
      { __typename?: 'TestimonialItemBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialItemBlock_Fragment': IContentData_TestimonialItemBlock_Fragment;'PageData_TestimonialItemBlock_Fragment': PageData_TestimonialItemBlock_Fragment } }
    ) | (
      { __typename?: 'TestimonialsBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TestimonialsBlock_Fragment': IContentData_TestimonialsBlock_Fragment;'PageData_TestimonialsBlock_Fragment': PageData_TestimonialsBlock_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment;'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment;'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment;'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment;'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment;'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment;'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment;'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null } | null };

export type getContentTypeQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentTypeQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: { __typename?: 'AvailabilityBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CMSPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContactBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Footer', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'FooterColumn', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia123', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Header', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HelloWorld', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HomePage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LogoItemBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LogosBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'NavItem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ProfileBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SEOExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ServiceItem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ServicesBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SocialLink', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StoryBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TedTestBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialItem', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialsBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null } | null };

export const CompositionNodeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<CompositionNodeDataFragment, unknown>;
export const LinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const IContentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const IElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const AvailabilityBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}}]} as unknown as DocumentNode<AvailabilityBlockDataFragment, unknown>;
export const ContactBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ContactBlockDataFragment, unknown>;
export const IContentListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const FooterColumnDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<FooterColumnDataFragment, unknown>;
export const HelloWorldDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}}]} as unknown as DocumentNode<HelloWorldDataFragment, unknown>;
export const HeroBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}}]} as unknown as DocumentNode<HeroBlockDataFragment, unknown>;
export const LogoItemBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]} as unknown as DocumentNode<LogoItemBlockDataFragment, unknown>;
export const LogosBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<LogosBlockDataFragment, unknown>;
export const NavItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<NavItemDataFragment, unknown>;
export const PortfolioGridBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<PortfolioGridBlockDataFragment, unknown>;
export const PortfolioItemBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]} as unknown as DocumentNode<PortfolioItemBlockDataFragment, unknown>;
export const ProfileBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<ProfileBlockDataFragment, unknown>;
export const ServiceItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]} as unknown as DocumentNode<ServiceItemDataFragment, unknown>;
export const ServicesBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<ServicesBlockDataFragment, unknown>;
export const SocialLinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}}]} as unknown as DocumentNode<SocialLinkDataFragment, unknown>;
export const StoryBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}}]} as unknown as DocumentNode<StoryBlockDataFragment, unknown>;
export const TedTestBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}}]} as unknown as DocumentNode<TedTestBlockDataFragment, unknown>;
export const TestimonialItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}}]} as unknown as DocumentNode<TestimonialItemDataFragment, unknown>;
export const TestimonialItemBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}}]} as unknown as DocumentNode<TestimonialItemBlockDataFragment, unknown>;
export const TestimonialsBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<TestimonialsBlockDataFragment, unknown>;
export const CompositionComponentNodeDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}}]} as unknown as DocumentNode<CompositionComponentNodeDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}}]} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const SEOExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEOExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SEOExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]} as unknown as DocumentNode<SEOExperienceDataFragment, unknown>;
export const ImageMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ImageMediaDataFragment, unknown>;
export const GenericMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GenericMediaDataFragment, unknown>;
export const GenericMedia123DataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericMedia123Data"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericMedia123"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GenericMedia123DataFragment, unknown>;
export const CMSPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CMSPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}}]} as unknown as DocumentNode<CMSPageDataFragment, unknown>;
export const FooterDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"copyrightText"}},{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}}]} as unknown as DocumentNode<FooterDataFragment, unknown>;
export const HeaderDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Header"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"navItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ctaText"}},{"kind":"Field","name":{"kind":"Name","value":"ctaHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}}]} as unknown as DocumentNode<HeaderDataFragment, unknown>;
export const HomePageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}}]} as unknown as DocumentNode<HomePageDataFragment, unknown>;
export const StartPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}}]} as unknown as DocumentNode<StartPageDataFragment, unknown>;
export const VideoMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"empty"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<VideoMediaDataFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const getContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"-","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changeset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"include"},"value":{"kind":"EnumValue","value":"ALL"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"changeset"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changeset"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEOExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeaderData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEOExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SEOExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CMSPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"copyrightText"}},{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Header"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"navItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ctaText"}},{"kind":"Field","name":{"kind":"Name","value":"ctaHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}}]} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"changeset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"changeset"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"changeset"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEOExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CMSPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeaderData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AvailabilityBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailabilityBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availability"}},{"kind":"Field","name":{"kind":"Name","value":"projectTypes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContactBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterColumnData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterColumn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HelloWorldData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HelloWorld"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"detailedmessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"showDecoration"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsPrimary"}},{"kind":"Field","name":{"kind":"Name","value":"decorationColorsSecondary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogoItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogoItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LogosBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LogosBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioGridBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioGridBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PortfolioItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageSrc"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServicesBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServicesBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SocialLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"href"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StoryBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StoryBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"story"}},{"kind":"Field","name":{"kind":"Name","value":"highlights"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TedTestBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TedTestBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stringTest"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialItemBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialItemBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"avatarSrc"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"testimonials"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionComponentNodeData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionNodeData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionComponentNodeData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEOExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SEOExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CMSPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CMSPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Footer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"copyrightText"}},{"kind":"Field","name":{"kind":"Name","value":"columns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Header"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"navItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ctaText"}},{"kind":"Field","name":{"kind":"Name","value":"ctaHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AvailabilityBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContactBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterColumnData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HelloWorldData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogoItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LogosBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioGridBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServicesBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialLinkData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StoryBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TedTestBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialItemBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialsBlockData"}}]}}]}}]} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;
export const getContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"StringValue","value":"-","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"variation"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"include"},"value":{"kind":"EnumValue","value":"ALL"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;