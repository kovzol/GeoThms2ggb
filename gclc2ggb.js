/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gclc2ggb = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,35],$V2=[1,36],$V3=[1,37],$V4=[1,38],$V5=[1,39],$V6=[1,40],$V7=[1,41],$V8=[1,42],$V9=[1,43],$Va=[1,44],$Vb=[1,45],$Vc=[1,46],$Vd=[1,47],$Ve=[1,48],$Vf=[1,49],$Vg=[1,50],$Vh=[1,51],$Vi=[1,52],$Vj=[1,53],$Vk=[1,54],$Vl=[1,55],$Vm=[1,56],$Vn=[1,57],$Vo=[1,59],$Vp=[1,60],$Vq=[1,61],$Vr=[1,62],$Vs=[1,64],$Vt=[1,63],$Vu=[1,58],$Vv=[5,14,38,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,65,66,67,68,69,70,71],$Vw=[1,179],$Vx=[1,180];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"proglist":4,"EOF":5,"stmt":6,"point_stmt":7,"drawpoint_stmt":8,"cmark_stmt":9,"mark_stmt":10,"line_stmt":11,"drawline_stmt":12,"drawdashline_stmt":13,"segment_stmt":14,"drawsegment_stmt":15,"drawdashsegment_stmt":16,"circle_stmt":17,"drawcircle_stmt":18,"intersec_stmt":19,"intersec2_stmt":20,"midpoint_stmt":21,"onsegment_stmt":22,"online_stmt":23,"oncircle_stmt":24,"foot_stmt":25,"parallel_stmt":26,"perp_stmt":27,"med_stmt":28,"bis_stmt":29,"rotate_stmt":30,"prove_stmt":31,"dim_stmt":32,"prooflimit_stmt":33,"prooflevel_stmt":34,"prover_timeout_stmt":35,"color_stmt":36,"area_stmt":37,"point":38,"VAR":39,"NUMBER":40,"drawpoint":41,"cmark":42,"mark":43,"line":44,"drawline":45,"drawdashline":46,"drawsegment":47,"drawdashsegment":48,"circle":49,"drawcircle":50,"intersec":51,"intersec2":52,"midpoint":53,"onsegment":54,"online":55,"oncircle":56,"foot":57,"parallel":58,"perp":59,"med":60,"bis":61,"rotate":62,"translate_stmt":63,"translate":64,"dim":65,"prooflimit":66,"prooflevel":67,"prover_timeout":68,"area":69,"color":70,"prove":71,"LBRACE":72,"thesis":73,"RBRACE":74,"collinear_check":75,"perp_check":76,"parallel_check":77,"cyclic_check":78,"identical_check":79,"same_length_check":80,"midpoint_check":81,"equal_check":82,"pbisector_check":83,"collinear":84,"cyclic":85,"identical":86,"same_length":87,"eqangle_check":88,"eqangle":89,"pbisector":90,"equal":91,"expr":92,"segment_expr":93,"angle_expr":94,"segment":95,"angle":96,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"segment_stmt",38:"point",39:"VAR",40:"NUMBER",41:"drawpoint",42:"cmark",43:"mark",44:"line",45:"drawline",46:"drawdashline",47:"drawsegment",48:"drawdashsegment",49:"circle",50:"drawcircle",51:"intersec",52:"intersec2",53:"midpoint",54:"onsegment",55:"online",56:"oncircle",57:"foot",58:"parallel",59:"perp",60:"med",61:"bis",62:"rotate",64:"translate",65:"dim",66:"prooflimit",67:"prooflevel",68:"prover_timeout",69:"area",70:"color",71:"prove",72:"LBRACE",74:"RBRACE",84:"collinear",85:"cyclic",86:"identical",87:"same_length",89:"eqangle",90:"pbisector",91:"equal",95:"segment",96:"angle"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,4],[8,2],[9,2],[10,2],[11,4],[12,3],[12,2],[13,3],[15,3],[16,3],[17,4],[18,3],[18,2],[19,4],[20,5],[21,4],[22,4],[23,4],[24,4],[25,4],[26,4],[27,4],[28,4],[29,5],[30,5],[63,5],[32,3],[33,2],[34,2],[35,2],[37,5],[36,4],[31,4],[73,1],[73,1],[73,1],[73,1],[73,1],[73,1],[73,1],[73,1],[73,1],[75,4],[76,5],[77,5],[78,5],[79,3],[80,5],[81,4],[88,7],[83,4],[82,7],[92,1],[92,1],[93,3],[94,4],[94,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 console.log($$[$0-1]); return ($$[$0-1]); 
break;
case 2:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 3:
 this.$ = [$$[$0]]; 
break;
case 35:
 this.$ = $$[$0-2] + "=(" + ($$[$0-1]/30) + "," + ($$[$0]/30) + ")"; 
break;
case 36: case 37: case 38: case 41: case 47: case 61: case 62: case 63: case 64: case 66:
 this.$ = ""; 
break;
case 39: case 55:
 this.$ = $$[$0-2] + "=Line(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 40: case 42:
 this.$ = "Line(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 43: case 44: case 89:
 this.$ = "Segment(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 45:
 this.$ = $$[$0-2] + "=Circle(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 46:
 this.$ = "Circle(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 48:
 this.$ = $$[$0-2] + "=Intersect(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 49:
 this.$ = [
    $$[$0-3] + "=Intersect(" + $$[$0-1] + "," + $$[$0] + ",1)",
    $$[$0-2] + "=Intersect(" + $$[$0-1] + "," + $$[$0] + ",2)" ]; 
break;
case 50:
 this.$ = $$[$0-2] + "=Midpoint(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 51:
 this.$ = $$[$0-2] + "=Point(Segment(" + $$[$0-1] + "," + $$[$0] + ")," + (Math.random()/10+0.6) + ")"; 
break;
case 52:
 this.$ = $$[$0-2] + "=Point(Line(" + $$[$0-1] + "," + $$[$0] + ")," + (Math.random()/10+0.6) + ")"; 
break;
case 53:
 this.$ = $$[$0-2] + "=Point(Circle(" + $$[$0-1] + "," + $$[$0] + ")," + (Math.random()/2+0.25) + ")"; 
break;
case 54:
 this.$ = $$[$0-2] + "=Intersect(PerpendicularLine(" + $$[$0-1] + "," + $$[$0] + ")," + $$[$0] + ")"; 
break;
case 56:
 this.$ = $$[$0-2] + "=PerpendicularLine(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 57:
 this.$ = $$[$0-2] + "=PerpendicularBisector(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 58:
 this.$ = $$[$0-3] + "=AngleBisector(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 59:
 this.$ = $$[$0-3] + "=Rotate(" + $$[$0] + "," + $$[$0-1] + "°," + $$[$0-2] + ")"; 
break;
case 60:
 this.$ = $$[$0-3] + "=Translate(" + $$[$0] + ",Vector(" + $$[$0-2] + "," + $$[$0-1] + "))"; 
break;
case 65:
  this.$ = ""; 
break;
case 67:
 this.$ = "Prove(" + $$[$0-1] + ")"; 
break;
case 77:
 this.$ = "AreCollinear(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 78:
 this.$ = "ArePerpendicular(Line(" + $$[$0-3] + "," + $$[$0-2] + "),Line(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 79:
 this.$ = "AreParallel(Line(" + $$[$0-3] + "," + $$[$0-2] + "),Line(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 80:
 this.$ = "AreConcyclic(" + $$[$0-3] + "," + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 81:
 this.$ = "AreEqual(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 82:
 this.$ = "AreCongruent(Segment(" + $$[$0-3] + "," + $$[$0-2] + "),Segment(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 83:
 this.$ = "AreEqual(" + $$[$0-2] + ",Midpoint(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 84:
 this.$ = "AreCongruent(Angle(" + $$[$0-5] + "," + $$[$0-4] + "," + $$[$0-3] + "),Angle(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 85:
 this.$ = $$[$0-2] + "∈PerpendicularBisector(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 86:
 this.$ = "AreCongruent(" + $$[$0-4] + "," + $$[$0-1] + ")"; 
break;
case 90:
 this.$ = "Angle(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 91:
 this.$ = "Angle(Line(" + $$[$0-3] + "," + $$[$0-2] + "),Line(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:19,23:20,24:21,25:22,26:23,27:24,28:25,29:26,30:27,31:28,32:29,33:30,34:31,35:32,36:33,37:34,38:$V1,41:$V2,42:$V3,43:$V4,44:$V5,45:$V6,46:$V7,47:$V8,48:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd,53:$Ve,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu},{1:[3]},{5:[1,65],6:66,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:19,23:20,24:21,25:22,26:23,27:24,28:25,29:26,30:27,31:28,32:29,33:30,34:31,35:32,36:33,37:34,38:$V1,41:$V2,42:$V3,43:$V4,44:$V5,45:$V6,46:$V7,47:$V8,48:$V9,49:$Va,50:$Vb,51:$Vc,52:$Vd,53:$Ve,54:$Vf,55:$Vg,56:$Vh,57:$Vi,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq,68:$Vr,69:$Vs,70:$Vt,71:$Vu},o($Vv,[2,3]),o($Vv,[2,4]),o($Vv,[2,5]),o($Vv,[2,6]),o($Vv,[2,7]),o($Vv,[2,8]),o($Vv,[2,9]),o($Vv,[2,10]),o($Vv,[2,11]),o($Vv,[2,12]),o($Vv,[2,13]),o($Vv,[2,14]),o($Vv,[2,15]),o($Vv,[2,16]),o($Vv,[2,17]),o($Vv,[2,18]),o($Vv,[2,19]),o($Vv,[2,20]),o($Vv,[2,21]),o($Vv,[2,22]),o($Vv,[2,23]),o($Vv,[2,24]),o($Vv,[2,25]),o($Vv,[2,26]),o($Vv,[2,27]),o($Vv,[2,28]),o($Vv,[2,29]),o($Vv,[2,30]),o($Vv,[2,31]),o($Vv,[2,32]),o($Vv,[2,33]),o($Vv,[2,34]),{39:[1,67]},{39:[1,68]},{39:[1,69]},{39:[1,70]},{39:[1,71]},{39:[1,72]},{39:[1,73]},{39:[1,74]},{39:[1,75]},{39:[1,76]},{39:[1,77]},{39:[1,78]},{39:[1,79]},{39:[1,80]},{39:[1,81]},{39:[1,82]},{39:[1,83]},{39:[1,84]},{39:[1,85]},{39:[1,86]},{39:[1,87]},{39:[1,88]},{39:[1,89]},{72:[1,90]},{40:[1,91]},{40:[1,92]},{40:[1,93]},{40:[1,94]},{40:[1,95]},{40:[1,96]},{1:[2,1]},o($Vv,[2,2]),{40:[1,97]},o($Vv,[2,36]),o($Vv,[2,37]),o($Vv,[2,38]),{39:[1,98]},o($Vv,[2,41],{39:[1,99]}),{39:[1,100]},{39:[1,101]},{39:[1,102]},{39:[1,103]},o($Vv,[2,47],{39:[1,104]}),{39:[1,105]},{39:[1,106]},{39:[1,107]},{39:[1,108]},{39:[1,109]},{39:[1,110]},{39:[1,111]},{39:[1,112]},{39:[1,113]},{39:[1,114]},{39:[1,115]},{39:[1,116]},{53:[1,133],58:[1,129],59:[1,128],73:117,75:118,76:119,77:120,78:121,79:122,80:123,81:124,82:125,83:126,84:[1,127],85:[1,130],86:[1,131],87:[1,132],90:[1,135],91:[1,134]},{40:[1,136]},o($Vv,[2,62]),o($Vv,[2,63]),o($Vv,[2,64]),{40:[1,137]},{40:[1,138]},{40:[1,139]},{39:[1,140]},o($Vv,[2,40]),o($Vv,[2,42]),o($Vv,[2,43]),o($Vv,[2,44]),{39:[1,141]},o($Vv,[2,46]),{39:[1,142]},{39:[1,143]},{39:[1,144]},{39:[1,145]},{39:[1,146]},{39:[1,147]},{39:[1,148]},{39:[1,149]},{39:[1,150]},{39:[1,151]},{39:[1,152]},{40:[1,153]},{74:[1,154]},{74:[2,68]},{74:[2,69]},{74:[2,70]},{74:[2,71]},{74:[2,72]},{74:[2,73]},{74:[2,74]},{74:[2,75]},{74:[2,76]},{39:[1,155]},{39:[1,156]},{39:[1,157]},{39:[1,158]},{39:[1,159]},{39:[1,160]},{39:[1,161]},{72:[1,162]},{39:[1,163]},o($Vv,[2,61]),{40:[1,164]},{40:[1,165]},o($Vv,[2,35]),o($Vv,[2,39]),o($Vv,[2,45]),o($Vv,[2,48]),{39:[1,166]},o($Vv,[2,50]),o($Vv,[2,51]),o($Vv,[2,52]),o($Vv,[2,53]),o($Vv,[2,54]),o($Vv,[2,55]),o($Vv,[2,56]),o($Vv,[2,57]),{39:[1,167]},{39:[1,168]},o($Vv,[2,67]),{39:[1,169]},{39:[1,170]},{39:[1,171]},{39:[1,172]},{39:[1,173]},{39:[1,174]},{39:[1,175]},{92:176,93:177,94:178,95:$Vw,96:$Vx},{39:[1,181]},o($Vv,[2,66]),{40:[1,182]},o($Vv,[2,49]),o($Vv,[2,58]),o($Vv,[2,59]),{39:[1,183]},{39:[1,184]},{39:[1,185]},{39:[1,186]},{74:[2,81]},{39:[1,187]},{39:[1,188]},{74:[1,189]},{74:[2,87]},{74:[2,88]},{39:[1,190]},{39:[1,191]},{39:[1,192]},o($Vv,[2,65]),{74:[2,77]},{39:[1,193]},{39:[1,194]},{39:[1,195]},{39:[1,196]},{74:[2,83]},{72:[1,197]},{39:[1,198]},{39:[1,199]},{74:[2,85]},{74:[2,78]},{74:[2,79]},{74:[2,80]},{74:[2,82]},{92:200,93:177,94:178,95:$Vw,96:$Vx},{74:[2,89]},{39:[1,201]},{74:[1,202]},{39:[1,203],74:[2,90]},{74:[2,86]},{74:[2,91]}],
defaultActions: {65:[2,1],118:[2,68],119:[2,69],120:[2,70],121:[2,71],122:[2,72],123:[2,73],124:[2,74],125:[2,75],126:[2,76],173:[2,81],177:[2,87],178:[2,88],183:[2,77],188:[2,83],192:[2,85],193:[2,78],194:[2,79],195:[2,80],196:[2,82],198:[2,89],202:[2,86],203:[2,91]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:/* ignore comment */
break;
case 2:return 38;
break;
case 3:return 41;
break;
case 4:return 42;
break;
case 5:return 43;
break;
case 6:return 95;
break;
case 7:return 96;
break;
case 8:return 47;
break;
case 9:return 48;
break;
case 10:return 44;
break;
case 11:return 45;
break;
case 12:return 46;
break;
case 13:return 51;
break;
case 14:return 51;
break;
case 15:return 52;
break;
case 16:return 52;
break;
case 17:return 54;
break;
case 18:return 55;
break;
case 19:return 56;
break;
case 20:return 53;
break;
case 21:return 49;
break;
case 22:return 50;
break;
case 23:return 57;
break;
case 24:return 58;
break;
case 25:return 59;
break;
case 26:return 59;
break;
case 27:return 60;
break;
case 28:return 60;
break;
case 29:return 61;
break;
case 30:return 61;
break;
case 31:return 62;
break;
case 32:return 64;
break;
case 33:return 71;
break;
case 34:return 84;
break;
case 35:return 85;
break;
case 36:return 86;
break;
case 37:return 91;
break;
case 38:return 89;
break;
case 39:return 87;
break;
case 40:return 90;
break;
case 41:return 65;
break;
case 42:return 66;
break;
case 43:return 67;
break;
case 44:return 68;
break;
case 45:return 70;
break;
case 46:return 69;
break;
case 47:return 40
break;
case 48:return 39
break;
case 49:return 5
break;
case 50:return 72
break;
case 51:return 74
break;
case 52:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:%.*)/,/^(?:point\b)/,/^(?:drawpoint\b)/,/^(?:cmark\w*)/,/^(?:mark\w*)/,/^(?:segment\b)/,/^(?:angle\b)/,/^(?:drawsegment\b)/,/^(?:drawdashsegment\b)/,/^(?:line\b)/,/^(?:drawline\b)/,/^(?:drawdashline\b)/,/^(?:intersec\b)/,/^(?:intersection\b)/,/^(?:intersec2\b)/,/^(?:intersection2\b)/,/^(?:onsegment\b)/,/^(?:online\b)/,/^(?:oncircle\b)/,/^(?:midpoint\b)/,/^(?:circle\b)/,/^(?:drawcircle\b)/,/^(?:foot\b)/,/^(?:parallel\b)/,/^(?:perp\b)/,/^(?:perpendicular\b)/,/^(?:med\b)/,/^(?:mediatrice\b)/,/^(?:bis\b)/,/^(?:bisector\b)/,/^(?:rotate\b)/,/^(?:translate\b)/,/^(?:prove\b)/,/^(?:collinear\b)/,/^(?:cyclic\b)/,/^(?:identical\b)/,/^(?:equal\b)/,/^(?:eqangle\b)/,/^(?:same_length\b)/,/^(?:pbisector\b)/,/^(?:dim\b)/,/^(?:prooflimit\b)/,/^(?:prooflevel\b)/,/^(?:prover_timeout\b)/,/^(?:color\b)/,/^(?:area\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\w+)/,/^(?:$)/,/^(?:\{)/,/^(?:\})/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gclc2ggb;
exports.Parser = gclc2ggb.Parser;
exports.parse = function () { return gclc2ggb.parse.apply(gclc2ggb, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}