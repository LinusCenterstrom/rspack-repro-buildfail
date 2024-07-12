To repro run yarn install then yarn build

The output index.js in the distfolder contains a call to __webpack_require__
with null as a parameter on line 2903
```
__webpack_require__(null);
```

This causes the app to crash on my app which this is a small repro of.
Removing the line seems to fix the bug