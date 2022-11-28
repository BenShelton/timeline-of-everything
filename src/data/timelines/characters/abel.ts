import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const abel: NestedTimelineItem = {
  className: 'incomplete circa-start circa-end',
  // TODO: Start
  start: getDate(-4026),
  end: getDate(-3096),
  title: 'Abel',
  content: 'Abel',
  id: 'abel',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3896),
      content: 'Killed by Cain sometime before this<br><b>Genesis 4:8</b>',
    },
  ],
}
