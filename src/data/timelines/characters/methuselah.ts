import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const methuselah: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-3339),
  end: getDate(-2370),
  title: 'Methuselah',
  content: 'Methuselah',
  id: 'methuselah',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3339),
      content: 'Born<br><b>Genesis 5:21</b>'
    },
    {
      start: getDate(-3152),
      content: 'Lamech is born at 187<br><b>Genesis 5:25</b>'
    },
    {
      start: getDate(-2490),
      content: 'God gives pronouncement of flood in 120 years<br><b>Genesis 6:3</b>'
    },
    {
      start: getDate(-2370),
      content: 'Died at 969, same year as the flood<br><b>Genesis 5:27</b>'
    }
  ]
}
