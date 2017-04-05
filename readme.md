Vue, Webpack, bootstrap, and Nette
=========================

Pro spuštění Nette:
nejspíš nebude potřeba - případně 
 - DocumentRoot pro Apache by měl být /www
 - `composer install`
 - a index.php je v /www/api, takže Nette bude odpovídat jenom na požadavky na URL /api
 
 Pro zprovoznění Frontnedu:
  - `yarn install` (nebo `npm install`)
  - `npm run dev` - otevře se prohlížeč a při změně (asi) jakéhokoli souboru v `/src` se reloadne atuomaticky
  - postavit aplikaci pomocí souborů v `/src`
