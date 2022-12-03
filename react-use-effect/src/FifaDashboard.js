import React, { useEffect, useState } from "react";
const WorldCupCard = ({ data }) => {
  const { country_name, fifa_ranking, flag_image } = data;
  return (
    <div className="card">
      <div className="card-img">
        <img src={flag_image} alt={country_name} />
      </div>
      <h4>{country_name}</h4>
      <p>
        <b>Ranking:</b>
        {fifa_ranking}
      </p>
    </div>
  );
};

const WorldCupDashboard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchWorldCupData = async () => {
      const teamsResponse = await fetch(
        "https://638b277b81df38ab3462aee1.mockapi.io/api/v1/teams"
      );
      const teamsData = await teamsResponse.json();
      console.log({ teamsData });
      setTeams(teamsData);
    };
    fetchWorldCupData();
  }, []);

  return (
    <div className="card-container">
      {teams && teams.map((team) => <WorldCupCard key={team.id} data={team} />)}
    </div>
  );
};

export default WorldCupDashboard;
