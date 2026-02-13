import type { EventData } from "./types";
import voidEvent from "./void";
import eclipseEvent from "./eclipse";
import pulseEvent from "./pulse";
import zeroGEvent from "./zero-g";
import driftEvent from "./drift";

export type { EventData };

const allEvents: EventData[] = [voidEvent, eclipseEvent, pulseEvent, zeroGEvent, driftEvent];

export function getUpcomingEvents(): EventData[] {
  const now = new Date().toISOString().slice(0, 10);
  return allEvents
    .filter((e) => e.date >= now)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents(): EventData[] {
  const now = new Date().toISOString().slice(0, 10);
  return allEvents
    .filter((e) => e.date < now)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPreviewEvents(): EventData[] {
  return getUpcomingEvents().slice(0, 4);
}

export default allEvents;
