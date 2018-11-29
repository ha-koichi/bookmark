var express = require('express');
var router = express.Router();

var markdownpdf = require("markdown-pdf")
, fs = require("fs")

const url = '/Users/koichi/OneDrive/OneDrive - 株式会社ローソンデジタルイノベーション/Private/bookmark.md'
markdownpdf().from("/Users/koichi/OneDrive/OneDrive - 株式会社ローソンデジタルイノベーション/Private/bookmark.md").to("/Users/koichi/OneDrive/OneDrive - 株式会社ローソンデジタルイノベーション/Private/bookmark.pdf", function () {
  console.log("Done")
})