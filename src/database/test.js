const Database = require('./db.js');

Database.then(async db =>{
//inserir dados na tabela 
/* await db.run(`
INSERT INTO orphanages (
  lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    email,
    hour_open,
    hour_close,
    open_on_weekends,
    instructions
) VALUES (
  "-29.6871013",
  "-53.8275435",
  "Recanto da Esperança",
  "Presta assistencia a crianças carentes",
  "55991442242",
  "https://www.fraserhealth.ca/-/media/Project/FraserHealth/FraserHealth/Health-Topics/Children-and-Youth/children_youth_1366x668.png?h=668&la=en&w=1366&hash=35AFE81DC5B70BCC435584B4D1695D4EC20FA22E",
  "recantodaesperanca@email.com",
  "8h",
  "18h",
  "1",
  "Venha como se sentir à vontade"
);


`)

//consultar dados da tabela
const selectedOrphanages = await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanages)


//consultar somente 1 orfanato pelo id
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
console.log(orphanage)
*/
})