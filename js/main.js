function getJson() {
    const season = document.getElementById('season').value;
    const round = document.getElementById('round').value;

    axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(response => {
            const drivers = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            const tableBody = document.getElementById('driverTable');
            tableBody.innerHTML = ''; // Clear existing rows

            drivers.forEach(driver => {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <th scope="row">${driver.position}</th>
                    <td>${driver.Driver.familyName}</td>
                    <td>${driver.Driver.nationality}</td>
                    <td>${driver.Constructors[0].name}</td>
                    <td>${driver.points}</td>
                `;
                tableBody.appendChild(newRow);
            });
        })
        .catch(error => {
            console.error(error);
        });
}
    

    
   