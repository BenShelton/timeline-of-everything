import { getDate } from '../../utils'
import { charactersGroup } from '../groups'
import { NestedTimelineItem } from '../types'

export const kenan: NestedTimelineItem = {
  className: 'incomplete',
  start: getDate(-3701),
  end: getDate(-2791),
  title: 'Kenan',
  content: 'Kenan',
  id: 'kenan',
  group: charactersGroup,
  notes: '',
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-3701),
      content: 'Born<br><b>Genesis 5:9</b>'
    },
    {
      start: getDate(-3631),
      content: 'Mahalalel is born at 70<br><b>Genesis 5:12</b>'
    },
    {
      start: getDate(-2791),
      content: 'Died at 910<br><b>Genesis 5:14</b>'
    }
  ]
}
