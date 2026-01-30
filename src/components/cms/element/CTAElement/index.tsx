import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * CTA (Call to Action) Element for Visual Builder
 * Properties: Text (String), Link (ContentUrl)
 */
export const CTAElementComponent: CmsComponent<CTAElementProps> = ({ data, editProps }) => {
    const text = data?.Text || 'Click here';
    const url = data?.Link?.default || '#';

    return (
        <CmsEditable as="div" className="vb-cta" {...editProps}>
            <a
                href={url}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition-colors"
            >
                {text}
            </a>
        </CmsEditable>
    );
};

CTAElementComponent.displayName = "CTA Element (Element/CTAElement)";

interface CTAElementProps {
    Text?: string;
    Link?: {
        default?: string;
    };
}

export default CTAElementComponent;
