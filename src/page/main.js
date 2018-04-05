const { remote } = require("electron");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const db = mongojs("127.0.0.1:27017/faculte");
const {
  createTable,
  getModules,
  printPage,
  valider,
  getResult
} = require("../functions");

let gmod = [];
let modules = [];
/* console.log(
  remote.getGlobal("sharedObj").filliere,
  remote.getGlobal("sharedObj").semestre
); */
/* document.getElementById("print").addEventListener("click", () => {
  document.body.getElementsByTagName("h1")[0].style.display = "none";
  document.body.getElementsByTagName("a")[0].style.display = "none";
  document.body.getElementsByTagName("button")[0].style.display = "none";

  window.print();

  document.body.getElementsByTagName("h1")[0].style.display = "block";
  document.body.getElementsByTagName("a")[0].style.display = "block";
  document.body.getElementsByTagName("button")[0].style.display = "block";
}); */

const fil = remote.getGlobal("sharedObj").filliere,
  sem = remote.getGlobal("sharedObj").semestre,
  div = document.createElement("div");
document.getElementById("filsem").innerHTML = fil + " " + sem + ":";
/* data =  */

let etudiantTab;
db
  .collection("etudiant")
  .find(
    {
      filliere: fil,
      semestre: sem
    },
    {
      _id: 0,
      nApp: 1,
      nom: 1,
      prenom: 1
    }
  )
  .limit(3, (err, _data) => {
    // etudiantTab = _data.sort((a, b) => a.nom.charCodeAt() - b.nom.charCodeAt());
    db.module.findOne({}, function(err, data) {
      if (err) return !console.log(err);
      // console.log(data[fil][sem], _data);
      _modules = data[fil][sem];
      // let modules = [];
      for (let m in _modules) modules.push(_modules[m]);
      let tab = createTable(_data, modules, "input");
      div.append(tab);
      document.getElementById("etud").prepend(div);
      document.getElementById("continue").style.display = "block";
    });
  });

document.getElementById("continue").addEventListener("click", e => {
  let Etudiant = [],
    nApp,
    eNotes,
    valide = true;
  /* VALIDATE */
  table = document.getElementById("etudtable");
  rows = table.getElementsByTagName("tr");
  for (r = 1; r < rows.length; r++) {
    cells = rows[r].getElementsByTagName("td");
    nApp = cells[0].innerHTML;
    nom = cells[1].innerHTML;
    prenom = cells[2].innerHTML;
    eNotes = [];
    for (c = 3; c < cells.length; c++) {
      input = cells[c].getElementsByTagName("input")[0];
      let note = parseFloat(input.value);
      input.style.borderColor = "black";
      input.style.color = "black";
      if (!(note >= 0 && note <= 20)) {
        input.style.borderColor = "red";
        input.style.color = "red";
        valide = false;
      }
      eNotes.push(note);
      // console.log(note);

      // Etudiant.push({ nApp });
    }
    Etudiant.push({ nApp, nom, prenom, eNotes });
  }
  if (!valide) return false;

  console.log("======================== Etudiant ========================");
  Etudiant.forEach(et => {
    console.log(et);
  });
  console.log("=============================================================");

  // console.log("valdie!!");
  // console.log(...Etudiant);

  let { eVal, eNonVal } = valider(Etudiant);
  console.log("======================== Valider ========================");
  eVal.forEach(et => {
    console.log(et);
  });
  console.log("=============================================================");
  console.log("======================== Non Valider ========================");
  eNonVal.forEach(et => {
    console.log(et);
  });
  console.log("=============================================================");

  document.getElementById("etudVal").append(createTable(eVal, modules));
  document.getElementById("etudNonVal").append(createTable(eNonVal, modules));

  // document
  //   .getElementById("etudNonVal")
  //   .appendChild(createTable(eNonVal, modules));
  // document.getElementById("etudNonVal");
  /* ======================== */
  // Etudiant.forEach(et => {
  //   let { nApp, eNotes, moy } = et;
  //   let resultat = getResult(moy);
  //   index = sem[1] - 1;
  //   let r = "notes." + index + ".semestre.ord.resultat";
  //   let n = "notes." + index + ".semestre.ord.note";
  //   db.collection("etudiant").update(
  //     { nApp },
  //     {
  //       $set: { r: resultat, n: moy }
  //     }
  //   );
  //   eNotes.forEach((_note, i) => {
  //     let r = "notes." + index + ".modules.i.ord.resultat";
  //     let n = "notes." + index + ".modules.i.ord.note";
  //     let resultat = getResult(n);
  //     db.collection("etudiant").update(
  //       { nApp },
  //       {
  //         $set: { r: resultat, n: _note }
  //       }
  //     );
  //   });
  // });
});
