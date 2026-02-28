import test, { expect } from '@playwright/test'

test("Automating Alert & Frame Interactions",async({page})=>{

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
page.on('dialog',alertType=>{

    const msg = alertType.message()
    console.log("Dialog")
    console.log(msg)
    alertType.accept()

})
console.log("going to click")
await page.frameLocator(`//iframe[@id="iframeResult"]`).locator(`//button[text()="Try it"]`).click()
await page.waitForTimeout(3000)
console.log("going to check")
//await expect page.frameLocator(`//iframe[@id="iframeResult"]`).locator(`//p[@id="demo"]`)
const assertext = await expect(page.frameLocator(`//iframe[@id="iframeResult"]`).locator(`//p[@id="demo"]`)).toHaveText('You pressed OK!')
console.log(assertext)
const mytext =  await page.frameLocator(`//iframe[@id="iframeResult"]`).locator(`//p[@id="demo"]`).innerText()
 console.log(mytext) 


})