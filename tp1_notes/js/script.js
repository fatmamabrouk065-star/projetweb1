console.log("Bienvenue !");
console.log(2+3);
const noum =prompt("doner votre nom");
const ag =prompt("donner votre age");


const notes=[12,15,9,17,8];
let somme=0;
for (let i =0;i<notes.length;i++)
let moyenne=somme/notes.length;
console.log("la moyenne=", moyenne);
let cpt=0
let min=notes[0];max=notes[0];
for(const n of notes);
if (n>max) max=n;
if (n<min) min=n;
console.log("le min" +min+"le max" +max);

function mention(x){
    if (x>=16)
        return "tres bien"
    else if (x>=14)
        return "bien" 
    else if (x>=10)
        return "passeble"
    else
        return "insuffisant"
}
for (const n of notes ) console.log ( n+":"+mention(n))
function estadmis (n){return n>=10;}
function estadmis2 =(n)=> n>=10;
if (estadmis(13)console.log("admis"));
else console.log (" a journée");
if (estadmis2(9) console.log ("admis"));
else console .log("a journée")

