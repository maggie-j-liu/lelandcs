// https://www.contentful.com/blog/2021/03/17/puppeteer-node-open-graph-screenshot-for-socials/

import puppeteer from "puppeteer-core";
import chrome from "chrome-aws-lambda";

const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : process.platform === "linux"
    ? "/usr/bin/google-chrome"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const getOptions = async (isDev: boolean) => {
  let options;
  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }
  return options;
};

const screenshot = async (url: string) => {
  // pass in the isDev=true parameter if you are developing locally
  // to ensure puppeteer picks up your machine installation of
  // Chrome via the configurable options
  const isDev = process.env.NODE_ENV === "development";

  // get options for browser
  const options = await getOptions(isDev);

  // launch a new headless browser with dev / prod options
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();

  // set the viewport size
  await page.setViewport({
    width: 720,
    height: 450,
    deviceScaleFactor: 8,
  });

  // tell the page to visit the url
  await page.goto(url);

  // take a screenshot
  const file = await page.screenshot({
    type: "png",
  });

  // close the browser
  await browser.close();
  return file;
};

export default screenshot;
