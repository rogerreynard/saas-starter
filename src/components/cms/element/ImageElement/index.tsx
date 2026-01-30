import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Image from "next/image";

/**
 * Image Element for Visual Builder
 * Properties: imageLink (ContentReference), altText (String)
 */
export const ImageElementComponent: CmsComponent<ImageElementProps> = ({ data, editProps }) => {
    const src = data?.imageLink?.url?.default || '';
    const alt = data?.altText || '';

    if (!src) {
        return (
            <CmsEditable as="div" className="vb-image vb-image--empty" {...editProps}>
                <span className="text-gray-400">No image selected</span>
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="figure" className="vb-image" {...editProps}>
            <Image
                src={src}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-auto"
            />
        </CmsEditable>
    );
};

ImageElementComponent.displayName = "Image Element (Element/ImageElement)";

interface ImageElementProps {
    altText?: string;
    imageLink?: {
        url?: {
            default?: string;
        };
    };
}

export default ImageElementComponent;
