import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const noah: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-2970),
  end: getDate(-2020),
  title: 'Noah',
  content: 'Noah',
  id: 'noah',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-2970),
      content: 'Born<br><b>Genesis 5:28</b>',
    },
    {
      start: getDate(-2490),
      content: 'God gives pronouncement of flood in 120 years<br><b>Genesis 6:3</b>',
    },
    {
      start: getDate(-2370, 9),
      content: 'Flood begins<br><b>Genesis 7:11</b>',
    },
    {
      start: getDate(-2020),
      content: 'Died at 950<br><b>Genesis 9:29</b>',
    },
  ],
}
