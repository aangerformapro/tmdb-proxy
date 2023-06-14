# tmdb-proxy
Un proxy pour TMDB
remplace https://api.themoviedb.org et https://image.tmdb.org en sécurisant la clé api dans un fichier caché (.env)
cache les requetes json en mémoire pendant 15 minutes et les images dans le répertoire ./tmp indéfiniment

copier .env.example > .env
et entrer votre api key ou bearer token dans le fichier .env
ensuite:
```bash
npm install
npm start
```
