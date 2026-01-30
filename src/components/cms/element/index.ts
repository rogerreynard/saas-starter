import { type ComponentTypeDictionary } from '@remkoj/optimizely-cms-react';

import CTAElementComponent from './CTAElement';
import HeadingElementComponent from './HeadingElement';
import ImageElementComponent from './ImageElement';
import ParagraphElementComponent from './ParagraphElement';
import RichTextElementComponent from './RichTextElement';

// Build dictionary
export const ElementFactory: ComponentTypeDictionary = [
    {
        type: 'CTAElement',
        component: CTAElementComponent
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
        type: 'RichTextElement',
        component: RichTextElementComponent
    }
];

export default ElementFactory;
