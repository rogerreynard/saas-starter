import { type ComponentTypeDictionary } from '@remkoj/optimizely-cms-react';

import ButtonElementComponent from './ButtonElement';
import HeadingElementComponent from './HeadingElement';
import ImageElementComponent from './ImageElement';
import ParagraphElementComponent from './ParagraphElement';
import TextElementComponent from './TextElement';

// Build dictionary
export const ElementFactory: ComponentTypeDictionary = [
    {
        type: 'ButtonElement',
        component: ButtonElementComponent
    },
    {
        type: 'HeadingElement',
        component: HeadingElementComponent
    },
    {
        type: 'ImageElement',
        component: ImageElementComponent
    },
    {
        type: 'ParagraphElement',
        component: ParagraphElementComponent
    },
    {
        type: 'TextElement',
        component: TextElementComponent
    }
];

export default ElementFactory;
