const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "Info.csv",
  header: [
    { id: "category", title: "Category" },
    { id: "info", title: "Data" },
    { id: "extra", title: "Extra" }
  ]
});

const fetchData = async query => {
  const data = await fetch(`https://www.mxplayer.in/${query}`);
  const resp = await data.text();
  return resp;
};

router.get("/", async (req, res) => {
  var ar = [];

  const bodyData = await fetchData("movies");
  const $ = cheerio.load(bodyData);
  for (let t1 = 1; t1 < 70; t1++) {
    for (let t = 1; t < 70; t++) {
      let r = $(
        `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-header`
      ).each((i, el) => {
        $(
          `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-subheader`
        ).each((i, el2) => {
          const $el = $(el);
          const $el2 = $(el2);
          ar.push({
            category: "Movie",
            info: $el.text(),
            extra: $el2.text()
          });
        });
      });
    }
  }

  const bodyData2 = await fetchData("web-series");
  const $2 = cheerio.load(bodyData2);
  for (let t1 = 1; t1 < 70; t1++) {
    for (let t = 1; t < 70; t++) {
      let r = $2(
        `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-header`
      ).each((i, el) => {
        $2(
          `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-subheader`
        ).each((i, el2) => {
          const $el = $(el);
          const $el2 = $(el2);
          ar.push({
            category: "Web Series",
            info: $el.text(),
            extra: $el2.text()
          });
        });
      });
    }
  }

  const bodyData3 = await fetchData("shows");
  const $3 = cheerio.load(bodyData3);
  for (let t1 = 1; t1 < 70; t1++) {
    for (let t = 1; t < 70; t++) {
      let r = $3(
        `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-header`
      ).each((i, el) => {
        $3(
          `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-subheader`
        ).each((i, el2) => {
          const $el = $(el);
          const $el2 = $(el2);
          ar.push({
            category: "Shows",
            info: $el.text(),
            extra: $el2.text()
          });
        });
      });
    }
  }

  const bodyData4 = await fetchData("music");
  const $4 = cheerio.load(bodyData4);
  for (let t1 = 1; t1 < 70; t1++) {
    for (let t = 1; t < 70; t++) {
      let r = $4(
        `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-header`
      ).each((i, el) => {
        $4(
          `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-subheader`
        ).each((i, el2) => {
          const $el = $(el);
          const $el2 = $(el2);
          ar.push({
            category: "Music",
            info: $el.text(),
            extra: $el2.text()
          });
        });
      });
    }
  }

  const bodyData5 = await fetchData("news");
  const $5 = cheerio.load(bodyData5);
  for (let t1 = 1; t1 < 70; t1++) {
    for (let t = 1; t < 70; t++) {
      let r = $5(
        `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-header`
      ).each((i, el) => {
        $5(
          `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-subheader`
        ).each((i, el2) => {
          const $el = $(el);
          const $el2 = $(el2);
          ar.push({
            category: "News",
            info: $el.text(),
            extra: $el2.text()
          });
        });
      });
    }
  }

  const bodyData6 = await fetchData("sports");
  const $6 = cheerio.load(bodyData6);
  for (let t1 = 1; t1 < 70; t1++) {
    for (let t = 1; t < 70; t++) {
      let r = $6(
        `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-header`
      ).each((i, el) => {
        $6(
          `#main > div > div > div > div.tab-content.active > div > div.infinite-sections > div.infiniter-container > div > div:nth-child(${t1}) > div > div.card-slider > div > div.slides-wrapper > div > div:nth-child(${t}) > div > a > div > div.card-details > div.text-overflow.card-subheader`
        ).each((i, el2) => {
          const $el = $(el);
          const $el2 = $(el2);
          ar.push({
            category: "Sports",
            info: $el.text(),
            extra: $el2.text()
          });
        });
      });
    }
  }

  const bodyData7 = await fetchData("buzz");
  const $7 = cheerio.load(bodyData7);
  for (let t1 = 1; t1 < 70; t1++) {
    let r = $7(
      `#main > div > div > div > div.tab-content.active > div > div.buzz-tab-center > div > div > div.infiniter-container > div > div > div:nth-child(${t1}) > a > div > div.card-details > div.text-overflow.card-header`
    ).each((i, el) => {
      const $el = $(el);
      ar.push({
        category: "Buzz",
        info: $el.text()
      });
    });
  }

  csvWriter
    .writeRecords(ar)
    .then(() => res.json({ Info: "Data Written Succesfully." }));
});

module.exports = router;
