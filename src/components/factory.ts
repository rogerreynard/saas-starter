import 'server-only'
import {
    getFactory as getBaseFactory,
    RichTextComponentDictionary,
    DefaultComponents
} from "@remkoj/optimizely-cms-react/rsc";

// Import all server components that should be loaded dynamically when the
// content requires them
import components from './cms';

// Build the factory statically, so it doesn't need to be rebuild every time
// it is needed.
export const factory = getBaseFactory()
// Register the default components (Rich Text, Visual Builder elements, etc.)
factory.registerAll(RichTextComponentDictionary)
factory.registerAll(DefaultComponents)
// Register the CMS Components
factory.registerAll(components)

export default factory