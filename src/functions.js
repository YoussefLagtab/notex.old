module.exports = {
  createTable: (etud = [], modul = [], t = "") => {
    let ml = modul.length;
    let table = document.createElement("table");
    table.setAttribute("id", "etudtable");
    table.setAttribute("border", 1);
    table.setAttribute("cellspacing", 0);
    table.setAttribute("width", 700);
    thead = document.createElement("tr");
    tha = document.createElement("th");
    tha.appendChild(document.createTextNode("N° Appogee"));
    thb = document.createElement("th");
    thb.appendChild(document.createTextNode("Nom"));
    thc = document.createElement("th");
    thc.appendChild(document.createTextNode("Prenom"));
    thead.appendChild(tha);
    thead.appendChild(thb);
    thead.appendChild(thc);
    for (let m of modul) {
      let th = document.createElement("th");
      th.appendChild(document.createTextNode(m));
      thead.appendChild(th);
    }
    table.appendChild(thead);
    for (let e of etud) {
      // let i = i | 0;
      let tr, td, text;
      tr = document.createElement("tr");
      for (let key in e) {
        td = document.createElement("td");
        td.appendChild(document.createTextNode(e[key]));
        tr.appendChild(td);
        // if (t !== "input") {

        // }
      }
      if (t === "input")
        for (let i = 0; i < ml; i++) {
          let td = document.createElement("td");
          let inp = document.createElement("input");
          inp.setAttribute("type", "number");
          inp.setAttribute("min", 0);
          inp.setAttribute("max", 20);
          td.appendChild(inp);
          tr.appendChild(td);
        }
      else {
        for (let i = 0; i < ml; i++) {}
      }
      table.appendChild(tr);
    }
    return table;
  },

  getModules: (fil, sem, db) => {
    let modules;
    db.module.findOne({}, function(err, data) {
      if (err) return !console.log(err);
      // console.log(data[fil][sem]);
      modules = data[fil][sem];
    });
  },
  printPage: a => {
    a.print();
  },
  valider: Etudiant => {
    let eVal = [],
      eNonVal = [],
      nElim,
      moy;

    Etudiant.forEach(et => {
      let notes = et[3];
      nElim = notes.some(e => e < 5);
      moy = notes.reduce((a, c) => a + c, 0) / notes.length;
      et[2] = moy;
      if (nElim || moy < 10) eNonVal.push(et);
      else eVal.push(et);
    });

    return { eVal, eNonVal };
  },
  getResult: (note, m = null, s = "prientemps") => {
    if (!m) return note < 10 ? "NV" : "V";
    if (note < 10) {
      if (s === "automne" && m >= 10) return "VC";
      return "NV";
    }
    return s === "automne" ? "VAR" : "V";
  }
};
