import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const esau: NestedTimelineItem = {
  displayOptions: {
    complete: false,
    circaEnd: true,
  },
  start: getDate(-1858),
  end: getDate(-1758),
  title: 'Esau',
  content: 'Esau',
  id: 'esau',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1858),
      content: 'Born<br><b>Genesis 25:24-26</b>',
    },
    {
      start: getDate(-1818),
      content: 'Marries Judith the Hittitess<br><b>Genesis 26:34</b>',
    },
    // {
    //   start: getDate(-1738),
    //   content: 'Dies at 180<br><b>Genesis 35:28,29</b>',
    // },
  ],
}
