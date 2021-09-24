import teams from "./data/teams.js";
import { renderTeams } from "./ui/renderTeams.js";
import { searchTeams } from "./ui/searchTeams.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://noroff.herokuapp.com/v1/nba-teams/teams";

async function getTeams() {
    try {
        const response = await fetch(url);
        const teams = await response.json();

        console.log(teams);

        renderTeams(teams);
        searchTeams(teams);
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".team-container");
    }
}

getTeams();
