async function logJSONData() {
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=43&lon=-80&cnt=14&appid=1603e506aac1347e2bcad80de8c6599f`);
    }
    catch {
        console.log('error fetching data')
    }

    const jsonData = await response.json();    
    console.log(jsonData);
  }
  
window.onload = logJSONData;