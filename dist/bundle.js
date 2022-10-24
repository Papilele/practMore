/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _scripts_locationcity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/locationcity.js */ \"./src/scripts/locationcity.js\");\n/* harmony import */ var _scripts_locationcity_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_locationcity_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar d = document.getElementsByClassName('product__description-ingredients');\nvar h = document.getElementsByClassName('product__description-title');\nconsole.log(d, h);\nvar productCardDescriptionResizing = function productCardDescriptionResizing() {\n  for (var i = 0; i < h.length; i++) {\n    if (h[i].clientHeight > 24) {\n      console.log(i);\n      d[i].setAttribute(\"style\", \"-webkit-line-clamp:1 !important;display:-webkit-box;-webkit-box-orient: vertical;overflow: hidden;\");\n    }\n  }\n};\nproductCardDescriptionResizing();\nwindow.addEventListener('resize', function (event) {\n  productCardDescriptionResizing();\n});\n\n//# sourceURL=webpack://practmore/./src/index.js?");

/***/ }),

/***/ "./src/scripts/locationcity.js":
/*!*************************************!*\
  !*** ./src/scripts/locationcity.js ***!
  \*************************************/
/***/ (() => {

eval("var button = document.querySelector('.locationcity');\nvar select = document.querySelector('.locationcity__select');\nvar citiesList = [\"Москва\", \"Санкт-Петербург\", \"Ростов-на-Дону\", \"Краснодар\", \"Рыбинск\", \"Тверь\"];\nvar isOpen = true;\nisOpen && citiesList.map(function (city) {\n  var div = document.createElement('div');\n  div.innerHTML = city;\n  div.className = \"locationcity__select-item\";\n  select.appendChild(div);\n});\n\n//# sourceURL=webpack://practmore/./src/scripts/locationcity.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/header/account.svg */ \"./src/images/header/account.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/header/logo.svg */ \"./src/images/header/logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/header/cart.svg */ \"./src/images/header/cart.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/promo.svg */ \"./src/images/home/promo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/pizza.svg */ \"./src/images/home/pizza.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sushi.svg */ \"./src/images/home/sushi.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks.svg */ \"./src/images/home/drinks.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/snacks.svg */ \"./src/images/home/snacks.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/combo.svg */ \"./src/images/home/combo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/dessert.svg */ \"./src/images/home/dessert.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sauces.svg */ \"./src/images/home/sauces.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/promo1.png */ \"./src/images/home/promo1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/promo2.png */ \"./src/images/home/promo2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/filter.svg */ \"./src/images/home/filter.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/pizzas/chicken_shugar_chili.png */ \"./src/images/home/pizzas/chicken_shugar_chili.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/pizzas/easy_peasy_cucumber.png */ \"./src/images/home/pizzas/easy_peasy_cucumber.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/pizzas/easy_peasy_khren.png */ \"./src/images/home/pizzas/easy_peasy_khren.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/pizzas/4_season.png */ \"./src/images/home/pizzas/4_season.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sushi/phil_crunch.png */ \"./src/images/home/sushi/phil_crunch.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sushi/phil_crem.png */ \"./src/images/home/sushi/phil_crem.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sushi/phil_super.png */ \"./src/images/home/sushi/phil_super.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sushi/tiger_mama.png */ \"./src/images/home/sushi/tiger_mama.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/snacks/potato.png */ \"./src/images/home/snacks/potato.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/snacks/wings.png */ \"./src/images/home/snacks/wings.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/snacks/baits.png */ \"./src/images/home/snacks/baits.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/snacks/twister.png */ \"./src/images/home/snacks/twister.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/desserts/nodules.png */ \"./src/images/home/desserts/nodules.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/desserts/bagels.png */ \"./src/images/home/desserts/bagels.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/desserts/pancackes.png */ \"./src/images/home/desserts/pancackes.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/desserts/magnat_classic.png */ \"./src/images/home/desserts/magnat_classic.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/desserts/magnat_mango.png */ \"./src/images/home/desserts/magnat_mango.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/desserts/magnat_mini.png */ \"./src/images/home/desserts/magnat_mini.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/combo/2_pizzas.png */ \"./src/images/home/combo/2_pizzas.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/combo/3_pizzas.png */ \"./src/images/home/combo/3_pizzas.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/combo/2_pizzas_cola.png */ \"./src/images/home/combo/2_pizzas_cola.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/combo/4_twisters.png */ \"./src/images/home/combo/4_twisters.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks/adrenaline.png */ \"./src/images/home/drinks/adrenaline.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks/pepsi_max.png */ \"./src/images/home/drinks/pepsi_max.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks/pepsi_classic.png */ \"./src/images/home/drinks/pepsi_classic.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks/pepsi_cherry.png */ \"./src/images/home/drinks/pepsi_cherry.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks/pepsi_zero.png */ \"./src/images/home/drinks/pepsi_zero.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/drinks/mirinda.png */ \"./src/images/home/drinks/mirinda.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sauces/cheese.png */ \"./src/images/home/sauces/cheese.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sauces/bbq.png */ \"./src/images/home/sauces/bbq.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_44___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sauces/tartar.png */ \"./src/images/home/sauces/tartar.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_45___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home/sauces/currant.png */ \"./src/images/home/sauces/currant.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_46___ = new URL(/* asset import */ __webpack_require__(/*! ./images/footer/logo.svg */ \"./src/images/footer/logo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_47___ = new URL(/* asset import */ __webpack_require__(/*! ./images/footer/phone.svg */ \"./src/images/footer/phone.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_48___ = new URL(/* asset import */ __webpack_require__(/*! ./images/footer/pin.svg */ \"./src/images/footer/pin.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_49___ = new URL(/* asset import */ __webpack_require__(/*! ./images/footer/facebook.svg */ \"./src/images/footer/facebook.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_50___ = new URL(/* asset import */ __webpack_require__(/*! ./images/footer/instagram.svg */ \"./src/images/footer/instagram.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);\nvar ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);\nvar ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);\nvar ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);\nvar ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);\nvar ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);\nvar ___HTML_LOADER_REPLACEMENT_23___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_23___);\nvar ___HTML_LOADER_REPLACEMENT_24___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_24___);\nvar ___HTML_LOADER_REPLACEMENT_25___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_25___);\nvar ___HTML_LOADER_REPLACEMENT_26___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_26___);\nvar ___HTML_LOADER_REPLACEMENT_27___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_27___);\nvar ___HTML_LOADER_REPLACEMENT_28___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_28___);\nvar ___HTML_LOADER_REPLACEMENT_29___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_29___);\nvar ___HTML_LOADER_REPLACEMENT_30___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_30___);\nvar ___HTML_LOADER_REPLACEMENT_31___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_31___);\nvar ___HTML_LOADER_REPLACEMENT_32___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_32___);\nvar ___HTML_LOADER_REPLACEMENT_33___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_33___);\nvar ___HTML_LOADER_REPLACEMENT_34___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_34___);\nvar ___HTML_LOADER_REPLACEMENT_35___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_35___);\nvar ___HTML_LOADER_REPLACEMENT_36___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_36___);\nvar ___HTML_LOADER_REPLACEMENT_37___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_37___);\nvar ___HTML_LOADER_REPLACEMENT_38___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_38___);\nvar ___HTML_LOADER_REPLACEMENT_39___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_39___);\nvar ___HTML_LOADER_REPLACEMENT_40___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_40___);\nvar ___HTML_LOADER_REPLACEMENT_41___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_41___);\nvar ___HTML_LOADER_REPLACEMENT_42___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_42___);\nvar ___HTML_LOADER_REPLACEMENT_43___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_43___);\nvar ___HTML_LOADER_REPLACEMENT_44___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_44___);\nvar ___HTML_LOADER_REPLACEMENT_45___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_45___);\nvar ___HTML_LOADER_REPLACEMENT_46___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_46___);\nvar ___HTML_LOADER_REPLACEMENT_47___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_47___);\nvar ___HTML_LOADER_REPLACEMENT_48___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_48___);\nvar ___HTML_LOADER_REPLACEMENT_49___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_49___);\nvar ___HTML_LOADER_REPLACEMENT_50___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_50___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Куда Пицца</title>\\r\\n</head>\\r\\n<body>\\r\\n    <header class=\\\"header\\\">\\r\\n        <div class=\\\"topbar\\\">\\r\\n          <div class=\\\"container\\\">\\r\\n            <div class=\\\"topbar__wrapper\\\">\\r\\n                <div class=\\\"locationcity\\\">\\r\\n                    <div class=\\\"locationcity__button\\\">\\r\\n                      <svg class=\\\"locationcity__icon\\\"\\r\\n                        width=\\\"20\\\"\\r\\n                        height=\\\"20\\\"\\r\\n                        viewBox=\\\"0 0 20 20\\\"\\r\\n                        fill=\\\"none\\\"\\r\\n                        xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n                      >\\r\\n                        <path\\r\\n                          d=\\\"M10.0201 3.90632C8.5438 3.89562 7.33479 5.11238 7.32362 6.62015C7.3125 8.12785 8.50412 9.36364 9.97993 9.375C9.98678 9.37504 9.99358 9.37508 10.0004 9.37508C11.4668 9.37508 12.6653 8.16195 12.6764 6.66117C12.6875 5.15355 11.4959 3.91769 10.0201 3.90632ZM10.0003 8.59387C9.99553 8.59387 9.99048 8.59383 9.98567 8.59379C8.9315 8.58567 8.08032 7.70293 8.08828 6.62601C8.09619 5.55394 8.95219 4.68745 9.99966 4.68745C10.0045 4.68745 10.0095 4.68749 10.0143 4.68753C11.0685 4.69566 11.9197 5.57839 11.9117 6.65531C11.9038 7.72738 11.0478 8.59387 10.0003 8.59387Z\\\"\\r\\n                          fill=\\\"#FF7010\\\"\\r\\n                        />\\r\\n                        <path\\r\\n                          d=\\\"M12.346 14.7048C14.8891 11.3605 16.4784 9.6165 16.4998 6.69056C16.5267 3.00919 13.6025 0 9.99941 0C6.43839 0 3.52729 2.94641 3.50022 6.59095C3.47835 9.59623 5.09716 11.3378 7.65781 14.7042C5.11043 15.0932 3.50022 16.0704 3.50022 17.2657C3.50022 18.0663 4.22461 18.7848 5.53999 19.2887C6.73723 19.7474 8.32118 20 10 20C11.6789 20 13.2628 19.7474 14.46 19.2887C15.7754 18.7848 16.4998 18.0663 16.4998 17.2656C16.4998 16.071 14.8911 15.094 12.346 14.7048ZM4.26487 6.59685C4.28873 3.38087 6.85714 0.781252 9.99948 0.781252C13.179 0.781252 15.7589 3.43704 15.7352 6.68474C15.7148 9.46342 14.0294 11.1758 11.3385 14.7595C10.8586 15.3984 10.4178 16.0025 10.0006 16.5934C9.5846 16.0021 9.15262 15.4089 8.66548 14.7593C5.86342 11.0255 4.24415 9.44256 4.26487 6.59685ZM10 19.2188C6.71754 19.2188 4.26487 18.1877 4.26487 17.2657C4.26487 16.5819 5.73109 15.7182 8.19638 15.4191C8.74134 16.1496 9.21911 16.8132 9.68772 17.4911C9.75929 17.5946 9.8756 17.6562 9.99967 17.6563C9.99979 17.6563 9.9999 17.6563 10 17.6563C10.124 17.6563 10.2402 17.5949 10.3119 17.4916C10.7761 16.8226 11.267 16.1425 11.8073 15.4195C14.2702 15.7189 15.7352 16.5824 15.7352 17.2657C15.7351 18.1877 13.2825 19.2188 10 19.2188Z\\\"\\r\\n                          fill=\\\"#FF7010\\\"\\r\\n                        />\\r\\n                      </svg>\\r\\n                      <span class=\\\"locationcity__title\\\">Москва</span>\\r\\n                      <svg\\r\\n                        width=\\\"12\\\"\\r\\n                        height=\\\"12\\\"\\r\\n                        viewBox=\\\"0 0 12 12\\\"\\r\\n                        fill=\\\"none\\\"\\r\\n                        xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n                      >\\r\\n                        <g clipPath=\\\"url(#clip0_10390_2511)\\\">\\r\\n                          <path\\r\\n                            d=\\\"M12 3.26272C12 3.40658 11.9467 3.55058 11.8402 3.66041L6.38565 9.28535C6.17252 9.50514 5.82738 9.50514 5.61438 9.28535L0.159852 3.66041C-0.0532842 3.44061 -0.0532842 3.08469 0.159852 2.86504C0.372987 2.64539 0.718122 2.64525 0.931122 2.86504L6.00002 8.0923L11.0689 2.86504C11.282 2.64525 11.6272 2.64525 11.8402 2.86504C11.9467 2.97487 12 3.11887 12 3.26272Z\\\"\\r\\n                            fill=\\\"#191919\\\"\\r\\n                          />\\r\\n                        </g>\\r\\n                        <defs>\\r\\n                          <clipPath id=\\\"clip0_10390_2511\\\">\\r\\n                            <rect width=\\\"12\\\" height=\\\"12\\\" fill=\\\"white\\\" />\\r\\n                          </clipPath>\\r\\n                        </defs>\\r\\n                      </svg>\\r\\n                    </div>\\r\\n                      <div class=\\\"locationcity__select\\\">\\r\\n                          <!--div class=\\\"locationcity__select-item\\\">Ростов-на-Дону</div>\\r\\n                          <div class=\\\"locationcity__select-item\\\">Санкт-Петербург</div>\\r\\n                          <div class=\\\"locationcity__select-item\\\">Москва</div>\\r\\n                          <div class=\\\"locationcity__select-item\\\">Тверь</div>\\r\\n                          <div class=\\\"locationcity__select-item\\\">Рыбинск</div-->\\r\\n                      </div>\\r\\n                  </div>\\r\\n              <a href=\\\"#\\\" class=\\\"topbar__info\\\">\\r\\n                Проверить адрес\\r\\n              </a>\\r\\n              <div class=\\\"topbar__info\\\">\\r\\n                Среднее время доставки*: <b>00:24:19</b>\\r\\n              </div>\\r\\n              <div class=\\\"topbar__info topbar__right\\\">\\r\\n                Время работы: <span class=\\\"nbsp\\\">с 11:00 до 23:00</span>\\r\\n              </div>\\r\\n              <button class=\\\"topbar__login\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" class=\\\"topbar__login-icon\\\" alt=\\\"Иконка войти\\\" />\\r\\n                Войти в аккаунт\\r\\n              </button>\\r\\n            </div>\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"navigation\\\">\\r\\n          <div class=\\\"container\\\">\\r\\n            <div class=\\\"navigation__wrapper\\\">\\r\\n              <div class=\\\"navigation__logo\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" class=\\\"navigation__logo-img\\\" alt=\\\"Логотип\\\" />\\r\\n                Куда пицца\\r\\n              </div>\\r\\n  \\r\\n              <!--ul class=navigation__menu\\\">\\r\\n                <li class=\\\"navigation__menu-item\\\"></li>\\r\\n              </ul-->\\r\\n  \\r\\n              <button class=\\\"navigation__cart\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" class=\\\"navigation__cart-logo\\\" alt=\\\"Иконка корзины\\\"/>\\r\\n                0 ₽\\r\\n              </button>             \\r\\n            </div>\\r\\n           \\r\\n          </div>\\r\\n        </div>\\r\\n      </header>\\r\\n        <main class=\\\"home\\\">\\r\\n          <div class=\\\"container\\\">\\r\\n            <div class=\\\"catalog\\\">\\r\\n              <div class=\\\"catalog__wrapper\\\">\\r\\n                <div class=\\\"catalog__categories\\\">\\r\\n\\r\\n                    <a href=\\\"#promo\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"Акции\\\" />\\r\\n                        <p class=\\\"item-text\\\">Акции</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#pizza\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Пицца\\\" />\\r\\n                        <p class=\\\"item-text\\\">Пицца</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#sushi\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Суши\\\" />\\r\\n                        <p class=\\\"item-text\\\">Суши</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#drinks\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"Напитки\\\" />\\r\\n                        <p class=\\\"item-text\\\">Напитки</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#snacks\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Закуски\\\" />\\r\\n                        <p class=\\\"item-text\\\">Закуски</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#combo\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"Комбо\\\" />\\r\\n                        <p class=\\\"item-text\\\">Комбо</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#desserts\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"Десерты\\\" />\\r\\n                        <p class=\\\"item-text\\\">Десерты</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                    <a href=\\\"#sauces\\\" class=\\\"catalog__categories-item\\\">\\r\\n                      <div class=\\\"categories-item__wrapper\\\">\\r\\n                        <img class=\\\"item-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"Соусы\\\" />\\r\\n                        <p class=\\\"item-text\\\">Соусы</p>\\r\\n                      </div>\\r\\n                    </a>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"catalog__promo\\\" id=\\\"promo\\\">\\r\\n\\r\\n                  <a href=\\\"#\\\">\\r\\n                    <div class=\\\"catalog__promo-ad orange\\\">\\r\\n                      <div class=\\\"ad\\\">\\r\\n                        <img class=\\\"ad-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Баннер\\\" />\\r\\n                      </div>\\r\\n                      <p class=\\\"ad-text\\\">3 средние пиццы от 999 рублей</p>\\r\\n                    </div>\\r\\n                  </a>\\r\\n\\r\\n                  <a href=\\\"#\\\">\\r\\n                    <div class=\\\"catalog__promo-ad red\\\">\\r\\n                      <div class=\\\"ad\\\">\\r\\n                        <img class=\\\"ad-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Баннер\\\" />\\r\\n                      </div>\\r\\n                      <p class=\\\"ad-text\\\">Кэшбек 10% на самовывоз (доставка)</p>\\r\\n                    </div>\\r\\n                  </a>\\r\\n                  \\r\\n                  <a href=\\\"#\\\">\\r\\n                    <div class=\\\"catalog__promo-ad orange\\\">\\r\\n                      <div class=\\\"ad\\\">\\r\\n                        <img class=\\\"ad-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Баннер\\\" />\\r\\n                      </div>\\r\\n                      <p class=\\\"ad-text\\\">3 средние пиццы от 999 рублей</p>\\r\\n                    </div>\\r\\n                  </a>\\r\\n\\r\\n                  <a href=\\\"#\\\">\\r\\n                    <div class=\\\"catalog__promo-ad red\\\">\\r\\n                      <div class=\\\"ad\\\">\\r\\n                        <img class=\\\"ad-icon\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Баннер\\\" />\\r\\n                      </div>\\r\\n                      <p class=\\\"ad-text\\\">Кэшбек 10% на самовывоз (доставка)</p>\\r\\n                    </div>\\r\\n                  </a>\\r\\n\\r\\n                </div>\\r\\n                <div class=\\\"catalog__address\\\">\\r\\n                  <p class=\\\"catalog__address-text\\\">Проверить адрес доставки</p>\\r\\n                  <form class=\\\"search-form\\\">\\r\\n                    <input type=\\\"text\\\" class=\\\"search-form__input\\\" placeholder=\\\"Адрес\\\">\\r\\n                    <button type=\\\"submit\\\" class=\\\"search-form__button\\\">Проверить</button>\\r\\n                  </form>\\r\\n                </div>\\r\\n              </div>\\r\\n            </div>\\r\\n            <div class=\\\"menu\\\">\\r\\n              <div class=\\\"menu__item\\\" id=\\\"pizza\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Пицца</p>\\r\\n                  <button class=\\\"menu__item-filtres\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Фильтры\\\">Фильтры</button>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product new\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Чикен Сладкий Чили\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Чикен Сладкий Чили попа попа</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc и так далее</p>\\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 399 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"EASY PEASY огуречный расколбас\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">EASY PEASY огуречный расколбас</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуc и так далее</p>\\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 549 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"EASY PEASY чикен а-ля хрен\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">EASY PEASY чикен а-ля хрен</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соуsadadadadad...</p>\\r\\n                      </div>  \\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 249 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"4 сезона\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">4 сезона</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...</p>                        \\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 630 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_17___ + \"\\\" alt=\\\"4 сезона\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">4 сезона</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...</p>                        \\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 630 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\" alt=\\\"EASY PEASY чикен а-ля хрен\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">EASY PEASY чикен а-ля хрен</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...</p>                        \\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 249 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"Чикен Сладкий Чили\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Чикен Сладкий Чили</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...</p>                        \\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 399 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"EASY PEASY огуречный расколбас\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">EASY PEASY огуречный расколбас</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Курица, Лук, Перец Халапеньо...</p>                        \\r\\n                      </div>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">от 549 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"menu__item\\\" id=\\\"sushi\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Суши</p>\\r\\n                  <button class=\\\"menu__item-filtres\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Фильтры\\\">Фильтры</button>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product new\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"Филадельфия кранч\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Филадельфия кранч</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">475 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"Филадельфия крем-брюле\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Филадельфия крем-брюле</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сливочный сыр, семга татаки с тростниковым сахаром, соус у...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">395 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"Супер Филадельфия\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Супер Филадельфия</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Действительно много семги, сливочный сыр, огурец, рис, н...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">425 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"Тигр мама\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Тигр мама</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">525 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_21___ + \"\\\" alt=\\\"Тигр мама\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Тигр папа</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">525 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_18___ + \"\\\" alt=\\\"Тигр тётя\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Тигр тётя</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">425 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_20___ + \"\\\" alt=\\\"Тигр бабушка\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Тигр бабушка</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">401 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_19___ + \"\\\" alt=\\\"Тигр племянница\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Тигр племянница</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">Бесплатно</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"menu__item\\\" id=\\\"snacks\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Закуски</p>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product new\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" alt=\\\"Картофель из печи\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Картофель из печи</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Запеченный картофель с итальянскими травами.</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" alt=\\\"Куриные крылья\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Куриные крылья</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Куриные крылышки со специями и ароматом копчения.</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">499 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"Куриные кусочки\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Куриные кусочки</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сочное куриное филе в хрустящей панировке.</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">499 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" alt=\\\"Тигр мама\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Додстер</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Легендарная горячая закуска с цыпленком, томатами, моцарела...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_25___ + \"\\\" alt=\\\"Тигр мама\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Додстер</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Легендарная горячая закуска с цыпленком, томатами, моцарела...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_24___ + \"\\\" alt=\\\"Куриные кусочки\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Куриные кусочки</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сочное куриное филе в хрустящей панировке.</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">499 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_22___ + \"\\\" alt=\\\"Картофель из печи\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Картофель из печи</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Запеченный картофель с итальянскими травами.</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_23___ + \"\\\" alt=\\\"Куриные крылья\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Куриные крылья</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Куриные крылышки со специями и ароматом копчения.</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">499 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"menu__item\\\" id=\\\"desserts\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Десерты</p>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product new\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" alt=\\\"Узелки сладкие\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Узелки сладкие</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Мягкие булочки с корицей и сахарной пудрой</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">149 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" alt=\\\"Рогалики с клубникой\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Рогалики с клубникой</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сладкие рогалики с клубникой, сыром \\\"кремчиз\\\" и ...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_28___ + \"\\\" alt=\\\"Сырники\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Сырники</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Нежные сырники из печи с соусом на выбор</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">159 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_29___ + \"\\\" alt=\\\"Магнат Шоколадный трюфель\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Магнат Шоколадный трюфель</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Шоколадное мороженое с ...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">139 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_30___ + \"\\\" alt=\\\"Магнат Манго и красные ягоды\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Магнат Манго и красные ягоды</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Мороженое эскимо сливочное c...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">139 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_31___ + \"\\\" alt=\\\"Магнат Мини\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Магнат Мини</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Набор из 2 видов мороженого: Магнат Шоколадный трюфель...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">499 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                          \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_26___ + \"\\\" alt=\\\"Узелки сладкие\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Узелки сладкие</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Мягкие булочки с корицей и сахарной пудрой</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">149 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_27___ + \"\\\" alt=\\\"Рогалики с клубникой\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">Рогалики с клубникой</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сладкие рогалики с клубникой, сыром \\\"кремчиз\\\" и ...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"menu__item\\\" id=\\\"combo\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Комбо</p>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\" alt=\\\"2 пиццы\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">2 пиццы</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Самое популярное комбо из 2 пицц 30 см: Карбонара + Аррива</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">999 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\" alt=\\\"3 пиццы\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">3 пиццы</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сырная + Пепперони фреш + Ветчина и сыр</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">1299 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_34___ + \"\\\" alt=\\\"2 пиццы и напиток\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">2 пиццы и напиток</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Карбонара + Аррива + Освежающая Pepsi</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">1199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_35___ + \"\\\" alt=\\\"4 Додстера\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">4 Додстера</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Тигровая креветка, огурец, авокадо, соус Айоли, рис, ик...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">539 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\" alt=\\\"5 пицц\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">5 пицц</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сырная + Пепперони фреш + Ветчина и сыр + Мясная + ...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">2299 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_33___ + \"\\\" alt=\\\"7 пицц\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">7 пицц</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Сырная + Пепперони фреш + Ветчина и сыр + Мясная + ...</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">3199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\" alt=\\\"2 пиццы\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">2 пиццы</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Самое популярное комбо из 2 пицц 30 см: Карбонара + Аррива</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">999 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_32___ + \"\\\" alt=\\\"2 пиццы\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <div class=\\\"product__description-header\\\">\\r\\n                        <p class=\\\"product__description-title\\\">2 пиццыss afdafafaf afasfasfaf asfaf afafafaf afaf asfsaf</p>\\r\\n                        <p class=\\\"product__description-ingredients\\\">Самое популярное комбо из 2 пицц 30 см: Карбонара + Аррива</p>                        \\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">999 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"menu__item\\\" id=\\\"drinks\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Напитки</p>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product new\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_36___ + \"\\\" alt=\\\"Adrenaline Gamefuel\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Adrenaline Gamefuel</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">199 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_37___ + \"\\\" alt=\\\"Pepsi Max\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Pepsi Max</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_38___ + \"\\\" alt=\\\"Pepsi\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Pepsi</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_39___ + \"\\\" alt=\\\"Pepsi Wild Cherry\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Pepsi Wild Cherry</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_40___ + \"\\\" alt=\\\"Pepsi Light\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Pepsi Light</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_41___ + \"\\\" alt=\\\"Mirinda\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Mirinda</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_37___ + \"\\\" alt=\\\"Pepsi Max\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Pepsi Max</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_38___ + \"\\\" alt=\\\"Pepsi\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Pepsi</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">99 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n              <div class=\\\"menu__item\\\" id=\\\"sauces\\\">\\r\\n                <div class=\\\"menu__item-header\\\">\\r\\n                  <p class=\\\"menu__item-title\\\">Соусы</p>\\r\\n                </div>\\r\\n                <div class=\\\"menu__item-assortment\\\">\\r\\n\\r\\n                  <div class=\\\"product new\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_42___ + \"\\\" alt=\\\"Сырный соус\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Сырный соус</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product hit\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_43___ + \"\\\" alt=\\\"Барбекю\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Барбекю</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_44___ + \"\\\" alt=\\\"Соус Тартар\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Соус Тартар</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_45___ + \"\\\" alt=\\\"Брусничный соус\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Брусничный соус</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_44___ + \"\\\" alt=\\\"Соус Тартар\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Соус Тартар</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n                                    \\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_45___ + \"\\\" alt=\\\"Брусничный соус\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Брусничный соус</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_42___ + \"\\\" alt=\\\"Сырный соус\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Сырный соус</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                  <div class=\\\"product\\\">\\r\\n                    <div class=\\\"product__photo\\\">\\r\\n                      <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_43___ + \"\\\" alt=\\\"Барбекю\\\">\\r\\n                    </div>\\r\\n                    <div class=\\\"product__description\\\">\\r\\n                      <p class=\\\"product__description-title\\\">Барбекю</p>\\r\\n                      <div class=\\\"product__description-footer\\\">\\r\\n                        <button class=\\\"product__description-button\\\">Выбрать</button>\\r\\n                        <p class=\\\"product__description-price\\\">49 ₽</p>\\r\\n                      </div>\\r\\n                    </div>\\r\\n                  </div>\\r\\n\\r\\n                </div>\\r\\n              </div>\\r\\n\\r\\n\\r\\n\\r\\n            </div>\\r\\n            <div class=\\\"delivery\\\">\\r\\n              <div class=\\\"delivery__title\\\">\\r\\n                Доставка пиццы в Москве\\r\\n              </div>\\r\\n              <p class=\\\"delivery__info\\\">\\r\\n                Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на помощь спешит супергерой – Domino's Pizza! Как у всякого супергероя, у Domino's Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.<br>\\r\\n                <br>\\r\\n                <b>Как сделать заказ</b>\\r\\n                <br>\\r\\n                Доставка пиццы от Domino's – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии Domino's. И не забудьте оплатить заказ курьеру!\\r\\n              </p>\\r\\n              <button class=\\\"delivery__button\\\">Показать полностью</button>\\r\\n            </div>\\r\\n          </div>\\r\\n      </main>\\r\\n      <footer class=\\\"footer\\\">\\r\\n        <div class=\\\"container\\\">\\r\\n          <div class=\\\"footer__wrapper\\\">\\r\\n            <div class=\\\"footer__column logo-copyright\\\">\\r\\n              <div class=\\\"column__logo\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_46___ + \"\\\" class=\\\"column__logo-img\\\" alt='Логотип' />\\r\\n                Куда пицца\\r\\n              </div>\\r\\n              <p class=\\\"column__copyright d-none-950\\\">© Copyright 2021 — <span class=\\\"nbsp\\\">Куда Пицца</span></p>  \\r\\n            </div>\\r\\n            <div class=\\\"footer__column\\\">\\r\\n              <p class=\\\"footer__column-title\\\">Куда пицца</p>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">О компании</a>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">Пользовательское соглашение</a>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">Условия гарантии</a>\\r\\n            </div>\\r\\n            <div class=\\\"footer__column\\\">\\r\\n              <p class=\\\"footer__column-title\\\">Помощь</p>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">Ресторан</a>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">Контакты</a>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">Поддержка</a>\\r\\n              <a class=\\\"footer__column-link\\\" href=\\\"#\\\">Отследить заказ</a>\\r\\n            </div>\\r\\n            <div class=\\\"footer__column\\\">\\r\\n              <p class=\\\"footer__column-title\\\">Контакты</p>\\r\\n              <div class=\\\"footer__column-link\\\">\\r\\n                <a href=\\\"#\\\" class=\\\"link-connection\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_47___ + \"\\\" alt='Телефон' />+7 (926) 223-10-11</a>\\r\\n              </div>\\r\\n              <div class=\\\"footer__column-link\\\">\\r\\n                <a href=\\\"#\\\" class=\\\"link-connection\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_48___ + \"\\\" alt='Адрес' />Москва, ул. Юных Ленинцев, д.99</a>\\r\\n              </div>\\r\\n              <div class=\\\"footer__column-link social-link\\\">\\r\\n                <a href=\\\"#\\\" class=\\\"link-connection\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_49___ + \"\\\" alt='Facebook' />Facebook</a>\\r\\n                <a href=\\\"#\\\" class=\\\"link-connection\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_50___ + \"\\\" alt='Instagram' />Instagram</a>\\r\\n              </div>\\r\\n            </div>        \\r\\n          </div>          \\r\\n          </div>\\r\\n  \\r\\n  \\r\\n      </footer>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://practmore/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://practmore/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://practmore/./src/styles/index.scss?");

/***/ }),

/***/ "./src/images/footer/facebook.svg":
/*!****************************************!*\
  !*** ./src/images/footer/facebook.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/facebook.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/footer/facebook.svg?");

/***/ }),

/***/ "./src/images/footer/instagram.svg":
/*!*****************************************!*\
  !*** ./src/images/footer/instagram.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/instagram.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/footer/instagram.svg?");

/***/ }),

/***/ "./src/images/footer/logo.svg":
/*!************************************!*\
  !*** ./src/images/footer/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/logo.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/footer/logo.svg?");

/***/ }),

/***/ "./src/images/footer/phone.svg":
/*!*************************************!*\
  !*** ./src/images/footer/phone.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/phone.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/footer/phone.svg?");

/***/ }),

/***/ "./src/images/footer/pin.svg":
/*!***********************************!*\
  !*** ./src/images/footer/pin.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pin.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/footer/pin.svg?");

/***/ }),

/***/ "./src/images/header/account.svg":
/*!***************************************!*\
  !*** ./src/images/header/account.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/account.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/header/account.svg?");

/***/ }),

/***/ "./src/images/header/cart.svg":
/*!************************************!*\
  !*** ./src/images/header/cart.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cart.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/header/cart.svg?");

/***/ }),

/***/ "./src/images/header/logo.svg":
/*!************************************!*\
  !*** ./src/images/header/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/logo.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/header/logo.svg?");

/***/ }),

/***/ "./src/images/home/combo.svg":
/*!***********************************!*\
  !*** ./src/images/home/combo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/combo.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/combo.svg?");

/***/ }),

/***/ "./src/images/home/combo/2_pizzas.png":
/*!********************************************!*\
  !*** ./src/images/home/combo/2_pizzas.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2_pizzas.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/combo/2_pizzas.png?");

/***/ }),

/***/ "./src/images/home/combo/2_pizzas_cola.png":
/*!*************************************************!*\
  !*** ./src/images/home/combo/2_pizzas_cola.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2_pizzas_cola.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/combo/2_pizzas_cola.png?");

/***/ }),

/***/ "./src/images/home/combo/3_pizzas.png":
/*!********************************************!*\
  !*** ./src/images/home/combo/3_pizzas.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3_pizzas.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/combo/3_pizzas.png?");

/***/ }),

/***/ "./src/images/home/combo/4_twisters.png":
/*!**********************************************!*\
  !*** ./src/images/home/combo/4_twisters.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/4_twisters.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/combo/4_twisters.png?");

/***/ }),

/***/ "./src/images/home/dessert.svg":
/*!*************************************!*\
  !*** ./src/images/home/dessert.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/dessert.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/dessert.svg?");

/***/ }),

/***/ "./src/images/home/desserts/bagels.png":
/*!*********************************************!*\
  !*** ./src/images/home/desserts/bagels.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bagels.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/desserts/bagels.png?");

/***/ }),

/***/ "./src/images/home/desserts/magnat_classic.png":
/*!*****************************************************!*\
  !*** ./src/images/home/desserts/magnat_classic.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/magnat_classic.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/desserts/magnat_classic.png?");

/***/ }),

/***/ "./src/images/home/desserts/magnat_mango.png":
/*!***************************************************!*\
  !*** ./src/images/home/desserts/magnat_mango.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/magnat_mango.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/desserts/magnat_mango.png?");

/***/ }),

/***/ "./src/images/home/desserts/magnat_mini.png":
/*!**************************************************!*\
  !*** ./src/images/home/desserts/magnat_mini.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/magnat_mini.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/desserts/magnat_mini.png?");

/***/ }),

/***/ "./src/images/home/desserts/nodules.png":
/*!**********************************************!*\
  !*** ./src/images/home/desserts/nodules.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/nodules.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/desserts/nodules.png?");

/***/ }),

/***/ "./src/images/home/desserts/pancackes.png":
/*!************************************************!*\
  !*** ./src/images/home/desserts/pancackes.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pancackes.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/desserts/pancackes.png?");

/***/ }),

/***/ "./src/images/home/drinks.svg":
/*!************************************!*\
  !*** ./src/images/home/drinks.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/drinks.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks.svg?");

/***/ }),

/***/ "./src/images/home/drinks/adrenaline.png":
/*!***********************************************!*\
  !*** ./src/images/home/drinks/adrenaline.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/adrenaline.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks/adrenaline.png?");

/***/ }),

/***/ "./src/images/home/drinks/mirinda.png":
/*!********************************************!*\
  !*** ./src/images/home/drinks/mirinda.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/mirinda.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks/mirinda.png?");

/***/ }),

/***/ "./src/images/home/drinks/pepsi_cherry.png":
/*!*************************************************!*\
  !*** ./src/images/home/drinks/pepsi_cherry.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pepsi_cherry.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks/pepsi_cherry.png?");

/***/ }),

/***/ "./src/images/home/drinks/pepsi_classic.png":
/*!**************************************************!*\
  !*** ./src/images/home/drinks/pepsi_classic.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pepsi_classic.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks/pepsi_classic.png?");

/***/ }),

/***/ "./src/images/home/drinks/pepsi_max.png":
/*!**********************************************!*\
  !*** ./src/images/home/drinks/pepsi_max.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pepsi_max.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks/pepsi_max.png?");

/***/ }),

/***/ "./src/images/home/drinks/pepsi_zero.png":
/*!***********************************************!*\
  !*** ./src/images/home/drinks/pepsi_zero.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pepsi_zero.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/drinks/pepsi_zero.png?");

/***/ }),

/***/ "./src/images/home/filter.svg":
/*!************************************!*\
  !*** ./src/images/home/filter.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/filter.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/filter.svg?");

/***/ }),

/***/ "./src/images/home/pizza.svg":
/*!***********************************!*\
  !*** ./src/images/home/pizza.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/pizza.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/pizza.svg?");

/***/ }),

/***/ "./src/images/home/pizzas/4_season.png":
/*!*********************************************!*\
  !*** ./src/images/home/pizzas/4_season.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/4_season.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/pizzas/4_season.png?");

/***/ }),

/***/ "./src/images/home/pizzas/chicken_shugar_chili.png":
/*!*********************************************************!*\
  !*** ./src/images/home/pizzas/chicken_shugar_chili.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/chicken_shugar_chili.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/pizzas/chicken_shugar_chili.png?");

/***/ }),

/***/ "./src/images/home/pizzas/easy_peasy_cucumber.png":
/*!********************************************************!*\
  !*** ./src/images/home/pizzas/easy_peasy_cucumber.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/easy_peasy_cucumber.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/pizzas/easy_peasy_cucumber.png?");

/***/ }),

/***/ "./src/images/home/pizzas/easy_peasy_khren.png":
/*!*****************************************************!*\
  !*** ./src/images/home/pizzas/easy_peasy_khren.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/easy_peasy_khren.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/pizzas/easy_peasy_khren.png?");

/***/ }),

/***/ "./src/images/home/promo.svg":
/*!***********************************!*\
  !*** ./src/images/home/promo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/promo.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/promo.svg?");

/***/ }),

/***/ "./src/images/home/promo1.png":
/*!************************************!*\
  !*** ./src/images/home/promo1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/promo1.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/promo1.png?");

/***/ }),

/***/ "./src/images/home/promo2.png":
/*!************************************!*\
  !*** ./src/images/home/promo2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/promo2.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/promo2.png?");

/***/ }),

/***/ "./src/images/home/sauces.svg":
/*!************************************!*\
  !*** ./src/images/home/sauces.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/sauces.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sauces.svg?");

/***/ }),

/***/ "./src/images/home/sauces/bbq.png":
/*!****************************************!*\
  !*** ./src/images/home/sauces/bbq.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/bbq.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sauces/bbq.png?");

/***/ }),

/***/ "./src/images/home/sauces/cheese.png":
/*!*******************************************!*\
  !*** ./src/images/home/sauces/cheese.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cheese.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sauces/cheese.png?");

/***/ }),

/***/ "./src/images/home/sauces/currant.png":
/*!********************************************!*\
  !*** ./src/images/home/sauces/currant.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/currant.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sauces/currant.png?");

/***/ }),

/***/ "./src/images/home/sauces/tartar.png":
/*!*******************************************!*\
  !*** ./src/images/home/sauces/tartar.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/tartar.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sauces/tartar.png?");

/***/ }),

/***/ "./src/images/home/snacks.svg":
/*!************************************!*\
  !*** ./src/images/home/snacks.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/snacks.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/snacks.svg?");

/***/ }),

/***/ "./src/images/home/snacks/baits.png":
/*!******************************************!*\
  !*** ./src/images/home/snacks/baits.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/baits.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/snacks/baits.png?");

/***/ }),

/***/ "./src/images/home/snacks/potato.png":
/*!*******************************************!*\
  !*** ./src/images/home/snacks/potato.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/potato.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/snacks/potato.png?");

/***/ }),

/***/ "./src/images/home/snacks/twister.png":
/*!********************************************!*\
  !*** ./src/images/home/snacks/twister.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/twister.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/snacks/twister.png?");

/***/ }),

/***/ "./src/images/home/snacks/wings.png":
/*!******************************************!*\
  !*** ./src/images/home/snacks/wings.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/wings.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/snacks/wings.png?");

/***/ }),

/***/ "./src/images/home/sushi.svg":
/*!***********************************!*\
  !*** ./src/images/home/sushi.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/sushi.svg\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sushi.svg?");

/***/ }),

/***/ "./src/images/home/sushi/phil_crem.png":
/*!*********************************************!*\
  !*** ./src/images/home/sushi/phil_crem.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/phil_crem.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sushi/phil_crem.png?");

/***/ }),

/***/ "./src/images/home/sushi/phil_crunch.png":
/*!***********************************************!*\
  !*** ./src/images/home/sushi/phil_crunch.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/phil_crunch.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sushi/phil_crunch.png?");

/***/ }),

/***/ "./src/images/home/sushi/phil_super.png":
/*!**********************************************!*\
  !*** ./src/images/home/sushi/phil_super.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/phil_super.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sushi/phil_super.png?");

/***/ }),

/***/ "./src/images/home/sushi/tiger_mama.png":
/*!**********************************************!*\
  !*** ./src/images/home/sushi/tiger_mama.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/tiger_mama.png\";\n\n//# sourceURL=webpack://practmore/./src/images/home/sushi/tiger_mama.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;