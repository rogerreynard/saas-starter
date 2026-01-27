import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { FooterDataFragmentDoc, type FooterDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Footer
 * 
 */
export const FooterPage : CmsComponent<FooterDataFragment> = ({ data }) => {
    const componentName = 'Footer'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
    </div>
}
FooterPage.displayName = "Footer (Page/Footer)"
FooterPage.getDataFragment = () => ['FooterData', FooterDataFragmentDoc]
FooterPage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default FooterPage