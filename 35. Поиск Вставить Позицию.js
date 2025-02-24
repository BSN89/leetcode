// Дано отсортированное множество различных целых чисел и целевое значение,
//  вернуть индекс, если цель найдена. Если нет, вернуть индекс, где бы он был, 
//  если бы он был вставлен по порядку.
// Вам необходимо написать алгоритм, обладающий  O(log n)сложностью выполнения.
// Пример 1:
// Ввод: числа = [1,3,5,6], цель = 5
//  Вывод: 2
// Пример 2:
// Ввод: числа = [1,3,5,6], цель = 2
//  Вывод: 1
// Пример 3:
// Ввод: числа = [1,3,5,6], цель = 7
//  Вывод: 4
var searchInsert = function(nums, target) {
    let res = () => nums.indexOf(target)
    if(res() === -1){
        nums.push(target)
        nums.sort((a,b) => a - b).indexOf(target)
        res()
    }
    return res()
}

console.log(searchInsert([1,3,5,6,], 5))
console.log(searchInsert([1,3,5,6,], 7))