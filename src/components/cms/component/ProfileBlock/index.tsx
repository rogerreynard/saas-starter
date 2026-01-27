import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { ProfileBlockDataFragmentDoc, type ProfileBlockDataFragment } from "@/gql/graphql";
import { ProfileBlockLayoutProps } from "./displayTemplates";

/**
 * Profile Block
 * 
 */
export const ProfileBlockComponent : CmsComponent<ProfileBlockDataFragment, ProfileBlockLayoutProps> = ({ data, layoutProps, editProps }) => {
    const componentName = 'Profile Block'
    const componentInfo = ''
    return <CmsEditable className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4" {...editProps}>
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </CmsEditable>
}
ProfileBlockComponent.displayName = "Profile Block (Component/ProfileBlock)"
ProfileBlockComponent.getDataFragment = () => ['ProfileBlockData', ProfileBlockDataFragmentDoc]

export default ProfileBlockComponent