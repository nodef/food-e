[E numbers] are codes for substances that are permitted to be used as [food additives]
for use within the [European Union] and [EFTA]. The "E" stands for "Europe". Commonly
found on [food labels], their safety assessment and approval are the responsibility
of the [European Food Safety Authority].

Having a single unified list for food additives was first agreed upon in 1962 with
[food colouring]. In 1964, the directives for preservatives were added, 1970 for
antioxidants and 1974 for the emulsifiers, stabilisers, thickeners and gelling
agents.


## console

```bash
foode "E101a"
# E101a: Riboflavin-5'-Phosphate
# .type: color (Yellow-orange); .status: e

foode "101 a"
# E101a: Riboflavin-5'-Phosphate
# .type: color (Yellow-orange); .status: e

foode "riboflavin"
# E101a: Riboflavin-5'-Phosphate
# .type: color (Yellow-orange); .status: e
#
# E106: Riboflavin-5-Sodium Phosphate
# .type: color (Yellow); .status: 
# ...
```

### reference 

```bash
foode [options] <query>
# query: code, name, type, or status of food additive
# Options:
# --help: show this help
# --silent: hide error messages

# Environment variables:
$FOODE_SILENT # hide error messages (0)
```
<br>


## javascript

```javascript
const foode = require('food-e');

foode('E101a');
// [ { code: 'E101a',
//     names: 'Riboflavin-5\'-Phosphate',
//     type: 'color (Yellow-orange)',
//     status: 'e' } ]

foode('101 a');
// [ { code: 'E101a',
//     names: 'Riboflavin-5\'-Phosphate',
//     type: 'color (Yellow-orange)',
//     status: 'e' } ]

foode('riboflavin');
// [ { code: 'E101a',
//     names: 'Riboflavin-5\'-Phosphate',
//     type: 'color (Yellow-orange)',
//     status: 'e' },
//   { code: 'E106',
//     names: 'Riboflavin-5-Sodium Phosphate',
//     type: 'color (Yellow)',
//     status: '' },
//   ... ]
```

### reference

```javascript
foode.corpus // Map {code => {code, names, type, status}}
foode.load() // true (corpus loaded)
foode.sql([table], [options]) // sql commands
foode.csv()  // path to csv file
foode(query)
// -> [{code, names, type, status}]
```
<br>
<br>

[![nodef](https://merferry.glitch.me/card/food-e.svg)](https://nodef.github.io)

[E numbers]: https://en.wikipedia.org/wiki/E_number
[food additives]: https://en.wikipedia.org/wiki/Food_additive
[European Union]: https://en.wikipedia.org/wiki/European_Union
[EFTA]: https://en.wikipedia.org/wiki/European_Free_Trade_Association
[food labels]: https://en.wikipedia.org/wiki/Food_label
[European Food Safety Authority]: https://en.wikipedia.org/wiki/European_Food_Safety_Authority
[food colouring]: https://en.wikipedia.org/wiki/Food_colouring
