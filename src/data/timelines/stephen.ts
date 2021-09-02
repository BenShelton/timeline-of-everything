import { DataItem } from 'vis-timeline/esnext'
import { getDate, link } from '../../utils'

export const items: DataItem[] = [
  {
    start: getDate(33, 6),
    content: 'Assigned to distribute food<br>' +
      '<b>Acts 6:1-7</b>'
  },
  {
    start: getDate(34, 12),
    content: 'Accused of blasphemy & brought before Sanhedrin<br>' +
      'Received a vision of Jehovah & Jesus<br>' +
      'Stoned to death<br>' +
      '<b>Acts 6:8-7:60</b><br>' +
      link('https://wol.jw.org/en/wol/d/r1/lp-e/1102009041#h=42')
  }
]
