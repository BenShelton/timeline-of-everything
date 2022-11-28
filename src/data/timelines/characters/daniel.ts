import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const daniel: NestedTimelineItem = {
  className: 'incomplete circa-start circa-end',
  start: getDate(-633),
  end: getDate(-536),
  title: 'Daniel',
  content: 'Daniel',
  id: 'daniel',
  group: charactersGroup,
  notes: 'Estimated to be 16 at Daniel 1 & die 1 year after last vision',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-617),
      content: 'Taken into captivity<br><b>Daniel 1:1</b>',
    },
  ],
}
