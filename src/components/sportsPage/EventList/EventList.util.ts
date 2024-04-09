export function getTime(start: string, end: string): string {
    const startTime = new Date(start);
    const endTime = new Date(end);

    // Get hours and minutes for start and end time
    const startHour = startTime.getHours();
    const startMinute = startTime.getMinutes();
    const endHour = endTime.getHours();
    const endMinute = endTime.getMinutes();

    // Format start time
    const formattedStartTime = `${startHour % 12 || 12}:${startMinute.toString().padStart(2, '0')} ${startHour >= 12 ? 'PM' : 'AM'}`;

    // Format end time
    const formattedEndTime = `${endHour % 12 || 12}:${endMinute.toString().padStart(2, '0')} ${endHour >= 12 ? 'PM' : 'AM'}`;

    return `${formattedStartTime} - ${formattedEndTime}`;
}

