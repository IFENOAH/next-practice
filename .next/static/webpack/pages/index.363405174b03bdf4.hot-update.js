"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\nfunction HomePage() {\n    var DUMMY_MEETUPS = [\n        {\n            id: \"m1\",\n            title: \"First meetup\",\n            image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n            address: \"this place 51, 345 this city\",\n            description: \"This is a frist meetup\"\n        },\n        {\n            id: \"m2\",\n            title: \"Second meetup\",\n            image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n            address: \"this place 51, 345 this city\",\n            description: \"This is a frist meetup\"\n        },\n        {\n            id: \"m3\",\n            title: \"Third meetup\",\n            image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n            address: \"this place 51, 345 this city\",\n            description: \"This is a frist meetup\"\n        },\n        {\n            id: \"m4\",\n            title: \"Fourth meetup\",\n            image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n            address: \"this place 51, 345 this city\",\n            description: \"This is a frist meetup\"\n        },\n        {\n            id: \"m5\",\n            title: \"Fifth meetup\",\n            image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n            address: \"this place 51, 345 this city\",\n            description: \"This is a frist meetup\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: DUMMY_MEETUPS\n    }, void 0, false, {\n        fileName: \"/Users/Noahife/Documents/Code/next-practice/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBMEQ7QUFFMUQsU0FBU0MsUUFBUSxHQUFHO0lBQ2xCLElBQU1DLGFBQWEsR0FBRztRQUNwQjtZQUNFQyxFQUFFLEVBQUUsSUFBSTtZQUNSQyxLQUFLLEVBQUUsY0FBYztZQUNyQkMsS0FBSyxFQUNILHdIQUF3SDtZQUMxSEMsT0FBTyxFQUFFLDhCQUE4QjtZQUN2Q0MsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QztRQUNEO1lBQ0VKLEVBQUUsRUFBRSxJQUFJO1lBQ1JDLEtBQUssRUFBRSxlQUFlO1lBQ3RCQyxLQUFLLEVBQ0gsd0hBQXdIO1lBQzFIQyxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDO1FBQ0Q7WUFDRUosRUFBRSxFQUFFLElBQUk7WUFDUkMsS0FBSyxFQUFFLGNBQWM7WUFDckJDLEtBQUssRUFDSCx3SEFBd0g7WUFDMUhDLE9BQU8sRUFBRSw4QkFBOEI7WUFDdkNDLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEM7UUFDRDtZQUNFSixFQUFFLEVBQUUsSUFBSTtZQUNSQyxLQUFLLEVBQUUsZUFBZTtZQUN0QkMsS0FBSyxFQUNILHdIQUF3SDtZQUMxSEMsT0FBTyxFQUFFLDhCQUE4QjtZQUN2Q0MsV0FBVyxFQUFFLHdCQUF3QjtTQUN0QztRQUNEO1lBQ0VKLEVBQUUsRUFBRSxJQUFJO1lBQ1JDLEtBQUssRUFBRSxjQUFjO1lBQ3JCQyxLQUFLLEVBQ0gsd0hBQXdIO1lBQzFIQyxPQUFPLEVBQUUsOEJBQThCO1lBQ3ZDQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDO0tBQ0Y7SUFDRCxxQkFBTyw4REFBQ1Asc0VBQVU7UUFBQ1EsT0FBTyxFQUFFTixhQUFhOzs7OztZQUFJLENBQUM7Q0FDL0M7QUE1Q1FELEtBQUFBLFFBQVE7QUE4Q2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gICAge1xuICAgICAgaWQ6IFwibTFcIixcbiAgICAgIHRpdGxlOiBcIkZpcnN0IG1lZXR1cFwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxuICAgICAgYWRkcmVzczogXCJ0aGlzIHBsYWNlIDUxLCAzNDUgdGhpcyBjaXR5XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZnJpc3QgbWVldHVwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJtMlwiLFxuICAgICAgdGl0bGU6IFwiU2Vjb25kIG1lZXR1cFwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxuICAgICAgYWRkcmVzczogXCJ0aGlzIHBsYWNlIDUxLCAzNDUgdGhpcyBjaXR5XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZnJpc3QgbWVldHVwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJtM1wiLFxuICAgICAgdGl0bGU6IFwiVGhpcmQgbWVldHVwXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4gICAgICBhZGRyZXNzOiBcInRoaXMgcGxhY2UgNTEsIDM0NSB0aGlzIGNpdHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmcmlzdCBtZWV0dXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIm00XCIsXG4gICAgICB0aXRsZTogXCJGb3VydGggbWVldHVwXCIsXG4gICAgICBpbWFnZTpcbiAgICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnXCIsXG4gICAgICBhZGRyZXNzOiBcInRoaXMgcGxhY2UgNTEsIDM0NSB0aGlzIGNpdHlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmcmlzdCBtZWV0dXBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIm01XCIsXG4gICAgICB0aXRsZTogXCJGaWZ0aCBtZWV0dXBcIixcbiAgICAgIGltYWdlOlxuICAgICAgICBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGdcIixcbiAgICAgIGFkZHJlc3M6IFwidGhpcyBwbGFjZSA1MSwgMzQ1IHRoaXMgY2l0eVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZyaXN0IG1lZXR1cFwiLFxuICAgIH0sXG4gIF07XG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtEVU1NWV9NRUVUVVBTfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiTWVldHVwTGlzdCIsIkhvbWVQYWdlIiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});