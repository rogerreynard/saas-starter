import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Button Element for Visual Builder
 */
export const ButtonElementComponent: CmsComponent<ButtonElementProps> = ({ data, editProps }) => {
    const text = data?.text || data?.buttonText || 'Click here';
    const url = data?.url || data?.link || '#';
    const variant = data?.variant || data?.buttonType || 'primary';
    const openInNewTab = data?.openInNewTab || false;

    const baseClasses = "inline-block px-6 py-3 rounded font-medium transition-colors";
    const variantClasses: Record<string, string> = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    };

    return (
        <CmsEditable as="div" className="vb-button" {...editProps}>
            <a
                href={url}
                className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary}`}
                target={openInNewTab ? "_blank" : undefined}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
            >
                {text}
            </a>
        </CmsEditable>
    );
};

ButtonElementComponent.displayName = "Button Element (Element/ButtonElement)";

interface ButtonElementProps {
    text?: string;
    buttonText?: string;
    url?: string;
    link?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    buttonType?: string;
    openInNewTab?: boolean;
}

export default ButtonElementComponent;
