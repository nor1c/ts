/**
 * Remember how I said you should use `== null`? Of course you do (cause I just said it ^). 
 * Don't use it for root level things. 
 * In strict mode if you use foo and foo is undefined you get a ReferenceError exception and the whole call stack unwinds.
 */

// You should use strict mode ... and in fact the TS compiler will insert it for you if you use modules ... more on those later in the book so you don't have to be explicit about it :)

// So to check if a variable is defined or not at a global level you normally use typeof:
if (typeof someglobal !== 'undefined') {
  // someglobal is now safe to use
  console.log(someglobal);
}