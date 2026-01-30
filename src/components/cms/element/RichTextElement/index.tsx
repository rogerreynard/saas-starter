import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Rich Text Element for Visual Builder
 * Property: text (SearchableRichText with html/json)
 */
export const RichTextElementComponent: CmsComponent<RichTextElementProps> = ({ data, editProps }) => {
    const html = data?.text?.html || '';

    if (html) {
        return (
            <CmsEditable as="div" className="vb-richtext prose max-w-none" {...editProps}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="div" className="vb-richtext" {...editProps}>
            {/* Empty rich text */}
        </CmsEditable>
    );
};

RichTextElementComponent.displayName = "Rich Text Element (Element/RichTextElement)";

interface RichTextElementProps {
    text?: {
        html?: string;
        json?: unknown;
    };
}

export default RichTextElementComponent;
