import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const rome: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-63),
  end: getDate(1914),
  title: 'Rome',
  content: 'Rome',
  id: 'rome',
  group: worldPowersGroup,
  notes: 'Iron legs of image prophesied by Daniel',
  timeline: [
    {
      start: getDate(-63),
      content: 'Overthrown by Rome',
    },
    {
      start: getDate(70),
      content: 'Destroys Jerusalem',
    },
    {
      start: getDate(1914),
      content: 'Replaced by Anglo-America',
    },
  ],
}
