import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const greece: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-331),
  end: getDate(-63),
  title: 'Greece',
  content: 'Greece',
  id: 'greece',
  group: worldPowersGroup,
  notes: 'Copper abdomen/thighs of image prophesied by Daniel',
  timeline: [
    {
      start: getDate(-331),
      content: 'Alexander the Great conquers Persia',
    },
    {
      start: getDate(-63),
      content: 'Overthrown by Rome',
    },
  ],
}
