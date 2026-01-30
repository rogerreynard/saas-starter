import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Paragraph Element for Visual Builder
 * Property: text (SearchableRichText with html/json)
 */
export const ParagraphElementComponent: CmsComponent<ParagraphElementProps> = ({ data, editProps }) => {
    const html = data?.text?.html || '';

    if (html) {
        return (
            <CmsEditable as="div" className="vb-paragraph prose" {...editProps}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="p" className="vb-paragraph" {...editProps}>
            {/* Empty paragraph */}
        </CmsEditable>
    );
};

ParagraphElementComponent.displayName = "Paragraph Element (Element/ParagraphElement)";

interface ParagraphElementProps {
    text?: {
        html?: string;
        json?: unknown;
    };
}

export default ParagraphElementComponent;
