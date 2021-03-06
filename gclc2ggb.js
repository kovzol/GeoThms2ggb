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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,11],$V1=[1,37],$V2=[1,38],$V3=[1,39],$V4=[1,40],$V5=[1,41],$V6=[1,42],$V7=[1,43],$V8=[1,44],$V9=[1,45],$Va=[1,46],$Vb=[1,47],$Vc=[1,48],$Vd=[1,49],$Ve=[1,50],$Vf=[1,51],$Vg=[1,52],$Vh=[1,53],$Vi=[1,54],$Vj=[1,55],$Vk=[1,56],$Vl=[1,57],$Vm=[1,58],$Vn=[1,59],$Vo=[1,60],$Vp=[1,61],$Vq=[1,63],$Vr=[1,64],$Vs=[1,65],$Vt=[1,66],$Vu=[1,68],$Vv=[1,67],$Vw=[1,62],$Vx=[5,14,40,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,68,69,70,71,72,73,74],$Vy=[1,194],$Vz=[1,195];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"prog":3,"proglist":4,"EOF":5,"stmt":6,"point_stmt":7,"drawpoint_stmt":8,"cmark_stmt":9,"mark_stmt":10,"line_stmt":11,"drawline_stmt":12,"drawdashline_stmt":13,"segment_stmt":14,"drawsegment_stmt":15,"drawdashsegment_stmt":16,"circle_stmt":17,"drawcircle_stmt":18,"intersec_stmt":19,"intersec2_stmt":20,"midpoint_stmt":21,"onsegment_stmt":22,"online_stmt":23,"oncircle_stmt":24,"foot_stmt":25,"parallel_stmt":26,"perp_stmt":27,"med_stmt":28,"bis_stmt":29,"rotate_stmt":30,"translate_stmt":31,"towards_stmt":32,"prove_stmt":33,"dim_stmt":34,"prooflimit_stmt":35,"prooflevel_stmt":36,"prover_timeout_stmt":37,"color_stmt":38,"area_stmt":39,"point":40,"VAR":41,"NUMBER":42,"drawpoint":43,"cmark":44,"mark":45,"line":46,"drawline":47,"drawdashline":48,"drawsegment":49,"drawdashsegment":50,"circle":51,"drawcircle":52,"intersec":53,"intersec2":54,"midpoint":55,"onsegment":56,"online":57,"oncircle":58,"foot":59,"parallel":60,"perp":61,"med":62,"bis":63,"rotate":64,"translate":65,"towards":66,"TWO":67,"dim":68,"prooflimit":69,"prooflevel":70,"prover_timeout":71,"area":72,"color":73,"prove":74,"LBRACE":75,"thesis":76,"RBRACE":77,"collinear_check":78,"perp_check":79,"parallel_check":80,"cyclic_check":81,"identical_check":82,"same_length_check":83,"midpoint_check":84,"equal_check":85,"eqangle_check":86,"pbisector_check":87,"collinear":88,"cyclic":89,"identical":90,"same_length":91,"eqangle":92,"pbisector":93,"equal":94,"expr":95,"segment_expr":96,"angle_expr":97,"segment":98,"angle":99,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"segment_stmt",40:"point",41:"VAR",42:"NUMBER",43:"drawpoint",44:"cmark",45:"mark",46:"line",47:"drawline",48:"drawdashline",49:"drawsegment",50:"drawdashsegment",51:"circle",52:"drawcircle",53:"intersec",54:"intersec2",55:"midpoint",56:"onsegment",57:"online",58:"oncircle",59:"foot",60:"parallel",61:"perp",62:"med",63:"bis",64:"rotate",65:"translate",66:"towards",67:"TWO",68:"dim",69:"prooflimit",70:"prooflevel",71:"prover_timeout",72:"area",73:"color",74:"prove",75:"LBRACE",77:"RBRACE",88:"collinear",89:"cyclic",90:"identical",91:"same_length",92:"eqangle",93:"pbisector",94:"equal",98:"segment",99:"angle"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[7,4],[8,2],[9,2],[10,2],[11,4],[12,3],[12,2],[13,3],[15,3],[16,3],[17,4],[18,3],[18,2],[19,4],[20,5],[21,4],[22,4],[23,4],[24,4],[25,4],[26,4],[27,4],[28,4],[29,5],[30,5],[31,5],[32,5],[34,3],[35,2],[36,2],[37,2],[39,5],[38,4],[33,4],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[76,1],[78,4],[79,5],[80,5],[81,5],[82,3],[83,5],[84,4],[86,7],[87,4],[85,7],[95,1],[95,1],[96,3],[97,4],[97,5]],
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
case 37:
 this.$ = $$[$0-2] + "=(" + ($$[$0-1]/30) + "," + ($$[$0]/30) + ")"; 
break;
case 38: case 39: case 40: case 43: case 49: case 64: case 65: case 66: case 67: case 69:
 this.$ = ""; 
break;
case 41: case 57:
 this.$ = $$[$0-2] + "=Line(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 42: case 44:
 this.$ = "Line(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 45: case 46: case 93:
 this.$ = "Segment(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 47:
 this.$ = $$[$0-2] + "=Circle(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 48:
 this.$ = "Circle(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 50:
 this.$ = $$[$0-2] + "=Intersect(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 51:
 this.$ = [
    $$[$0-3] + "=Intersect(" + $$[$0-1] + "," + $$[$0] + ",1)",
    $$[$0-2] + "=Intersect(" + $$[$0-1] + "," + $$[$0] + ",2)" ]; 
break;
case 52:
 this.$ = $$[$0-2] + "=Midpoint(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 53:
 this.$ = $$[$0-2] + "=Point(Segment(" + $$[$0-1] + "," + $$[$0] + ")," + (Math.random()/10+0.6) + ")"; 
break;
case 54:
 this.$ = $$[$0-2] + "=Point(Line(" + $$[$0-1] + "," + $$[$0] + ")," + (Math.random()/10+0.6) + ")"; 
break;
case 55:
 this.$ = $$[$0-2] + "=Point(Circle(" + $$[$0-1] + "," + $$[$0] + ")," + (Math.random()/2+0.25) + ")"; 
break;
case 56:
 this.$ = $$[$0-2] + "=Intersect(PerpendicularLine(" + $$[$0-1] + "," + $$[$0] + ")," + $$[$0] + ")"; 
break;
case 58:
 this.$ = $$[$0-2] + "=PerpendicularLine(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 59:
 this.$ = $$[$0-2] + "=PerpendicularBisector(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 60:
 this.$ = $$[$0-3] + "=AngleBisector(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 61:
 this.$ = $$[$0-3] + "=Rotate(" + $$[$0] + "," + $$[$0-1] + "°," + $$[$0-2] + ")"; 
break;
case 62:
 this.$ = $$[$0-3] + "=Translate(" + $$[$0] + ",Vector(" + $$[$0-2] + "," + $$[$0-1] + "))"; 
break;
case 63:
  this.$ = $$[$0-3] + "=Midpoint(" + $$[$0-2] + "," + $$[$0-1] + ")"; 
break;
case 68:
  this.$ = ""; 
break;
case 70:
 this.$ = "Prove(" + $$[$0-1] + ")"; 
break;
case 81:
 this.$ = "AreCollinear(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 82:
 this.$ = "ArePerpendicular(Line(" + $$[$0-3] + "," + $$[$0-2] + "),Line(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 83:
 this.$ = "AreParallel(Line(" + $$[$0-3] + "," + $$[$0-2] + "),Line(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 84:
 this.$ = "AreConcyclic(" + $$[$0-3] + "," + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 85:
 this.$ = "AreEqual(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 86:
 this.$ = "AreCongruent(Segment(" + $$[$0-3] + "," + $$[$0-2] + "),Segment(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 87:
 this.$ = "AreEqual(" + $$[$0-2] + ",Midpoint(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 88:
 this.$ = "AreCongruent(Angle(" + $$[$0-5] + "," + $$[$0-4] + "," + $$[$0-3] + "),Angle(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + "))"; 
break;
case 89:
 this.$ = $$[$0-2] + "∈PerpendicularBisector(" + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 90:
 this.$ = "AreCongruent(" + $$[$0-4] + "," + $$[$0-1] + ")"; 
break;
case 94:
 this.$ = "Angle(" + $$[$0-2] + "," + $$[$0-1] + "," + $$[$0] + ")"; 
break;
case 95:
 this.$ = "Angle(Line(" + $$[$0-3] + "," + $$[$0-2] + "),Line(" + $$[$0-1] + "," + $$[$0] + "))"; 
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:19,23:20,24:21,25:22,26:23,27:24,28:25,29:26,30:27,31:28,32:29,33:30,34:31,35:32,36:33,37:34,38:35,39:36,40:$V1,43:$V2,44:$V3,45:$V4,46:$V5,47:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve,56:$Vf,57:$Vg,58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo,66:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv,74:$Vw},{1:[3]},{5:[1,69],6:70,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,15:12,16:13,17:14,18:15,19:16,20:17,21:18,22:19,23:20,24:21,25:22,26:23,27:24,28:25,29:26,30:27,31:28,32:29,33:30,34:31,35:32,36:33,37:34,38:35,39:36,40:$V1,43:$V2,44:$V3,45:$V4,46:$V5,47:$V6,48:$V7,49:$V8,50:$V9,51:$Va,52:$Vb,53:$Vc,54:$Vd,55:$Ve,56:$Vf,57:$Vg,58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo,66:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv,74:$Vw},o($Vx,[2,3]),o($Vx,[2,4]),o($Vx,[2,5]),o($Vx,[2,6]),o($Vx,[2,7]),o($Vx,[2,8]),o($Vx,[2,9]),o($Vx,[2,10]),o($Vx,[2,11]),o($Vx,[2,12]),o($Vx,[2,13]),o($Vx,[2,14]),o($Vx,[2,15]),o($Vx,[2,16]),o($Vx,[2,17]),o($Vx,[2,18]),o($Vx,[2,19]),o($Vx,[2,20]),o($Vx,[2,21]),o($Vx,[2,22]),o($Vx,[2,23]),o($Vx,[2,24]),o($Vx,[2,25]),o($Vx,[2,26]),o($Vx,[2,27]),o($Vx,[2,28]),o($Vx,[2,29]),o($Vx,[2,30]),o($Vx,[2,31]),o($Vx,[2,32]),o($Vx,[2,33]),o($Vx,[2,34]),o($Vx,[2,35]),o($Vx,[2,36]),{41:[1,71]},{41:[1,72]},{41:[1,73]},{41:[1,74]},{41:[1,75]},{41:[1,76]},{41:[1,77]},{41:[1,78]},{41:[1,79]},{41:[1,80]},{41:[1,81]},{41:[1,82]},{41:[1,83]},{41:[1,84]},{41:[1,85]},{41:[1,86]},{41:[1,87]},{41:[1,88]},{41:[1,89]},{41:[1,90]},{41:[1,91]},{41:[1,92]},{41:[1,93]},{41:[1,94]},{41:[1,95]},{75:[1,96]},{42:[1,97]},{42:[1,98]},{42:[1,99]},{42:[1,100]},{42:[1,101]},{42:[1,102]},{1:[2,1]},o($Vx,[2,2]),{42:[1,103]},o($Vx,[2,38]),o($Vx,[2,39]),o($Vx,[2,40]),{41:[1,104]},o($Vx,[2,43],{41:[1,105]}),{41:[1,106]},{41:[1,107]},{41:[1,108]},{41:[1,109]},o($Vx,[2,49],{41:[1,110]}),{41:[1,111]},{41:[1,112]},{41:[1,113]},{41:[1,114]},{41:[1,115]},{41:[1,116]},{41:[1,117]},{41:[1,118]},{41:[1,119]},{41:[1,120]},{41:[1,121]},{41:[1,122]},{41:[1,123]},{41:[1,124]},{55:[1,142],60:[1,138],61:[1,137],76:125,78:126,79:127,80:128,81:129,82:130,83:131,84:132,85:133,86:134,87:135,88:[1,136],89:[1,139],90:[1,140],91:[1,141],92:[1,144],93:[1,145],94:[1,143]},{42:[1,146]},o($Vx,[2,65]),o($Vx,[2,66]),o($Vx,[2,67]),{42:[1,147]},{42:[1,148]},{42:[1,149]},{41:[1,150]},o($Vx,[2,42]),o($Vx,[2,44]),o($Vx,[2,45]),o($Vx,[2,46]),{41:[1,151]},o($Vx,[2,48]),{41:[1,152]},{41:[1,153]},{41:[1,154]},{41:[1,155]},{41:[1,156]},{41:[1,157]},{41:[1,158]},{41:[1,159]},{41:[1,160]},{41:[1,161]},{41:[1,162]},{42:[1,163]},{41:[1,164]},{41:[1,165]},{77:[1,166]},{77:[2,71]},{77:[2,72]},{77:[2,73]},{77:[2,74]},{77:[2,75]},{77:[2,76]},{77:[2,77]},{77:[2,78]},{77:[2,79]},{77:[2,80]},{41:[1,167]},{41:[1,168]},{41:[1,169]},{41:[1,170]},{41:[1,171]},{41:[1,172]},{41:[1,173]},{75:[1,174]},{41:[1,175]},{41:[1,176]},o($Vx,[2,64]),{42:[1,177]},{42:[1,178]},o($Vx,[2,37]),o($Vx,[2,41]),o($Vx,[2,47]),o($Vx,[2,50]),{41:[1,179]},o($Vx,[2,52]),o($Vx,[2,53]),o($Vx,[2,54]),o($Vx,[2,55]),o($Vx,[2,56]),o($Vx,[2,57]),o($Vx,[2,58]),o($Vx,[2,59]),{41:[1,180]},{41:[1,181]},{41:[1,182]},{67:[1,183]},o($Vx,[2,70]),{41:[1,184]},{41:[1,185]},{41:[1,186]},{41:[1,187]},{41:[1,188]},{41:[1,189]},{41:[1,190]},{95:191,96:192,97:193,98:$Vy,99:$Vz},{41:[1,196]},{41:[1,197]},o($Vx,[2,69]),{42:[1,198]},o($Vx,[2,51]),o($Vx,[2,60]),o($Vx,[2,61]),o($Vx,[2,62]),o($Vx,[2,63]),{41:[1,199]},{41:[1,200]},{41:[1,201]},{41:[1,202]},{77:[2,85]},{41:[1,203]},{41:[1,204]},{77:[1,205]},{77:[2,91]},{77:[2,92]},{41:[1,206]},{41:[1,207]},{41:[1,208]},{41:[1,209]},o($Vx,[2,68]),{77:[2,81]},{41:[1,210]},{41:[1,211]},{41:[1,212]},{41:[1,213]},{77:[2,87]},{75:[1,214]},{41:[1,215]},{41:[1,216]},{41:[1,217]},{77:[2,89]},{77:[2,82]},{77:[2,83]},{77:[2,84]},{77:[2,86]},{95:218,96:192,97:193,98:$Vy,99:$Vz},{77:[2,93]},{41:[1,219]},{41:[1,220]},{77:[1,221]},{41:[1,222],77:[2,94]},{41:[1,223]},{77:[2,90]},{77:[2,95]},{77:[2,88]}],
defaultActions: {69:[2,1],126:[2,71],127:[2,72],128:[2,73],129:[2,74],130:[2,75],131:[2,76],132:[2,77],133:[2,78],134:[2,79],135:[2,80],188:[2,85],192:[2,91],193:[2,92],199:[2,81],204:[2,87],209:[2,89],210:[2,82],211:[2,83],212:[2,84],213:[2,86],215:[2,93],221:[2,90],222:[2,95],223:[2,88]},
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
case 2:return 40;
break;
case 3:return 43;
break;
case 4:return 44;
break;
case 5:return 45;
break;
case 6:return 98;
break;
case 7:return 99;
break;
case 8:return 49;
break;
case 9:return 50;
break;
case 10:return 46;
break;
case 11:return 47;
break;
case 12:return 48;
break;
case 13:return 53;
break;
case 14:return 53;
break;
case 15:return 54;
break;
case 16:return 54;
break;
case 17:return 56;
break;
case 18:return 57;
break;
case 19:return 58;
break;
case 20:return 55;
break;
case 21:return 51;
break;
case 22:return 52;
break;
case 23:return 59;
break;
case 24:return 60;
break;
case 25:return 61;
break;
case 26:return 61;
break;
case 27:return 62;
break;
case 28:return 62;
break;
case 29:return 63;
break;
case 30:return 63;
break;
case 31:return 64;
break;
case 32:return 65;
break;
case 33:return 66;
break;
case 34:return 67;
break;
case 35:return 74;
break;
case 36:return 88;
break;
case 37:return 89;
break;
case 38:return 90;
break;
case 39:return 94;
break;
case 40:return 92;
break;
case 41:return 91;
break;
case 42:return 93;
break;
case 43:return 68;
break;
case 44:return 69;
break;
case 45:return 70;
break;
case 46:return 71;
break;
case 47:return 73;
break;
case 48:return 72;
break;
case 49:return 42
break;
case 50:return 41
break;
case 51:return 5
break;
case 52:return 75
break;
case 53:return 77
break;
case 54:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:%.*)/,/^(?:point\b)/,/^(?:drawpoint\b)/,/^(?:cmark\w*)/,/^(?:mark\w*)/,/^(?:segment\b)/,/^(?:angle\b)/,/^(?:drawsegment\b)/,/^(?:drawdashsegment\b)/,/^(?:line\b)/,/^(?:drawline\b)/,/^(?:drawdashline\b)/,/^(?:intersec\b)/,/^(?:intersection\b)/,/^(?:intersec2\b)/,/^(?:intersection2\b)/,/^(?:onsegment\b)/,/^(?:online\b)/,/^(?:oncircle\b)/,/^(?:midpoint\b)/,/^(?:circle\b)/,/^(?:drawcircle\b)/,/^(?:foot\b)/,/^(?:parallel\b)/,/^(?:perp\b)/,/^(?:perpendicular\b)/,/^(?:med\b)/,/^(?:mediatrice\b)/,/^(?:bis\b)/,/^(?:bisector\b)/,/^(?:rotate\b)/,/^(?:translate\b)/,/^(?:towards\b)/,/^(?:2\b)/,/^(?:prove\b)/,/^(?:collinear\b)/,/^(?:cyclic\b)/,/^(?:identical\b)/,/^(?:equal\b)/,/^(?:eqangle\b)/,/^(?:same_length\b)/,/^(?:pbisector\b)/,/^(?:dim\b)/,/^(?:prooflimit\b)/,/^(?:prooflevel\b)/,/^(?:prover_timeout\b)/,/^(?:color\b)/,/^(?:area\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\w+)/,/^(?:$)/,/^(?:\{)/,/^(?:\})/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],"inclusive":true}}
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