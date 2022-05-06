const addToZero = (arr) => {
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                result = true;
                break;
            }
        }
    }
    return result;
}
// Time: O(n^2)
// Space: O(n)

const hasUniqueChars = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
// Time: O(n^2)
// Space: O(n)

const isPangram = (str) => {
    const result = new Set(...[str.toLowerCase().split('').filter((e) => e >= "a" && e <= "z")]);
    return result.size === 26;
}
// Time: O(n)
// Space: O(n)

const findLongestWord = (arr) => Math.max(...arr.map(e => e.length));
// Time: O(n)
// Space: O(n)
