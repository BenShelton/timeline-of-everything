import { DataItem } from 'vis-timeline/esnext'
import { getDate } from '../../utils'

const birthDate = -1179

export const items: DataItem[] = [
  {
    start: getDate(birthDate + 3),
    content: 'Given to Jehovah<br><b>1 Samuel 1:24-28</b>'
  },
  {
    start: getDate(birthDate + 12),
    content: 'Starts ministering<br><b>1 Samuel 2:18</b>'
  }
]
