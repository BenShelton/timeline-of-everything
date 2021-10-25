import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

const goesToTemple = -1180

export const hannah: NestedTimelineItem = {
  className: 'circa-start circa-end',
  start: getDate(-1210),
  end: getDate(-1130),
  title: 'Hannah',
  content: 'Hannah',
  id: 'hannah',
  group: charactersGroup,
  notes: 'Estimated to be 30 at first mention & to live until 80',
  timeline: [
    {
      start: getDate(goesToTemple),
      content: 'Prays at the temple<br><b>1 Samuel 1:9-18</b>'
    },
    {
      start: getDate(goesToTemple + 1),
      content: 'Becomes pregnant, gives birth to Samuel<br><b>1 Samuel 1:19-20</b>'
    },
    {
      start: getDate(goesToTemple + 4),
      content: 'Gives Samuel to Jehovah<br><b>1 Samuel 1:24-28</b>'
    },
    {
      start: getDate(goesToTemple + 5),
      end: getDate(-1130),
      content: 'Gives birth to 3 more sons & 2 daughters<br><b>1 Samuel 2:20-21</b>'
    }
  ]
}
