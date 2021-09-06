import { DataItem } from 'vis-timeline/esnext'
import { getDate } from '../utils'
import { charactersGroup, foreignKingsGroup } from './groups'

export const items: DataItem[] = [
  {
    start: getDate(-633), // circa
    end: getDate(-536), // circa
    title: 'Daniel',
    content: 'Daniel',
    id: 'daniel',
    group: charactersGroup
  },
  {
    start: getDate(33, 6), // first mention
    end: getDate(34, 12),
    title: 'Stephen',
    content: 'Stephen',
    id: 'stephen',
    group: charactersGroup
  },
  {
    start: getDate(1), // circa
    // TODO: Death
    // end: getDate(99),
    title: 'Paul',
    content: 'Paul',
    id: 'paul',
    group: charactersGroup
  },
  {
    start: getDate(-1210), // circa
    end: getDate(-1130), // circa
    title: 'Hannah',
    content: 'Hannah',
    id: 'hannah',
    group: charactersGroup
  },
  {
    // TODO: Confirm death
    start: getDate(-1179),
    end: getDate(-1078),
    title: 'Samuel',
    content: 'Samuel',
    id: 'samuel',
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
