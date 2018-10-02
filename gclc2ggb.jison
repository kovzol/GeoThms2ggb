/* Parse GCLC code and convert it to GGBScript.
 *
 * Usage:
 *
 *   1. Install jison from https://github.com/zaach/jison.
 *   2. Compile this file into .js code by using "jison gclc2ggb.jison".
 *   3. Convert an input *.gcl GCLC file to GeoGebra Script by running "node gclc2ggb.js example.gcl".
 */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"point"               return 'point';
"segment"             return 'segment';
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\w+                   return 'VAR'
<<EOF>>               return 'EOF'
.                     return 'INVALID'
/lex

%start prog

%% /* language grammar */

prog
    : proglist EOF
    { console.log($proglist); }
    ;

proglist
    : proglist stmt
    { $proglist.push($stmt); $$ = $proglist; }
    | stmt
    { $$ = [$stmt]; }
    ;

stmt
    : point_stmt
    | segment_stmt
    ;

point_stmt : point VAR NUMBER NUMBER { $$ = $2 + "=(" + $3 + "," + $4 + ")"; } ;
segment_stmt : segment VAR VAR VAR { $$ = $2 + "=Segment(" + $3 + "," + $4 + ")"; } ;
