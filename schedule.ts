import { Event } from './event';

export class Schedule {
    scheduleId: number;
    eventId: number;

    /// <summary>
    /// Days are stored as 0|1|2|3|4|5|6 where the number represents a day of the week.
    /// Example: 1|3|5 represents an event that meets on Monday, Wednesday and Friday.
    /// </summary>
    days: string;
    startTime: string;
    durationMinutes: number;

    event: Event;
}