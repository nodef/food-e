[E numbers] are codes for substances that are permitted to be used as [food additives]
for use within the [European Union] and [EFTA]. Commonly found on [food labels],
their safety assessment and approval are the responsibility of the
[European Food Safety Authority].

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

| Method              | Action
|---------------------|-------
| [foode]             | Lists matching food additives.
| [load]              | Preloads food additive data (before use).
| [sql]               | Gives commands to insert data to SQL database.
| [csv]               | Gives path of data CSV file.
| [corpus]            | Keeps food additive data. {field}

<br>

[![nodef](https://merferry.glitch.me/card/food-e.svg)](https://nodef.github.io)

> Browserified, minified version of this package is [food-e.min].

![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/food-e)

[foode]: https://github.com/nodef/food-e/wiki
[load]: https://github.com/nodef/food-e/wiki/load
[sql]: https://github.com/nodef/food-e/wiki/sql
[csv]: https://github.com/nodef/food-e/wiki/csv
[corpus]: https://github.com/nodef/food-e/wiki/corpus
[E numbers]: https://en.wikipedia.org/wiki/E_number
[food additives]: https://en.wikipedia.org/wiki/Food_additive
[European Union]: https://en.wikipedia.org/wiki/European_Union
[EFTA]: https://en.wikipedia.org/wiki/European_Free_Trade_Association
[food labels]: https://en.wikipedia.org/wiki/Food_label
[European Food Safety Authority]: https://en.wikipedia.org/wiki/European_Food_Safety_Authority
[food colouring]: https://en.wikipedia.org/wiki/Food_colouring
[food-e.min]: https://www.npmjs.com/package/food-e.min
