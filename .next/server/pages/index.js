"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaginaInicial)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\n\n\nfunction Title(props) {\n    console.log(props);\n    const Tag = props.Tag || 'h2';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"4ec05a8fa202cab2\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[500]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4ec05a8fa202cab2\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[500]\n                ],\n                children: `${Tag}.__jsx-style-dynamic-selector{color:${_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[500]}}`\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\nfunction PaginaInicial() {\n    const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');\n    const roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n                backgroundRepeat: 'no-repeat',\n                backgroundSize: 'cover',\n                backgroundBlendMode: 'multiply'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'space-between',\n                    flexDirection: {\n                        xs: 'column',\n                        sm: 'row'\n                    },\n                    width: '100%',\n                    maxWidth: '700px',\n                    borderRadius: '5px',\n                    padding: '32px',\n                    margin: '16px',\n                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        as: \"form\",\n                        //setando a function anonima do evento onsubmit\n                        //e passando o evento como parametro\n                        onSubmit: function(eventSubmit) {\n                            //Edefinindo que o comportamento do submit nao recarregara a página\n                            eventSubmit.preventDefault();\n                            console.log(\"Formul\\xe1rio submetido\");\n                            roteamento.push('/chat');\n                        },\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            justifyContent: 'center',\n                            width: {\n                                xs: '100%',\n                                sm: '50%'\n                            },\n                            textAlign: 'center',\n                            marginBottom: '32px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                                tag: \"h2\",\n                                children: \"Boas vindas de volta!\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body3\",\n                                styleSheet: {\n                                    marginBottom: '32px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                                },\n                                children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                value: username,\n                                onChange: function(event) {\n                                    console.log(\"usuario digitou: \", event.target.value);\n                                    //Recebe valor adicionado\n                                    const valor = event.target.value;\n                                    //seta valor na variavel username\n                                    setUsername(valor);\n                                },\n                                fullWidth: true,\n                                textFieldColors: {\n                                    neutral: {\n                                        textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                        mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                    }\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                type: \"submit\",\n                                label: \"Entrar\",\n                                fullWidth: true,\n                                buttonColors: {\n                                    contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                    mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        styleSheet: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            alignItems: 'center',\n                            maxWidth: '200px',\n                            padding: '16px',\n                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                            border: '1px solid',\n                            borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                            borderRadius: '10px',\n                            flex: 1,\n                            minHeight: '240px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                styleSheet: {\n                                    borderRadius: '50%',\n                                    marginBottom: '16px'\n                                },\n                                src: `https://github.com/${username}.png`\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 137,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                variant: \"body4\",\n                                styleSheet: {\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    padding: '3px 10px',\n                                    borderRadius: '1000px'\n                                },\n                                children: username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                        lineNumber: 122,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\my projects\\\\Aluracord\\\\pages\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFNOzRCQUNwQmtDLElBQUksRUFBRSxDQUFDOzRCQUNQQyxTQUFTLEVBQUUsQ0FBTzt3QkFDcEIsQ0FBQzs7d0dBRUFwRSx1REFBSztnQ0FDSmtCLFVBQVUsRUFBRSxDQUFDO29DQUNYZSxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJVLFlBQVksRUFBRSxDQUFNO2dDQUN0QixDQUFDO2dDQUNEMEIsR0FBRyxHQUFHLG1CQUFtQixFQUFFdkQsUUFBUSxDQUFDLElBQUk7Ozs7Ozt3R0FFekNoQixzREFBSTtnQ0FDSCtDLE9BQU8sRUFBQyxDQUFPO2dDQUNmM0IsVUFBVSxFQUFFLENBQUM7b0NBQ1g0QixLQUFLLEVBQUUzQyxvRUFBb0M7b0NBQzNDbUIsZUFBZSxFQUFFbkIsb0VBQW9DO29DQUNyRCtCLE9BQU8sRUFBRSxDQUFVO29DQUNuQkQsWUFBWSxFQUFFLENBQVE7Z0NBQ3hCLENBQUM7MENBRUFuQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuXHJcbmZ1bmN0aW9uIFRpdGxlKHByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIGNvbnN0IFRhZyA9IHByb3BzLlRhZyB8fCAnaDInXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICR7VGFnfSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzUwMCddfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICBcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKClcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgIHNtOiAncm93JyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1heFdpZHRoOiAnNzAwcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICAgIC8vc2V0YW5kbyBhIGZ1bmN0aW9uIGFub25pbWEgZG8gZXZlbnRvIG9uc3VibWl0XHJcbiAgICAgICAgICAgICAgLy9lIHBhc3NhbmRvIG8gZXZlbnRvIGNvbW8gcGFyYW1ldHJvXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2Z1bmN0aW9uIChldmVudFN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAvL0VkZWZpbmluZG8gcXVlIG8gY29tcG9ydGFtZW50byBkbyBzdWJtaXQgbmFvIHJlY2FycmVnYXJhIGEgcMOhZ2luYVxyXG4gICAgICAgICAgICAgICAgICBldmVudFN1Ym1pdC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybXVsw6FyaW8gc3VibWV0aWRvXCIpXHJcbiAgICAgICAgICAgICAgICAgIHJvdGVhbWVudG8ucHVzaCgnL2NoYXQnKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdGxlIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXRsZT5cclxuICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxyXG4gICAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgLy9Nb25pdG9yYXIgbXVkYW5jYSBubyBpbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXN1YXJpbyBkaWdpdG91OiBcIiwgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVjZWJlIHZhbG9yIGFkaWNpb25hZG9cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0YSB2YWxvciBuYSB2YXJpYXZlbCB1c2VybmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9pbnB1dD4gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzdWFyaW8gZGlnaXRvdTogXCIsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL1JlY2ViZSB2YWxvciBhZGljaW9uYWRvXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAvL3NldGEgdmFsb3IgbmEgdmFyaWF2ZWwgdXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcilcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzIwMHB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6ICcyNDBweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTAwMHB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJhcHBDb25maWciLCJUaXRsZSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIlRhZyIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJyb3RlYW1lbnRvIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJhcyIsIm9uU3VibWl0IiwiZXZlbnRTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ0YWciLCJ2YXJpYW50IiwiY29sb3IiLCJuYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsb3IiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Matrix","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();