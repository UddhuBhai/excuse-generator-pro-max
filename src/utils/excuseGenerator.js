import excuses from "../data/excuses.json";

function getSeverityLevel(severity) {
  if (severity <= 2) {
    return "low";
  }

  if (severity <= 4) {
    return "medium";
  }

  if (severity <= 7) {
    return "high";
  }

  return "nuclear";
}

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);

  return items[randomIndex];
}

export function generateExcuse(situation, severity) {
  const severityLevel = getSeverityLevel(severity);

  const situationExcuses = excuses[situation];

  if (!situationExcuses) {
    return "Something went catastrophically wrong. Even the excuse generator needs an excuse.";
  }

  return getRandomItem(situationExcuses[severityLevel]);
}