# Javascript

## Javascript Errors

Throw, and Try Catch Finally

The try...catch statement is comprised of a try block and either a catch block, 
a finally block, or both. The code in the try block is executed first, 
and if it throws an exception, the code in the catch block will be executed. 
The code in the finally block will always be executed before control flow exits the 
entire construct.

The **try** statement defines a code block to run (to try).

The **catch** statement defines a code block to handle any error.

The **finally** statement defines a code block to run regardless of the result.

The **throw** statement defines a custom error.


```Javascript
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```
Example 1

```Javascript
try {
  // Code, der eine Ausnahme auslösen könnte
  console.log("Try-Block: Versuche etwas, das nicht funktioniert");
  // Simuliere einen Fehler - eine nicht definierte Funktion aufrufen
  undefinedFunction();
} catch (error) {
  // Code, um mit der Ausnahme umzugehen
  console.error("Catch-Block: Ein Fehler ist aufgetreten - " + error.message);
} finally {
  // Code, der immer ausgeführt wird, unabhängig davon, ob eine Ausnahme aufgetreten ist oder nicht
  console.log("Finally-Block: Dieser Code wird immer ausgeführt");
}

```

Example 2

```Javascript
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
```

Example 3

```Javascript
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
```