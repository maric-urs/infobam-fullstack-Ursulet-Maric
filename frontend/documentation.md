Documentation du front

**Les composants**

Le composant **VehicleCardGrid** est le conteneur principal de l’app. Il gère l'état des filtres, du tri et de la pagination en plus d’affiché la grille de véhicules ou les états de chargement/erreur il y a aussi du responsive pour mobile, les filtres s'ouvrent dans un Sheet en haut à gauche de l’écran.

Le composant **VehicleCard** une carte pour les véhicules, elle contient une image, la marque, le modèle, l’année, le type de transmission, le prix, le carburant, le kilométrage. Ce composant integre aussi un badge pour le type (SUV, SEDAN, etc.…).Bouton "Voir les détails" qui mène vers la fiche du véhicule 

Le composant **VehicleFilters** est le formulaire de filtrage de l'app. Il permet de choisir les fabricants et les types de véhicules via des checkboxes, ainsi que l'année min et max. Il applique les filtres avec onFilterChange et propose un bouton pour tout réinitialiser quand des filtres sont actifs.

Le composant **FilterCheckboxGroup** est un élément réutilisable pour afficher une liste de cases à cocher avec un label. Il est utilisé pour les fabricants et les types de categorie de véhicule. Dans le composant il y a aussi une ScrollArea pour éviter que la liste ne prenne trop de place.

Le composant **VehicleSortSelector** c’est le menu pour trier la liste (trier par prix ou par année croissant ou décroissant). Il y a aussi l’option Aucun tri.

Le composant **VehiclePagination** gère la navigation entre les pages. Il affiche les boutons "Précédent" et "Suivant" et l'indicateur de page du numéro de page

Le composant **NavSidebar** est la barre de navigation fixe située à gauche le bouton pour le mode nuit et les filtres sont intégrer dedans.

Le composant **ThemeToggle** estpour le mode nuit.

Le composant **ThemeProvider** est le wrapper qui entoure l'app pour le thème avec next-themes



**Les pages**

La page.tsx elle affiche juste le VehicleCardGrid.

La page **/vehicle/[id]** affiche les détails d'un véhicule.

Les pages **/test/** servent à tester les composants de façon isolée (vehicle-card, vehicle-filters, nav-sidebar, etc.).

La page **/test-api** c'est pour tester les appels API.

La page **/swagger** affiche la doc Swagger de l'API (spec dans public/openapi.json).



**Les routes API**

La route **GET /api/vehicles** retourne la liste des véhicules paginée. Paramètres en query : page (défaut 1), limit (défaut 10), sort (price-asc, price-desc, year-asc, year-desc), manufacturers (liste séparée par des virgules), types (idem), yearMin, yearMax. Réponse : { vehicles, total, page, totalPages }.

La route **GET /api/vehicles/[id]** retourne un seul véhicule par son id. 404 si non trouvé.
