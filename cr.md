

### 1

`ip a`

`netdiscover -i eth1 -r 10.10.42.0/24`


> Résultat
```bash
```

> Interprétation:
> Ip cible:

### 2

`nmap -O -vv -oN nmap1.txt -p 80,443,21-23,25 10.10.42.176`

 - étape 1 : scan du réseau de notre cible
 - étape 2 : scan des port de notre cible et détection de son os
 - étape 3 : détection des potentiels vulnérabilité sur les service ouvert
 - étape 4 : On cherche une culnérabiliter critique (ici on choisie ftp pour extraire le fichier shadow grçace à une backdoor)
 - étape 5 : On utilise metasploit pour exploiter cette vulnérabilité
    + étape 5.1 : on cherche dans la base de donner la vulnérabilité
    + étape 5.2 : on choisie celle qui nous concerne
    + étape 5.3 : on set les paramètres nécessaire à cette exploit
    + étape 5.4 : on créer un script pour l'exploit
    + étape 5.5 : on vérifie si la faille fonctionne
 - étape 6 : on extrait le fichier shadow 
 - étape 7 : 