import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const medoPersia: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-539),
  end: getDate(-331),
  title: 'Medo-Persia',
  content: 'Medo-Persia',
  id: 'medoPersia',
  group: worldPowersGroup,
  notes: 'Silver chest/arms of image prophesied by Daniel',
  timeline: [
    {
      start: getDate(-539),
      content: 'Conquers Babylon<br><b>Jeremiah 46:2</b>',
    },
    {
      start: getDate(-537),
      content: 'Cyrus decrees return of Jews to Jerusalem',
    },
    {
      start: getDate(-331),
      content: 'Overthrown by Greece',
    },
  ],
}
