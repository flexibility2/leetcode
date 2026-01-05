//https://leetcode.cn/problems/implement-trie-prefix-tree/solutions/1705343/by-1105389168-e56z/?envType=problem-list-v2&envId=2cktkvj

class Trie {
  children;
  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let ch = this.children;
    for (let w of word) {
      if (!ch[w]) {
        ch[w] = {};
      }
      ch = ch[w];
    }
    ch.end = true;
  }

  private searchPrefix(word: string) {
    let ch = this.children;
    for (let w of word) {
      if (!ch[w]) {
        return false;
      }
      ch = ch[w];
    }
    return ch;
  }

  search(word: string): boolean {
    let res = this.searchPrefix(word);
    if (res && res.end === true) {
      return true;
    }
    return false;
  }

  startsWith(prefix: string): boolean {
    let res = this.searchPrefix(prefix);
    if (res === false) {
      return false;
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
