import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const hezekiah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-771),
  end: getDate(-716),
  title: 'Hezekiah',
  content: 'Hezekiah',
  id: 'hezekiah',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-771),
      content: 'Birth',
    },
    {
      start: getDate(-716),
      content: 'Death at 55',
    },
  ],
}
