const GGBPlotter = require("node-geogebra").GGBPlotter;

var fs = require('fs');
const util = require('util');
const fsOpen = util.promisify(fs.open);
const fsWrite = util.promisify(fs.writeFile);
const fsClose = util.promisify(fs.close);

var lastLabel = 0;
var parser = require("./gclc2ggb").parser;

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

async function GGBScript2GGBFile(filename, ggbScript) {
  var plotter = new GGBPlotter({ggb: "remote", plotters: 1});
  await plotter.evalGGBScript(['SetPerspective("AG")']);
  // await plotter.evalGGBScript(["ZoomIn(-20,0,160,120)"]);
  // await plotter.evalGGBScript(["ZoomOut(30)"]);
  await plotter.exec("setGridVisible", [false]);
  await plotter.exec("setAxesVisible", [false, false]);
  await plotter.evalGGBScript(ggbScript, 800, 600);
  // await plotter.evalGGBScript(["SetAxesRatio(100,100)"], 800, 600);
  var ggb = await plotter.export64("ggb");
  await plotter.release(); 
  var fileDescriptor = await fsOpen(filename, 'w');
  var ggbRaw = Buffer.from(ggb, 'base64');
  await fsWrite(fileDescriptor, ggbRaw);
  await fsClose(fileDescriptor);
  console.log(filename + ": finished");
  }

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "GeoThms-user",
  password: "GeoThms-password",
  database: "GeoThms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL server");
  // proverId = 4 means that Coq was used (unsupported here)
  var query = "select distinct teoId, code from demonstrations where proverId != 4 order by teoId;";
  con.query(query, function (err, result, fields) {
    processQuery (err, result, fields);
    }
  );
});

async function processQuery (err, result, fields) {
    if (err) throw err;
    var rows = result.length;
    for (var i = 0; i < rows; i++) {
      var gclcScript = result[i].code.toString();
      var ggbScript = gclc2ggb(gclcScript);
      if (ggbScript != null) {
        var proveLines = [];
        // Finding possible multiple Prove commands
        current = 0;
        for (var j = 0; j < ggbScript.length; j++) {
          var prove = ggbScript[j].match( /^Prove/ );
          if (prove != null) {
            current++;
            var filename = result[i].teoId + "-" + (current) + ".ggb";
            console.log(filename + ": processing...");
            proveLines.push(true);
            ggbScriptCurrent = [];
            for (var k = 0; k <= j; k++) {
              if (!proveLines[k] || k == j) {
                ggbScriptCurrent.push(ggbScript[k]);
                }
              }
            await GGBScript2GGBFile(filename, ggbScriptCurrent);
            }
          else
            proveLines.push(false);
          }
        } else {
        var gclcFilename = result[i].teoId + ".gcl";
        console.log(gclcFilename + ": saving");
        var fileDescriptor = await fsOpen(gclcFilename, 'w');
        await fsWrite(fileDescriptor, gclcScript);
        await fsClose(fileDescriptor);
        }
      }
    process.exit();
  }

function nextLabel() {
  lastLabel++;
  return "l_{" + lastLabel + "}";
  }

function gclc2ggb(program) {
  try {
    return flatten(parser.parse(program));
    }
  catch (err) {
    console.log(err);
    return null;
    }
  }
