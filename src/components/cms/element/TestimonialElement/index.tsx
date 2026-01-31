import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Image from "next/image";

/**
 * Testimonial Element for Visual Builder
 * Properties: customerName, customerLocation, customerImage, referenceTitle, referenceText
 */
export const TestimonialElementComponent: CmsComponent<TestimonialElementProps> = ({ data, editProps }) => {
    const name = data?.customerName || '';
    const location = data?.customerLocation || '';
    const imageUrl = data?.customerImage?.url?.default || '';
    const title = data?.referenceTitle || '';
    const text = data?.referenceText?.html || '';

    return (
        <CmsEditable as="div" className="vb-testimonial bg-white p-6 rounded-lg shadow-md" {...editProps}>
            <div className="flex items-start gap-4">
                {imageUrl && (
                    <div className="flex-shrink-0">
                        <Image
                            src={imageUrl}
                            alt={name}
                            width={64}
                            height={64}
                            className="rounded-full"
                        />
                    </div>
                )}
                <div className="flex-1">
                    {title && <h4 className="font-semibold text-lg mb-2">{title}</h4>}
                    {text && (
                        <div
                            className="text-gray-600 mb-4 prose prose-sm"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    )}
                    <div className="text-sm">
                        {name && <span className="font-medium">{name}</span>}
                        {location && <span className="text-gray-500"> - {location}</span>}
                    </div>
                </div>
            </div>
        </CmsEditable>
    );
};

TestimonialElementComponent.displayName = "Testimonial Element (Element/TestimonialElement)";

interface TestimonialElementProps {
    customerName?: string;
    customerLocation?: string;
    customerImage?: {
        url?: {
            default?: string;
        };
    };
    referenceTitle?: string;
    referenceText?: {
        html?: string;
        json?: unknown;
    };
}

export default TestimonialElementComponent;
