import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Paragraph Element for Visual Builder
 */
export const ParagraphElementComponent: CmsComponent<ParagraphElementProps> = ({ data, editProps }) => {
    const text = data?.text || '';

    return (
        <CmsEditable as="p" className="vb-paragraph" {...editProps}>
            {text}
        </CmsEditable>
    );
};

ParagraphElementComponent.displayName = "Paragraph Element (Element/ParagraphElement)";

interface ParagraphElementProps {
    text?: string;
}

export default ParagraphElementComponent;
