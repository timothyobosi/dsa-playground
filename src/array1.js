class SpeciesManager {
  constructor() {
    // special method calledwhen a new object or instance is created
    this.speciesList = [];
  }

  addSpecies(name, category) {
    this.speciesList.push({ name, category });
  }

  listSpecies() {
    return this.speciesList
      .map((species) => `${species.name} (${species.category})`)
      .join(" ->");
  }

  filterByCategory(category) {
    return this.speciesList
      .filter((species) => species.category === category.toLowerCase())
      .map((species) => species.name);
  }
}

module.exports = { SpeciesManager };
