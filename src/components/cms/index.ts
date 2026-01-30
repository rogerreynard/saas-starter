// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from '@remkoj/optimizely-cms-react';

import NodeComponent from './node';
import ComponentFactory from './component';
import ElementFactory from './element';
import ExperienceFactory from './experience';
import ImageFactory from './image';
import MediaFactory from './media';
import PageFactory from './page';
import VideoFactory from './video';

// Build dictionary
export const CmsFactory : ComponentTypeDictionary = [
  {
    type: 'Node',
    component: NodeComponent
  },
  ...ComponentFactory,
  ...ElementFactory,
  ...ExperienceFactory,
  ...ImageFactory,
  ...MediaFactory,
  ...PageFactory,
  ...VideoFactory
];

// Export dictionary
export default CmsFactory;
