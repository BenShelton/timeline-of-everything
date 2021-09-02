import { DataItem } from 'vis-timeline/esnext'

import { charactersGroup, foreignKingsGroup } from './groups'

export const items: DataItem[] = [
  {
    start: new Date(-633, 0, 1),
    end: new Date(-536, 0, 1),
    title: 'Daniel',
    content: 'Daniel',
    id: 'daniel',
    group: charactersGroup
  },
  {
    start: new Date(-624, 0, 1),
    end: new Date(-582, 0, 1),
    title: 'Nebuchadnezzar',
    content: 'Nebuchadnezzar',
    // id: 'nebuchadnezzar',
    group: foreignKingsGroup
  }
]
