

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

 - [x] étape 1 : scan du réseau de notre cible
 - [x] étape 2 : scan des port de notre cible et détection de son os
    + [x] étape 2.1 : Explication du retours
 - [x] étape 3 : détection des potentiels vulnérabilité sur les service ouvert
    + [x] étape 3.1 : Explication du retours
 - [x] étape 4 : On cherche une vulnérabiliter critique (ici on choisie ftp pour extraire le fichier shadow grâce à une backdoor)
 - [x] étape 5 : On utilise metasploit pour exploiter cette vulnérabilité
    + [x] étape 5.1 : on cherche dans la base de donner la vulnérabilité : ok
    + [x] étape 5.2 : on choisie celle qui nous concerne (ici la backdoor)
    + [x] étape 5.3 : on set les paramètres nécessaire à cette exploit
    + [x] étape 5.4 : choisir le payload (ici on veut créer un utilisateur)
    + [x] étape 5.5 : spécifier les paramètre du payload (username : JoeLaBanane mdp : banana)
    + [x] étape 5.6 : On run et vérifie que l'exploit à bien fonctionner
 - [x] étape 6 : on se conecte en ssh à notre nouvelle utilisateur
 - [x] étape 7 : on fait un élévation de privilège grâce àune faille ubuntu 16.04 `sudo sudo su`
 - [x] étape 8 : on copie le fichier shadow et passwd en root : ok
 - [x] étape 9 : grâce john the riper et un dictionnaire de mot de passe on crack les mot de passesdes utilisateur de la machine : ok
 - [x] étape 10 : on se connecte avec un identifiant/mdp de l'admin réseau
 - [x] étape 11 : on change le mot de passe de l'admin et de root 
 - [x] étape 12 : comme on sait que l'entreprise auquel appartient le serveur possède le nom de domaine vcacti on regarde dans les fichiers de configuration apache : Manque sur site entre Etape 16 et 17
   + [x] étape 12.1 : on regarde le fichier 000_default.conf
   + [x] étape 12.2 : on regarde le dossier pointer
 - [x] étape 13 : après avoir vu où était le site on change notre résolution de nom local pour l'adress du la machine cible.
 - [x] étape 14 : on accède au site et on constate l'utilisation d'un serveur wordpress (draft pour preprod)
 - [x] étape 15 : on accède au fichier de config de wordpress
 - [x] étape 16 : on regarde dans les fichier de conf pour trouver les identifiant et mot de passe de la base SQL
 - [x] étape 17 : se connecter à la base sql
 - [x] étape 18 : trouver la table qui contient les mot de passe de word press
 - [x] étape 19 : utiliser jtr pour déhasher le mot de passe (on cherche par la même occasion le système de hash de mysql via internet)
 - [x] étape 20 : on va sur le site vcacti.fr/draft et on se log avec les identifiants et mot de pass trouver : ok
 - [x] étape 21 : on modifie les information de l'admin pour l'empècher de se co
 - [x] étape 22 : on modifie le site comme on veut grâce à notre accès root

new -> skibidi67
root -> cocktailTGV
