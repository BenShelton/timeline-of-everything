import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const lamech: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-3152),
  end: getDate(-2375),
  title: 'Lamech',
  content: 'Lamech',
  id: 'lamech',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3152),
      content: 'Born<br><b>Genesis 5:25</b>'
    },
    {
      start: getDate(-2970),
      content: 'Noah is born at 182<br><b>Genesis 5:28</b>'
    },
    {
      start: getDate(-2490),
      content: 'God gives pronouncement of flood in 120 years<br><b>Genesis 6:3</b>'
    },
    {
      start: getDate(-2375),
      content: 'Died at 777<br><b>Genesis 5:31</b>'
    }
  ]
}
