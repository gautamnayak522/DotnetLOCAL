const fs = require("fs");
const path = require("path");

const directory = "./Backup/";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  console.log("Available files in Directory");
  files.forEach((file) => {
    console.log(file);
  });
  console.log("------------------------------------");

  let sorted = files.sort((a, b) => {
    let aStat = fs.statSync(`${directory}/${a}`),
      bStat = fs.statSync(`${directory}/${b}`);
    return (
      bStat.mtime-aStat.mtime
    );
  });

  sorted.forEach((file, index) => {
    if (index > 1) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
      console.log(file + " : removed successfully ");
    }
  });
});
