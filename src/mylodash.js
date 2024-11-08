// _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
export function defaults(...args) {
    const result = args[0] || {}; // 使用第一個物件作為基礎
    for (let i = 1; i < args.length; i++) {
        const source = args[i];
        for (let key in source) {
            if (!(key in result)) {
                result[key] = source[key];
            }
        }
    }
    return result;
}

// 測試範例
// console.log(defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }, { 'c': 4 })); // 輸出: { 'a': 1, 'b': 2, 'c': 4 }
