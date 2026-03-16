function countSubstrings(s: string): number {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    checkSub(s, i, i);
    checkSub(s, i, i + 1);
  }

  return res;

  function checkSub(s: string, left: number, right: number) {
    while (left >= 0 && right < s.length) {
      if (s[left] != s[right]) break;
      res++;
      left--;
      right++;
    }
  }
}

//以每一个字符（或每两个相邻字符）为中心，向两边尽可能扩展，扩展到不能再扩展为止，每扩展成功一次就算找到一个新的回文子串。
