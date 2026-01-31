import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Content Recommendations Element for Visual Builder
 * Properties: ElementDeliveryApiKey (String), ElementRecommendationCount (Int)
 */
export const ContentRecsElementComponent: CmsComponent<ContentRecsElementProps> = ({ data, editProps }) => {
    const apiKey = data?.ElementDeliveryApiKey;
    const count = data?.ElementRecommendationCount || 3;

    if (!apiKey) {
        return (
            <CmsEditable as="div" className="vb-content-recs vb-content-recs--empty" {...editProps}>
                <p className="text-gray-400 italic">Content Recommendations: API key not configured</p>
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="div" className="vb-content-recs" {...editProps}>
            <div className="text-sm text-gray-500 mb-2">
                Content Recommendations: Showing {count} items
            </div>
            <div className="space-y-4">
                {/* Recommendations will be loaded via Optimizely Content Recommendations API */}
                <p className="text-gray-400 italic">Personalized recommendations will appear here</p>
            </div>
        </CmsEditable>
    );
};

ContentRecsElementComponent.displayName = "Content Recommendations Element (Element/ContentRecsElement)";

interface ContentRecsElementProps {
    ElementDeliveryApiKey?: string;
    ElementRecommendationCount?: number;
}

export default ContentRecsElementComponent;
