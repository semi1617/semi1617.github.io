// Fact list and java code for fact generator
var factlist = [
  "More than 500 people die everyday from gun violence",
  "Nearly 1 in 4 American kids have witnessed a shooting",
  "A tiny fraction of gun violence is committed by the mentally ill",
  "Since 1999, about 300,000 students have experienced a school shooting",
  "There is roughly one gun for every person in America",
  "The five deadliest mass shootings have all occurred in the past 15 years",
  "54% of gun violence deaths are fron suicide",
  "Mass shootings represent a tiny share of all shooting deaths",
  "1 of 12 kids die from gun violence in the US every day"];

var fact = document.getElementById("fact");
var factbutton = document.getElementById("factbutton");
var count = 0;

factbutton.addEventListener("click", factgenerator);

function factgenerator(){
  fact.innerHTML = factlist[count];
  count++;
  if (count==factlist.length){
    count=0;
  }
}
