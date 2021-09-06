import { DataItem } from 'vis-timeline/esnext'
import { getDate } from '../../utils'

const goesToTemple = -1180 // circa

export const items: DataItem[] = [
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
    end: getDate(-1130), // circa
    content: 'Gives birth to 3 more sons & 2 daughters<br><b>1 Samuel 2:20-21</b>'
  }
]
