let team = [];
const member1 = {
    firstSecondName: "Wayne Barnett",
    role : "Founder and CEO",
    photo : "wayne-barnett-founder-ceo.jpg"
}

const member2 ={
    firstSecondName: "Angela Caroll",
    role : "Chief Editor",
    photo : "angela-caroll-chief-editor.jpg"
}

const member3 ={
    firstSecondName: "Walter Gordon",
    role : "Office Manager",
    photo : "walter-gordon-office-mangaer.jpg"
}

const member4 ={
    firstSecondName: "Angela Lopez",
    role : "Social Media Manager",
    photo : "angela-lopezoffice-manager.jpg"
}

const member5 ={
    firstSecondName: "Scott Estrada",
    role : "Developer",
    photo : "scott-estrada-developer.jpg"
}

const member6 ={
    firstSecondName: "Barbara Ramos",
    role : "Graphic Designer",
    photo : "barbara-ramos-graphic-designer.jpg"
}

team.push(member1,member2,member3,member4,member5,member6);
console.log(team);

let domPortion = document.getElementById("container");
domPortion.innerHTML = JSON.stringify(team);