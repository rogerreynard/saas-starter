import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ContactBlockDataFragmentDoc, type ContactBlockDataFragment } from "@/gql/graphql";

/**
 * Contact Block
 * Block used for displaying contact form
 */
export const ContactBlockComponent : CmsComponent<ContactBlockDataFragment> = ({ data, editProps }) => {
    const componentName = 'Contact Block'
    const componentInfo = 'Block used for displaying contact form'
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ContactBlockComponent.displayName = "Contact Block (Component/ContactBlock)"
ContactBlockComponent.getDataFragment = () => ['ContactBlockData', ContactBlockDataFragmentDoc]

export default ContactBlockComponent