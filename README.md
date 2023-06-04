# Positive and Negative Lookahead
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.
Lookaheads are a bit confusing but some examples will help.

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
Both of these match calls would return ["q"].

The first lookahead tests for at least two of any alphanumeric characters. 
While the second lookahead tests for non-digit characters and also tests for numbers at least two. 
The final part of the expression tests that the characters are at least 5 characters long.
