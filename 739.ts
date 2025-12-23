//https://leetcode.com/problems/daily-temperatures/description/
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const length = temperatures.length;
  const answer = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const pre = stack.pop();
      answer[pre] = i - pre;
    }
    stack.push(i);
  }
  return answer;
}
