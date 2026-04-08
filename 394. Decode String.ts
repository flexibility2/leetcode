function decodeString(s: string): string {
  let curNum = 0;
  let stack = [];
  let curStr = "";
  for (let str of s) {
    if (str >= "0" && str <= "9") {
      curNum = curNum * 10 + parseInt(str);
    } else if (str === "[") {
      stack.push([curStr, curNum]);
      curStr = "";
      curNum = 0;
    } else if (str === "]") {
      const [preStr, repeat] = stack.pop();
      curStr = preStr + curStr.repeat(repeat);
    } else {
      curStr += str;
    }
  }
  return curStr;
}

/**
 *
 *
 * https://grok.com/c/72228de8-1b6f-4a3c-9e45-f6537f57f697?rid=33ffbb85-f12a-4646-9230-fdc1f3e0e746
 * 栈里面存的是前一个字符，以及当前字符需要repeat的次数。每次遇到[，就把当前字符和当前数字入栈，并且重置当前字符和当前数字。当遇到]，就把栈顶元素出栈，得到前一个字符和需要repeat的次数，然后把当前字符重复相应的次数，并且拼接上前一个字符，得到新的当前字符。
 */
