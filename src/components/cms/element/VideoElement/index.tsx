import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import Image from "next/image";

/**
 * Video Element for Visual Builder
 * Properties: title, video, placeholder
 */
export const VideoElementComponent: CmsComponent<VideoElementProps> = ({ data, editProps }) => {
    const title = data?.title || '';
    const videoUrl = data?.video?.url?.default || '';
    const placeholderUrl = data?.placeholder?.url?.default || '';

    if (!videoUrl) {
        return (
            <CmsEditable as="div" className="vb-video vb-video--empty" {...editProps}>
                <div className="bg-gray-200 aspect-video flex items-center justify-center rounded">
                    <span className="text-gray-400">No video selected</span>
                </div>
            </CmsEditable>
        );
    }

    return (
        <CmsEditable as="div" className="vb-video" {...editProps}>
            {title && <h4 className="font-medium mb-2">{title}</h4>}
            <div className="relative aspect-video bg-black rounded overflow-hidden">
                <video
                    controls
                    className="w-full h-full"
                    poster={placeholderUrl || undefined}
                >
                    <source src={videoUrl} />
                    Your browser does not support the video tag.
                </video>
            </div>
        </CmsEditable>
    );
};

VideoElementComponent.displayName = "Video Element (Element/VideoElement)";

interface VideoElementProps {
    title?: string;
    video?: {
        url?: {
            default?: string;
        };
    };
    placeholder?: {
        url?: {
            default?: string;
        };
    };
}

export default VideoElementComponent;
