function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark navbar-expand-md bg-purple justify-content-between\">\n    <div class=\"container-fluid\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".dual-nav\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"navbar-collapse collapse dual-nav w-50 order-1 order-md-0\"></div>\n        <a class=\"navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25\">TOdOl</a>\n        <div class=\"navbar-collapse collapse dual-nav w-50 order-2\">\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item\"><a class=\"nav-link\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>not-found works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside>\n    <div class=\"sidebar left \">\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"http://via.placeholder.com/160x160\" class=\"rounded-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>{{userInfo.firstName}} {{userInfo.lastName}}</p>\n          <span><i class=\"fa fa-circle text-success\"></i> Online</span>\n        </div>\n      </div>\n      <ul class=\"list-sidebar bg-sidebar\">\n        <li> <a href=\"#\" data-toggle=\"collapse\" data-target=\"#active-friends\" class=\"active\" > <i class=\"fa fa-users\"></i> <span class=\"nav-label\">Friends </span> <span><i class=\"fa fa-circle text-success\"></i></span> <span class=\"fa fa-chevron-left pull-right\"></span> </a>\n            <ul class=\"sub-menu collapse show\" id=\"active-friends\" *ngFor=\"let friend of friendList\">\n              <li><a>{{friend.username}}</a></li>\n            </ul>\n        </li>\n        <li> <a href=\"#\" data-toggle=\"collapse\" data-target=\"#friends\" class=\"collapsed active\" > <i class=\"fa fa-users\"></i> <span class=\"nav-label\">Pending Friends</span> <span class=\"fa fa-chevron-left pull-right\"></span> </a>\n            <ul class=\"sub-menu collapse\" id=\"friends\" *ngFor=\"let friend of pendingFriendList\">\n                <li (click)=handleAcceptRequest(friend)><a>{{friend.username}}</a></li>\n            </ul>\n        </li>\n        \n        <li> <a href=\"#\" data-toggle=\"collapse\" data-target=\"#other-users\" class=\"collapsed active\" ><i class=\"fa fa-users\"></i> <span class=\"nav-label\">Other Users</span><span class=\"fa fa-chevron-left pull-right\"></span></a>\n            <ul  class=\"sub-menu collapse\" id=\"other-users\" *ngFor=\"let friend of userList\">\n              <li (click)=handleSendRequest(friend)><a>{{friend.username}}</a></li>\n            </ul>\n        </li>\n    </ul>\n</div>\n</aside>\n\n<ng-template #modalSendFriendReq let-close=\"close\">\n  <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Friend Request</h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"view-modal\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n            <p>By Clicking Yes, you will send te request to {{friend.username}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\n      No\n    </button>\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"sendFriendRequest(userInfo.userId, friend)\">\n      Yes\n    </button>\n  </div>\n</ng-template>\n\n<ng-template #modalAcceptFriendReq let-close=\"close\">\n  <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Friend Request</h5>\n      <button type=\"button\" class=\"close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"view-modal\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n            <p>Hey! {{friend.username}} has sent you a friend request. Please accept!</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"rejectFriendRequest(userInfo.userId, friend)\">\n      Reject\n    </button>\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"acceptFriendRequest(userInfo.userId, friend)\">\n      Accept\n    </button>\n  </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/dashboard/dashboard.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todo/dashboard/dashboard.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodoDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 col-sm-3 sidebar-side\">\r\n            <app-sidebar [userInfo]=\"user\" [userList]=\"userList\" [friendList]=\"friendList\" [pendingFriendList]=\"pendingFriendList\"></app-sidebar>\r\n        </div>\r\n        <div class=\"col-md-10 col-sm-9\">\r\n            <div class=\"container todos\">\r\n                <div class=\"page-header\">\r\n                    <h2>TO DOs</h2>\r\n                </div>\r\n                <div class=\"page-content\">\r\n                  <div *ngIf=\"todoList.length == 0\" class=\"top-decorum\"><h5>Oops! It seems you have no ToDo list. Please start your ToDo list now.</h5> <button class=\"btn btn-purple\" (click)=\"handleTodoEvent()\">Add New Todo</button></div>\r\n                  <div *ngIf=\"todoList.length != 0\" class=\"text-right top-decorum\"><button class=\"btn btn-purple\" (click)=\"handleTodoEvent()\">Add New Todo</button></div>\r\n                  <div class=\"row\">\r\n                  <div class=\"col-md-3 col-sm-6\" *ngFor=\"let todo of todoList\">\r\n                    <div class=\"card todo-box\">\r\n                      <div class=\"card-header\">\r\n                        {{todo.title}}\r\n                      </div>\r\n                      <ul class=\"list-group list-group-flush\" *ngFor=\"let t of todo.list\">\r\n                        <li class=\"list-group-item\">\r\n                          <input type=\"checkbox\" ng-checked=\"t.isSelected == true\" disabled/>\r\n                          <span>{{t.description}}</span>\r\n                        </li>\r\n                        <li class=\"list-group-item\" *ngFor=\"let c of t.children\">\r\n                          <ul class=\"list-group list-group-flush\">\r\n                            <li class=\"list-group-item\">\r\n                              <input type=\"checkbox\" ng-checked=\"c.isSelected == true\" disabled/>\r\n                              <span>{{c.description}}</span>\r\n                            </li>\r\n                          </ul>\r\n                        </li>\r\n                      </ul>\r\n                      <div class=\"card-footer text-right\">\r\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit Todo\" (click)=\"handleTodoEvent(todo)\"></i>\r\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Todo\" (click)=removeTodo(todo)></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #modalCreate let-close=\"close\">\r\n      <div class=\"container-box\" tabindex=\"0\" (keydown)= onKeyPress($event)>\r\n        <div class=\"modal-header\" (keydown)= onKeyPress($event)>\r\n            <h5 class=\"modal-title\"><input type=\"text\" [(ngModel)]=\"todo.title\" (blur)=\"updateItem(todo)\" placeholder=\"New Title\" /></h5>\r\n            <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"view-modal\">\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <!-- <form #listForm=\"ngForm\"> -->\r\n                  <table class=\"table table-sm table-borderless\" (keydown)= onKeyPress($event)>\r\n                    <tbody *ngFor=\"let t of todo.list\">\r\n                      <tr>\r\n                        <td><input type=\"checkbox\" ng-checked=\"t.isSelected == true\" [(ngModel)]=\"t.isSelected\" (ngModelChange)=\"updateItem(todo)\"/></td>\r\n                        <td colspan=\"2\"><input type=\"text\" [(ngModel)]=\"t.description\" (blur)=\"updateItem(todo)\" /> </td>\r\n                        <td><i class=\"fa fa-close\" aria-hidden=\"true\" (click)=\"deleteItem(t)\"></i></td>\r\n                      </tr>\r\n                      <tr class=\"child\" *ngFor=\"let c of t.children\">\r\n                        <td></td>\r\n                        <td><input type=\"checkbox\" ng-checked=\"c.isSelected == true\" [(ngModel)]=\"c.isSelected\" (ngModelChange)=\"updateItem(todo)\"/></td>\r\n                        <td><input type=\"text\" [(ngModel)]=\"c.description\" (blur)=\"updateItem(todo)\"/> </td> \r\n                        <td><i class=\"fa fa-close\" aria-hidden=\"true\" (click)=\"deleteItem(t,c)\"></i></td>     \r\n                      </tr>\r\n                      <tr class=\"child\" [hidden]=\"isChildShow\" (click)=\"showChildAddedList()\">\r\n                        <td></td>\r\n                        <td><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></td>\r\n                        <td colspan=\"2\">Add New</td>\r\n                      </tr>\r\n                      <tr class=\"child\" [hidden]=\"!isChildShow\">\r\n                        <td></td>\r\n                        <td><input type=\"checkbox\" [(ngModel)]=\"childItem.isSelected\" name=\"isSelected\"/></td>\r\n                        <td colspan=\"2\"><input type=\"text\" [(ngModel)]=\"childItem.description\" name=\"description\" (blur)=\"addItem(t)\" (keyup.enter)=\"addItem(t)\"/> </td>\r\n                      </tr>\r\n                    </tbody>\r\n                    <tbody>\r\n                      <tr [hidden]=\"isShow\" (click)=\"showAddedList()\">\r\n                        <td><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></td>\r\n                        <td colspan=\"3\">Add New</td>\r\n                      </tr>\r\n                      <tr [hidden]=\"!isShow\">\r\n                        <td><input type=\"checkbox\" [(ngModel)]=\"item.isSelected\" name=\"item.isSelected\"/></td>\r\n                        <td colspan=\"3\"><input type=\"text\" [(ngModel)]=\"item.description\" name=\"item.description\" (blur)=\"addItem()\" (keyup.enter)=\"addItem(t)\"/> </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                <!-- </form> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </ng-template>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"forgot-password-page\">\n    <div class=\"form\">\n        <p class=\"message\">Please provide your registered email address for password reset. We will share the reset link on the same email.</p>\n        <input type=\"text\" placeholder=\"Email Address\" [(ngModel)]= \"email\" name=\"email\" required/>\n        <button (click)=\"resetPasswordLink()\">Send Reset Link</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-page\">\n    <form class=\"form\" #loginForm=\"ngForm\" (ngSubmit)= signInConfirmation(loginForm.value)>\n        <h3>Login</h3>\n        <input type=\"email\" placeholder=\"email\" [(ngModel)]= \"user.email\" name=\"email\" required/>\n        <input type=\"password\" placeholder=\"password\" [(ngModel)]= \"user.password\" name=\"password\" required/>\n        <button type=\"submit\">login</button>\n        <p class=\"message\"><a class=\"link\" (click)= \"forgotPassword()\">Forgot Password?</a></p>\n        <p class=\"message\">Not registered yet? <a class=\"link\" (click)= \"goToSignUp()\">Create an account</a></p>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reset-password-page\">\n    <div class=\"form\">\n        <h4>Reset your Password</h4>\n        <input type=\"password\" placeholder=\"password\" [(ngModel)]= \"password\" name=\"password\" required/>\n        <input type=\"password\" placeholder=\"confirm password\" [(ngModel)]= \"confirmPassword\" name=\"confirmPassword\" required/>\n        <button (click)=\"resetPassword()\">Reset Password</button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signup-page\">\n    <div class=\"form\">\n      <h3>Sign Up</h3>\n      <form class=\"register-form\" #signupForm=\"ngForm\" (ngSubmit)= signUpConfirmation(signupForm.value)>\n        <input type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstName\" name=\"firstName\" required autofocus/>\n        <input type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" name=\"lastName\" required/>\n        <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required/>\n        <input type=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required/>\n        <div class=\"col-3 inputDiv\">\n          <select class=\"custom-select\" [(ngModel)]=\"countryCode\" name=\"countryCode\" (change) = onChange($event)>\n            <option *ngFor=\"let countryCodes of countryCodeList | keyvalue\" [ngValue]=\"countryCodes.value\">{{countryCodes.key}}</option>\n          </select>\n        </div>\n        <div class=\"col-9 inputDiv\">\n          <input type=\"text\" placeholder=\"Mobile No\" [(ngModel)]=\"mobile\" name=\"mobile\" required/>\n        </div>\n        <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" required/>\n        \n        <button type=\"submit\" >create</button>\n        <p class=\"message\">Already registered? <a (click)=\"goToSignIn()\" >Sign In</a></p>\n      </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: 'login',
      component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'todol-angular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _todo_todo_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./todo/todo.module */
    "./src/app/todo/todo.module.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/auth-interceptor */
    "./src/app/auth/auth-interceptor.ts");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/socket.service */
    "./src/app/services/socket.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"], _todo_todo_module__WEBPACK_IMPORTED_MODULE_9__["TodoModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
      providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-filter.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-filter.service.ts ***!
    \*********************************************/

  /*! exports provided: AuthFilter */

  /***/
  function srcAppAuthAuthFilterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthFilter", function () {
      return AuthFilter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthFilter =
    /*#__PURE__*/
    function () {
      function AuthFilter(router) {
        _classCallCheck(this, AuthFilter);

        this.router = router;
      }

      _createClass(AuthFilter, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          console.log(state);

          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') == null) {
            console.log(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken'));
            return true;
          } else {
            console.log(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken'));
            this.router.navigate(["/dashboard/".concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('receiverId'))]);
            return true;
          }
        }
      }]);

      return AuthFilter;
    }();

    AuthFilter.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthFilter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthFilter);
    /***/
  },

  /***/
  "./src/app/auth/auth-guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth-guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          // console.log(state);
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken') === null) {
            this.router.navigate(['/']);
            return false;
          } else {
            // this.router.navigate(['/dashboard']);
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth-interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor() {
        _classCallCheck(this, AuthInterceptor);
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          req = req.clone({
            setHeaders: {
              // tslint:disable-next-line: object-literal-key-quotes
              'Authorization': "".concat(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken'))
            }
          });
          return next.handle(req);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/services/app.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/app.service.ts ***!
    \*****************************************/

  /*! exports provided: AppService */

  /***/
  function srcAppServicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppService = function AppService(http) {
      var _this = this;

      _classCallCheck(this, AppService);

      this.http = http;
      this.url = 'http://localhost:3002';

      this.getUserInfoFromLocalStorage = function () {
        return JSON.parse(localStorage.getItem('userInfo'));
      };

      this.setUserInfoFromLocalStorage = function (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
      };

      this.signup = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('username', data.username).set('email', data.email).set('password', data.password).set('mobile', data.mobile);
        return _this.http.post("".concat(_this.url, "/api/v1/users/signup"), params);
      };

      this.login = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email).set('password', data.password);
        return _this.http.post("".concat(_this.url, "/api/v1/users/login"), params);
      };

      this.logout = function () {
        return _this.http.get("".concat(_this.url, "/api/v1/users/logout"));
      };

      this.forgotPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email);
        return _this.http.post("".concat(_this.url, "/api/v1/users/forgotPassword"), params);
      };

      this.resetPassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('email', data.email).set('newPassword', data.password);
        return _this.http.post("".concat(_this.url, "/api/v1/users/logout"), params);
      };

      this.getCountryCode = function () {
        return _this.http.get('./../../assets/data/countrycodelist.json');
      };

      this.getAllNormalUsers = function () {
        return _this.http.get("".concat(_this.url, "/api/v1/users/getAllNormalUsers"));
      };

      this.getUserTodoList = function (createdBy) {
        return _this.http.get("".concat(_this.url, "/api/v1/todos/").concat(createdBy, "/getAll"));
      };

      this.getUserTodoDetail = function (createdBy, todoId) {
        return _this.http.get("".concat(_this.url, "/api/v1/todos/").concat(createdBy, "/getById/").concat(todoId));
      };

      this.createNewTodo = function (todo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('title', todo.title).set('list', JSON.stringify(todo.list)).set('createdBy', todo.createdBy).set('modifiedBy', todo.modifiedBy).set('sharedWith', todo.sharedWith);
        return _this.http.post("".concat(_this.url, "/api/v1/todos/create"), params);
      };

      this.createNewVersionTodo = function (todo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('todoId', todo.todoId).set('title', todo.title).set('version', todo.version).set('status', todo.status).set('parentId', todo.parentId).set('list', JSON.stringify(todo.list)).set('createdBy', todo.createdBy).set('modifiedBy', todo.modifiedBy).set('sharedWith', todo.sharedWith);
        return _this.http.post("".concat(_this.url, "/api/v1/todos/update"), params);
      };

      this.getUserTodoLastVersion = function (userId, parentId, version) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('version', version).set('parentId', parentId);
        return _this.http.post("".concat(_this.url, "/api/v1/todos/").concat(userId, "/getByParentId"), params);
      };

      this.removeTodo = function (todo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('todoId', todo.todoId).set('parentId', todo.parentId);
        return _this.http.post("".concat(_this.url, "/api/v1/todos/").concat(todo.createdBy, "/remove"), params);
      }; // Friend Request Relations


      this.sendFriendRequest = function (senderId, receiverId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('senderId', senderId).set('receiverId', receiverId);
        return _this.http.post("".concat(_this.url, "/api/v1/relations/create"), params);
      };

      this.acceptFriendRequest = function (senderId, receiverId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('senderId', senderId).set('receiverId', receiverId);
        return _this.http.post("".concat(_this.url, "/api/v1/relations/accept"), params);
      };

      this.rejectFriendRequest = function (senderId, receiverId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('senderId', senderId).set('receiverId', receiverId);
        return _this.http.post("".concat(_this.url, "/api/v1/relations/reject"), params);
      };

      this.getFriendList = function (requestUserId) {
        console.log('From App Service : ' + requestUserId);
        return _this.http.get("".concat(_this.url, "/api/v1/relations/").concat(requestUserId, "/getAll"));
      };

      this.getPendingFriendList = function (requestUserId) {
        return _this.http.get("".concat(_this.url, "/api/v1/relations/").concat(requestUserId, "/getPending"));
      };
    };

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AppService);
    /***/
  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SocketService = function SocketService() {
      var _this2 = this;

      _classCallCheck(this, SocketService);

      this.url = 'localhost:3002/'; // verify the user

      this.verifyUser = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          _this2.socket.on('verifyUser', function (data) {
            observer.next(data);
          });
        });
      }; // check the disconnection of socket


      this.disconnectedSocket = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          _this2.socket.on('disconnect', function () {
            observer.next();
          });
        });
      }; // Set-user to verify auth


      this.setUser = function (authToken) {
        _this2.socket.emit('set-user', authToken);
      }; // Normal users receive the notification when online


      this.onReceivingNotification = function (userId) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
          _this2.socket.on(userId, function (data) {
            observer.next(data);
          });
        });
      }; // User send the notification on friend request or new Todo List created by fellow users


      this.sendNotification = function (message) {
        _this2.socket.emit('notify', message);
      };

      this.exitSocket = function () {
        _this2.socket.disconnect();
      }; // connection is being created
      // handshake


      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    };

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SocketService);
    /***/
  },

  /***/
  "./src/app/shared/components/navbar/navbar.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/shared/components/navbar/navbar.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav .nav-item .nav-link {\r\n    cursor: pointer;\r\n}\r\n\r\n.bg-purple {\r\n    background-color: #7C1A79 !important;\r\n}\r\n\r\n.bg-sidebar {\r\n    background-color: #8e2a8b !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iZy1wdXJwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdDMUE3OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGUyYThiICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(appService, toastr, router) {
        _classCallCheck(this, NavbarComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "goToHome",
        value: function goToHome() {
          ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].deleteAll('/');
          this.router.navigate(['/']);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          this.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].deleteAll(_this3.router.url);
              localStorage.clear();

              _this3.toastr.success('You have successfullly Signed Out');

              setTimeout(function () {
                return _this3.goToHome();
              }, 1000);
            } else {
              _this3.toastr.error(apiResponse.message);
            }
          }, function (err) {
            _this3.toastr.error(err.error.message);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/shared/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/not-found/not-found.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/components/not-found/not-found.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/not-found/not-found.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
    \********************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppSharedComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/shared/components/not-found/not-found.component.css")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidebar{ \r\n    background-color:#000;\r\n    -webkit-transition: all 0.5s  ease-in-out;\r\n    transition: all 0.5s  ease-in-out;\r\n    min-height: 580px !important; \r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .sidebar {\r\n        min-height: 580px !important;\r\n    }\r\n}\r\n\r\n@media (max-width: 586) {\r\n    .sidebar {\r\n        min-height: 300px !important;\r\n    }\r\n}\r\n\r\n.bg-sidebar{\r\n    background-color:#222;\r\n}\r\n\r\n.sidebar ul{ \r\n    list-style:none; margin:0px; padding:0px; \r\n}\r\n\r\n.sidebar li a,.sidebar li a.collapsed.active{ \r\n    display:block; padding:8px 12px; \r\n    color:#fff;border-left:0px solid #dedede;  \r\n    text-decoration:none\r\n}\r\n\r\n.sidebar li a.active{\r\n    background-color:#000;\r\n    border-left:5px solid #dedede; \r\n    -webkit-transition: all 0.5s  ease-in-out; \r\n    transition: all 0.5s  ease-in-out\r\n}\r\n\r\n.sidebar li a:hover{\r\n    background-color:#000 !important;\r\n}\r\n\r\n.sidebar li a i{ \r\n    padding-right:5px;\r\n}\r\n\r\n.sidebar ul li .sub-menu li a{ \r\n    position:relative\r\n}\r\n\r\n.sidebar ul li .sub-menu li a:hover:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: -5px;\r\n    top: 0;\r\n    width: 5px;\r\n    background-color: #111;\r\n    height: 100%;\r\n}\r\n\r\n.sidebar ul li .sub-menu li a:hover{ \r\n    background-color:#222; \r\n    padding-left:20px; \r\n    -webkit-transition: all 0.5s  ease-in-out; \r\n    transition: all 0.5s  ease-in-out\r\n}\r\n\r\n.sub-menu{ \r\n    border-left:5px solid #dedede;\r\n}\r\n\r\n.sidebar li a .nav-label,.sidebar li a .nav-label+span{ \r\n    -webkit-transition: all 0.5s  ease-in-out; \r\n    transition: all 0.5s  ease-in-out\r\n}\r\n\r\n.sidebar.fliph li a .nav-label,.sidebar.fliph li a .nav-label+span{ \r\n    display:none;-webkit-transition: all 0.5s  ease-in-out;transition: all 0.5s  ease-in-out\r\n}\r\n\r\n.sidebar.fliph {\r\n    width: 42px;-webkit-transition: all 0.5s  ease-in-out;transition: all 0.5s  ease-in-out;\r\n   \r\n}\r\n\r\n.sidebar.fliph li{ \r\n    position:relative\r\n}\r\n\r\n.sidebar.fliph .sub-menu {\r\n    position: absolute;\r\n    left: 39px;\r\n    top: 0;\r\n    background-color: #222;\r\n    width: 150px;\r\n    z-index: 100;\r\n}\r\n\r\n.user-panel {\r\n    clear: left;\r\n    display: block;\r\n    float: left;\r\n}\r\n\r\n.user-panel>.image>img {\r\n    width: 100%;\r\n    max-width: 45px;\r\n    height: auto;\r\n}\r\n\r\n.user-panel>.info,  .user-panel>.info>a {\r\n    color: #fff;\r\n}\r\n\r\n.user-panel>.info>p {\r\n    font-weight: 600;\r\n    margin-bottom: 9px;\r\n}\r\n\r\n.user-panel {\r\n    clear: left;\r\n    display: block;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 15px;\r\n    padding: 25px 15px;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.user-panel>.info {\r\n    padding: 5px 5px 5px 15px;\r\n    line-height: 1;\r\n    position: absolute;\r\n    left: 55px;\r\n}\r\n\r\n.fliph .user-panel{ \r\n    display: none; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIseUNBQWlDO0lBQWpDLGlDQUFpQztJQUNqQyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVztBQUM1Qzs7QUFDQTtJQUNJLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsVUFBVSxDQUFDLDZCQUE2QjtJQUN4QztBQUNKOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3Qix5Q0FBZ0M7SUFBaEM7QUFDSjs7QUFDQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix5Q0FBZ0M7SUFBaEM7QUFDSjs7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLHlDQUFnQztJQUFoQztBQUNKOztBQUNBO0lBQ0ksWUFBWSxDQUFDLHlDQUFnQyxDQUFoQztBQUNqQjs7QUFDQTtJQUNJLFdBQVcsQ0FBQyx5Q0FBaUMsQ0FBakMsaUNBQWlDOztBQUVqRDs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcnsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAgZWFzZS1pbi1vdXQ7XHJcbiAgICBtaW4taGVpZ2h0OiA1ODBweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1ODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTg2KSB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmJnLXNpZGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7XHJcbn1cclxuLnNpZGViYXIgdWx7IFxyXG4gICAgbGlzdC1zdHlsZTpub25lOyBtYXJnaW46MHB4OyBwYWRkaW5nOjBweDsgXHJcbn1cclxuLnNpZGViYXIgbGkgYSwuc2lkZWJhciBsaSBhLmNvbGxhcHNlZC5hY3RpdmV7IFxyXG4gICAgZGlzcGxheTpibG9jazsgcGFkZGluZzo4cHggMTJweDsgXHJcbiAgICBjb2xvcjojZmZmO2JvcmRlci1sZWZ0OjBweCBzb2xpZCAjZGVkZWRlOyAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZVxyXG59XHJcbi5zaWRlYmFyIGxpIGEuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICNkZWRlZGU7IFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgIGVhc2UtaW4tb3V0XHJcbn1cclxuLnNpZGViYXIgbGkgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlYmFyIGxpIGEgaXsgXHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG4uc2lkZWJhciB1bCBsaSAuc3ViLW1lbnUgbGkgYXsgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZVxyXG59XHJcbi5zaWRlYmFyIHVsIGxpIC5zdWItbWVudSBsaSBhOmhvdmVyOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNpZGViYXIgdWwgbGkgLnN1Yi1tZW51IGxpIGE6aG92ZXJ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjIyOyBcclxuICAgIHBhZGRpbmctbGVmdDoyMHB4OyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzICBlYXNlLWluLW91dFxyXG59XHJcbi5zdWItbWVudXsgXHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgI2RlZGVkZTtcclxufVxyXG4uc2lkZWJhciBsaSBhIC5uYXYtbGFiZWwsLnNpZGViYXIgbGkgYSAubmF2LWxhYmVsK3NwYW57IFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgIGVhc2UtaW4tb3V0XHJcbn1cclxuLnNpZGViYXIuZmxpcGggbGkgYSAubmF2LWxhYmVsLC5zaWRlYmFyLmZsaXBoIGxpIGEgLm5hdi1sYWJlbCtzcGFueyBcclxuICAgIGRpc3BsYXk6bm9uZTt0cmFuc2l0aW9uOiBhbGwgMC41cyAgZWFzZS1pbi1vdXRcclxufVxyXG4uc2lkZWJhci5mbGlwaCB7XHJcbiAgICB3aWR0aDogNDJweDt0cmFuc2l0aW9uOiBhbGwgMC41cyAgZWFzZS1pbi1vdXQ7XHJcbiAgIFxyXG59XHJcbi5zaWRlYmFyLmZsaXBoIGxpeyBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlXHJcbn1cclxuLnNpZGViYXIuZmxpcGggLnN1Yi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDM5cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4udXNlci1wYW5lbCB7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnVzZXItcGFuZWw+LmltYWdlPmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4udXNlci1wYW5lbD4uaW5mbywgIC51c2VyLXBhbmVsPi5pbmZvPmEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnVzZXItcGFuZWw+LmluZm8+cCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcbi51c2VyLXBhbmVsIHtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxufVxyXG4udXNlci1wYW5lbD4uaW5mbyB7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1NXB4O1xyXG59XHJcblxyXG4uZmxpcGggLnVzZXItcGFuZWx7IFxyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(appService, toastr, modal, socketService) {
        var _this4 = this;

        _classCallCheck(this, SidebarComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.modal = modal;
        this.socketService = socketService;

        this.sendFriendRequest = function (senderId, receiver) {
          _this4.appService.sendFriendRequest(senderId, receiver.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this4.toastr.success("Congrats! You have successfully sent a friend request to ".concat(receiver.username, "!"));

              _this4.sendNotification("You have received a friend request from ".concat(_this4.userInfo.username), receiver.userId);

              _this4.userList.splice(_this4.userList.indexOf(receiver));

              _this4.modal.dismissAll();
            } else {
              _this4.toastr.error(apiResponse.message);

              _this4.modal.dismissAll();
            }
          });
        };

        this.acceptFriendRequest = function (senderId, receiver) {
          _this4.appService.acceptFriendRequest(senderId, receiver.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this4.toastr.success("Congrats! You have accepted the friend request of ".concat(receiver.username, "!"));

              _this4.sendNotification("Your friend request has been accepted by ".concat(_this4.userInfo.username), receiver.userId);

              _this4.pendingFriendList.splice(_this4.userList.indexOf(receiver));

              _this4.modal.dismissAll();
            } else {
              _this4.toastr.error(apiResponse.message);

              _this4.modal.dismissAll();
            }
          });
        };

        this.rejectFriendRequest = function (senderId, receiver) {
          _this4.appService.rejectFriendRequest(senderId, receiver.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this4.toastr.success("Ouuch! You have rejected the friend request of ".concat(receiver.username, "!"));

              _this4.sendNotification("Your friend request has been rejected by ".concat(_this4.userInfo.username), receiver.userId);

              _this4.pendingFriendList.splice(_this4.userList.indexOf(receiver));

              _this4.modal.dismissAll();
            } else {
              _this4.toastr.error(apiResponse.message);

              _this4.modal.dismissAll();
            }
          });
        };
      }

      _createClass(SidebarComponent, [{
        key: "handleSendRequest",
        value: function handleSendRequest(friend) {
          // console.log(this.userList);
          // console.log(friend);
          this.friend = friend;
          this.modal.open(this.modalSendFriendRequest, {
            size: 'sm'
          });
        }
      }, {
        key: "handleAcceptRequest",
        value: function handleAcceptRequest(friend) {
          this.friend = friend;
          this.modal.open(this.modalAcceptFriendRequest, {
            size: 'sm'
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, id) {
          var message = {
            senderId: this.userInfo.userId,
            senderName: this.userInfo.firstName + ' ' + this.userInfo.lastName,
            receiverId: id,
            message: msg
          };
          this.socketService.sendNotification(message);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], SidebarComponent.prototype, "userInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], SidebarComponent.prototype, "userList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], SidebarComponent.prototype, "friendList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()], SidebarComponent.prototype, "pendingFriendList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('modalSendFriendReq', {
      static: true
    })], SidebarComponent.prototype, "modalSendFriendRequest", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('modalAcceptFriendReq', {
      static: true
    })], SidebarComponent.prototype, "modalAcceptFriendRequest", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/shared/components/sidebar/sidebar.component.css")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/shared/models/item.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/models/item.ts ***!
    \***************************************/

  /*! exports provided: Item */

  /***/
  function srcAppSharedModelsItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Item", function () {
      return Item;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Item = function Item(isSelected, description, children) {
      _classCallCheck(this, Item);

      this.isSelected = isSelected || false;
      this.description = description || null;
      this.children = children || [];
    };
    /***/

  },

  /***/
  "./src/app/shared/models/todo.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/models/todo.ts ***!
    \***************************************/

  /*! exports provided: Todo */

  /***/
  function srcAppSharedModelsTodoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Todo = function Todo(todoId, title, version, status, list, createdBy, modifiedBy, sharedWith) {
      _classCallCheck(this, Todo);

      this.todoId = todoId || '';
      this.title = title || '';
      this.version = version || 0;
      this.status = status || '';
      this.list = list || [];
      this.createdBy = createdBy || '';
      this.modifiedBy = modifiedBy || '';
      this.sharedWith = sharedWith || [];
    };
    /***/

  },

  /***/
  "./src/app/shared/models/user.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/models/user.ts ***!
    \***************************************/

  /*! exports provided: User */

  /***/
  function srcAppSharedModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User(user) {
        _classCallCheck(this, User);

        this.firstName = user && user.firstName || '';
        this.lastName = user && user.lastName || '';
        this.username = user && user.username || '';
        this.email = user && user.email || '';
        this.mobile = user && user.mobile || '';
        this.countryCode = user && user.countryCode || '';
        this.password = user && user.password || '';
      }

      _createClass(User, [{
        key: "userSignupValidator",
        value: function userSignupValidator() {
          if (this.emptyCheck(this.firstName)) {
            return 'First Name cannot be empty!';
          } else if (this.emptyCheck(this.lastName)) {
            return 'Last Name cannot be empty!';
          } else if (this.emptyCheck(this.username)) {
            return 'Username cannot be empty!';
          } else if (this.emptyCheck(this.email)) {
            return 'Email cannot be empty!';
          } else if (this.emptyCheck(this.mobile)) {
            return 'Mobile cannot be empty!';
          } else if (this.emptyCheck(this.countryCode)) {
            return 'Country Code cannot be empty!';
          } else if (this.emptyCheck(this.password)) {
            return 'Password cannot be empty!';
          } else if (this.checkMinLength(this.username)) {
            return 'Username should not be less than 5';
          } else if (this.checkMinLength(this.password)) {
            return 'Password should not be less than 5';
          }

          return null;
        }
      }, {
        key: "userLoginValidator",
        value: function userLoginValidator() {
          if (this.emptyCheck(this.email)) {
            return 'Email cannot be empty!';
          } else if (this.emptyCheck(this.password)) {
            return 'Password cannot be empty!';
          } else if (this.checkMinLength(this.password)) {
            return 'Password should not be less than 5';
          }

          return null;
        }
      }, {
        key: "emptyCheck",
        value: function emptyCheck(input) {
          if (input === null || input === '') {
            return true;
          }

          return false;
        }
      }, {
        key: "checkMinLength",
        value: function checkMinLength(input) {
          if (input.length < 5) {
            return true;
          }

          return false;
        }
      }, {
        key: "checkUserMinLength",
        value: function checkUserMinLength(input) {
          if (input.length < 3) {
            return true;
          }

          return false;
        }
      }, {
        key: "checkMaxLength",
        value: function checkMaxLength(input) {
          if (input.length > 15) {
            return true;
          }

          return false;
        }
      }, {
        key: "checkUserMaxLength",
        value: function checkUserMaxLength(input) {
          if (input.length < 100) {
            return true;
          }

          return false;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/shared/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/todo/dashboard/dashboard.component.css":
  /*!********************************************************!*\
    !*** ./src/app/todo/dashboard/dashboard.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodoDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidebar-side {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.page-header {\r\n    padding-top: 15px;\r\n    padding-bottom: 12px;\r\n}\r\n\r\n.btn-purple {\r\n    background-color: #963694;\r\n    border: 0;\r\n    padding: 10px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.todos button:hover,.todos button:active,.todos button:focus {\r\n    background: #842381;\r\n  }\r\n\r\n.view-modal tbody tr:hover{\r\n    border-top: 1px solid #eee;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.modal-title input[type=text], .view-modal input[type=text] {\r\n    border: transparent;\r\n}\r\n\r\n.modal-title input:focus, .view-modal input:focus {\r\n    border: transparent;\r\n    outline: none;\r\n}\r\n\r\ntr.child {\r\n    border-spacing: 12px;\r\n}\r\n\r\n.todo-box {\r\n    box-shadow: 2px 2px 2px 2px #ccc;\r\n}\r\n\r\n.todo-box .card-header {\r\n    padding: 0.5rem 1rem !important;\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.todo-box .card-footer {\r\n    padding: 0.3rem 1rem !important;\r\n}\r\n\r\n.todo-box .card-footer i {\r\n    padding: 0.2rem 0.5rem;\r\n}\r\n\r\n.todo-box .list-group-item {\r\n    padding: 0.2rem 1rem !important;\r\n    font-size: 0.8rem;\r\n    border: none;\r\n}\r\n\r\n.todo-box input[type=\"checkbox\"] {\r\n    margin-right: 6px;\r\n}\r\n\r\n.top-decorum {\r\n    margin:15px;\r\n}\r\n\r\n.card {\r\n    margin: 6px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBR0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC90b2RvL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLXNpZGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uYnRuLXB1cnBsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTYzNjk0O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4udG9kb3MgYnV0dG9uOmhvdmVyLC50b2RvcyBidXR0b246YWN0aXZlLC50b2RvcyBidXR0b246Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzg0MjM4MTtcclxuICB9XHJcblxyXG4udmlldy1tb2RhbCB0Ym9keSB0cjpob3ZlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSBpbnB1dFt0eXBlPXRleHRdLCAudmlldy1tb2RhbCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC10aXRsZSBpbnB1dDpmb2N1cywgLnZpZXctbW9kYWwgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbnRyLmNoaWxkIHtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLnRvZG8tYm94IHtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xyXG59XHJcblxyXG4udG9kby1ib3ggLmNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udG9kby1ib3ggLmNhcmQtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvZG8tYm94IC5jYXJkLWZvb3RlciBpIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW07XHJcbn1cclxuXHJcbi50b2RvLWJveCAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLnRvcC1kZWNvcnVtIHtcclxuICAgIG1hcmdpbjoxNXB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW46IDZweFxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todo/dashboard/dashboard.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/todo/dashboard/dashboard.component.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppTodoDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/models/item */
    "./src/app/shared/models/item.ts");
    /* harmony import */


    var src_app_shared_models_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/models/todo */
    "./src/app/shared/models/todo.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/socket.service */
    "./src/app/services/socket.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(appService, modal, toastr, socketService) {
        var _this5 = this;

        _classCallCheck(this, DashboardComponent);

        this.appService = appService;
        this.modal = modal;
        this.toastr = toastr;
        this.socketService = socketService;
        this.user = this.appService.getUserInfoFromLocalStorage();
        this.authtoken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('authToken');
        this.todoList = [];
        this.userList = [];
        this.friendList = [];
        this.pendingFriendList = [];
        this.isShow = false;
        this.isChildShow = false;
        this.item = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
        this.childItem = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
        this.todo1 = new src_app_shared_models_todo__WEBPACK_IMPORTED_MODULE_6__["Todo"]();
        this.todo = new src_app_shared_models_todo__WEBPACK_IMPORTED_MODULE_6__["Todo"]();

        this.fetchUserList = function () {
          _this5.appService.getAllNormalUsers().subscribe(function (apiResponse) {
            _this5.userList = apiResponse.data; // console.log(this.userList);
          });
        };

        this.fetchFriendList = function (userId) {
          _this5.appService.getFriendList(userId).subscribe(function (apiResponse) {
            // console.log(apiResponse);
            _this5.friendList = apiResponse.data;
          });
        };

        this.fetchPendingFriendList = function (userId) {
          _this5.appService.getPendingFriendList(userId).subscribe(function (apiResponse) {
            _this5.pendingFriendList = apiResponse.data;
          });
        };

        this.fetchUserTodoList = function (userId) {
          _this5.appService.getUserTodoList(userId).subscribe(function (apiResponse) {
            //  console.log(apiResponse);
            _this5.todoList = apiResponse.data;
          });
        };

        this.fetchLastVersionTodo = function (userId, parentId, version) {
          _this5.appService.getUserTodoLastVersion(userId, parentId, version).subscribe(function (apiResponse) {
            // console.log(apiResponse);
            if (apiResponse.data !== 0) {
              _this5.todo = apiResponse.data;
            }
          });
        };

        this.verifyUserConfirmation = function () {
          _this5.socketService.verifyUser().subscribe(function () {
            _this5.disconnectedSocket = false;

            _this5.socketService.setUser(_this5.authtoken);
          });
        };

        this.getNotification = function () {
          _this5.socketService.onReceivingNotification(_this5.user.userId).subscribe(function (data) {
            // console.log(data);
            if (Array.isArray(data.receiverId) && data.receiverId.includes(_this5.user.userId)) {
              _this5.toastr.info("Notification received: \"".concat(data.message, "\""));

              _this5.fetchUserTodoList(_this5.user.userId);
            } else if (_this5.user.userId === data.receiverId) {
              _this5.toastr.info("Notification received: \"".concat(data.message, "\""));

              _this5.fetchUserTodoList(_this5.user.userId);
            }
          });
        };
      }

      _createClass(DashboardComponent, [{
        key: "handleTodoEvent",
        value: function handleTodoEvent(todo) {
          if (todo) {
            this.todo = todo;
            this.todo1 = JSON.parse(JSON.stringify(this.todo));
          } else {
            this.todo = new src_app_shared_models_todo__WEBPACK_IMPORTED_MODULE_6__["Todo"]();
            this.todo1 = new src_app_shared_models_todo__WEBPACK_IMPORTED_MODULE_6__["Todo"]();
          }

          this.modal.open(this.modalCreate, {
            size: 'md'
          }); // console.log(this.todo);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = this.appService.getUserInfoFromLocalStorage();
          this.verifyUserConfirmation();
          this.getNotification();
          this.fetchUserList();
          this.fetchUserTodoList(this.user.userId);
          this.fetchFriendList(this.user.userId);
          this.fetchPendingFriendList(this.user.userId);
        }
      }, {
        key: "showAddedList",
        value: function showAddedList() {
          this.item = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
          this.isShow = true;
        }
      }, {
        key: "showChildAddedList",
        value: function showChildAddedList() {
          this.childItem = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
          this.isChildShow = true;
        }
      }, {
        key: "updateItem",
        value: function updateItem(formList) {//  console.log(formList);
        }
      }, {
        key: "addItem",
        value: function addItem(item, val1, val2) {
          if (val2) {
            this.childItem.description = val2;
            this.childItem.isSelected = val1;
          }

          if (item) {
            if (this.childItem.description != null || this.childItem.description !== '' && this.childItem.isSelected !== false) {
              //  console.log(this.childItem);
              this.todo.list[this.todo.list.indexOf(item)].children = [].concat(_toConsumableArray(this.todo.list[this.todo.list.indexOf(item)].children), [this.childItem]);
              this.childItem = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
              this.item = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
            }

            this.isChildShow = false;
          } else {
            if (this.item.description != null || this.item.description !== '' && this.item.isSelected !== false) {
              //  console.log(this.item);
              this.todo.list = [].concat(_toConsumableArray(this.todo.list), [this.item]);
              this.item = new src_app_shared_models_item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
            }

            this.isShow = false;
          }
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item, child) {
          if (item) {//  console.log(this.todo.list.indexOf(item));
          }

          if (child) {
            this.todo.list[this.todo.list.indexOf(item)].children.splice(this.todo.list[this.todo.list.indexOf(item)].children.indexOf(child), 1);
          } else {
            this.todo.list.splice(this.todo.list.indexOf(item), 1);
          }
        }
      }, {
        key: "onKeyPress",
        value: function onKeyPress(event) {
          var _this6 = this;

          var charCode = String.fromCharCode(event.which).toLowerCase();

          if (event.ctrlKey && charCode === 's') {
            // Do a deept compare to identify the change in the todo.
            // If there is any change then save the entire todo with new version.
            if (this.deepCompare(this.todo, this.todo1)) {
              if (this.todo.createdBy === '') {
                this.todo.createdBy = this.user.userId;
              }

              if (this.todo.modifiedBy === '') {
                this.todo.modifiedBy = this.user.userId;
              }

              if (!this.todo.sharedWith.includes(this.user.userId)) {
                this.todo.sharedWith.push(this.user.userId);
              }

              this.friendList.forEach(function (friend) {
                if (!_this6.todo.sharedWith.includes(friend.userId)) {
                  _this6.todo.sharedWith.push(friend.userId);
                }
              });

              if (this.todo1.title !== '' && this.todo.list.length !== 0) {
                this.createNewVersionTodo(this.todo);
                this.fetchUserTodoList(this.user.userId);
                this.sendNotification("TODO list has been updated by ".concat(this.user.username), this.todo.sharedWith.splice(this.todo.sharedWith.indexOf(this.user.userId)));
              } else {
                this.createNewTodo(this.todo);
                this.todoList = [].concat(_toConsumableArray(this.todoList), [this.todo]);
                this.sendNotification("New TODO list has been created by ".concat(this.user.username), this.todo.sharedWith.splice(this.todo.sharedWith.indexOf(this.user.userId)));
              }

              this.todo1 = this.todo1 = JSON.parse(JSON.stringify(this.todo)); //  console.log(this.todo);
            }

            event.preventDefault();
            return false;
          }

          if (event.ctrlKey && charCode === 'z') {
            this.fetchLastVersionTodo(this.user.userId, this.todo.parentId, this.todo.version);
          }
        }
      }, {
        key: "press",
        value: function press($event) {// console.log($event);
        }
      }, {
        key: "createNewTodo",
        value: function createNewTodo(todo) {
          var _this7 = this;

          this.appService.createNewTodo(todo).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this7.todo.todoId = apiResponse.data.todoId;
              _this7.todo.version = apiResponse.data.version;
              _this7.todo.status = apiResponse.data.status;
              _this7.todo.parentId = apiResponse.data.parentId;

              _this7.toastr.success('Todo has been saved successfully');
            }
          });
        }
      }, {
        key: "createNewVersionTodo",
        value: function createNewVersionTodo(todo) {
          var _this8 = this;

          this.appService.createNewVersionTodo(todo).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this8.todo.todoId = apiResponse.data.todoId;
              _this8.todo.version = apiResponse.data.version;
              _this8.todo.status = apiResponse.data.status;
              _this8.todo.parentId = apiResponse.data.parentId;

              _this8.toastr.success('Todo has been updated successfully'); // console.log(apiResponse);

            }
          });
        }
      }, {
        key: "removeTodo",
        value: function removeTodo(todo) {
          var _this9 = this;

          this.appService.removeTodo(todo).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              _this9.todoList.splice(_this9.todoList.indexOf(todo), 1);

              _this9.toastr.success('Todo has been removed successfully');
            }
          });
        }
      }, {
        key: "deepCompare",
        value: function deepCompare(currentTodo, prevTodo) {
          if (currentTodo.title !== prevTodo.title) {
            // console.log(1);
            return true;
          }

          if (currentTodo.version !== prevTodo.version) {
            // console.log(2);
            return true;
          }

          if (currentTodo.list.length !== prevTodo.list.length) {
            // console.log(3);
            return true;
          } else {
            for (var i = 0; i < currentTodo.list.length; i++) {
              if (currentTodo.list[i].isSelected !== prevTodo.list[i].isSelected) {
                // console.log(4);
                return true;
              }

              if (currentTodo.list[i].description !== prevTodo.list[i].description) {
                // console.log(5);
                return true;
              }

              if (currentTodo.list[i].children.length !== prevTodo.list[i].children.length) {
                // console.log(6);
                return true;
              } else {
                for (var j = 0; j < currentTodo.list[i].children.length; j++) {
                  if (currentTodo.list[i].children[j].isSelected !== prevTodo.list[i].children[j].isSelected) {
                    // console.log(7);
                    return true;
                  }

                  if (currentTodo.list[i].children[j].description !== prevTodo.list[i].children[j].description) {
                    // console.log(8);
                    return true;
                  }
                }
              }
            }
          }

          return false;
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(msg, list) {
          if (Array.isArray(list)) {
            var message = {
              senderId: this.user.userId,
              senderName: this.user.firstName + ' ' + this.user.lastName,
              receiverId: list,
              message: msg
            };
            this.socketService.sendNotification(message);
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalCreate', {
      static: true
    })], DashboardComponent.prototype, "modalCreate", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-dasboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todo/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/todo/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/todo/todo.module.ts":
  /*!*************************************!*\
    !*** ./src/app/todo/todo.module.ts ***!
    \*************************************/

  /*! exports provided: TodoModule */

  /***/
  function srcAppTodoTodoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoModule", function () {
      return TodoModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/todo/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth-guard */
    "./src/app/auth/auth-guard.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var routes = [{
      path: 'dashboard/:id',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }];

    var TodoModule = function TodoModule() {
      _classCallCheck(this, TodoModule);
    };

    TodoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    })], TodoModule);
    /***/
  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.forgot-password-page {\r\n  width: 400px;\r\n  margin: 4% auto;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 100px;\r\n    padding: 45px;\r\n    text-align: center;\r\n  }\r\n\r\n.form input , .form textarea{\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 15px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form button {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    outline: 0;\r\n    background: #963694;\r\n    width: 100%;\r\n    border: 0;\r\n    padding: 10px;\r\n    color: #FFFFFF;\r\n    font-size: 14px;\r\n    -webkit-transition: all 0.3 ease;\r\n    transition: all 0.3 ease;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n    background: #842381;\r\n  }\r\n\r\n.form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n\r\n.form .message a {\r\n    color: #963694;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n\r\n.form .link {\r\n  cursor: pointer;\r\n}\r\n\r\n.form h4 {\r\n  padding-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEOztBQUUvRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEVBQTBFO0FBQzVFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0FBRUY7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjMwMCk7XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkLXBhZ2Uge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDQlIGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvcm0gaW5wdXQgLCAuZm9ybSB0ZXh0YXJlYXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuLmZvcm0gYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTYzNjk0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODQyMzgxO1xyXG4gIH1cclxuICAuZm9ybSAubWVzc2FnZSB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwO1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5mb3JtIC5tZXNzYWdlIGEge1xyXG4gICAgY29sb3I6ICM5NjM2OTQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuLmZvcm0gLmxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0gaDQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(appService, toastr) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.appService = appService;
        this.toastr = toastr;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPasswordLink",
        value: function resetPasswordLink() {
          var _this10 = this;

          if (!this.email) {
            this.toastr.warning('Email address is mandatory');
          } else {
            var data = {
              email: this.email
            }; // console.log(data);

            this.appService.forgotPassword(data).subscribe(function (apiResponse) {
              if (apiResponse.status === 200) {
                _this10.toastr.success(apiResponse.message);
              } else {
                _this10.toastr.error(apiResponse.message);
              }
            }, function (err) {
              _this10.toastr.error(err.error.message);
            });
          }
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/user/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/user/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.login-page {\r\n  width: 400px;\r\n  margin: 4% auto;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 100px;\r\n    padding: 45px;\r\n    text-align: center;\r\n  }\r\n\r\n.form input , .form textarea{\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 15px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form select{\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0px;\r\n    padding: 0px 15px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n    height: 41px;\r\n    border-right: 1px solid #ddd;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form button {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    outline: 0;\r\n    background: #963694;\r\n    width: 100%;\r\n    border: 0;\r\n    padding: 10px;\r\n    color: #FFFFFF;\r\n    font-size: 14px;\r\n    -webkit-transition: all 0.3 ease;\r\n    transition: all 0.3 ease;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n    background: #842381;\r\n  }\r\n\r\n.form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n\r\n.form .message a {\r\n    color: #963694;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.form .link {\r\n  cursor: pointer;\r\n}\r\n\r\n.form h3 {\r\n  padding-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDs7QUFFL0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBFQUEwRTtBQUM1RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0FBQ0Y7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDApO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDQlIGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvcm0gaW5wdXQgLCAuZm9ybSB0ZXh0YXJlYXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIC5mb3JtIHNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4uZm9ybSBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJhY2tncm91bmQ6ICM5NjM2OTQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0gYnV0dG9uOmhvdmVyLC5mb3JtIGJ1dHRvbjphY3RpdmUsLmZvcm0gYnV0dG9uOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICM4NDIzODE7XHJcbiAgfVxyXG4gIC5mb3JtIC5tZXNzYWdlIHtcclxuICAgIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmZvcm0gLm1lc3NhZ2UgYSB7XHJcbiAgICBjb2xvcjogIzk2MzY5NDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbi5mb3JtIC5yZWdpc3Rlci1mb3JtIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZm9ybSAubGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybSBoMyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/models/user */
    "./src/app/shared/models/user.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(appService, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
          this.errMessage = null;
        }
      }, {
        key: "goToSignUp",
        value: function goToSignUp() {
          this.router.navigate(['/signup']);
        }
      }, {
        key: "goToDashboard",
        value: function goToDashboard(id) {
          if (id) {
            this.router.navigate(["/dashboard/".concat(id)]);
          } else {
            this.router.navigate(['/dashboard']);
          }
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          this.router.navigate(['/forgotPassword']);
        }
      }, {
        key: "signInConfirmation",
        value: function signInConfirmation(formData) {
          var _this11 = this;

          this.user = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_6__["User"](formData);
          this.errMessage = this.user.userLoginValidator();

          if (this.errMessage != null) {
            this.toastr.warning(this.errMessage);
          } else {
            var data = {
              email: this.user.email,
              password: this.user.password
            }; // console.log(data);

            this.appService.login(data).subscribe(function (apiResponse) {
              if (apiResponse.status === 200) {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authToken', apiResponse.data.authToken);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('role', apiResponse.data.userDetails.role);

                _this11.appService.setUserInfoFromLocalStorage(apiResponse.data.userDetails);

                _this11.toastr.success('You have successfullly Signed In');

                if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('role') === '2') {
                  setTimeout(function () {
                    return _this11.goToDashboard();
                  }, 1000);
                } else {
                  setTimeout(function () {
                    return _this11.goToDashboard(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('receiverId'));
                  }, 1000);
                }
              } else {
                _this11.toastr.error(apiResponse.message);
              }
            }, function (err) {
              _this11.toastr.error(err.error.message);
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/user/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/user/reset-password/reset-password.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/user/reset-password/reset-password.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.reset-password-page {\r\n  width: 400px;\r\n  margin: 4% auto;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 100px;\r\n    padding: 45px;\r\n    text-align: center;\r\n  }\r\n\r\n.form input , .form textarea{\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 15px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form button {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    outline: 0;\r\n    background: #963694;\r\n    width: 100%;\r\n    border: 0;\r\n    padding: 10px;\r\n    color: #FFFFFF;\r\n    font-size: 14px;\r\n    -webkit-transition: all 0.3 ease;\r\n    transition: all 0.3 ease;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n  }\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n    background: #842381;\r\n  }\r\n\r\n.form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n\r\n.form .message a {\r\n    color: #963694;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n\r\n.form .link {\r\n  cursor: pointer;\r\n}\r\n\r\n.form h4 {\r\n  padding-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDs7QUFFL0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDBFQUEwRTtBQUM1RTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFRjtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztBQUVGO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcclxuXHJcbi5yZXNldC1wYXNzd29yZC1wYWdlIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiA0JSBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxMDBweDtcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb3JtIGlucHV0ICwgLmZvcm0gdGV4dGFyZWF7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuXHJcbi5mb3JtIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzk2MzY5NDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybSBidXR0b246aG92ZXIsLmZvcm0gYnV0dG9uOmFjdGl2ZSwuZm9ybSBidXR0b246Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzg0MjM4MTtcclxuICB9XHJcbiAgLmZvcm0gLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMDtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuZm9ybSAubWVzc2FnZSBhIHtcclxuICAgIGNvbG9yOiAjOTYzNjk0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbi5mb3JtIC5saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtIGg0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/reset-password/reset-password.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/reset-password/reset-password.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppUserResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(appService, router, toastr) {
        _classCallCheck(this, ResetPasswordComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/signup']);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this12 = this;

          if (!this.password) {
            this.toastr.warning('Password cannot be empty');
          } else if (!this.confirmPassword) {
            this.toastr.warning('Confirm Password cannot be empty');
          } else if (this.password !== this.confirmPassword) {
            this.toastr.error('Password and Confirm Password doesnot match');
          } else {
            var data = {
              email: this.email,
              password: this.password
            }; // console.log(data);

            this.appService.login(data).subscribe(function (apiResponse) {
              if (apiResponse.status === 200) {
                _this12.toastr.success(apiResponse.message);
              } else {
                _this12.toastr.error(apiResponse.message);
              }
            }, function (err) {
              _this12.toastr.error(err.error.message);
            });
          }
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/user/reset-password/reset-password.component.css")).default]
    })], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/user/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Roboto:300);\r\n\r\n.signup-page {\r\n  width: 400px;\r\n  margin: 4% auto;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n}\r\n\r\n.form input , .form textarea{\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.form select{\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0px;\r\n  padding: 0px 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n  height: 41px;\r\n  border-right: 1px solid #ddd;\r\n  border-radius: 20px;\r\n}\r\n\r\n.form select:focus {\r\n  border: 0;\r\n  border-right: 1px solid #ddd;\r\n  box-shadow: none;\r\n}\r\n\r\n.form button {\r\n  font-family: \"Roboto\", sans-serif;\r\n  text-transform: uppercase;\r\n  outline: 0;\r\n  background: #963694;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 10px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  -webkit-transition: all 0.3 ease;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n  border-radius: 20px;\r\n}\r\n\r\n.form button:hover,.form button:active,.form button:focus {\r\n  background: #842381;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #963694;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .inputDiv {\r\n  margin:0;\r\n  padding: 0;\r\n  float: left;\r\n}\r\n\r\n.form h3 {\r\n  padding-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEOztBQUUvRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEVBQTBFO0FBQzVFOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwKTtcclxuXHJcbi5zaWdudXAtcGFnZSB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogNCUgYXV0bztcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA1cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxufVxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xyXG4gIHBhZGRpbmc6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtIGlucHV0ICwgLmZvcm0gdGV4dGFyZWF7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uZm9ybSBzZWxlY3R7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgb3V0bGluZTogMDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHggMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybSBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIGJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQ6ICM5NjM2OTQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uZm9ybSBidXR0b246aG92ZXIsLmZvcm0gYnV0dG9uOmFjdGl2ZSwuZm9ybSBidXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM4NDIzODE7XHJcbn1cclxuLmZvcm0gLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbjogMTVweCAwIDA7XHJcbiAgY29sb3I6ICNiM2IzYjM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb3JtIC5tZXNzYWdlIGEge1xyXG4gIGNvbG9yOiAjOTYzNjk0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIC5pbnB1dERpdiB7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZvcm0gaDMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/models/user */
    "./src/app/shared/models/user.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(appService, router, toastr) {
        _classCallCheck(this, SignupComponent);

        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
          this.errMessage = null;
          this.getCountryCodes();
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "signUpConfirmation",
        value: function signUpConfirmation(formData) {
          var _this13 = this;

          this.user = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_5__["User"](formData);
          this.errMessage = this.user.userSignupValidator();

          if (this.errMessage != null) {
            this.toastr.warning(this.errMessage);
          } else {
            this.appService.signup(this.user).subscribe(function (apiResponse) {
              // console.log(apiResponse);
              if (apiResponse.status === 200) {
                _this13.toastr.success('You have successfullly Signed Up');

                setTimeout(function () {
                  return _this13.goToSignIn();
                }, 1000);
              } else {
                _this13.toastr.error(apiResponse.message);
              }
            }, function (err) {
              _this13.toastr.error('Some Error occurred');
            });
          }
        }
      }, {
        key: "getCountryCodes",
        value: function getCountryCodes() {
          var _this14 = this;

          this.appService.getCountryCode().subscribe(function (data) {
            _this14.countryCodeList = data;
          });
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          console.log(event.value);
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/user/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _auth_auth_filter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../auth/auth-filter.service */
    "./src/app/auth/auth-filter.service.ts");

    var routes = [{
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
      canActivate: [_auth_auth_filter_service__WEBPACK_IMPORTED_MODULE_11__["AuthFilter"]]
    }, {
      path: 'forgotPassword',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
      canActivate: [_auth_auth_filter_service__WEBPACK_IMPORTED_MODULE_11__["AuthFilter"]]
    }, {
      path: 'resetPassword',
      component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"],
      canActivate: [_auth_auth_filter_service__WEBPACK_IMPORTED_MODULE_11__["AuthFilter"]]
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"]],
      imports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
        timeOut: 1000,
        positionClass: 'toast-top-right'
      }), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [_auth_auth_filter_service__WEBPACK_IMPORTED_MODULE_11__["AuthFilter"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\ToDoL\todol-angular\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map