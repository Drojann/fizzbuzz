const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
//const FizzBuzzService = require("../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMision (mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers,mission);
        return explorersInMission;
    } 

    static getExplorersUsernamesByMission(mission){
        const explorerUsers = ExplorerService.getExplorersUsernameByMission(this.getExplorersByMision(mission),mission);
        return explorerUsers;
    }   
    
    static getAmountOfExplorersByMission(mission){
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(this.getExplorersByMision(mission),mission);
        return explorersAmount.length;
    }

}

module.exports = ExplorerController;