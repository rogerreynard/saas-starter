//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type ProfileBlockStyles from "./ProfileBlock.opti-style.json"

export type ProfileBlockProps = LayoutProps<typeof ProfileBlockStyles>
export type ProfileBlockLayoutProps = ProfileBlockProps
export type ProfileBlockComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ProfileBlockLayoutProps = ProfileBlockLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type ProfileBlockComponent<DT extends Record<string, any> = Record<string, any>, LP extends ProfileBlockLayoutProps = ProfileBlockLayoutProps> = (props: ProfileBlockComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: ProfileBlockLayoutProps | null) : props is ProfileBlockProps
{
    return props?.template == "ProfileBlock"
}

export function isProfileBlockProps(props?: ProfileBlockLayoutProps | null) : props is ProfileBlockProps
{
    return props?.template == "ProfileBlock"
}