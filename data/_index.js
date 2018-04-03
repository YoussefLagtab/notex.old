const etudiants = require("./etudiants");
const mongojs = require("mongojs");
const db = mongojs("127.0.0.1:27017/faculte");

etudiants.sort((a, b) => a.filliere.localeCompare(b.filliere));

for (let i in etudiants) {
  /* SM 0 -> 115  */
  if (i >= 0 && i < 55) {
    etudiants[i].semestre = "S1";
    continue;
  }
  if (i >= 55 && i < 116) {
    etudiants[i].semestre = "S2";
    continue;
  }
  /* SMA 116 -> 218 */
  if (i >= 116 && i < 141) {
    etudiants[i].semestre = "S3";
    continue;
  }
  if (i >= 141 && i < 166) {
    etudiants[i].semestre = "S4";
    continue;
  }
  if (i >= 166 && i < 191) {
    etudiants[i].semestre = "S5";
    continue;
  }
  if (i >= 191 && i < 219) {
    etudiants[i].semestre = "S6";
    continue;
  }
  /* SMC 219 -> 326 */
  if (i >= 219 && i < 244) {
    etudiants[i].semestre = "S3";
    continue;
  }
  if (i >= 244 && i < 269) {
    etudiants[i].semestre = "S4";
    continue;
  }
  if (i >= 269 && i < 294) {
    etudiants[i].semestre = "S5";
    continue;
  }
  if (i >= 294 && i < 327) {
    etudiants[i].semestre = "S6";
    continue;
  }
  /* SMI 327 -> 428 */
  if (i >= 327 && i < 352) {
    etudiants[i].semestre = "S3";
    continue;
  }
  if (i >= 352 && i < 377) {
    etudiants[i].semestre = "S4";
    continue;
  }
  if (i >= 377 && i < 402) {
    etudiants[i].semestre = "S5";
    continue;
  }
  if (i >= 402 && i < 429) {
    etudiants[i].semestre = "S6";
    continue;
  }
  /* SMIA 429 -> 539 */
  if (i >= 429 && i < 484) {
    etudiants[i].semestre = "S1";
    continue;
  }
  if (i >= 484 && i < 539) {
    etudiants[i].semestre = "S2";
    continue;
  }
  /* SMP 539 -> 649 */
  if (i >= 539 && i < 566) {
    etudiants[i].semestre = "S3";
    continue;
  }
  if (i >= 566 && i < 593) {
    etudiants[i].semestre = "S4";
    continue;
  }
  if (i >= 593 && i < 621) {
    etudiants[i].semestre = "S5";
    continue;
  }
  if (i >= 621 && i < 649) {
    etudiants[i].semestre = "S6";
    continue;
  }
  /* SMPC 649 -> 766 */
  if (i >= 649 && i < 708) {
    etudiants[i].semestre = "S1";
    continue;
  }
  if (i >= 708 && i < 766) {
    etudiants[i].semestre = "S2";
    continue;
  }
  /* SVI 766 -> 890 */
  if (i >= 766 && i < 797) {
    etudiants[i].semestre = "S3";
    continue;
  }
  if (i >= 797 && i < 828) {
    etudiants[i].semestre = "S4";
    continue;
  }
  if (i >= 828 && i < 859) {
    etudiants[i].semestre = "S5";
    continue;
  }
  if (i >= 859 && i < 890) {
    etudiants[i].semestre = "S6";
    continue;
  }
  /* SVT 890 -> 1000 */
  if (i >= 890 && i < 917) {
    etudiants[i].semestre = "S3";
    continue;
  }
  if (i >= 917 && i < 944) {
    etudiants[i].semestre = "S4";
    continue;
  }
  if (i >= 944 && i < 971) {
    etudiants[i].semestre = "S5";
    continue;
  }
  if (i >= 971 && i < 1000) {
    etudiants[i].semestre = "S6";
    continue;
  }
}

{
  //   console.log(
  //     "SMIA S1: ",
  //     etudiants.filter(e => e.filliere == "SMIA" && e.semestre == "S1").length
  //   );
  //   console.log(
  //     "SMIA S2: ",
  //     etudiants.filter(e => e.filliere == "SMIA" && e.semestre == "S2").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SMI S3: ",
  //     etudiants.filter(e => e.filliere == "SMI" && e.semestre == "S3").length
  //   );
  //   console.log(
  //     "SMI S4: ",
  //     etudiants.filter(e => e.filliere == "SMI" && e.semestre == "S4").length
  //   );
  //   console.log(
  //     "SMI S5: ",
  //     etudiants.filter(e => e.filliere == "SMI" && e.semestre == "S5").length
  //   );
  //   console.log(
  //     "SMI S6: ",
  //     etudiants.filter(e => e.filliere == "SMA" && e.semestre == "S6").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SMA S3: ",
  //     etudiants.filter(e => e.filliere == "SMA" && e.semestre == "S3").length
  //   );
  //   console.log(
  //     "SMA S4: ",
  //     etudiants.filter(e => e.filliere == "SMA" && e.semestre == "S4").length
  //   );
  //   console.log(
  //     "SMA S5: ",
  //     etudiants.filter(e => e.filliere == "SMA" && e.semestre == "S5").length
  //   );
  //   console.log(
  //     "SMA S6: ",
  //     etudiants.filter(e => e.filliere == "SMA" && e.semestre == "S6").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SMPC S1: ",
  //     etudiants.filter(e => e.filliere == "SMPC" && e.semestre == "S1").length
  //   );
  //   console.log(
  //     "SMPC S2: ",
  //     etudiants.filter(e => e.filliere == "SMPC" && e.semestre == "S2").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SMP S3: ",
  //     etudiants.filter(e => e.filliere == "SMP" && e.semestre == "S3").length
  //   );
  //   console.log(
  //     "SMP S4: ",
  //     etudiants.filter(e => e.filliere == "SMP" && e.semestre == "S4").length
  //   );
  //   console.log(
  //     "SMP S5: ",
  //     etudiants.filter(e => e.filliere == "SMP" && e.semestre == "S5").length
  //   );
  //   console.log(
  //     "SMP S6: ",
  //     etudiants.filter(e => e.filliere == "SMP" && e.semestre == "S6").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SMC S3: ",
  //     etudiants.filter(e => e.filliere == "SMC" && e.semestre == "S3").length
  //   );
  //   console.log(
  //     "SMC S4: ",
  //     etudiants.filter(e => e.filliere == "SMC" && e.semestre == "S4").length
  //   );
  //   console.log(
  //     "SMC S5: ",
  //     etudiants.filter(e => e.filliere == "SMC" && e.semestre == "S5").length
  //   );
  //   console.log(
  //     "SMC S6: ",
  //     etudiants.filter(e => e.filliere == "SMC" && e.semestre == "S6").length
  //   );
  //   /* =============================================================================================== */
  //   console.log(
  //     "SM S1: ",
  //     etudiants.filter(e => e.filliere == "SM" && e.semestre == "S1").length
  //   );
  //   console.log(
  //     "SM S2: ",
  //     etudiants.filter(e => e.filliere == "SM" && e.semestre == "S2").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SVT S3: ",
  //     etudiants.filter(e => e.filliere == "SVT" && e.semestre == "S3").length
  //   );
  //   console.log(
  //     "SVT S4: ",
  //     etudiants.filter(e => e.filliere == "SVT" && e.semestre == "S4").length
  //   );
  //   console.log(
  //     "SVT S5: ",
  //     etudiants.filter(e => e.filliere == "SVT" && e.semestre == "S5").length
  //   );
  //   console.log(
  //     "SVT S6: ",
  //     etudiants.filter(e => e.filliere == "SVT" && e.semestre == "S6").length
  //   );
  //   /* ===================================================================================================== */
  //   console.log("========================================");
  //   console.log(
  //     "SVI S3: ",
  //     etudiants.filter(e => e.filliere == "SVI" && e.semestre == "S3").length
  //   );
  //   console.log(
  //     "SVI S4: ",
  //     etudiants.filter(e => e.filliere == "SVI" && e.semestre == "S4").length
  //   );
  //   console.log(
  //     "SVI S5: ",
  //     etudiants.filter(e => e.filliere == "SVI" && e.semestre == "S5").length
  //   );
  //   console.log(
  //     "SVI S6: ",
  //     etudiants.filter(e => e.filliere == "SVI" && e.semestre == "S6").length
  //   );
}

for (let i in etudiants)
  etudiants[i].notes = new Array(
    new Array(7).fill(-1),
    new Array(7).fill(-1),
    new Array(6).fill(-1),
    new Array(6).fill(-1),
    new Array(6).fill(-1),
    new Array(6).fill(-1)
  );

// console.log(etudiants[0].notes);
// console.log("===========================================================");

// console.log(etudiants[346].notes);
// console.log("===========================================================");

// console.log(etudiants[766].notes);
// console.log("===========================================================");

// console.log(etudiants[999].notes);
// console.log("===========================================================");

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

require("fs").writeFile(
  "./my1.js",

  JSON.stringify(shuffle(etudiants)),

  function(err) {
    if (err) {
      console.error("Crap happens");
    }
  }
);
