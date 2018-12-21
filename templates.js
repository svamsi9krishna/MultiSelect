angular.module('utilities').run(['$templateCache', function($templateCache) {$templateCache.put('Component/MultiSelect/multiSelect.component.html','<div>\r\n    <div style="display: inline-block;border-style :solid; border-width: thin; border-radius:3px;width: 200px; overflow-x: hidden;padding: 2px 5px 0px 5px; box-shadow: 0 3px 6px -2px #232323;\r\n    -moz-box-shadow: 0 3px 6px -2px #232323;-webkit-box-shadow: 0 3px 6px -2px #232323;" ng-style="{\'background-color\':vm.backgroundColor}"\r\n         ng-click="vm.toggleDropdownBody()">\r\n        <div>\r\n            <div style="overflow-x: hidden;  width: 150px; text-overflow: ellipsis; white-space: nowrap;display: inline-block">\r\n                {{vm.displayName}}\r\n            </div>\r\n            <span\r\n                    style="font-size: x-small; float: right; font-size: x-small;display: inline;  line-height: 2.5; ">{{vm.selectedData.length}}/{{vm.inputData.length}} \u25BC </span>\r\n        </div>\r\n    </div>\r\n    <div style="display: block; width: 280px; border-style: solid;border-width: 1px;border-color:#8d8a8a; padding:5px;position: absolute;background-color: whitesmoke;\r\n    box-shadow: 2px 3px 6px -2px #232323;-moz-box-shadow: 2px 3px 6px -2px #232323;-webkit-box-shadow: 2px 3px 6px -2px #232323;"\r\n         ng-style="vm.alignLeft && {\'margin-left\': \'-80px\'}"\r\n         ng-show="vm.showDropdownbody" ng-mouseleave="vm.toggleDropdownBody()">\r\n        <div>\r\n            <input type="text" ng-model="vm.txtFilter" ng-change="vm.filterList()" style="height: 25px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;"/>\r\n            <span style="font-size: x-large;text-align: center;vertical-align: sub;color: #34ae12; cursor: pointer" ng-click="vm.toggleAll(true)">\u2611</span>\r\n            <span style="font-size: x-large;text-align: center;vertical-align: sub;color: #ae1224; cursor: pointer" ng-click="vm.toggleAll(false)">\u2612</span>\r\n        </div>\r\n        <div style="max-height: 500px;overflow-y: auto;">\r\n            <div style="padding: 0px 5px;\r\n        border-top-color: whitesmoke;\r\n        border-top-width: 1px;\r\n        border-top-style:solid ;"\r\n                 ng-class="item.selected && item.selected ==true ?\'check\':\'uncheck\'"\r\n                 ng-repeat="item in vm.inputData track by $index" ng-click="vm.toggleSelection($index)"\r\n                 title="{{item[vm.tooltipField]}}"\r\n                 ng-show="item.shown"\r\n                 onmouseover="this.style.backgroundColor=\'#d5cf8b\';"\r\n                 onmouseout="this.style.removeProperty(\'background-color\');">\r\n                <div style="overflow-x: hidden;  width: 235px; text-overflow: ellipsis; white-space: nowrap;display: inline-block">{{item[vm.textField]}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<style>\r\n    .check {\r\n        background-color: lightblue;\r\n    }\r\n\r\n    .check::after {\r\n        font-weight: 700;\r\n        color: green;\r\n        content: "\u2714";\r\n        float: right;\r\n        color: #333;\r\n    }\r\n\r\n    .uncheck {\r\n\r\n    }\r\n</style>\r\n');}]);