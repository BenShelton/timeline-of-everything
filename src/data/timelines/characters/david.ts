import { getDate } from '@/utils'
import { charactersGroup } from '@/data/groups'
import { NestedTimelineItem } from '@/data/types'

export const david: NestedTimelineItem = {
  displayOptions: {
    complete: false,
  },
  start: getDate(-1107),
  end: getDate(-1037),
  title: 'David',
  content: 'David',
  id: 'david',
  group: charactersGroup,
  // TODO: Remaining timeline
  timeline: [
    {
      start: getDate(-1107),
      content: 'Born in Bethlehem<br><b>1 Samuel 16:1</b>',
    },
    {
      start: getDate(-1091),
      content: 'Anointed by Samuel (est.)<br>Serves as armor-bearer and harpist to Saul (est.)<br><b>1 Samuel 16:1-13</b>',
    },
    {
      start: getDate(-1089),
      content: 'Returns to Bethlehem (est.)<br>Kills Goliath (est.)<br>Jonathan bound in friendship (est.)<br><b>1 Samuel 17:45-54; 18:1</b>',
    },
    {
      start: getDate(-1088),
      content: 'Marries Michal (est.)<br><b>1 Samuel 18:27</b>',
    },
    {
      start: getDate(-1087),
      content: 'Lives as fugitive (est.)<br><b>1 Samuel 17:45-54</b>',
    },
    {
      start: getDate(-1077),
      content: 'Becomes king of Judah at Hebron<br><b>2 Samuel 2:4</b>',
    },
    {
      start: getDate(-1070),
      content: 'Becomes king over all Israel<br><b>2 Samuel 5:3-7</b>',
    },
    {
      start: getDate(-1070),
      content: 'Brings Ark of the Covenant into Jerusalem<br>Kingdom Covenant made<br><b>2 Samuel 6:15; 7:12-16</b>',
    },
    {
      start: getDate(-1037),
      content: 'Dies at 70<br><b>1 Kings 2:10</b>',
    },
  ],
}
