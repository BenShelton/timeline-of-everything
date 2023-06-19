import { TimelineGroup } from 'vis-timeline/esnext'

export const charactersGroup: TimelineGroup = {
  id: 'characters',
  content: 'Characters',
}

export const foreignKingsGroup: TimelineGroup = {
  id: 'foreignKings',
  content: 'Foreign Kings',
}

export const significantEventsGroup: TimelineGroup = {
  id: 'significantEvents',
  content: 'Significant Events',
}

export const worldPowersGroup: TimelineGroup = {
  id: 'worldPowers',
  content: 'World Powers',
}

export const groups = [
  worldPowersGroup,
  foreignKingsGroup,
  significantEventsGroup,
  charactersGroup,
]
