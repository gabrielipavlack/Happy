
function saveOrphanage (db, orphanage){
return db.run(`
INSERT INTO orphanages (
  lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    email,
    opening_hours,
    closing_hours,
    open_on_weekends,
    instructions
) VALUES (
  "${orphanage.lat}",
  "${orphanage.lng}",
  "${orphanage.name}",
  "${orphanage.about}",
  "${orphanage.whatsapp}",
  "${orphanage.images}",
  "${orphanage.email}",
  "${orphanage.opening_hours}",
  "${orphanage.closing_hours}",
  "${orphanage.open_on_weekends}",
  "${orphanage.instructions}"
);

`)
}

module.exports = saveOrphanage;

