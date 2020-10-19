// create map 
const map = L.map('mapid').setView([-29.6871013,-53.8278435], 15);

// create and add tileLayer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)


// create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
})


let marker;

// create and add marker

map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

document.querySelector('[name=lat]').value = lat;
document.querySelector('[name=lng]').value = lng;

  // remove icon
marker && map.removeLayer(marker)

// add icon layer
marker = L.marker([lat,lng], { icon })
.addTo(map)

})

// add photos field

function addPhotoField(){
  // pegar o container #images
  const container = document.querySelector('#images')
  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  // verificar se o campo está vazio
  const input = newFieldContainer.children[0]
    if(input.value == "")
    return
  // limpar campo antes de add outro
input.value=""
  // add o clone ao container de #images
container.appendChild(newFieldContainer)
}

// delete field

function deleteField(event){
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2){
    // limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }

  // deletar o campo
  span.parentNode.remove();

}

// open on weekends: yes or no

function toggleSelect(event){

//retirar a classe .active dos botoes
document.querySelectorAll('.button-select button')
.forEach( function(button){
  button.classList.remove('active')
})

//colocar a classe .active no botão clicado
const button = event.currentTarget
button.classList.add('active')

// atualizar o input hidden com o valor selecionado
const input = document.querySelector('[name="open_on_weekends"]')

input.value = button.dataset.value
}






