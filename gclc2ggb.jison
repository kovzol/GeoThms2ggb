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
"%".*                 /* ignore comment */
"point"               return 'point';
"segment"             return 'segment';
"drawsegment"         return 'drawsegment';
"drawdashsegment"     return 'drawdashsegment';
"line"                return 'line';
"drawline"            return 'drawline';
"drawdashline"        return 'drawdashline';
"intersec"            return 'intersec';
"intersection"        return 'intersec';
"intersec2"           return 'intersec2';
"intersection2"       return 'intersec2';
"onsegment"           return 'onsegment';
"online"              return 'online';
"oncircle"            return 'oncircle';
"midpoint"            return 'midpoint';
"circle"              return 'circle';
"drawcircle"          return 'drawcircle';
"foot"                return 'foot';
"parallel"            return 'parallel';
"perp"                return 'perp';
"perpendicular"       return 'perp';
"med"                 return 'med';
"mediatrice"          return 'med';
"prove"               return 'prove';
"collinear"           return 'collinear';
"cyclic"              return 'cyclic';
"identical"           return 'identical';
"dim"                 return 'dim';
"prooflimit"          return 'prooflimit';
"prooflevel"          return 'prooflevel';
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\w+                   return 'VAR'
<<EOF>>               return 'EOF'
"{"                   return 'LBRACE'
"}"                   return 'RBRACE'
.                     return 'INVALID'
/lex

%start prog

%% /* language grammar */

prog
    : proglist EOF
    { console.log($proglist); return ($proglist); }
    ;

proglist
    : proglist stmt
    { $proglist.push($stmt); $$ = $proglist; }
    | stmt
    { $$ = [$stmt]; }
    ;

stmt
    : point_stmt
    | line_stmt | drawline_stmt | drawdashline_stmt
    | segment_stmt | drawsegment_stmt | drawdashsegment_stmt
    | circle_stmt | drawcircle_stmt
    | intersec_stmt | intersec2_stmt
    | midpoint_stmt
    | onsegment_stmt | online_stmt | oncircle_stmt
    | foot_stmt | parallel_stmt | perp_stmt | med_stmt
    | prove_stmt
    | dim_stmt | prooflimit_stmt | prooflevel_stmt
    ;

point_stmt : point VAR NUMBER NUMBER { $$ = $2 + "=(" + ($3/30) + "," + ($4/30) + ")"; } ;
line_stmt: line VAR VAR VAR { $$ = $2 + "=Line(" + $3 + "," + $4 + ")"; } ;
drawline_stmt : drawline VAR VAR { $$ = "Line(" + $2 + "," + $3 + ")"; } ;
drawdashline_stmt : drawdashline VAR VAR { $$ = "Line(" + $2 + "," + $3 + ")"; } ;
segment_stmt : segment VAR VAR VAR { $$ = $2 + "=Segment(" + $3 + "," + $4 + ")"; } ;
drawsegment_stmt : drawsegment VAR VAR { $$ = "Segment(" + $2 + "," + $3 + ")"; } ;
drawdashsegment_stmt : drawdashsegment VAR VAR { $$ = "Segment(" + $2 + "," + $3 + ")"; } ;
circle_stmt: circle VAR VAR VAR { $$ = $2 + "=Circle(" + $3 + "," + $4 + ")"; } ;
drawcircle_stmt: drawcircle VAR VAR { $$ = "Circle(" + $2 + "," + $3 + ")"; } ;
intersec_stmt: intersec VAR VAR VAR { $$ = $2 + "=Intersect(" + $3 + "," + $4 + ")"; } ;
intersec2_stmt: intersec2 VAR VAR VAR VAR { $$ = [
    $2 + "=Intersect(" + $4 + "," + $5 + ",1)",
    $3 + "=Intersect(" + $4 + "," + $5 + ",2)" ]; } ;
midpoint_stmt: midpoint VAR VAR VAR { $$ = $2 + "=Midpoint(" + $3 + "," + $4 + ")"; } ;
onsegment_stmt: onsegment VAR VAR VAR { $$ = $2 + "=Point(Segment(" + $3 + "," + $4 + ")," + (Math.random()/10+0.6) + ")"; } ;
online_stmt: online VAR VAR VAR { $$ = $2 + "=Point(Line(" + $3 + "," + $4 + ")," + (Math.random()/10+0.6) + ")"; } ;
oncircle_stmt: oncircle VAR VAR VAR { $$ = $2 + "=Point(Circle(" + $3 + "," + $4 + ")," + (Math.random()/2+0.25) + ")"; } ;
foot_stmt: foot VAR VAR VAR { $$ = $2 + "=Intersect(PerpendicularLine(" + $3 + "," + $4 + ")," + $4 + ")"; };
parallel_stmt: parallel VAR VAR VAR { $$ = $2 + "=Line(" + $3 + "," + $4 + ")"; } ;
perp_stmt: perp VAR VAR VAR { $$ = $2 + "=PerpendicularLine(" + $3 + "," + $4 + ")"; } ;
med_stmt: med VAR VAR VAR { $$ = $2 + "=PerpendicularBisector(" + $3 + "," + $4 + ")"; } ;
dim_stmt: dim NUMBER NUMBER ;
prooflimit_stmt: prooflimit NUMBER ;
prooflevel_stmt: prooflevel NUMBER ;

prove_stmt: prove LBRACE thesis RBRACE { $$ = "Prove(" + $3 + ")"; } ;

thesis : collinear_check | perp_check | parallel_check | cyclic_check | identical_check;

collinear_check : collinear VAR VAR VAR { $$ = "AreCollinear(" + $2 + "," + $3 + "," + $4 + ")"; } ;
perp_check : perp VAR VAR VAR VAR { $$ = "ArePerpendicular(Line(" + $2 + "," + $3 + "),Line(" + $4 + "," + $5 + "))"; } ;
parallel_check: parallel VAR VAR VAR VAR { $$ = "AreParallel(Line(" + $2 + "," + $3 + "),Line(" + $4 + "," + $5 + "))"; } ;
cyclic_check: cyclic VAR VAR VAR VAR { $$ = "AreConcyclic(" + $2 + "," + $3 + "," + $4 + "," + $5 + ")"; } ;
identical_check: identical VAR VAR { $$ = "AreEqual(" + $2 + "," + $3 + ")"; } ;
