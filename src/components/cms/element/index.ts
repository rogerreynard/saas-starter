import { type ComponentTypeDictionary } from '@remkoj/optimizely-cms-react';

import ArticleListElementComponent from './ArticleListElement';
import ContentRecsElementComponent from './ContentRecsElement';
import CTAElementComponent from './CTAElement';
import HeadingElementComponent from './HeadingElement';
import ImageElementComponent from './ImageElement';
import OdpEmbedBlockComponent from './OdpEmbedBlock';
import ParagraphElementComponent from './ParagraphElement';
import RichTextElementComponent from './RichTextElement';
import TestimonialElementComponent from './TestimonialElement';
import VideoElementComponent from './VideoElement';

// Build dictionary
export const ElementFactory: ComponentTypeDictionary = [
    {
        type: 'ArticleListElement',
        component: ArticleListElementComponent
    },
    {
        type: 'ContentRecsElement',
        component: ContentRecsElementComponent
    },
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
        type: 'OdpEmbedBlock',
        component: OdpEmbedBlockComponent
    },
    {
        type: 'ParagraphElement',
        component: ParagraphElementComponent
    },
    {
        type: 'RichTextElement',
        component: RichTextElementComponent
    },
    {
        type: 'TestimonialElement',
        component: TestimonialElementComponent
    },
    {
        type: 'VideoElement',
        component: VideoElementComponent
    }
];

export default ElementFactory;
