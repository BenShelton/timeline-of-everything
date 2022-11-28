import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const cain: NestedTimelineItem = {
  className: 'incomplete circa-start circa-end',
  // TODO: Start and end
  start: getDate(-4026),
  end: getDate(-3096),
  title: 'Cain',
  content: 'Cain',
  id: 'cain',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3896),
      content: 'Kills Abel sometime before this<br><b>Genesis 4:8</b>',
    },
  ],
}
