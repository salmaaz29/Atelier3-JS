function Modif(texte){
return texte.toUpperCase();
}
const txt = "Bonjour,comment ça va ?,Je suis content de te voir,À bientôt";
//format detaille de la solution
// const lignes =txt.split(',');
// const majesc = lignes.map(x=>Modif(x));
// const filtrer = majesc.filter(x=>x.match(/I/));
// console.log(lignes);
// console.log(majesc);
// console.log(filtrer);
//format reduite 
const result = txt.split(',').map(x=>Modif(x)).filter(x=>x.match(/I/));
console.log(result);