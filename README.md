# GeoThms2ggb
Convert the GeoThms database to GeoGebra files

This tool converts entries from the [GeoThms database](http://hilbert.mat.uc.pt/TGTP/index.php) to [GeoGebra](http://www.geogebra.org) files.
It is based on the [node-geogebra](https://github.com/jmulet/node-geogebra) package.

# Usage #

1. Download the SQL database *GeothmsWithoutUsers* from [TGTP Downloads](http://hilbert.mat.uc.pt/TGTP/Downloads/).
2. Create a MySQL database *GeoThms* and import the downloaded database.
3. Grant access to the user *GeoThms-user* with password *GeoThms-password* to the database *GeoThms*.
4. Install [node-geogebra](https://github.com/jmulet/node-geogebra) (and maybe some other prerequisites).
5. Run the converter script by entering `node GeoThms2ggb.js`.

# Disclaimer #

The script is in a very early stage. It can convert some [GCLC](http://poincare.matf.bg.ac.rs/~janicic/gclc/) code
already, but not all statements are implemented. Also, some files will be processed slowly or a timeout
can be expected.
