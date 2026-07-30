export const MOA_INVITE_KEYS = [
  "artist",
  "exhibition",
  "gallery",
  "galleryAddress",
  "address",
  "date",
  "inviteId",
  "moaMember",
  "benefitToken",
] as const;

export type MoaInviteKey = (typeof MOA_INVITE_KEYS)[number];
export type MoaInviteData = Partial<Record<MoaInviteKey, string>>;

export const MOA_INVITE_STORAGE_KEY = "saie-moa-invite";

export function pickMoaInviteFromSearch(searchParams: URLSearchParams): MoaInviteData {
  return MOA_INVITE_KEYS.reduce<MoaInviteData>((picked, key) => {
    const value = searchParams.get(key);
    if (value) picked[key] = value;
    return picked;
  }, {});
}

export function hasMoaInviteData(data: MoaInviteData) {
  return MOA_INVITE_KEYS.some((key) => Boolean(data[key]));
}

export function inviteToQuery(data: MoaInviteData) {
  const params = new URLSearchParams();
  MOA_INVITE_KEYS.forEach((key) => {
    const value = data[key];
    if (value) params.set(key, value);
  });
  return params.toString();
}

export function withInviteQuery(path: string, data: MoaInviteData) {
  const query = inviteToQuery(data);
  return query ? `${path}?${query}` : path;
}
