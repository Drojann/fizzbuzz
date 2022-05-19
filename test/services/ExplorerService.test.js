const Reader = require ("../../lib/utils/Reader");
const ExplorerService = require ("../../lib/services/ExplorerService");

describe("testing explorer service", () => {const explorers = Reader.readJsonFile("explorers.json");

    test("filter by mission", () => {

        const missionNode = ExplorerService.filterByMission(explorers, "node");
        expect(missionNode[0]).toMatchObject({mission: "node"});
        console.log(missionNode);
    });

    test("get explorers by mission", () => {

        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInMission).toBe(10);
        console.log(explorersInMission);
    });

    test("get usernames by mission", () => {

        const usernameInMission = ExplorerService.getExplorersUserNameByMission(explorers, "node");
        expect(usernameInMission).toContain("ajolonauta15");
        console.log(usernameInMission);
    });  
});

