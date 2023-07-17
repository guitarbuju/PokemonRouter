const pokes = [
  null,
  "bulbasaur",
  "venusaur",
  "charmander",
  "charmelion",
  "charizard",
  "squirtle",
  "pikachu",
  "wartortle",
  " blastoise",
  "caterpie",
  " metapod",
  "butterfree",
  "weedle",
  "kakuna",
  " beedrill",
  "pidgey",
  "pidgeotto",
  "rattata",
  "raticate",
];

const images = [
  null,
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f619ed0-b566-4538-8392-bf02ca7a76cd/dck5gvr-d1a822f4-cb27-46b3-a0ad-5538b486b6f5.png/v1/fill/w_758,h_630/001_bulbasaur_png_0__6__by_andersonaas107_dck5gvr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjMwIiwicGF0aCI6IlwvZlwvMWY2MTllZDAtYjU2Ni00NTM4LTgzOTItYmYwMmNhN2E3NmNkXC9kY2s1Z3ZyLWQxYTgyMmY0LWNiMjctNDZiMy1hMGFkLTU1MzhiNDg2YjZmNS5wbmciLCJ3aWR0aCI6Ijw9NzU4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4XApEhXwxzFwLhIcWpAfe1tb1141YYxw0vcT27tA5q4",
  "https://www.pngplay.com/wp-content/uploads/12/Venusaur-Pokemon-PNG-Photo-Clip-Art-Image.png",
  "https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png",
  "https://www.pngplay.com/wp-content/uploads/10/Charmeleon-Pokemon-PNG-Clipart-Background.png",
  "https://www.pngmart.com/files/12/Charizard-PNG-Free-Download.png",
  "https://www.pngplay.com/wp-content/uploads/12/Squirtle-Pokemon-Download-Free-PNG-Clip-Art.png",
  "https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-Transparent-File.png",
  "https://www.pngmart.com/files/22/Wartortle-Pokemon-Transparent-Isolated-PNG.png",
  "https://www.nicepng.com/png/detail/150-1500390_blastoise-transparent-png-pokemon-blastoise-png.png",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
  "https://www.pngplay.com/wp-content/uploads/11/Metapod-Pokemon-PNG-HD-Quality.png",
  "https://www.pngmart.com/files/22/Butterfree-Pokemon-PNG-Image.png",
  "https://www.pngplay.com/wp-content/uploads/12/Weedle-Pokemon-PNG-HD-Images.png",
  "https://www.nicepng.com/png/detail/125-1251698_kakuna-pokemon-kakuna.png",
  "https://www.pngplay.com/wp-content/uploads/10/Beedrill-Pokemon-PNG-Photo-Image.png",
  "https://www.nicepng.com/png/detail/44-449019_pidgey-pidgey-pokemon.png",
  "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/a/a9/latest/20141214190416/Pidgeot.png/1200px-Pidgeot.png",
  "https://images.wikidexcdn.net/mwuploads/wikidex/c/c4/latest/20200307022853/Rattata.png",
  "https://www.pngmart.com/files/22/Raticate-Pokemon-PNG.png",
];

const arrayObj = pokes.map((name, index) => ({
  name: name,
  url: images[index],
}));

console.log(arrayObj);

export default arrayObj;
