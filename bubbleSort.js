function bubbleSort(array) {
    let swapped = true;
    while(swapped) {
        swapped=false;
        for(let i=0; i < array.length - 1;i++) {
            if (array[i] > array[i+1]) {
                let temp=array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped=true;
            }
        }
    }
    return array;
  }

  const unsortedArray = [7, 2, 1, 5, 3, 9];
  let sortedArray = unsortedArray.slice();
  sortedArray = bubbleSort(sortedArray);
  console.log(unsortedArray);
  console.log(sortedArray);