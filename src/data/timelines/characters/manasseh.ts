import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const manasseh: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-728),
  end: getDate(-661),
  title: 'Manasseh',
  content: 'Manasseh',
  id: 'manasseh',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-728),
      content: 'Birth',
    },
    {
      start: getDate(-661),
      content: 'Death at 67',
    },
  ],
}
