/*=====================================================================*/
/** Imports **/
const { remote } = require("electron");

/*=====================================================================*/
/**  **/

let f = document.getElementById("filliere");
let s = document.getElementById("semestre");
let submit = document.getElementById("submit");

f.addEventListener("change", setSemestre);
s.addEventListener("change", validate);

submit.addEventListener("click", e => {
  e.preventDefault;
  let fil = f.options[f.selectedIndex].value;
  let sem = s.options[s.selectedIndex].value;
  wh = window.location.href.replace("form", "page").split("?")[0];
  /* ======================= */
  {
    document.getElementById("filliere").classList.remove("err");
    document.getElementById("semestre").classList.remove("err");
  }
  /* ======================= */
  if (fil === "---" || sem == "---") {
    document.getElementById("filliere").classList.add("err");
    document.getElementById("semestre").classList.add("err");
    return false;
  }
  remote.getGlobal("sharedObj").filliere = fil;
  remote.getGlobal("sharedObj").semestre = sem;
  window.location.href = wh;
  // window.location.href = "/src/page/index.html";
  // db.collection("Etudiant").find((err, data) => {
  //   if (err) return !console.err(err);
  //   console.log(JSON.stringify(data.map(e => e.name)));
  // });
});

/*=====================================================================*/
/** Functions **/
function setSemestre() {
  let filliere = f.options[f.selectedIndex].value;

  for (let i in s.options) {
    s.options[i] = null;
  }

  if (filliere === "---") {
    let n = document.createElement("option");
    n.text = "---";
    n.value = "---";
    s.add(n);
  } else if (filliere === "SMIA" || filliere === "SMPC" || filliere === "SM") {
    let n = document.createElement("option");
    n.text = "---";
    n.value = "---";

    let s1 = document.createElement("option");
    s1.text = "S1";
    s1.value = "S1";

    let s2 = document.createElement("option");
    s2.text = "S2";
    s2.value = "S2";

    s.add(n);
    s.add(s1);
    s.add(s2);
  } else {
    let n = document.createElement("option");
    n.text = "---";
    n.value = "---";

    let s3 = document.createElement("option");
    s3.text = "S3";
    s3.value = "S3";

    let s4 = document.createElement("option");
    s4.text = "S4";
    s4.value = "S4";

    let s5 = document.createElement("option");
    s5.text = "S5";
    s5.value = "S5";

    let s6 = document.createElement("option");
    s6.text = "S6";
    s6.value = "S6";

    s.add(n);
    s.add(s3);
    s.add(s4);
    s.add(s5);
    s.add(s6);
  }
}

function validate() {
  if (
    f.options[f.selectedIndex].value == "---" ||
    s.options[s.selectedIndex].value == "---"
  )
    document.getElementById("submit").disabled = true;
  else document.getElementById("submit").disabled = false;
}

// function submitF
