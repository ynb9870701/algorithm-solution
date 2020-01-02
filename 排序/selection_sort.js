function selection_sort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j
        }
        const t = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = t
    }
    return arr
}

let arr = [1, 22, 4, 34, 100, 2]
selection_sort(arr)
console.log(arr)