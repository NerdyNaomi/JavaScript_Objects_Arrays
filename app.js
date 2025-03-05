console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum() {
  let sum = 0;
  numbers.forEach((number) => {
    sum = sum + number;
  });
  return sum;
}
console.log(`Sum of this array: [${numbers}]`);
console.log(arraySum(numbers));
console.log(`Check:\n${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}
${numbers[0] + numbers[1]} + ${numbers[2]} = ${
  numbers[0] + numbers[1] + numbers[2]
}
${numbers[0] + numbers[1] + numbers[2]} + ${numbers[3]} = ${
  numbers[0] + numbers[1] + numbers[2] + numbers[3]
}
${numbers[0] + numbers[1] + numbers[2] + numbers[3]} + ${numbers[4]} = ${
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]
}
${numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]} + ${
  numbers[5]
} = ${
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]
}
${
  numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]
} + ${numbers[6]} = ${
  numbers[0] +
  numbers[1] +
  numbers[2] +
  numbers[3] +
  numbers[4] +
  numbers[5] +
  numbers[6]
}
`);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function info() {
  return `${this.title} by ${this.author}\nPage ${this.bookmark} of ${
    this.pages
  }\nHas been read ${this.readCount} time${this.readCount === 1 ? `` : `s`}.`;
}

let book1 = {};
book1.title = "The Reader";
book1.author = `Traci Chee`;
book1.pages = 442;
book1.bookmark = 235;
book1.readCount = 1;
book1.info = info;

console.log(book1.info());

book2 = {
  title: `Red Seas Under Red Skies`,
  author: `Scott Lynch`,
  pages: 700,
  bookmark: 448,
  readCount: 2,
  info,
};

console.log(book2.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentenceFoxDog = "The quick brown fox jumps over the lazy dog.";
let sentenceSphinxVow = "Sphinx of black quartz, judge my vow.";
let reverseSentence = ``;
let backwardSentence = ``;

function reverseString(sentence) {
  let wordArray = sentence.split(` `);
  let charArray = wordArray.map((word) => word.split(``));
  let reverseCharArray = charArray.map((charArray) => charArray.reverse());
  let reverseWordArray = reverseCharArray.map((reverseChar) =>
    reverseChar.join(``)
  );
  reverseSentence = reverseWordArray.join(` `);
  //Just wanted to make the whole sentence backwards!!
  let backwardWordArray = reverseWordArray.reverse();
  backwardSentence = backwardWordArray.join(` `);

  // console.log(`sentence: ${sentence}.`);
  // console.log(`wordArray: ${wordArray}`);
  // console.log(`charArray: ${charArray}`);
  // console.log(reverseCharArray);
  // console.log(reverseWordArray);
  // console.log(`${reverseSentence}.`);
  // console.log(backwardWordArray);
  // console.log(`.${backwardSentence}`);
}

reverseString(sentenceFoxDog);

console.log(`Sentence 1: ${sentenceFoxDog}`);
console.log(`Result 1: ${reverseSentence}`);
console.log(`Result 2: ${backwardSentence}`);

reverseString(sentenceSphinxVow);

console.log(`Sentence 2: ${sentenceSphinxVow}`);
console.log(`Result 3: ${reverseSentence}`);
console.log(`Result 4: ${backwardSentence}`);

/*
Other methods from class:

>>> LET function:
function reverseWords(sentence) {
  let result = [];
  //identify words based on spaces:
  let words = sentence.split(` `);
  //Where i = word location in the array
  for (let i = 0; i < words.length; i++) {
    let letters = words[i].split(``); //ex: "The" => [ "T", "h", "e" ]
    letters.reverse(); //ex: [ "e", "h", "T" ]
    let reverseWord = letters.join(``);
    result.push(reverseWord);
  }
  
  return result.join(` `);
}

console.log(`Lecture LET function: ${reverseWords(sentenceFoxDog)}`)

//so this function works on the problem one word at a time. My MAP method instead does the entire sentence at once.

>>> MAP Function:
function reverseWords (sentence) {
    //identify words based on spaces:
    let words = sentence.split(` `);
    //Changes values per iteration and then returns a new array:
    let result = words.map((word) => {
        let letters = word.split(``); // ex: "The" => [ "T", "h", "e" ]
        letters.reverse(); // ex: [ "e", "h", "T" ]
        return letters.join(``);
    })

    return result.join(` `);
}

console.log(`Lecture MAP function: ${reverseWords(sentenceFoxDog)}`)
*/

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvDataLotr = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let csvDataNameAgeCity = "id,name,age,city,score\n1,Alice,28,New York,85\n2,Bob,32,Los Angeles,90\n3,Charlie,25,Chicago,78\n4,Diana,30,Houston,92\n5,Evan,27,Miami,88";
let dataObjects = ``;

function csvConversion (csvData) {
    
let dataCutRows = csvData.split(`\n`);
let header = dataCutRows[0].split(`,`);
    dataObjects = dataCutRows.slice(1).map((row) => {
  let values = row.split(`,`);
  let rowObject = {};
  header.forEach((header, index) => {
    rowObject[header] = values[index];
    //console.log(`values = ${values}`)
    //console.log(`header: ${header}, value: ${values[index]}`);
  });

  return rowObject;
});

console.log(csvData);
console.log(dataCutRows);
console.log(header);
return dataObjects;
}

console.log(`Converted:`, csvConversion(csvDataLotr));

/*
>>> Class Method 1:

function csvConverter (data) {
    // Determine headers from the first row/line of the data
    // Split the header string to an array of headers
    let headers = data.slice(0, data.indexOf(`\n`)).split(`,`);

    // Determine the row data
    let valuesList = data.slice(data.indexOf(`\n`) + 1).split(`\n`);

    const outputArray = valuesList.map((row) => {
        // Seperate the values into array values
        let values = row.split(`,`);
        let object = {};
        values.forEach((column, index) => {
            if (index < headers.length) {
                object[headers[index]] = column;
            } else {
                object[`misc${index - headers.length + 1}`] = column;
            }
        });

        return object;
    });

    return outputArray;
}

console.log(`Class Method Converter:`, csvConverter(csvDataNameAgeCity));

>>> Class Method 2:

function converter (fileData) {
    //split the fileData into rows based on every newline character
    let rows = fileData.split(`\n`);
    //split the first row, of headers, into individual strings based on the , character
    let headers = rows[0].split(`,`);

        let result = []
    // Iterate over every content row
    for (let i = 1; i < rows.length; i++) {
        let obj = {};
        let data = rows[i].split(`,`); //ex [ "Frodo", 50 ]
        data.forEach((value, index) => {
            obj[headers[index]] = value;
        });
        result.push(obj);
    }
    return result;
}

console.log(converter(csvDataLotr));

>>> Class Method 3 Reduce:

function reduceConverter(fileData) {
    //Return an array of objects from a string of rows

    //Store headers

    //Store result
    return fileData.split(`\n`).reduce((output, row, index, array) => {
        //Split row values into an array of values
        let values = row.split(`,`);
        // Determine headers (first row)
        if (index == 0) {
            // Working with headers
            output.headers = values;
        } else {
            // Working with table data
            let object = {};
            values.forEach((value, index) => {
                if (index < output.headers.length) {
                    object[output.headers[index]] = value;
                } else {
                    object[`misc${index - output.headers.length + 1}`] = value
                }
            });
            if (!output.records) {
                output.records = [];
            }

            output.records.push(object);
        }

        return output;
    }, {}).records;
}
 
console.log(`Reduce converter:`, reduceConverter(csvDataLotr))
*/