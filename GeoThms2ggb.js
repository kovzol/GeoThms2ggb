const GGBPlotter = require("node-geogebra").GGBPlotter;

var fs = require('fs');
const util = require('util');
const fsOpen = util.promisify(fs.open);
const fsWrite = util.promisify(fs.writeFile);
const fsClose = util.promisify(fs.close);

var lastLabel = 0;

async function GGBScript2GGBFile(filename, ggbScript) {
  var plotter = new GGBPlotter({ggb: "remote", plotters: 3});
  await plotter.evalGGBScript(ggbScript);
  // this is not (yet?) working in node-geogebra:
  // await plotter.exec("setGridVisible", ["false"]);
  await plotter.evalGGBScript(["ZoomIn(-10,-30,120,100)"], 600, 600);
  var ggb = await plotter.export64("ggb");
  await plotter.release(); 
  console.log(filename + " plotted");
  fileDescriptor = await fsOpen(filename, 'w');
  var ggbRaw = Buffer.from(ggb, 'base64');
  await fsWrite(fileDescriptor, ggbRaw);
  await fsClose(fileDescriptor);
  console.log(filename + " saved");
  filesProcessed++;
  if (!processingTable && filesProcessed == filesToProcess) {
    process.exit();
    }
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
    if (err) throw err;
    var rows = result.length;
    filesToProcess = 0;
    filesProcessed = 0;
    processingTable = true;
    for (var i = 0; i < rows; i++) {
      var gclcScript = result[i].code.toString().split("\n");
      var filename = result[i].teoId + ".ggb";
      var ggbScript = gclc2ggb(gclcScript);
      if (ggbScript != null) {
        console.log(filename + " is to be processed");
        filesToProcess++;
        // console.log("gclcScript: " + gclcScript);
        // console.log("ggbScript: " + ggbScript);
        GGBScript2GGBFile(filename, ggbScript.split("\n"));
        }
      }
    processingTable = false;
  });
});

function nextLabel() {
  lastLabel++;
  return "l_{" + lastLabel + "}";
  }

function gclc2ggb(program) {
  var lines = program.length;
  var output = "";
  for (var i = 0; i < lines; i++) {
    line = program[i].replace(/[\r]+$/, '');
    found = false;
    var result = line.match( /^\s*line\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
    if (result != null) {
      output += result[1] + "=Line(" + result[2] + "," + result[3] + ")\n";
      found = true;
      }
    if (!found) {
      result = line.match( /^\s*point\s*([\w]+)\s*(\d+\.?\d*|\.\d+)\s*(\d+\.?\d*|\.\d+)\s*$/ );
      if (result != null) {
        output += result[1] + "=(" + result[2] + "," + result[3] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*intersec(tion)*\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[2] + "=Intersect(" + result[3] + "," + result[4] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*intersec(tion)*2\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[2] + "=Intersect(" + result[4] + "," + result[5] + ",1)\n";
        output += result[3] + "=Intersect(" + result[4] + "," + result[5] + ",2)\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*intersec(tion)*\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[2] + "=Intersect(Line(" + result[3] + "," + result[4] + "),Line(" + result[5] + "," + result[6] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*drawsegment\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += "Segment(" + result[1] + "," + result[2] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*drawdashsegment\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += "Segment(" + result[1] + "," + result[2] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*onsegment\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Point(Segment(" + result[2] + "," + result[3] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*online\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Point(Line(" + result[2] + "," + result[3] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*oncircle\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Point(Circle(" + result[2] + "," + result[3] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*midpoint\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Midpoint(" + result[2] + "," + result[3] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*circle\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Circle(" + result[2] + "," + result[3] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*drawcircle\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += "Circle(" + result[1] + "," + result[2] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*foot\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Intersect(PerpendicularLine(" + result[2] + "," + result[3] + ")," + result[3] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*parallel\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[1] + "=Line(" + result[2] + "," + result[3] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*perp(endicular)*\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[2] + "=PerpendicularLine(" + result[3] + "," + result[4] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*med(iatrice)*\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) {
        output += result[2] + "=PerpendicularBisector(" + result[3] + "," + result[4] + ")\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*prove\s*{\s*collinear\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*}\s*$/ );
      if (result != null) {
        output += "Prove(AreCollinear(" + result[1] + "," + result[2] + "," + result[3] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*prove\s*{\s*perpendicular\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*}\s*$/ );
      if (result != null) {
        output += "Prove(ArePerpendicular(Line(" + result[1] + "," + result[2] + "),Line(" + result[3] + "," + result[4] + ")))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*prove\s*{\s*parallel\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*}\s*$/ );
      if (result != null) {
        output += "Prove(AreParallel(Line(" + result[1] + "," + result[2] + "),Line(" + result[3] + "," + result[4] + ")))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*prove\s*{\s*cyclic\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*([\w]+)\s*}\s*$/ );
      if (result != null) {
        output += "Prove(AreConcyclic(" + result[1] + "," + result[2] + "," + result[3] + "," + result[4] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*prove\s*{\s*identical\s*([\w]+)\s*([\w]+)\s*}\s*$/ );
      if (result != null) {
        output += "Prove(AreEqual(" + result[1] + "," + result[2] + "))\n";
        found = true;
        }
      }
    if (!found) {
      result = line.match( /^\s*cmark_([\w]+)\s*([\w]+)\s*$/ );
      if (result != null) // cmark_... is not yet implemented
        found = true;
      }
    if (!found) {
      result = line.match( /^\s*prover_timeout\s*(\d+\.?\d*|\.\d+)\s*$/ );
      if (result != null) // not implemented
        found = true;
      }
    if (!found) {
      result = line.match( /^\s*dim\s*(\d+\.?\d*|\.\d+)\s*(\d+\.?\d*|\.\d+)\s*$/ );
      if (result != null) // not implemented
        found = true;
      }
    if (!found) {
      result = line.match( /^\s*prooflimit\s*(\d+\.?\d*|\.\d+)\s*$/ );
      if (result != null) // not implemented
        found = true;
      }
    if (!found) {
      result = line.match( /^\s*$/ ); // empty line
      if (result != null)
        found = true;
      }
    if (!found) {
      result = line.match( /^\s*%/ ); // comment
      if (result != null)
        found = true;
      }
    if (!found) {
      console.log("Implementation required for '" + line + "'");
      return null; // implementation required
      }
    }
  return output;
  }
