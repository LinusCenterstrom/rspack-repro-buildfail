To repro run yarn install then yarn build

The output index.js in the distfolder contains a call to __webpack_require__
with p774 as a parameter on line 183
```
__webpack_require__(p774);
```

The moduleId should just be 774 from what I can tell.
If you run the output code it will crash since p774 is undefined.