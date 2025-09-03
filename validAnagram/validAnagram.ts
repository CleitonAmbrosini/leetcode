function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let target = t;

  for (let i = 0; i < s.length; i++) {
    target = target.replace(s[i], "");
  }

  return target.length > 0 ? false : true;
}
