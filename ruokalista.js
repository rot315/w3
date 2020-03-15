function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

console.log(today);


function tyhja(){
  let asia = document.getElementById('pruoka');
  let osio = document.getElementById('paa');
  while (asia.firstChild) {
    asia.removeChild(asia.lastChild);
  }

  osio.removeChild(osio.firstChild);


}


let paikka = '152';
const ul = document.getElementById('pruoka');
let url = 'https://www.sodexo.fi/ruokalistat/output/daily_json/'+paikka+'/' + String(today) + '';

fetch(url).then(response => response.json()).then(data => {
  var ob = Object.entries(data.courses);
  var ru = Object.values(data.meta);

  console.log(ru);
  let headed = document.createElement('div');
  headed.appendChild(document.createElement('strong')
  ).textContent = ru[2];
  paa.appendChild(headed);

  ob.forEach(([value, key]) => {
    let listItem = document.createElement('div');

    listItem.appendChild(document.createElement('ul')
    ).textContent = key.title_fi;
    listItem.appendChild(document.createElement('ul')
    ).textContent = key.properties;
    listItem.appendChild(document.createElement('ul')
    ).textContent = key.price;
    pruoka.appendChild(listItem);

  })

}).then(data => console.log(data)).catch(function(error) {
  document.getElementById('pruoka').innerHTML = 'No food ( ; n ;)';
  console.log(error);
});


function myy() {
  tyhja();
  let paikka = '152';
  let url = 'https://www.sodexo.fi/ruokalistat/output/daily_json/'+paikka+'/' + String(today) + '';
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    var ob = Object.entries(data.courses);
    var ru = Object.values(data.meta);

    console.log(ru);
    let headed = document.createElement('div');
    headed.appendChild(document.createElement('strong')
    ).textContent = ru[2];
    paa.appendChild(headed);

    ob.forEach(([value, key]) => {
      let listItem = document.createElement('div');

      listItem.appendChild(document.createElement('ul')
      ).textContent = key.title_fi;
      listItem.appendChild(document.createElement('ul')
      ).textContent = key.properties;
      listItem.appendChild(document.createElement('ul')
      ).textContent = key.price;
      pruoka.appendChild(listItem);

    })

  }).then(data => console.log(data)).catch(function(error) {
    document.getElementById('pruoka').innerHTML = 'No food ( ; n ;)';
    console.log(error);
  });
}


function myl() {
  tyhja();
  let paikka = '158';
  let url = 'https://www.sodexo.fi/ruokalistat/output/daily_json/'+paikka+'/' + String(today) + '';
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    var ob = Object.entries(data.courses);
    var ru = Object.values(data.meta);

    console.log(ru);
    let headed = document.createElement('div');
    headed.appendChild(document.createElement('strong')
    ).textContent = ru[2];
    paa.appendChild(headed);

    ob.forEach(([value, key]) => {
      let listItem = document.createElement('div');

      listItem.appendChild(document.createElement('ul')
      ).textContent = key.title_fi;
      listItem.appendChild(document.createElement('ul')
      ).textContent = key.properties;
      listItem.appendChild(document.createElement('ul')
      ).textContent = key.price;
      pruoka.appendChild(listItem);

    })

  }).then(data => console.log(data)).catch(function(error) {
    document.getElementById('pruoka').innerHTML = 'No food ( ; n ;)';
    console.log(error);
  });
}


