# Bookstore_Symfony
Démonstration de l'application Bookstore :
https://youtu.be/c9k8dTHGkA0

Bookstore est une application Symfony 5.4 qui  gère les livres, les auteurs et les genres d'un bookstore.

Contraintes techniques :
Toutes les opérations d’ajout, de modification et de suppression ne peuvent se faire que par un utilisateur authentifié et ayant le rôle "ROLE_ADMIN". Les utilisateurs anonymes auront accès en lecture sur toutes les entités sauf "User"

      ● L'espace admin : 
![image](https://user-images.githubusercontent.com/81255636/150676424-7d764321-a7bb-4550-a8ca-086882d7ddbc.png)
![image](https://user-images.githubusercontent.com/81255636/150676446-41595633-d708-4b1b-bb98-28d7b06c1361.png)


Actions proposées par l’application :
Gestion des livres :

      ● Lister tous les livres
![image](https://user-images.githubusercontent.com/81255636/150676658-d59e3efb-46b9-4932-91bc-0de6cfdee523.png)

      ● Ajouter, Modifier, Supprimer et Augmenter ou diminuer la note d’un livre
![image](https://user-images.githubusercontent.com/81255636/150676727-9e7c6283-07e4-497e-9f90-36f57ef3ad9b.png)
			

      ● Lister les livres dont la date de parution est comprise entre deux années données 2008 et 2016
			
● Lister tous les genres
● Ajouter un genre
● Lister tous les auteurs
● Afficher les détails d’un auteur donné et la liste des livres écrits par cet auteur.
● Ajouter un auteur
● Modifier un auteur
● Supprimer un auteur
● Afficher les détails d’un livre donné, ses auteurs et les genres auxquels il appartient


●
● Supprimer un genre seulement si aucun livre ne s’y rapporte
● Rechercher des livres via une partie de titre
