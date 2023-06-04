# Positive and Negative Lookahead
 Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
The first lookahead tests for at least two of any alphanumeric characters. 
While the second lookahead tests for non-digit characters and also tests for numbers at least two. 
The final part of the expression tests that the characters are at least 5 characters long.
