import { DataItem } from 'vis-timeline/esnext'
import { getDate, link } from '../../utils'

export const items: DataItem[] = [
  {
    start: getDate(34),
    content: 'Watches Stephen being stoned<br>' +
      '<b>Acts 7:58</b><br>' +
      link('https://wol.jw.org/en/wol/d/r1/lp-e/1102009041#h=42')
  }
]
