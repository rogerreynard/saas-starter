import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * ODP Embed Block for Visual Builder
 * Property: ContentId (String)
 */
export const OdpEmbedBlockComponent: CmsComponent<OdpEmbedBlockProps> = ({ data, editProps }) => {
    const contentId = data?.ContentId;

    if (!contentId) {
        return (
            <CmsEditable as="div" className="vb-odp-embed vb-odp-embed--empty" {...editProps}>
                <p className="text-gray-400 italic">ODP Embed: No content ID configured</p>
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="div" className="vb-odp-embed" {...editProps}>
            <div className="text-sm text-gray-500 mb-2">
                ODP Content ID: {contentId}
            </div>
            {/* ODP content will be embedded here */}
        </CmsEditable>
    );
};

OdpEmbedBlockComponent.displayName = "ODP Embed Block (Element/OdpEmbedBlock)";

interface OdpEmbedBlockProps {
    ContentId?: string;
}

export default OdpEmbedBlockComponent;
