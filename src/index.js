import puppeteer, { TimeoutError } from "puppeteer";
import { getPoliticalIssues } from "./getPoliticalIssues.js";
import { generateName } from "./getRandomName.js";
import { incrementCount } from "./incrementCount.js";
import { pickRandom, fetchData } from "./wordAPI.js";
import { getEmail } from "./getEmails.js"
import { getNumber } from "./getRandomPhone.js"

async function completeForm(page) {
  // Randomly generate fake name, email, phone number, and 'political issue')
  const fullname = Math.random() < 0.5 ? String(await generateName("male")) : String(await generateName("female"));
  const firstName = fullname.split(" ")[0];
  const lastName = fullname.split(" ")[1];
  const email = await getEmail(firstName, lastName);
  const possiblePhoneNumbers = [
    "5623575335",
    "+15623575335",
    "562-357-5335",
    "+1 562-357-5335",
    "+1562-357-5335",
    "+1-562-357-5335",
    "562 357 5335",
    "+1 562 357 5335",
    "+1562 357 5335",
    "562.357.5335",
    "+1 562.257.5335",
    "+1562.257.5335",
    "+1.562.257.5335",
  ];
  // const phoneNumber = pickRandom(possiblePhoneNumbers);
  const phoneNumber = getNumber();

  const possiblePoliticalIssues = await getPoliticalIssues();
  const politicalIssue = pickRandom(possiblePoliticalIssues);

  // input the fake information into the form
  const inputValues = [firstName, lastName, email, phoneNumber];
  await page.waitForSelector("input.whsOnd.zHQkBf");
  const personalInfo = await page.$$("input.whsOnd.zHQkBf");
  for (let i = 0; i < personalInfo.length; i++) {
    const element = personalInfo[i];
    const value = inputValues[i];
    await element.type(value);
  }

  await page.waitForSelector("textarea.KHxj8b.tL9Q4c");
  const freeQuestion = await page.$$("textarea.KHxj8b.tL9Q4c");
  await freeQuestion[0].type(politicalIssue);

  // all multiple choice buttons are in this div, you need
  // to add an offset after each click depending on how many
  // answer choices there are
  await page.waitForSelector("div.AB7Lab.Id5V1");
  const mcElements = await page.$$("div.AB7Lab.Id5V1");
  await mcElements[Math.floor(Math.random() * 3)].click();
  await mcElements[Math.floor(Math.random() * 2) + 3].click();
  await mcElements[Math.floor(Math.random() * 2) + 5].click();
  await mcElements[Math.floor(Math.random() * 3) + 7].click();
  await mcElements[Math.floor(Math.random() * 3) + 10].click();

  const submitButton = await page.$$("div.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd");
  await submitButton[0].click();

}


(async () => {
  const url = "https://docs.google.com/forms/d/1HiJ6p51nsgrtVGuG8WRJuednz2ZOgsK2DMyOYoOqYWw/viewform?edit_requested=true";

  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium",
    headless: false,
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1020,
    height: 800,
  });

  await page.goto(url);

  while (true) {
    try{
    await page.goto(url);
    }catch(err){
      console.error("goto URL Failed, Trying again...")
    }
    await completeForm(page);
    incrementCount();
    try {
      await page.waitForNavigation()
      // it wants 2 for some reason
      await page.waitForNavigation()
    }
    catch (err) {
      console.error("wait for redirect timed out, Trying again...")
    }

  }
})();
