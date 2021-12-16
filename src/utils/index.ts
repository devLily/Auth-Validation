export const nextTick = (fn: Function) => setTimeout(fn, 16);
// 인자로 함수를 받고 setTimeout을 호출하면서 인자로 받은 함수를 그대로 넘겨준다.
