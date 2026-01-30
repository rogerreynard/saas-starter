import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Text Element for Visual Builder (Rich Text)
 */
export const TextElementComponent: CmsComponent<TextElementProps> = ({ data, editProps }) => {
    const text = data?.text || '';

    // If text contains HTML, render it
    if (text.includes('<')) {
        return (
            <CmsEditable as="div" className="vb-text" {...editProps}>
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="div" className="vb-text" {...editProps}>
            {text}
        </CmsEditable>
    );
};

TextElementComponent.displayName = "Text Element (Element/TextElement)";

interface TextElementProps {
    text?: string;
}

export default TextElementComponent;
