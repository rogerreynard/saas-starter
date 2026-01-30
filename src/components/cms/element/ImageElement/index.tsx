import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Image from "next/image";

/**
 * Image Element for Visual Builder
 */
export const ImageElementComponent: CmsComponent<ImageElementProps> = ({ data, editProps }) => {
    const src = data?.src || data?.image?.url || '';
    const alt = data?.alt || data?.image?.altText || '';
    const width = data?.width || 800;
    const height = data?.height || 600;

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
                width={width}
                height={height}
                className="w-full h-auto"
            />
        </CmsEditable>
    );
};

ImageElementComponent.displayName = "Image Element (Element/ImageElement)";

interface ImageElementProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    image?: {
        url?: string;
        altText?: string;
    };
}

export default ImageElementComponent;
