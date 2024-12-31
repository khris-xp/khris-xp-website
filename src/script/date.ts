export function calculateExperingDate(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  const diff = end.getTime() - start.getTime();
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );

  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  return years === 0
    ? months === 0
      ? "Less than a month"
      : `${months} months`
    : months === 0
    ? `${years} years`
    : `${years} years ${months} months`;
}
