// src/config.ts
export const SITE_CONFIG = {
  name: "Jaume Anguera Peris",
  email: "contact@jaumeap.com",
  linkedin: "https://linkedin.com/in/jaumeap",
  github: "https://github.com/",
  location: "Stockholm, Sweden",
  university: "KTH Royal Institute of Technology",
  phd: "Electrical Engineering and Computer Science",
  thesis_lower: "stochastic modeling and optimization of large-scale and resource-constrained systems",
  thesis_upper: "Stochastic modeling and optimization of large-scale and resource-constrained systems",
  currentYear: new Date().getFullYear(),
  stats: {
    publications: "7+",
    supervisedTheses: "10+",
    teachingHours: "300+",
    funding: "SEK 500,000",
  },
} as const;
