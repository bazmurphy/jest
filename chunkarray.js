const chunkArray = (array, length) => {
  // initialise chunkedArray
  const chunkedArray = [];

  // loop through array
  array.forEach(element => {
    // get last element
    const last = chunkedArray[chunkedArray.length -1]
    // console.log(`last: ${last}`);
    // check if last and if last length is equal to the chunked length
    if (!last || last.length === length) {
      chunkedArray.push([element])
    } else {
      last.push(element);
    }
  })

  return chunkedArray;
}

module.exports = chunkArray;
// export default chunkArray;

// console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 2));