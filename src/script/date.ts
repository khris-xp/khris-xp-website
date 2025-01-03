export function calculateExperingDate(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  // Handle case where end date is before start date
  if (end < start) {
    return "Invalid date range";
  }

  const diff = end.getTime() - start.getTime();
  let years = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24 * 365)));
  let months = Math.max(0, Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  ));

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  // Handle zero case first
  if (years === 0 && months === 0) {
    return "Less than a month";
  }

  // Build output string
  const yearStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ');
}
