export const DOMAIN = "dengaleme.online";
export const BASE_URL = `https://${DOMAIN}`;

export const COMPANY = {
  name: "Dwellio s.r.o.",
  regNo: "23678763",
  street: "Na Roudné 443/18",
  district: "Severní Předměstí",
  postalCode: "301 00",
  city: "Plzeň",
  country: "Tjekkiet",
} as const;

export const SUPPORT_PHONE = "70 22 28 25";

export const SUPPORT_ORGS = [
  { label: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
  { label: "Spillemyndigheden", href: "https://www.spillemyndigheden.dk/" },
  { label: "StopSpillet", href: "https://www.stopspillet.dk/" },
  { label: "Center for Ludomani", href: "https://ludomani.dk/" },
  { label: "ROFUS", href: "https://www.rofus.nu/" },
] as const;
