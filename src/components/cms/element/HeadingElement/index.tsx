import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Heading Element for Visual Builder
 * Property: headingText (String)
 */
export const HeadingElementComponent: CmsComponent<HeadingElementProps> = ({ data, editProps }) => {
    const text = data?.headingText || '';

    return (
        <CmsEditable as="h2" className="vb-heading text-2xl font-bold" {...editProps}>
            {text}
        </CmsEditable>
    );
};

HeadingElementComponent.displayName = "Heading Element (Element/HeadingElement)";

interface HeadingElementProps {
    headingText?: string;
    [key: string]: unknown;
}

export default HeadingElementComponent;
