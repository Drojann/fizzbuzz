const Reader = require ('../../lib/utils/Reader')

describe("Reading json file", () => {
    test('show users object', () => {

      const explorers = Reader.readJsonFile('explorers.json')
      console.log(explorers)
    });
})