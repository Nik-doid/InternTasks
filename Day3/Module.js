
//ecma modules
//importing 
import {functionName} from './Server.js';

//exporting 
//named export
export const functionName = () =>{}; 
//default export
export default functionName; 

//Common js
//importing
const {functionName} = require('./Server.js');

//exporting
//default export
module.exports = functionName; 
//mimicking named exports
exports.functionName = functionName;





