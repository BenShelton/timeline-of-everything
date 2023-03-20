import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const lot: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaStart: true,
    circaEnd: true,
  },
  start: getDate(-1998),
  end: getDate(-1848),
  title: 'Lot',
  content: 'Lot',
  id: 'lot',
  group: charactersGroup,
  notes: 'Estimated birth date 20 years after Abraham (being his nephew) Estimated lifespan of 150 years',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1998),
      content: 'Estimated birth date',
    },
    {
      start: getDate(-1933),
      content: 'Rescued by Abraham<br><b>Genesis 14:6</b>',
    },
    {
      start: getDate(-1919),
      content: 'Sodom & Gomorrah destroyed<br><b>Genesis 19:24</b>',
    },
    {
      start: getDate(-1848),
      content: 'Estimated death date at 150',
    },
  ],
}
