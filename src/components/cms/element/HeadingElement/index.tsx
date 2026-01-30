import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Heading Element for Visual Builder
 */
export const HeadingElementComponent: CmsComponent<HeadingElementProps> = ({ data, editProps }) => {
    const headingType = data?.headingType || 'h2';
    const text = data?.text || '';

    const HeadingTag = headingType as keyof JSX.IntrinsicElements;

    return (
        <CmsEditable as={HeadingTag} className="vb-heading" {...editProps}>
            {text}
        </CmsEditable>
    );
};

HeadingElementComponent.displayName = "Heading Element (Element/HeadingElement)";

// Define props type inline since we don't have generated GraphQL types for elements
interface HeadingElementProps {
    text?: string;
    headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default HeadingElementComponent;
