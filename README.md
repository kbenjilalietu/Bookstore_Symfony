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

      ● Lister tous les livres et Rechercher des livres via une partie de titre
![image](https://user-images.githubusercontent.com/81255636/150676658-d59e3efb-46b9-4932-91bc-0de6cfdee523.png)

      ● Lister les livres dont la date de parution est comprise entre deux années données 2010 et 2016
![tempsnip](https://user-images.githubusercontent.com/81255636/150676775-745d13ec-a3b2-410b-a74e-78a0cd6868e6.png)
	
     ● Afficher les détails d’un livre donné, ses auteurs et les genres auxquels il appartient
![image](https://user-images.githubusercontent.com/81255636/150677164-19b45a41-a537-4bdb-91b5-7f80f6951087.png)

      ● Ajouter, Modifier, Supprimer et Augmenter ou diminuer la note d’un livre
![image](https://user-images.githubusercontent.com/81255636/150676727-9e7c6283-07e4-497e-9f90-36f57ef3ad9b.png)
			

Gestion des auteurs :	

      ● Lister tous les auteurs
![image](https://user-images.githubusercontent.com/81255636/150677055-0298706e-062f-4d70-91b9-6559416b36a6.png)

      ● Afficher les détails d’un auteur donné et la liste des livres écrits par cet auteur.
![image](https://user-images.githubusercontent.com/81255636/150676957-c3386925-7a68-4221-8f1f-aee3dc6f9627.png)

      ● Ajouter, Modifier et Supprimer un auteur
![image](https://user-images.githubusercontent.com/81255636/150677012-400cf0c7-7832-4b64-b1b2-4e765fca4da1.png)
      
Gestion des genres :	

       ● Lister tous les genres et Supprimer un genre seulement si aucun livre ne s’y rapporte
![image](https://user-images.githubusercontent.com/81255636/150677232-c3471a3d-9a21-445d-a572-0f61a72a71be.png)
       
       ● Ajouter un genre
![image](https://user-images.githubusercontent.com/81255636/150677250-fb5f2f2e-a66f-4c8a-bf76-d0ee42103a3e.png)

