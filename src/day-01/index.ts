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
    const secondListCountMap = new Map<number, number>();

    for await (const line of readLines) {
      const numbers = line.split("   ");
      const firstNo = parseInt(numbers[0], 10);
      const secondNo = parseInt(numbers[1], 10);
      insertSorted(firstList, firstNo);
      insertSorted(secondList, secondNo);
      if (secondListCountMap.has(secondNo)) {
        secondListCountMap.set(secondNo, secondListCountMap.get(secondNo) + 1);
      } else {
        secondListCountMap.set(secondNo, 1);
      }
    }

    let distanceResult = 0;
    let similarityResult = 0;

    for (let index = 0; index < firstList.length; index++) {
      const firstNo = firstList[index];
      const secondNo = secondList[index];
      distanceResult += Math.abs(firstNo - secondNo);
      similarityResult += firstNo * (secondListCountMap.get(firstNo) ?? 0);
    }

    console.log("total distance", distanceResult);
    console.log("similarity", similarityResult);
  } catch (err) {
    console.error(err);
  }
}

main();
