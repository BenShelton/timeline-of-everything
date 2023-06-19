import { getDate } from '@/utils'
import { foreignKingsGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const nebuchadnezzar: NestedTimelineItem = {
  displayOptions: {
    circaStart: true,
    complete: false,
  },
  start: getDate(-655),
  end: getDate(-582),
  title: 'Nebuchadnezzar',
  content: 'Nebuchadnezzar',
  id: 'nebuchadnezzar',
  group: foreignKingsGroup,
  notes: 'Assumed to be 30 when rule began',
  timeline: [
    {
      start: getDate(-625),
      content: 'Becomes king<br><b>Jeremiah 46:2</b>',
    },
    {
      start: getDate(-607),
      content: 'Destroys Jerusalem, takes captives<br><b>Jeremiah 39:1-3</b>',
    },
  ],
}
