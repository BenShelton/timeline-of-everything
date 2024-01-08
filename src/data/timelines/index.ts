import { NestedTimelineItem } from '@/data/types'

function processFiles (files: Record<string, Record<string, NestedTimelineItem>>): NestedTimelineItem[] {
  return Object.entries(files).map(([k, v]) => {
    const name = k.split('/').pop()?.replace('.ts', '')
    const item: NestedTimelineItem = v[name || '']
    if (!item) {
      console.warn(`Could not find item: ${k}`)
      return {} as NestedTimelineItem
    }
    return item
  })
}

const bookFiles = import.meta.glob('./books/*.ts', { eager: true }) as Record<string, Record<string, NestedTimelineItem>>
export const books = processFiles(bookFiles)

const characterFiles = import.meta.glob('./characters/*.ts', { eager: true }) as Record<string, Record<string, NestedTimelineItem>>
export const characters = processFiles(characterFiles)

const eventFiles = import.meta.glob('./events/*.ts', { eager: true }) as Record<string, Record<string, NestedTimelineItem>>
export const events = processFiles(eventFiles)

const foreignKingFiles = import.meta.glob('./foreignKings/*.ts', { eager: true }) as Record<string, Record<string, NestedTimelineItem>>
export const foreignKings = processFiles(foreignKingFiles)

const worldPowerFiles = import.meta.glob('./worldPowers/*.ts', { eager: true }) as Record<string, Record<string, NestedTimelineItem>>
export const worldPowers = processFiles(worldPowerFiles)
