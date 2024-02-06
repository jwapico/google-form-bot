import { pickRandom, fetchData } from "./wordAPI.js"


let words = []; 
async function getEmail(firstName, lastName) {
    let number = Math.floor(Math.random() * 25) + 1;
    let email;
    switch (number) {
        case 1:
            email = firstName + "_" + lastName + "_" + Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join("") + "@gmail.com";
            break;
        case 2:
            email = firstName + lastName + Array.from({ length: 2 }, () => Math.floor(Math.random() * 10)).join("") + "@mines.edu";
            break;
        case 3:
            email = firstName + lastName[0] + "@mines.edu";
            break;
        case 4:
            email = firstName[0] + lastName + "@mines.edu";
            break;
        case 5:
            email = "Xx_" + firstName[0] + lastName + "Yourmom_xX@gmail.com";
            break;
        case 6:
            email = await getRandomWord() + await getRandomWord() + await getRandomWord() + await getRandomWord() + "gmail.com"
            break;
        case 7:
            email = firstName[0] + lastName + "@infowars.com";
            break;
        case 8: /*Very Rare*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "explorer@" + await getRandomWord() + ".com";
            break;
        case 9: /*Unconventional*/
            email = lastName + "_" + firstName + "@yahoo.com";
            break;
        case 10: /*Creative*/
            email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@outlook.com";
            break;
        case 11: /*Classic*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "@aol.com";
            break;
        case 12: /*Professional*/
            email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@tpusa.com";
            break;
        case 13: /*Role-based*/
            email = "contact@" + lastName.toLowerCase() + firstName.toLowerCase() + ".com";
            break;
        case 14: /*Random string*/
            email = Array.from({ length: 10 }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join("") + "@protonmail.com";
            break;
        case 15: /*Birthday-based*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "@birthdaymail.com";
            break;
        case 16: /*Nickname-based*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "@tpusa.com";
            break;
        case 17: /*Hobby-based*/
            email = lastName.toLowerCase() + firstName.toLowerCase() + "fan@" + await getRandomWord() + ".com";
            break;
        case 18: /*Geography-based*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "@golden.com";
            break;
        case 19: /*Random numbers*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + Math.floor(Math.random() * 1000) + "@joebiden.com";
            break;
        case 20: /*School-based*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "@alumni.edu";
            break;
        case 21: /*Family-based*/
            email = lastName.toLowerCase() + "@family" + Math.floor(Math.random() * 100) + ".com";
            break;
        case 22: /*Interest-based*/
            email = firstName.toLowerCase() + lastName.toLowerCase() + "lover@" + await getRandomWord() + ".com";
            break;
        case 23: /*Industry-based*/
            email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@netscape.com";
            break;
        case 24: /*Tech-savvy*/
            email = firstName.toLowerCase() + "dev@" + lastName.toLowerCase() + ".io";
            break;
        case 25: /*Pet-based*/
            email = firstName.toLowerCase() + "sbestfriend@" + await getRandomWord() + ".com";
            break;
        case 26: /*Adventure-seeker*/
            email = "peepeepoopoopoggers@cum.gov";
            break;
        default:
            email = "cock@cum.gov";
            break;
    }
    return email
}

async function getRandomWord() {
    if (words != null) {
        words = await fetchData(`https://www.randomlists.com/data/words.json`);
    }
    return pickRandom(words.data);
}

export { getEmail };