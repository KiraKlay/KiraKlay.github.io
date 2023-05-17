async function getYankeeGameScores() {
  const apiKey = '100bd1992920e53de5b70fcb3e6267e4'; // replace with your own API key
  const endpoint = 'https://v1.baseball.api-sports.io/games?league=1&season=2023&team=25';

  const response = await fetch(endpoint, {
    headers: {
      'x-apisports-key': apiKey,
    },
  });

  const data = await response.json();

  const games = data.response;

  const currentDate = new Date();
  const sevenDaysLater = new Date();
  sevenDaysLater.setDate(currentDate.getDate() + 7);

  const filteredGames = games.filter(game => {
    const gameDate = new Date(game.date);
    return gameDate >= currentDate && gameDate <= sevenDaysLater;
  });

  const container = document.querySelector('.mlb');

  filteredGames.forEach(game => {
    const homeTeam = game.teams.home;
    const awayTeam = game.teams.away;

    const gameDate = new Date(game.date);
    const gameTime = game.time;

    // Extract date components
    const [year, month, day] = gameDate.toISOString().split('T')[0].split('-');

    // Extract time components
    const [hours, minutes] = gameTime.split(':');

    // Create new Date object in UTC
    const gameDateTime = new Date(Date.UTC(year, month - 1, day, hours, minutes));

    // Convert game time to EST
    const gameDateTimeEST = gameDateTime.toLocaleString('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });

    const gameDay = gameDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const logoHome = homeTeam.logo;
    const logoAway = awayTeam.logo;
    const homeTeamName = homeTeam.name;
    const awayTeamName = awayTeam.name;

    const isYankeesHome = homeTeamName === 'New York Yankees';
    const opponentTeamName = isYankeesHome ? awayTeamName : homeTeamName;
    const gameTitle = isYankeesHome ? `Yankees vs ${opponentTeamName}` : `Yankees @ ${opponentTeamName}`;

    const card = document.createElement('div');
    card.classList.add('card');

    const cardHeader = document.createElement('h1');
    cardHeader.textContent = `${gameDay} (${gameDateTimeEST})`;
    card.appendChild(cardHeader);

    const homeLogo = document.createElement('img');
    homeLogo.src = isYankeesHome ? logoAway : logoHome;
    homeLogo.alt = `${homeTeamName} logo`;
    card.appendChild(homeLogo);

    const gameTitleText = document.createElement('p');
    gameTitleText.textContent = gameTitle;
    card.appendChild(gameTitleText);

    if (game.status.short === 'FT') {
      const homeScoreText = document.createElement('p');
      const awayScoreText = document.createElement('p');
      const homeScore = homeTeam.scores && homeTeam.scores.total ? homeTeam.scores.total : '-';
      const awayScore = awayTeam.scores && awayTeam.scores.total ? awayTeam.scores.total : '-';
      homeScoreText.textContent = `${homeTeamName}: ${homeScore}`;
      awayScoreText.textContent = `${awayTeamName}: ${awayScore}`;
      card.appendChild(homeScoreText);
      card.appendChild(awayScoreText);
      }
      container.appendChild(card);
    });
  }
  
  getYankeeGameScores();