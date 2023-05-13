const url = `https://swapi.dev/api`;
const dataTypes = [
  { name: 'people', label: 'Nomes' },
  { name: 'vehicles', label: 'Veículos' },
];

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const urls = dataTypes.map((type) => data[type.name]);
    const responses = await Promise.all(urls.map((url) => fetch(url)));

    responses.forEach(async (response, i) => {
      const { results } = await response.json();
      const names = results.map((item) => item.name);
      console.log(`${dataTypes[i].label}: ${names.join(', ')}`);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
