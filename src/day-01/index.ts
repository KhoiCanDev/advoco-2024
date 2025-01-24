import fs from "fs";
import readline from "readline";
import { insertSorted } from "../utils/sort";

async function main() {
  try {
    const inputStream = fs.createReadStream("./src/day-01/input.txt");
    const readLines = readline.createInterface({
      input: inputStream,
      crlfDelay: Infinity,
    });

    const firstList: number[] = [];
    const secondList: number[] = [];

    for await (const line of readLines) {
      const numbers = line.split("   ");
      insertSorted(firstList, parseInt(numbers[0], 10));
      insertSorted(secondList, parseInt(numbers[1], 10));
    }

    let result = 0;
    for (let index = 0; index < firstList.length; index++) {
      const fistNo = firstList[index];
      const secondNo = secondList[index];
      result += Math.abs(fistNo - secondNo);
    }

    console.log("total distance", result);
  } catch (err) {
    console.error(err);
  }
}

main();
