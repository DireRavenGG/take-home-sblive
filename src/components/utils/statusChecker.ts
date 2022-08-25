export const statusChecker = (id: 1 | 2 | 3) => {
  const statuses = { 1: "Upcoming", 2: "Live", 3: "Final" };
  return statuses[id];
};
