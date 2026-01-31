import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Article List Element for Visual Builder
 * Properties: articleListCount (Int), topics (String[])
 */
export const ArticleListElementComponent: CmsComponent<ArticleListElementProps> = ({ data, editProps }) => {
    const count = data?.articleListCount || 3;
    const topics = data?.topics || [];

    return (
        <CmsEditable as="div" className="vb-article-list" {...editProps}>
            <div className="text-sm text-gray-500 mb-2">
                Article List: Showing {count} articles
                {topics.length > 0 && ` for topics: ${topics.join(', ')}`}
            </div>
            <div className="space-y-4">
                {/* Articles will be loaded dynamically based on topics */}
                <p className="text-gray-400 italic">Articles matching criteria will appear here</p>
            </div>
        </CmsEditable>
    );
};

ArticleListElementComponent.displayName = "Article List Element (Element/ArticleListElement)";

interface ArticleListElementProps {
    articleListCount?: number;
    topics?: string[];
}

export default ArticleListElementComponent;
