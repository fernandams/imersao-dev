// var listaFilmes = [];

// listaFilmes[0] = "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg";

// listaFilmes[1] = "https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg";

// listaFilmes[2] = "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg";

var listaFilmes = ["https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg", "https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg", "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg", "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg", "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"];

for(var i=0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");  
}
