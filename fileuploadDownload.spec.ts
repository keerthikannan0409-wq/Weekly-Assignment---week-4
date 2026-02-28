import test, { expect } from '@playwright/test'
import path from 'path'
import { constrainedMemory } from 'process'

test("File Upload",async({page})=>{

 await page.goto("https://www.leafground.com/file.xhtml")
  await page.waitForTimeout(5000)
 // const choose = page.locator(
  //const filepath = 
  page.locator(`//input[@type="file"]`).first().setInputFiles('uploadfile/sample.png')

  await page.goto("https://the-internet.herokuapp.com/upload")
  await page.waitForTimeout(3000)
  page.locator(`//input[@id='file-upload']`).setInputFiles('uploadfile/sample.png')

  
})

test("file upload using drag and drop",async({page})=>{

 await page.goto("https://the-internet.herokuapp.com/upload")
await page.waitForTimeout(3000)
const upload = page.waitForEvent('filechooser')
    await page.locator(`//div[@id='drag-drop-upload']`).click()
    const uploaded = await upload


    await uploaded.setFiles('uploadfile/sample.png')
})

test("File Download",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/download")
await page.waitForTimeout(3000)
const downloadfile = page.waitForEvent('download')
await page.locator(`//a[text()='file.json']`).click()
const downloadedFile = await downloadfile

await downloadedFile.saveAs('uploadfile/file.json')
console.log(downloadedFile.suggestedFilename())
})