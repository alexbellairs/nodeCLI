// const Movie = require("./utils");
const Music = require("./utils");
const yargs = require("yargs");
// const input = process.argv;
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
// const input = argv;

// if (input[2] === "add") {
//   const movieObj = new Movie(input[3], input[4]);
//   movieObj.add();
// }

// if (input[2] === "add") {
// movies.push({title: input[3], actor: input[4]});
// console.log(movies);
//   const movieObj = new Movie(input[3], input[4]);
//   const movieObj1 = new Movie(input[5], input[6]);
//   const movieObj2 = new Movie(input[7], input[8]);
//   const movieObj3 = new Movie(input[9], input[10]);

//   movieObj.add();
//   movieObj1.add();
//   movieObj2.add();
//   movieObj3.add();
// }
// for (i = 2; i < input.length; i++) {
//   if (input[i] === "add") {
//     i += 1;
//     const movieObj = new Movie(input[i], input[i + 1]);
//     movieObj.add();
//   }
// }

// if (input[2] === "add") {
//   const movieObj = new Movie(input[3], input[4]);
//   movieObj.add();
// } else if (input[2] === "add multi") {
//   let num = parseInt(input[3]);
//   let titleMod = 4;
//   let actorMod = 5;
//   for (i = 0; i < num; i++) {
//     const movieObj = new Movie(input[i + titleMod], input[i + actorMod]);
//     actorMod += 1;
//     titleMod += 1;
//     movieObj.add();
//   }
// }

// const app = (argvArr) => {
//   if (argvArr[2] === "add") {
//     const movieObj = new Movie({ title: argvArr[3], actor: argvArr[4] });
//     movieObj.add();
//   } else if (argvArr[2] === "addMulti") {
//     const movie1 = new Movie({ title: argvArr[3], actor: argvArr[4] });
//     const movie2 = new Movie({ title: argvArr[5], actor: argvArr[6] });
//     movie1.add();
//     movie2.add();
//   }
// };

// app(process.argv);

// console.log(yargs.argv);

// const app = () => {
//   if (yargs.argv.command === "add") {
//     const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
//     movieObj.add();
//   } else if (yargs.argv.command === "addMulti") {
//     for (i in yargs.argv.title) {
//       if (yargs.argv.actor[i] === true) {
//         const movieObj = new Movie(yargs.argv.title[i], undefined);
//         movieObj.add();
//       } else {
//         const movieObj = new Movie(yargs.argv.title[i], yargs.argv.actor[i]);
//         movieObj.add();
//       }
//     }
//   }
// };

// app();

const app = () => {
  if (yargs.argv.command === "add") {
    const songObj = new Music(yargs.argv.title, yargs.argv.artist);
    songObj.add();
  } else if (yargs.argv.command === "addMulti") {
    for (i in yargs.argv.title) {
      if (yargs.argv.artist[i] === true) {
        const songObj = new Music(yargs.argv.title[i], undefined);
        songObj.add();
      } else {
        const songObj = new Music(yargs.argv.title[i], yargs.argv.artist[i]);
        songObj.add();
      }
    }
  }
};

app();
