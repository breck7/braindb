{


class abstractTrueBaseColumnParser extends GrammarBackedNode {
      get columnNameCell() {
      return this.getWord(0)
    }
get isColumn() { return true }
get typeForCsvDocs() { return `unspecified` }
get columnValue() {
 return this.content
}
get columnName() {
 return this.definition.cruxPathAsColumnName
}
    }

class abstractUrlColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get urlCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `url` }
    }

class abstractAtlasParser extends abstractUrlColumnParser {
      
    }

class atlasParser extends abstractAtlasParser {
      
    }

class atlasPaperParser extends abstractAtlasParser {
      
    }

class brainMuseumParser extends abstractAtlasParser {
      get sourceDomain() { return `brainmuseum.org` }
    }

class ebrainsParser extends abstractAtlasParser {
      get sourceDomain() { return `ebrains.eu` }
    }

class referenceParser extends abstractUrlColumnParser {
      
    }

class wikipediaParser extends abstractUrlColumnParser {
      get sourceDomain() { return `wikipedia.org` }
    }

class abstractUrlGuidColumnParser extends abstractUrlColumnParser {
      
    }

class countryParser extends abstractTrueBaseColumnParser {
      get countryNameCell() {
      return this.getWordsFrom(0)
    }
    }

class abstractStringColumnParser extends abstractTrueBaseColumnParser {
      get stringCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `string` }
    }

class descriptionParser extends abstractStringColumnParser {
      
    }

class titleParser extends abstractStringColumnParser {
      
    }

class abstractStringListColumnParser extends abstractStringColumnParser {
      get typeForCsvDocs() { return `string[]` }
    }

class abstractTrueBaseLinksColumnParser extends abstractStringListColumnParser {
      get trueBaseIdCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `trueBaseId[]` }
get trueBaseIds() {
 return this.getWordsFrom(1)
}
updateTruebaseIds(oldTrueBaseId, newTrueBaseId) {
 this.setContent(
  this.getWordsFrom(1)
   .map((word) => (word === oldTrueBaseId ? newTrueBaseId : word))
   .join(" ")
 )
}
    }

class abstractNumericColumnParser extends abstractTrueBaseColumnParser {
      get typeForCsvDocs() { return `number` }
    }

class abstractIntColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get intCell() {
      return parseInt(this.getWord(1))
    }
get typeForCsvDocs() { return `integer` }
    }

class abstractYearColumnParser extends abstractIntColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get yearCell() {
      return parseFloat(this.getWord(1))
    }
    }

class appearedParser extends abstractYearColumnParser {
      
    }

class abstractCountColumnParser extends abstractIntColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get countCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractPopulationCountColumnParser extends abstractCountColumnParser {
      
    }

class abstractComputedEstimateColumnParser extends abstractCountColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractComputedSumColumnParser extends abstractIntColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractComputedRankColumnParser extends abstractIntColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractFloatColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get floatCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractPercentageColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get percentCell() {
      return this.getWord(1)
    }
    }

class abstractStringBlobColumnParser extends abstractTrueBaseColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
get typeForCsvDocs() { return `multilineString` }
get columnValue() {
 return this.childrenToString()
}
    }

class modelParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class abstractDelimitedValuesBlobColumnParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class abstractCodeColumnParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class abstractEnumColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get enumCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `enum` }
    }

class typeParser extends abstractEnumColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get typeCell() {
      return this.getWord(1)
    }
get typeCell() {
      return this.getWordsFrom(2)
    }
    }

class abstractWordColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get wordCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `word` }
    }

class abstractBooleanColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get boolCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `boolean` }
    }

class abstractOneWordGuidColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get externalGuidCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `guid` }
    }

class abstractMultiwordGuidColumnParser extends abstractTrueBaseColumnParser {
      get externalGuidCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `guid` }
    }

class abstractHashMapColumnParser extends abstractTrueBaseColumnParser {
      get typeForCsvDocs() { return `multilineStringMap` }
get columnValue() {
 return this.childrenToString()
}
    }

class abstractAnnualPopulationCountMapParser extends abstractHashMapColumnParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(annualPopulationCountParser, undefined, undefined)
  }
    }

class braindbParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(trueBaseErrorParser, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"atlas" : atlasParser,
"atlasPaper" : atlasPaperParser,
"brainMuseum" : brainMuseumParser,
"ebrains" : ebrainsParser,
"reference" : referenceParser,
"wikipedia" : wikipediaParser,
"country" : countryParser,
"description" : descriptionParser,
"title" : titleParser,
"appeared" : appearedParser,
"model" : modelParser,
"type" : typeParser}), [{regex: /^$/, parser: blankLineParser}])
  }
get fileExtension() { return `bdb` }
get tableName() { return `braindb` }
static cachedHandGrammarProgramRoot = new HandGrammarProgram(`// WorldWideColumns is an experimental attempt to define reusuable base abstract column types for TrueBases.
// Version 2.0.0
// Cell Parsers
// Enum Parsers
// Numeric cell parsers
// Common numeric cell extensions
// String Cell Parsers
// Line Parsers
// The main line parser. Anything extending this will be included in the CSV dumps.
// Common string parsers
// Common blob parsers
// Links between TrueBase files
// Boolean column node
// Commmon numeric parsers
// Common time parsers
// Common miscellaneous parsers
// URL Parsers
// GUID Parsers
// Hashmap parsers
// Common population columns
// Common computed types


















countryNameCell
 extends stringCell
typeCell
 enum species part condition procedure model philosophy text
 highlightScope constant.language
blankCell
anyCell
enumCell
boolCell
 extends enumCell
 enum true false
numberCell
intCell
 extends numberCell
 highlightScope constant.numeric.integer
floatCell
 extends numberCell
 highlightScope constant.numeric.float
percentCell
 highlightScope constant.numeric.integer
 regex \\d+%
countCell
 extends intCell
populationCountCell
 description A count of people.
 extends countCell
yearCell
 extends intCell
stringCell
 highlightScope string
wordCell
 extends stringCell
 description Any string except for a blank cell.
 regex .+
columnNameCell
 highlightScope keyword
 regex [a-zA-Z0-9]+
trueBaseIdCell
 description A global identifier for this entity in a TrueBase. Currently a very restricted character set to ensure compatibility between a wide variety of URLs and filesystems.
 regex [a-z0-9\\-\\.]+
 highlightScope string
 enum acupuncture alzheimers-disease amygdala anxiety-disorder atharvaveda attention-deficit-hyperactivity-disorder autism-spectrum-disorder ayurveda basal-ganglia bipolar-disorder brain-tumor c-elegans cat cerebellum cerebrum corpus-callosum dementia depression dog edwin-smith-papyrus elephant epilepsy fruit-fly germ-theory hippocampus huangchi-neijing human humoral-theory huntingtons-disease hypothalamus kangaroo miasma-theory midbrain migraine monkey mouse multiple-sclerosis narcolepsy obsessive-compulsive-disorder octopus parkinsons-disease pons post-traumatic-stress-disorder rabbit rat schizophrenia stroke thalamus tourette-syndrome traumatic-brain-injury trepanation zebra zebrafish
urlCell
 highlightScope constant.language
 regex (ftp|https?)://.+
externalGuidCell
 description A GUID from another site.
fileNameCell
 highlightScope string
abstractTrueBaseColumnParser
 cells columnNameCell
 string typeForCsvDocs unspecified
 cruxFromId
 boolean isColumn true
 single
 javascript
  get columnValue() {
   return this.content
  }
  get columnName() {
   return this.definition.cruxPathAsColumnName
  }
abstractUrlColumnParser
 string typeForCsvDocs url
 cells columnNameCell urlCell
 extends abstractTrueBaseColumnParser
abstractAtlasParser
 extends abstractUrlColumnParser
 description What is the URL to a brain atlas or virtual atlas for this species?
 // todo: add constraint, like "naIfTypeNot species"
atlasParser
 extends abstractAtlasParser
atlasPaperParser
 extends abstractAtlasParser
 description What is a URL to a paper about an atlas for this species?
brainMuseumParser
 extends abstractAtlasParser
 description What is the URL to this species on BrainMuseum.org?
 string sourceDomain brainmuseum.org
ebrainsParser
 extends abstractAtlasParser
 description What is the URL to an EBrains atlas for this species?
 string sourceDomain ebrains.eu
referenceParser
 extends abstractUrlColumnParser
 description What is a URL to a reference about this thing?
 single false
wikipediaParser
 extends abstractUrlColumnParser
 description What is the URL of this concept on Wikipedia, if and only if it has a page dedicated to it?
 string sourceDomain wikipedia.org
abstractUrlGuidColumnParser
 description A column containing a URL that is also a Globablly Unique Identifier (GUID) for an entity on that site.
 extends abstractUrlColumnParser
countryParser
 uniqueLine
 description What country did this first appear in?
 catchAllCellType countryNameCell
 extends abstractTrueBaseColumnParser
 single false
abstractStringColumnParser
 string typeForCsvDocs string
 catchAllCellType stringCell
 extends abstractTrueBaseColumnParser
descriptionParser
 extends abstractStringColumnParser
 description What is a short description of this thing?
titleParser
 description What is the title of this concept?
 extends abstractStringColumnParser
 required
abstractStringListColumnParser
 string typeForCsvDocs string[]
 description A list of strings separated by the \`listDelimiter\`. The default \`listDelimiter\` is space.
 extends abstractStringColumnParser
 listDelimiter  
abstractTrueBaseLinksColumnParser
 description Links to other files in the TrueBase.
 catchAllCellType trueBaseIdCell
 string typeForCsvDocs trueBaseId[]
 extends abstractStringListColumnParser
 javascript
  get trueBaseIds() {
   return this.getWordsFrom(1)
  }
  updateTruebaseIds(oldTrueBaseId, newTrueBaseId) {
   this.setContent(
    this.getWordsFrom(1)
     .map((word) => (word === oldTrueBaseId ? newTrueBaseId : word))
     .join(" ")
   )
  }
abstractNumericColumnParser
 string typeForCsvDocs number
 extends abstractTrueBaseColumnParser
abstractIntColumnParser
 string typeForCsvDocs integer
 cells columnNameCell intCell
 extends abstractNumericColumnParser
abstractYearColumnParser
 cells columnNameCell yearCell
 extends abstractIntColumnParser
appearedParser
 description What year did this first appear?
 extends abstractYearColumnParser
abstractCountColumnParser
 description A positive count of something. People, for example. Min is 0.
 cells columnNameCell countCell
 extends abstractIntColumnParser
abstractPopulationCountColumnParser
 extends abstractCountColumnParser
abstractComputedEstimateColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractCountColumnParser
abstractComputedSumColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractIntColumnParser
abstractComputedRankColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractIntColumnParser
abstractFloatColumnParser
 cells columnNameCell floatCell
 extends abstractNumericColumnParser
abstractPercentageColumnParser
 cells columnNameCell percentCell
 extends abstractNumericColumnParser
abstractStringBlobColumnParser
 string typeForCsvDocs multilineString
 extends abstractTrueBaseColumnParser
 baseParser blobParser
 javascript
  get columnValue() {
   return this.childrenToString()
  }
modelParser
 description What is a representative of this model?
 extends abstractStringBlobColumnParser
abstractDelimitedValuesBlobColumnParser
 description A CSV, TSV, or other delimited blob of text.
 // todo: figure out how we want to dump these in CSV export.
 extends abstractStringBlobColumnParser
abstractCodeColumnParser
 extends abstractStringBlobColumnParser
 baseParser blobParser
abstractEnumColumnParser
 string typeForCsvDocs enum
 cells columnNameCell enumCell
 extends abstractTrueBaseColumnParser
typeParser
 description What kind(s) of concept is this?
 cells columnNameCell typeCell
 catchAllCellType typeCell
 extends abstractEnumColumnParser
 required
abstractWordColumnParser
 description A single word.
 cells columnNameCell wordCell
 string typeForCsvDocs word
 extends abstractTrueBaseColumnParser
abstractBooleanColumnParser
 string typeForCsvDocs boolean
 cells columnNameCell boolCell
 extends abstractTrueBaseColumnParser
abstractOneWordGuidColumnParser
 string typeForCsvDocs guid
 cells columnNameCell externalGuidCell
 extends abstractTrueBaseColumnParser
 description Use when you have a column that serves as a Globally Unique Identifier (GUID) where the GUID does not contain spaces.
abstractMultiwordGuidColumnParser
 string typeForCsvDocs guid
 description Use when you have a column that serves as a Globally Unique Identifier (GUID) where the GUID can contain spaces.
 catchAllCellType externalGuidCell
 extends abstractTrueBaseColumnParser
abstractHashMapColumnParser
 string typeForCsvDocs multilineStringMap
 extends abstractTrueBaseColumnParser
 javascript
  get columnValue() {
   return this.childrenToString()
  }
abstractAnnualPopulationCountMapParser
 catchAllParser annualPopulationCountParser
 description A map of counts, one per year.
 extends abstractHashMapColumnParser
braindbParser
 root
 string tableName braindb
 string fileExtension bdb
 inScope abstractTrueBaseColumnParser blankLineParser
 catchAllParser trueBaseErrorParser
blankLineParser
 description Blank lines are okay.
 cells blankCell
 compiler
  stringTemplate 
 pattern ^$
 tags doNotSynthesize
 boolean shouldSerialize false
trueBaseErrorParser
 baseParser errorParser
urlCitationParser
 description Can serve as a catch all for linking to a source for columns.
 cells urlCell
annualPopulationCountParser
 cells yearCell populationCountCell
 uniqueFirstWord`)
        get handGrammarProgram() {
          return this.constructor.cachedHandGrammarProgramRoot
      }
static rootParser = braindbParser
    }

class blankLineParser extends GrammarBackedNode {
      get blankCell() {
      return this.getWord(0)
    }
get shouldSerialize() { return false }
    }

class trueBaseErrorParser extends GrammarBackedNode {
      getErrors() { return this._getErrorParserErrors() }
    }

class urlCitationParser extends GrammarBackedNode {
      get urlCell() {
      return this.getWord(0)
    }
    }

class annualPopulationCountParser extends GrammarBackedNode {
      get yearCell() {
      return parseFloat(this.getWord(0))
    }
get populationCountCell() {
      return parseFloat(this.getWord(1))
    }
    }

window.braindbParser = braindbParser
}