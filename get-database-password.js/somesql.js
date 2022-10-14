// const SQL = `
//   SELECT
//     h.ID,
//     h.created_at,
//     c.FolderPath,
//     c.Title AS TrackTitle,
//     c.Subtitle AS SubTitle,
//     a.Name AS ArtistName,
//     c.ImagePath,
//     c.BPM,
//     c.Rating,
//     c.ReleASeYear,
//     c.ReleASeDate,
//     c.Length,
//     c.ColorID,
//     c.Commnt AS TrackComment,
//     co.Commnt AS ColorName,
//     al.Name AS AlbumName,
//     la.Name AS LabelName,
//     ge.Name AS GenreName,
//     k.ScaleName AS KeyName,
//     rmx.Name AS RemixerName,
//     c.DeliveryComment AS Message
//   FROM djmdSongHistory AS h
//   JOIN djmdContent AS c ON h.ContentID = c.ID
//   LEFT JOIN djmdColor AS co ON c.ColorID = co.id
//   LEFT JOIN djmdArtist AS a ON c.ArtistID = a.ID
//   LEFT JOIN djmdArtist AS rmx ON c.RemixerID = rmx.ID
//   LEFT JOIN djmdAlbum AS al ON c.AlbumID = al.ID
//   LEFT JOIN djmdLabel AS la ON c.LabelID = la.ID
//   LEFT JOIN djmdGenre AS ge ON c.GenreID = ge.ID
//   LEFT JOIN djmdKey AS k ON c.KeyID=k.ID
//   ORDER BY h.created_at DESC
//   LIMIT 1`;

// const database = new sqlcipher.Database(databasePath);
// database.serialize(() => {
//   database.run("PRAGMA cipher_compatibility = 3");
//   database.run(`PRAGMA key = '${databasePassword}'`);
//   database.all(SQL, [], (err, rows) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log(rows);
//   });
// });
// database.close();
