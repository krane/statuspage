export const calculateTimeDiff = (epoch: number) => {
  const diffMs = new Date().valueOf() - epochToDate(epoch).valueOf();
  const secondsDiff = Math.floor(diffMs / 1000);
  const minutesDiff = Math.floor(diffMs / 1000 / 60);
  const hoursDiff = Math.floor(diffMs / 1000 / 60 / 60);
  const daysDiff = Math.floor(diffMs / 1000 / 60 / 60 / 60);

  if (minutesDiff == 0) {
    return `${secondsDiff} second(s) ago`;
  }

  if (minutesDiff < 60) {
    return `${minutesDiff} minute(s) ago`;
  }

  if (hoursDiff < 24) {
    return `${hoursDiff} hour(s) ago`;
  }

  return `${daysDiff == 0 ? 1 : daysDiff} day(s) ago`;
};

export const epochToDate = (epoch: number) => {
  return new Date(epoch * 1000);
};
