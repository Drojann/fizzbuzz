class ExplorerService{
    static filterByMission (explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = this.filterByMission(explorers, mission);
        return explorersInNode.length;

    }

    static getExplorersUserNameByMission(explorers, mission){
        const explorersByMission = this.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;

    }
}

module.exports = ExplorerService