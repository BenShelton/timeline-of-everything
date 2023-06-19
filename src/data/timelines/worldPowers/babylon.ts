import { getDate } from '@/utils'
import { worldPowersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const babylon: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-625),
  end: getDate(-539),
  title: 'Babylon',
  content: 'Babylon',
  id: 'babylon',
  group: worldPowersGroup,
  notes: 'Gold head of image prophesied by Daniel',
  timeline: [
    {
      start: getDate(-625),
      content: 'Nebuchadnezzar becomes king<br><b>Jeremiah 46:2</b>',
    },
    {
      start: getDate(-607),
      content: 'Destroys Jerusalem<br><b>Jeremiah 39:1-3</b>',
    },
    {
      start: getDate(-539),
      content: 'Medo-Persia becomes world power<br><b>Jeremiah 46:2</b>',
    },
  ],
}
