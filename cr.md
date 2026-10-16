

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
    + étape 5.2 : on choisie celle qui nous concerne (ici la backdoor)
    + étape 5.3 : on set les paramètres nécessaire à cette exploit
    + étape 5.4 : choisir le payload (ici on veut créer un utilisateur)
    + étape 5.5 : spécifier les paramètre du payload (username : JoeLaBanane mdp : banana)
    + étape 5.6 : On run et vérifie que l'exploit à bien fonctionner
 - étape 6 : on se conecte en ssh à notre nouvelle utilisateur
 - étape 7 : on fait un élévation de privilège grâce àune faille ubuntu 16.04 `sudo sudo su`
 - étape 8 : on copie le fichier shadow et passwd en root
> - étape 9 : grâce à John the riper on combine les deux fichier pour une exécution plus précise
 - étape 10 : grâce john the riper et un dictionnaire de mot de passe on crack les mot de passesdes utilisateur de la machine
 - étape 11 : on se connecte avec un identifiant/mdp de l'admin réseau
 - étape 12 : on change le mot de passe de l'admin
 - étape 13 : on rend le site inaccessible en désactivant le service apache et en suprimant le site