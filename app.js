const string =
  " I want to live I want to give \n I've been a miner For a heart of gold \n It's these expressions I never give That keep me searching for a heart of gold And I'm getting old Keep me searching for a heart of gold And I'm getting old 867-530900";

// g - global flag (would just match the 1st one if not selected) --- i -case insensitive -- m - multiline

let regex = string.search(/[gold]/);
console.log(regex);
let regexx = string.replace(/gold/, "PEPERONI");
console.log(regexx);
let regexxx = string.replace(/\w/g, "Pe");
console.log(regexxx);

//United Pattern ? website - see what you select with RegEx
/*
 /[A-z]/g  --- every w
  /./g     --- everything besides the NEW LINE (\n) & on some OP s-ms (\n/r) (return)
  /\./g    ---- only period  (need to escape the special char)

 /\w/g     --- all word Characters (all leters, numbers & _ 's)
 /\W/g     --- except word Chars
 /\d/      --- digits & D-everything besides the DIGITS
 /\s/g     --- all of the whitespace - also includes TABS & line breaks
/[\s\S]    --- The way to Select EVERYTHING (everything that is a whitespace & NOT)

anchors
 /^I/      --- just the first one that BEGINS
 /^I/gm    --- multiline to take all of the first Is
 /d$/gm    --- that ends in "d" 

capture Group -- extract a string fm REGEX
/(old)/gm
 
non capture -- only select
/(?:old)/gm

Positive Look Ahead
/g(?=old)/gm  -- only select "g" where it is followed by "old"
Negative 
/g(?!old)gm  -- not followed by 

Quantifiers    -- select many chars at once
/[A-Z]\w+/       -- starts with Capital & others letters following
* - optional
/ [A-Z][a-z]*'*[a-z]* /gm    -- You're -- will be selected

Exactly how many we want
/\d{3}/gm      -- 3 digits in a row
/\d{3,}/gm     -- 3 or more
/\d{3,4}gm     -- a group of 3 or 4

/(hear)?t/gm   -- "hear" is optional - will select if it's there

? is not only used for optional , but also for a LAZY selector
/h\w+/gm    -- anything that starts with "h" & has more char
               called a Greedy Capture - selects all the letters after too
/h\w+?/gm    -- makes the selector LAZY -
                selects only 1 char after "h"

USEFUL - ALTERNATION
/(g|l)ive/gm  -- both "live" & "give"

TELEPHONE CODE E.X.

 let teleCode = 1001
 let teleCodeTwo = 1001-1234

 /(^\d{5})/gm   -- select the 1st
 /(^\d{5})-?(\d{4}$)?/gm   -- selects both

E.X. fm a search box --
 programatically we can trimp fm Beginning & END

 let strSearch = "Kansas     City"

 /\s{2,}/gm    -selects 2 or more white spaces

*/

const numbers =
  "The numbers are 8675309  867-5309  867.5309  867 5309  555-867-5309  +1 555 867 5309";
const matches = numbers.match(/(\+1)?[-. ]?(\d{3})?[-. ]?(\d{3})[-. ]?(\d{4})/gm);
console.log(matches);
