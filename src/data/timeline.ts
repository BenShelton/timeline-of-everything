import { DataItem } from 'vis-timeline/esnext'
import { getDate } from '../utils'
import { charactersGroup, foreignKingsGroup } from './groups'

export const items: DataItem[] = [
  {
    start: getDate(-633),
    end: getDate(-536),
    title: 'Daniel',
    content: 'Daniel',
    id: 'daniel',
    group: charactersGroup
  },
  // TODO: Fade Start Date
  {
    start: getDate(33, 6),
    end: getDate(34, 12),
    title: 'Stephen',
    content: 'Stephen',
    id: 'stephen',
    group: charactersGroup
  },
  {
    start: getDate(1),
    // TODO: Death
    // end: getDate(99),
    title: 'Paul',
    content: 'Paul',
    id: 'paul',
    group: charactersGroup
  },
  {
    start: getDate(-624),
    end: getDate(-582),
    title: 'Nebuchadnezzar',
    content: 'Nebuchadnezzar',
    // id: 'nebuchadnezzar',
    group: foreignKingsGroup
  }
]
