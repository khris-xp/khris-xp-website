export function calculateExperingDate(startDate: string, endDate: string) {
  const start = new Date(startDate);
  let end;
  if (endDate === 'Present') {
    end = new Date();
  } else {
    end = new Date(endDate);
  }

  const diff = end.getTime() - start.getTime();
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );

  return years === 0
    ? months === 0
      ? 'Less than a month'
      : `${months} months`
    : months === 0
    ? `${years} years`
    : `${years} years ${months} months`;
}
