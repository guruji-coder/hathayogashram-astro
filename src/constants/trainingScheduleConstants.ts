export interface ScheduleItem {
  time: string;
  activity: string;
}

export const TRAINING_DAILY_SCHEDULE: ScheduleItem[] = [
  { time: '06:30 AM - 07:30 AM', activity: 'Hatha Yoga' },
  { time: '07:45 AM - 08:45 AM', activity: 'Pranayama' },
  { time: '09:00 AM - 10:00 AM', activity: 'Breakfast' },
  { time: '10:00 AM - 11:00 AM', activity: 'Yoga Philosophy' },
  { time: '11:00 AM - 11:45 AM', activity: 'Yoga Anatomy' },
  { time: '12:00 PM - 01:00 PM', activity: 'Lunch' },
  { time: '02:00 PM - 03:00 PM', activity: 'Meditation & Mantras' },
  { time: '03:15 PM - 04:15 PM', activity: 'Asana Practice' },
  { time: '04:30 PM - 05:30 PM', activity: 'Practical Teaching' },
  { time: '05:30 PM - 06:00 PM', activity: 'Evening Tea Break' },
];
