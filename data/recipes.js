const recipes = [
  {
    id: 1,
    image: 'Recette01.jpg',
    name: 'Limonade de Coco',
    servings: 1,
    ingredients: [
      {
        ingredient: 'Lait de coco',
        quantity: 400,
        unit: 'ml'
      },
      {
        ingredient: 'Jus de citron',
        quantity: 2
      },
      {
        ingredient: 'Crème de coco',
        quantity: 2,
        unit: 'cuillères à soupe'
      },
      {
        ingredient: 'Sucre',
        quantity: 30,
        unit: 'grammes'
      },
      {
        ingredient: 'Glaçons'
      }
    ],
    time: 10,
    description: 'Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu’à obtenir la consistance désirée.',
    appliance: 'Blender',
    utensils: ['cuillère à soupe', 'verres', 'presse-citron']
  },
  {
    id: 2,
    image: 'Recette02.jpg',
    name: 'Poisson Cru à la tahitienne',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Thon Rouge (ou blanc)',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Concombre',
        quantity: 1
      },
      {
        ingredient: 'Tomate',
        quantity: 2
      },
      {
        ingredient: 'Carotte',
        quantity: 1
      },
      {
        ingredient: 'Citron Vert',
        quantity: 5
      },
      {
        ingredient: 'Lait de Coco',
        quantity: 100,
        unit: 'ml'
      }
    ],
    time: 60,
    description: 'Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (il est préférable d’utiliser un plat large et peu profond). Laisser reposer au réfrigérateur pendant au moins 2 heures. (Si possible, faire le soir pour le lendemain). Après avoir laissé mariner le poisson, couper le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Râper la carotte. Ajouter les légumes au poisson avec le citron, cette fois-ci dans un saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur, pouvoir ajouter 1 à 2 cuillères à soupe de crème de coco.',
    appliance: 'Saladier',
    utensils: ['presse-citron']
  }, {
    id: 3,
    image: 'Recette03.jpg',
    name: 'Poulet coco réunionnais',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Poulet',
        quantity: 1
      },
      {
        ingredient: 'Lait de coco',
        quantity: 400,
        unit: 'ml'
      },
      {
        ingredient: 'Coulis de tomate',
        quantity: 25,
        unit: 'cl'
      },
      {
        ingredient: 'Oignon',
        quantity: 1
      },
      {
        ingredient: 'Poivron rouge',
        quantity: 1
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: 'cuillères à soupe'
      }
    ],
    time: 80,
    description: 'Découper le poulet en morceaux, faire dorer dans une cocotte avec de l’huile d’olive. Saler et poivrer. Une fois doré, laisser cuire en ajoutant de l’eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l’oignon découpés en morceaux. Laisser cuire 30 minutes de plus. Servir avec du riz.',
    appliance: 'Cocotte',
    utensils: ['couteau']
  }, {
    id: 4,
    image: 'Recette04.jpg',
    name: 'Salade de riz',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Riz blanc',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Thon en miettes',
        quantity: 200,
        unit: 'grammes'
      }, {
        ingredient: 'Tomate',
        quantity: 2
      },
      {
        ingredient: 'Oeuf dur',
        quantity: 2
      },
      {
        ingredient: 'Maïs',
        quantity: 300,
        unit: 'grammes'
      },
      {
        ingredient: 'Vinaigrette',
        quantity: 5,
        unit: 'cl'
      }
    ],
    time: 50,
    description: 'Faire cuire le riz. Une fois le riz cuit, laisser refroidir. Couper les œufs durs en quarts ou en lamelles, selon votre choix, couper les tomates en dés, ajouter au riz les œufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter à votre goût des cornichons, des olives, etc.',
    appliance: 'Cuiseur de riz',
    utensils: ['saladier', 'passoire']
  },
  {
    id: 5,
    image: 'Recette05.jpg',
    name: 'Tarte au thon',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pâte feuilletée',
        quantity: 1
      },
      {
        ingredient: 'Thon en miettes',
        quantity: 130,
        unit: 'grammes'
      },
      {
        ingredient: 'Tomate',
        quantity: 2
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 2,
        unit: 'cuillères à soupe'
      },
      {
        ingredient: 'gruyère râpé',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Moutarde de Dijon',
        quantity: 1,
        unite: 'cuillères à soupe'
      }
    ],
    time: 45,
    description: 'Étaler la pâte feuilletée aux dimensions du moule, étaler la moutarde sur la pâte feuilletée, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrir de gruyère râpé. Faire cuire au four pendant 30 minutes.',
    appliance: 'Four',
    utensils: ['moule à tarte', 'râpe à fromage', 'couteau']
  },
  {
    id: 6,
    image: 'Recette06.jpg',
    name: 'Tarte aux pommes',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Pâte brisée',
        quantity: 1
      },
      {
        ingredient: 'Pomme',
        quantity: 3
      },
      {
        ingredient: 'Oeuf',
        quantity: '2'
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 25,
        unit: 'cl'
      },
      {
        ingredient: 'Sucre en Poudre',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 1,
        unit: 'sachets'

      }
    ],
    time: 50,
    description: 'Commencer par mélanger les œufs, le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux œufs. Une fois que tout est prêt, étaler la tarte dans le moule. Ne pas oublier de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Enfin, verser la préparation à base d’œufs et de crème fraîche. Laisser cuire au four pendant 30 minutes.',
    appliance: 'Four',
    utensils: ['moule à tarte', 'saladier', 'fourchette']
  }, {
    id: 7,
    image: 'Recette07.jpg',
    name: 'Tartelettes au chocolat et aux fraises',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Pâte sablée',
        quantity: 1
      },
      {
        ingredient: 'Chocolat au lait',
        quantity: 300,
        unit: 'grammes'
      },
      {
        ingredient: 'Crème liquide',
        quantity: 80,
        unit: 'cl'
      },
      {
        ingredient: 'Beurre',
        quantity: '30',
        unit: 'grammes'
      },
      {
        ingredient: 'Fraise',
        quantity: 6
      }
    ],
    time: 50,
    description: 'Étaler la pâte dans les moules à tartelette. Faire cuire la pâte pendant 30 minutes. Découper le chocolat en morceaux et le faire chauffer, ajouter la crème liquide, ajouter le beurre et remuer jusqu’à obtenir une pâte homogène. Verser la pâte sur les tartelettes. Couper les fraises en deux et les positionner sur les tartelettes.',
    appliance: 'Four',
    utensils: ['moule à tartelettes (6)', 'casserole']
  }, {
    id: 8,
    image: 'Recette08.jpg',
    name: 'Brownie',
    servings: 10,
    ingredients: [
      {
        ingredient: 'Noix',
        quantity: '180',
        unit: 'grammes'
      },
      {
        ingredient: 'Chocolat noir',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 120,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 2
      },
      {
        ingredient: 'Sucre en Poudre',
        quantity: '110',
        unit: 'grammes'
      },
      {
        ingredient: 'farine',
        quantity: 90,
        unit: 'grammes'
      }

    ],
    time: 60,
    description: 'Hacher les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les œufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger pour obtenir une préparation homogène, puis incorporer les noix. Verser la préparation dans un moule, de préférence rectangulaire. Faire cuire pendant 20 à 25 minutes à 180°. Sortir du four et attendre quelques minutes avant de démouler. Servir avec une boule de glace pour plus de gourmandise.',
    appliance: 'Four',
    utensils: ['moule à gâteaux', 'casserole']
  },
  {
    id: 9,
    image: 'Recette09.jpg',
    name: 'Salade Méditerannéene fraîche au chèvre',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Concombre',
        quantity: 1
      },
      {
        ingredient: 'Olives'
      },
      {
        ingredient: 'Fromage de chèvre',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Vinaigre Balsamique'
      },
      {
        ingredient: "Huile d'olive"
      },
      {
        ingredient: 'Basilic'
      }
    ],
    time: 15,
    description: 'Peler le concombre, le couper en deux et retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamique et l’huile d’olive à votre goût.',
    appliance: 'Saladier',
    utensils: ['cuillère en bois', 'couteau']
  },
  {
    id: 10,
    image: 'Recette10.jpg',
    name: 'Tartiflette',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Reblochon',
        quantity: '1'
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 4.5,
        unit: 'kg'
      },
      {
        ingredient: 'Jambon fumé',
        quantity: 2,
        unit: 'tranches'
      },
      {
        ingredient: 'Oignon',
        quantity: 300,
        unit: 'grammes'
      },
      {
        ingredient: 'Vin blanc sec',
        quantity: 30,
        unit: 'cl'
      }
    ],
    time: 60,
    description: 'Commencer par cuire les pommes de terre dans l’eau bouillante. Puis éplucher et couper en rondelles. Émincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en morceaux ainsi que les pommes de terre. Saler, poivrer à votre goût (et celui de vos convives). Laisser cuire pendant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Couper le reblochon, soit en tranches, soit le couper en deux dans le sens de l’épaisseur et recouvrir les pommes de terre. Faire cuire au four (environ 220°) pendant 25 minutes. C’est prêt !',
    appliance: 'Four',
    utensils: ['plat à gratin', 'couteau', 'économe']
  }, {
    id: 11,
    image: 'Recette11.jpg',
    name: 'Salade tomate, mozzarella et pommes',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Tomates cerises',
        quantity: 250,
        unit: 'grammes'
      },
      {
        ingredient: 'Mozzarella',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Jambon de parme',
        quantity: 4,
        unit: 'tranches'
      },
      {
        ingredient: 'Pommes',
        quantity: 1
      },
      {
        ingredient: 'Salade Verte',
        quantity: 1
      },
      {
        ingredient: 'Vinaigrette',
        quantity: 5,
        unit: 'cl'
      }
    ],
    time: 10,
    description: 'Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de Parme en fines lamelles. Ajouter la pomme, elle aussi découpée en petits morceaux. Assaisonner à votre goût.',
    appliance: 'Saladier',
    utensils: ['couteau', 'cuillère à melon']
  }, {
    id: 12,
    image: 'Recette12.jpg',
    name: 'Compote pomme rhubarbe',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Rhubarbe',
        quantity: 160,
        unit: 'grammes'
      },
      {
        ingredient: 'Pommes',
        quantity: 8
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 6,
        unit: 'sachets'
      },
      {
        ingredient: 'Eau',
        quantity: '0.5',
        unit: 'tasses'
      }
    ],
    time: 40,
    description: 'Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l’eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.',
    appliance: 'Casserole',
    utensils: ['couteau', 'économe']
  },
  {
    id: 13,
    image: 'Recette13.jpg',
    name: 'Salade de mâche et de patates',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Mâche',
        quantity: 60,
        unit: 'grammes'
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Échalote',
        quantity: 2

      },
      {
        ingredient: 'Vinaigre de cidre',
        quantity: 1,
        unit: 'cuillère à soupe'
      },
      {
        ingredient: "huile d'olive",
        quantity: 2,
        unit: 'cuillère à soupe'
      }
    ],
    time: 40,
    description: 'Cuire les pommes de terre environ 30 minutes. Découper les échalotes finement pendant la cuisson des pommes de terre. Préparer la vinaigrette avec l’huile d’olive et le vinaigre de cidre. Saler, poivrer à discrétion. Dans un saladier, mettre la mâche. Ajouter les pommes de terre et les échalotes.',
    appliance: 'Casserole',
    utensils: ['couteau', 'saladier', 'cuillère en bois']
  },
  {
    id: 14,
    image: 'Recette14.jpg',
    name: 'Galette Bretonne Saucisse et Fromage à raclette',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Saucisse bretonne ou de Toulouse',
        quantity: 2
      },
      {
        ingredient: 'Farine de blé noir',
        quantity: 130,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 1

      },
      {
        ingredient: 'Fromage à raclette',
        quantity: 300,
        unit: 'grammes'
      },
      {
        ingredient: 'Oignon',
        quantity: 1
      },
      {
        ingredient: 'Beurre',
        quantity: 75,
        unit: 'grammes'
      }

    ],
    time: 100,
    description: 'Mélanger la farine et les œufs, faire fondre 25 grammes de beurre et l’ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l’oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par-dessus les crêpes. Passer au four pendant 20 minutes.',
    appliance: 'Four',
    utensils: ['poêle à frire', 'couteau']
  },
  {
    id: 15,
    image: 'Recette15.jpg',
    name: 'Crêpes Chocolat Banane',
    servings: 10,
    ingredients: [
      {
        ingredient: 'Oeuf',
        quantity: 3
      },
      {
        ingredient: 'Farine',
        quantity: 250,
        unit: 'grammes'
      },
      {
        ingredient: 'Lait',
        quantity: 600,
        unit: 'ml'
      },
      {
        ingredient: 'Beurre salé',
        quantity: 30,
        unit: 'grammes'
      },
      {
        ingredient: 'Chocolat au lait',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Banane',
        quantity: 4
      }
    ],
    time: 60,
    description: 'Mélanger dans un saladier, la farine, les œufs, et le lait. Battre jusqu’à obtenir une masse homogène. Pendant ce temps, faire fondre le beurre et ajouter une partie à la pâte à crêpes. Faire fondre le chocolat (avec le reste du beurre salé). Lorsque vous chauffez les crêpes, ajouter le chocolat fondu et les bananes coupées en rondelles. Ajouter une touche de chantilly pour les gourmands.',
    appliance: 'Poêle à crêpe',
    utensils: ['saladier', 'louche', 'cuillère en bois']
  },
  {
    id: 16,
    image: 'Recette16.jpg',
    name: 'Gratin de pâtes à la tomate',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Tomate',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Mozzarella',
        quantity: 250,
        unit: 'grammes'
      },
      {
        ingredient: 'Pennes',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Basilic',
        quantity: 1,
        unit: 'tiges'
      },
      {
        ingredient: "huile d'olives",
        quantity: 2,
        unit: 'cuillère à soupe'
      }
    ],
    time: 45,
    description: "Faire cuire les pâtes, si vous n'avez pas de pennes, des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches, soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates. Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pâtes et couches de tomates, terminez par une couche de pâtes et recouvrir du fromage. Laisser au four 30 minutes et régalez-vous ! Une recette simple qui fera plaisir aux petits comme aux grands.",
    appliance: 'Four',
    utensils: ['plat à gratin', 'couteau', 'râpe à fromage']
  },
  {
    id: 17,
    image: 'Recette17.jpg',
    name: 'Smoothie à la fraise',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Fraise',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Pastèque',
        quantity: 0.5
      },
      {
        ingredient: 'Jus de citron',
        quantity: 1,
        unit: 'cuillères à soupe'
      },
      {
        ingredient: 'Glaçons',
        quantity: 8
      },
      {
        ingredient: 'Menthe'
      }
    ],
    time: 15,
    description: 'Couper les fraises en morceaux, découper la chair de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter une cuillère à soupe de jus de citron ainsi que les glaçons. Ajouter quelques feuilles de menthe pour plus de fraîcheur. Mixer le tout. Servir et déguster.',
    appliance: 'Blender',
    utensils: ['verres', 'couteau', 'presse-citron']
  },
  {
    id: 18,
    image: 'Recette18.jpg',
    name: 'Smoothie ananas et vanille',
    servings: 5,
    ingredients: [
      {
        ingredient: 'Ananas',
        quantity: 1
      },
      {
        ingredient: 'Glace à la vanille',
        quantity: 500,
        unit: 'ml'
      },
      {
        ingredient: 'Lait',
        quantity: 50,
        unit: 'cl'
      }
    ],
    time: 10,
    description: 'Séparer 1/5ème d’ananas (une belle tranche qui servira pour la décoration des verres), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixer. Servir et décorer avec l’ananas restant. C’est prêt.',
    appliance: 'Blender',
    utensils: ['verres', 'couteau']
  },
  {
    id: 19,
    image: 'Recette19.jpg',
    name: 'Shake Banane Kiwi',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Kiwi',
        quantity: 4
      },
      {
        ingredient: 'Citron',
        quantity: 1
      },
      {
        ingredient: 'Lait',
        quantity: 1,
        unit: 'litres'
      },
      {
        ingredient: 'Sucre glace',
        quantity: 30,
        unit: 'grammes'
      },
      {
        ingredient: 'Banane',
        quantity: 1
      }
    ],
    time: 0,
    description: 'Couper les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixer. Ajouter des glaçons si le lait n’a pas été mis au frais.',
    appliance: 'Blender',
    utensils: ['couteau', 'verres', 'presse-citron']
  },
  {
    id: 20,
    image: 'Recette20.jpg',
    name: 'Pâtes Carbonara',
    servings: 5,
    ingredients: [
      {
        ingredient: 'Tagliatelles',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Lardons',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Parmesan',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: 'cuillères à soupe'
      }
    ],
    time: 30,
    description: 'Faire cuire les pâtes comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l’huile d’olive. Ajouter la crème fraîche et baisser le feu au minimum. Quand les tagliatelles sont prêtes, les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d’œuf. Servir et ajouter le parmesan râpé.',
    appliance: 'Sauteuse',
    utensils: ['râpe à fromage', 'cuillère en bois']
  },
  {
    id: 21,
    image: 'Recette21.jpg',
    name: 'Spaghettis à la bolognaise',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Spaghettis',
        quantity: 400,
        unit: 'grammes'
      },
      {
        ingredient: 'Oignon',
        quantity: 2
      },
      {
        ingredient: 'Coulis de tomate',
        quantity: 300,
        unit: 'grammes'
      },
      {
        ingredient: 'Viande hachée, 1% de matière grasse',
        quantity: 400,
        unit: 'grammes'
      },
      {
        ingredient: 'Vin rouge',
        quantity: 20,
        unit: 'cl'
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 1,
        unit: 'cuillères à soupe'
      }
    ],
    time: 30,
    description: 'Cuisiner la viande hachée dans une poêle à frire. Dans une autre, faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oignons avec la viande hachée. Faire cuire les pâtes le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pâtes sont cuites, ajouter la crème fraîche à la viande hachée. Servir.',
    appliance: 'Casserole',
    utensils: ['cuillère en bois', 'louche', 'couteau']
  },
  {
    id: 22,
    image: 'Recette22.jpg',
    name: 'Fondant au chocolat',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Beurre',
        quantity: 160,
        unit: 'grammes'
      },
      {
        ingredient: 'Chocolat noir',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Farine',
        quantity: 50,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 4
      },
      {
        ingredient: 'Sucre',
        quantity: 150,
        unit: 'grammes'
      }
    ],
    time: 30,
    description: 'Faire fondre le chocolat et le beurre au bain-marie. Dans un saladier, battre les œufs avec le sucre jusqu’à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrer le moule à gâteaux. Mettre au four préchauffé à 200° puis faire chauffer pendant 15 minutes. C’est prêt. Servir avec une boule de glace.',
    appliance: 'Four',
    utensils: ['moule à gâteaux', 'fouet', 'casserole']
  },
  {
    id: 23,
    image: 'Recette23.jpg',
    name: 'Quiche lorraine',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pâte brisée',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Lardons',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 30,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 3
      },
      {
        ingredient: 'Crème Fraîche',
        quantity: 20,
        unit: 'cl'
      },
      {
        ingredient: 'Lait',
        quantity: 20,
        unit: 'cl'
      }
    ],
    time: 60,
    description: 'Étaler la pâte dans un moule et la piquer. Parsemer de beurre. Faire chauffer les lardons dans une poêle. Battre les œufs en ajoutant la crème fraîche et le lait. Finalement, ajouter les lardons, saler, poivrer à votre goût. Verser l’ensemble sur la pâte. Cuire environ 50 minutes.',
    appliance: 'Four',
    utensils: ['moule à gâteaux', 'rouleau à pâtisserie', 'fouet']
  },
  {
    id: 24,
    image: 'Recette24.jpg',
    name: 'Salade de pâtes',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Thon en miettes',
        quantity: 160,
        unit: 'grammes'
      },
      {
        ingredient: 'Maïs',
        quantity: 60,
        unit: 'grammes'
      },
      {
        ingredient: 'Tomate',
        quantity: 1
      },
      {
        ingredient: 'Concombre',
        quantity: 0.5
      },
      {
        ingredient: 'Macaronis',
        quantity: 300,
        unit: 'grammes'
      },
      {
        ingredient: 'Mayonnaise',
        quantity: 2,
        unit: 'cuillères à soupe'
      }
    ],
    time: 40,
    description: 'Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pâtes. Ajouter la mayonnaise. Mélanger le tout et servir frais.',
    appliance: 'Saladier',
    utensils: ['couteau', 'cuillère en bois']
  },
  {
    id: 25,
    image: 'Recette25.jpg',
    name: 'Cookies',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Sucre',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Farine',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Chocolat noir en pépites',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 1
      }
    ],
    time: 30,
    description: 'Faire fondre le beurre et le mélanger avec le sucre. Finalement, ajouter l’œuf. Ajouter la farine tout en mélangeant peu à peu pour avoir une masse sans grumeaux. Ajouter les pépites de chocolat. Faire, sur une plaque de cuisson, de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.',
    appliance: 'Four',
    utensils: ['fouet', 'saladier', 'plaque de cuisson']
  },
  {
    id: 26,
    image: 'Recette26.jpg',
    name: 'Soupe de tomates',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Tomate',
        quantity: 6
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 1
      },
      {
        ingredient: "Huile d'olives"
      },
      {
        ingredient: 'Oignon',
        quantity: 1
      },
      {
        ingredient: 'Ail',
        quantity: 1,
        unit: 'gousses'
      }
    ],
    time: 25,
    description: 'Verser de l’huile dans un autocuiseur, couper les légumes et les verser dans l’huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer au mixeur. Servir.',
    appliance: 'Mixer',
    utensils: ['autocuiseur', 'couteau']
  },
  {
    id: 27,
    image: 'Recette27.jpg',
    name: "Soupe à l'oseille",
    servings: 4,
    ingredients: [
      {
        ingredient: 'Oseille',
        quantity: 2
      },
      {
        ingredient: 'Oeuf',
        quantity: 1
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 4,
        unit: 'cuillère à soupe'
      },
      {
        ingredient: 'Vermicelles',
        quantity: 1,
        unit: 'verres'
      },
      {
        ingredient: 'Beurre salé',
        quantity: 50,
        unit: 'grammes'
      }
    ],
    time: 15,
    description: 'Faire fondre l’oseille avec du beurre demi-sel, ajouter un litre d’eau. Ajouter les vermicelles. Laisser cuire. Une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d’œuf et la crème fraîche.',
    appliance: 'Casserole',
    utensils: ['couteau', 'cuillère en bois']
  },
  {
    id: 28,
    image: 'Recette28.jpg',
    name: 'Soupe de poireaux',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Poireau',
        quantity: 3
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 400,
        unit: 'grammes'
      },
      {
        ingredient: 'Oseille',
        quantity: 75,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 50,
        unit: 'grammes'
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 10,
        unit: 'cl'
      }
    ],
    time: 80,
    description: 'Émincer les blancs de poireaux et les faire chauffer dans 25 grammes de beurre. Ajouter les pommes de terre coupées en morceaux. Ajouter l’eau et laisser mijoter pendant 45 minutes. Chauffer l’oseille avec le beurre restant puis incorporer le tout. Mixer. Ajouter la crème. Bon appétit.',
    appliance: 'Mixer',
    utensils: ['casserole', 'couteau']
  },
  {
    id: 29,
    image: 'Recette29.jpg',
    name: 'Houmous Express',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Pois chiches',
        quantity: 1,
        unit: 'boîtes'
      },
      {
        ingredient: 'Ail',
        quantity: 1,
        unit: 'gousses'
      },
      {
        ingredient: 'Citron',
        quantity: 2
      },
      {
        ingredient: "Huile d'olive"
      },
      {
        ingredient: 'Paprika'
      }
    ],
    time: 30,
    description: 'Prendre les pois chiches, les mettre dans le mixeur avec de l’huile d’olive, ajouter le jus des 2 citrons et du paprika selon le goût.',
    appliance: 'Mixer',
    utensils: ['cuillère en bois', 'presse-citron']
  },
  {
    id: 30,
    image: 'Recette30.jpg',
    name: 'Purée de pois cassés',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pois Cassé',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Oignon',
        quantity: 1
      },
      {
        ingredient: 'Ail',
        quantity: 2,
        unit: 'gousses'
      }
    ],
    time: 60,
    description: 'Mettre tous les ingrédients dans une cocotte, ajouter de l’eau pour recouvrir l’ensemble et laisser cuire à petit feu pendant 1 heure. Passer au mixeur. Saler, poivrer. C’est prêt.',
    appliance: 'Mixer',
    utensils: ['casserole', 'cuillère en bois']
  },
  {
    id: 31,
    image: 'Recette31.jpg',
    name: 'Jardinière de légumes',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Carotte',
        quantity: 2
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 2
      },
      {
        ingredient: 'Haricots verts',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Petits poids',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Lardons',
        quantity: 150,
        unit: 'grammes'
      }
    ],
    time: 60,
    description: 'Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d’eau. Ajouter les petits pois et les haricots verts (tous deux pré-cuits). Ajouter sel, poivre, thym et laurier.',
    appliance: 'Poêle',
    utensils: ['Couteau', 'économe']
  },
  {
    id: 32,
    image: 'Recette32.jpg',
    name: 'Croque-Monsieur à la dinde',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pain de mie',
        quantity: 8,
        unit: 'tranches'
      },
      {
        ingredient: 'Blanc de dinde',
        quantity: 4,
        unit: 'tranches'
      },
      {
        ingredient: 'Emmental',
        quantity: 8,
        unit: 'tranches'
      },
      {
        ingredient: 'Gruyère',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Lait',
        quantity: 5,
        unit: 'cl'
      },
      {
        ingredient: 'Noix de muscade',
        quantity: 1,
        unit: 'pincées'
      }
    ],
    time: 20,
    description: 'Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d’emmental, une de blanc de dinde, et une autre d’emmental. Dans un récipient, mélanger le gruyère râpé avec le lait et la noix de muscade. Mettre sur les croque-monsieur. Placer au four durant 10 minutes.',
    appliance: 'Four',
    utensils: ['râpe à fromage', 'cuillère à Soupe', 'couteau']
  },
  {
    id: 33,
    image: 'Recette33.jpg',
    name: 'Sandwich au saumon fumé',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pain de mie',
        quantity: 8,
        unit: 'tranches'
      },
      {
        ingredient: 'Saumon Fumé',
        quantity: 4,
        unit: 'tranches'
      },
      {
        ingredient: 'Feuilles de laitue',
        quantity: 4
      },
      {
        ingredient: 'Fromage blanc',
        quantity: 4,
        unit: 'cuillères à soupe'
      },
      {
        ingredient: 'Jus de citron',
        quantity: 1,
        unit: 'cuillères à soupe'
      }
    ],
    time: 5,
    description: 'Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre goût. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C’est prêt.',
    appliance: 'Four',
    utensils: ['couteau', 'cuillère en bois']
  },
  {
    id: 34,
    image: 'Recette34.jpg',
    name: 'Purée de patate douce',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Patate douce',
        quantity: 800,
        unit: 'grammes'
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 20,
        unit: 'cl'
      },
      {
        ingredient: "Huile d'olive"
      },
      {
        ingredient: 'Orange',
        quantity: 1
      }
    ],
    time: 25,
    description: 'Éplucher les patates douces et les couper en morceaux. Les faire cuire pendant 20 minutes dans une casserole d’eau bouillante. Passer au mixeur en ajoutant la crème et l’huile d’olive à son goût. Saler, poivrer. Presser l’orange et ajouter le jus à l’ensemble. Servir.',
    appliance: 'Mixer',
    utensils: ['couteau', 'économe', 'cuillère en bois']
  },
  {
    id: 35,
    image: 'Recette35.jpg',
    name: 'Purée de carottes',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Carotte',
        quantity: 6
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 1
      },
      {
        ingredient: 'Beurre',
        quantity: 20,
        unit: 'grammes'
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 2,
        unit: 'cuillères à soupe'
      },
      {
        ingredient: 'Cumin',
        quantity: 1,
        unit: 'cuillères à café'
      },
      {
        ingredient: 'Noix de muscade',
        quantity: 1,
        unit: 'pincées'
      }
    ],
    time: 25,
    description: 'Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumin et la noix de muscade.',
    appliance: 'Mixer',
    utensils: ['autocuiseur', 'couteau', 'cuillère en bois']
  },
  {
    id: 36,
    image: 'Recette36.jpg',
    name: 'Lasagne Courgettes et Chèvre',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Courgette',
        quantity: 2
      },
      {
        ingredient: 'Fromage de chèvre',
        quantity: 4
      },
      {
        ingredient: 'Lait',
        quantity: 25,
        unit: 'cl'
      },
      {
        ingredient: 'Lasagnes',
        quantity: 5,
        unit: 'feuilles'
      },
      {
        ingredient: 'Gruyère',
        quantity: 40,
        unit: 'grammes'
      },
      {
        ingredient: 'Maïzena',
        quantity: 1,
        unit: 'cuillères à soupe'
      }
    ],
    time: 35,
    description: 'Râper les courgettes et les faire revenir pendant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamel avec le lait et la maïzena. Saler, poivrer, ajouter de la noix de muscade selon les goûts. Dans un plat, mettre un peu de sauce au fond, puis des lasagnes, puis des courgettes, etc. Terminer par de la sauce et ajouter le gruyère. Passer au four à 180° durant 20 à 25 minutes.',
    appliance: 'Four',
    utensils: ['plat à gratin', 'râpe à fromage', 'fouet']
  },
  {
    id: 37,
    image: 'Recette37.jpg',
    name: 'Courgettes farcies au boeuf',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Courgette',
        quantity: 2
      },
      {
        ingredient: 'Viande hachée',
        quantity: 600,
        unit: 'grammes'
      },
      {
        ingredient: "Huile d'olives",
        quantity: 25,
        unit: 'cl'
      },
      {
        ingredient: 'Oignon',
        quantity: 1
      },
      {
        ingredient: 'Coulis de tomates',
        quantity: 20,
        unit: 'cl'
      },
      {
        ingredient: 'Gruyère',
        quantity: 50,
        unit: 'grammes'
      }

    ],
    time: 60,
    description: 'Couper les courgettes dans le sens de la longueur. Vider les courgettes dans un saladier. Réserver. Faire revenir la chair des courgettes dans 25 cl d’huile d’olive. Ajouter l’oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson, ajouter le fromage râpé.',
    appliance: 'Four',
    utensils: ['couteau', 'cuillère en bois', 'Poêle à frire']
  },
  {
    id: 38,
    image: 'Recette38.jpg',
    name: 'Pain Perdu',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pain',
        quantity: 6,
        unit: 'tranches'
      },
      {
        ingredient: 'Lait',
        quantity: 25,
        unit: 'cl'
      },
      {
        ingredient: 'Oeuf',
        quantity: 3
      },
      {
        ingredient: 'Sucre roux',
        quantity: 75,
        unit: 'grammes'
      }
    ],
    time: 20,
    description: 'Fouetter les œufs, le sucre et le lait. Tremper les tranches de pain. Les cuire au four pendant environ 10 minutes à 180°. Servir.',
    appliance: 'Four',
    utensils: ['fouet', 'bol', 'Cuillère à Soupe']
  },
  {
    id: 39,
    image: 'Recette39.jpg',
    name: 'Crumble aux pommes',
    servings: 40,
    ingredients: [
      {
        ingredient: 'Pomme',
        quantity: 2
      },
      {
        ingredient: 'Farine',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 50,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre roux',
        quantity: 80,
        unit: 'grammes'
      }
    ],
    time: 40,
    description: 'Découper les pommes en dés. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par-dessus, placer la pâte que vous avez obtenue. Cuire 20 minutes au four.',
    appliance: 'Four',
    utensils: ['saladier', 'couteau', 'fouet']
  },
  {
    id: 40,
    image: 'Recette40.jpg',
    name: 'Limonade',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Eau',
        quantity: 1,
        unit: 'Litres'
      },
      {
        ingredient: 'Citron Vert',
        quantity: 3
      },
      {
        ingredient: 'Sucre en poudre',
        quantity: 4,
        unit: 'cuillères à café'
      },
      {
        ingredient: 'Bicarbonate',
        quantity: 1,
        unit: 'cuillères à café'
      }
    ],
    time: 10,
    description: 'Dans un saladier, mettre l’eau, le jus des citrons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçons et une feuille de menthe pour la déco.',
    appliance: 'Saladier',
    utensils: ['cuillère en bois']
  },
  {
    id: 41,
    image: 'Recette41.jpg',
    name: 'Mousse au chocolat',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Oeuf',
        quantity: 3
      },
      {
        ingredient: 'Chocolat noir',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 1,
        unit: 'sachets'
      }
    ],
    time: 20,
    description: 'Séparer les blancs d’œufs. Faire fondre le chocolat au bain-marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélanger délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais.',
    appliance: 'Casserole',
    utensils: ['fouet', 'spatule', 'verres']
  },
  {
    id: 42,
    image: 'Recette42.jpg',
    name: 'Charlotte aux poires',
    servings: 3,
    ingredients: [
      {
        ingredient: 'Chocolat',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 3
      },
      {
        ingredient: 'Poires au jus',
        quantity: 0.5,
        unit: 'boîtes'
      },
      {
        ingredient: 'Boudoirs',
        quantity: 15
      }
    ],
    time: 60,
    description: 'Commencer par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposé, alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.',
    appliance: 'Moule à charlotte',
    utensils: ['saladier', 'couteau', 'fouet']
  },
  {
    id: 43,
    image: 'Recette43.jpg',
    name: 'Tarte au citron',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Pâte brisée',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre fondu',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 3
      },
      {
        ingredient: 'Citron'
      }
    ],
    time: 50,
    description: 'Préchauffer le four à 200°. Étaler la pâte. La mettre dans un moule. Battre les œufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pâte. Mettre au four 30 minutes. Bon appétit.',
    appliance: 'Four',
    utensils: ['rouleau à pâtisserie', 'moule à tarte', 'presse-citron']
  },
  {
    id: 44,
    image: 'Recette44.jpg',
    name: 'Crème dessert au chocolat',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Lait',
        quantity: 1,
        unit: 'litres'
      },
      {
        ingredient: 'Chocolat',
        quantity: 200,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 50,
        unit: 'grammes'
      },
      {
        ingredient: 'farine',
        quantity: 40,
        unit: 'grammes'
      }
    ],
    time: 15,
    description: 'Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres.',
    appliance: 'Casserole',
    utensils: ['cuillère en bois']
  },
  {
    id: 45,
    image: 'Recette45.jpg',
    name: 'Crème pâtissière',
    servings: 8,
    ingredients: [
      {
        ingredient: 'Lait',
        quantity: 50,
        unit: 'cl'
      },
      {
        ingredient: 'Oeuf',
        quantity: 2
      },
      {
        ingredient: 'Farine',
        quantity: 30,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre',
        quantity: 80,
        unit: 'grammes'
      }
    ],
    time: 30,
    description: 'Faire bouillir le lait (on peut y ajouter de l’essence de vanille). Battre les œufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.',
    appliance: 'Casserole',
    utensils: ['fouet', 'saladier']
  },
  {
    id: 46,
    image: 'Recette46.jpg',
    name: 'Far breton',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Farine',
        quantity: 250,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre',
        quantity: 150,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 1,
        unit: 'sachets'
      },
      {
        ingredient: 'Oeuf',
        quantity: 4
      },
      {
        ingredient: 'Lait',
        quantity: 1,
        unit: 'litre'
      },
      {
        ingredient: 'Pruneaux',
        quantity: 100,
        unit: 'grammes'
      }
    ],
    time: 60,
    description: 'Mélanger la farine avec le sucre et les œufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit verre de rhum. Verser la masse dans un plat beurré, y placer les pruneaux et faire cuire à 200° pendant 45 minutes.',
    appliance: 'Four',
    utensils: ['fouet', 'moule', 'verres']
  },
  {
    id: 47,
    image: 'Recette47.jpg',
    name: 'Mousse au citron',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Jus de citron',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Mascarpone',
        quantity: 250,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre',
        quantity: 100,
        unit: 'grammes'
      },
      {
        ingredient: 'Crème Fraîche',
        quantity: 20,
        unit: 'cl'
      }
    ],
    time: 5,
    description: 'Mélanger le jus de citron avec le sucre et le mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir.',
    appliance: 'Saladier',
    utensils: ['fouet', 'verres', 'cuillère en bois']
  },
  {
    id: 48,
    image: 'Recette48.jpg',
    name: 'Pizza',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pâte à pizza',
        quantity: 1
      },
      {
        ingredient: 'Tomates pelées',
        quantity: 1,
        unit: 'boîtes'
      },
      {
        ingredient: 'Lardons',
        quantity: 1,
        unit: 'barquettes'
      },
      {
        ingredient: 'Champignons de paris',
        quantity: 1,
        unit: 'boîtes'
      },
      {
        ingredient: 'Gruyère',
        quantity: 200,
        unit: 'grammes'
      }
    ],
    time: 40,
    description: 'Étaler la pâte à pizza. Écraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère et passer au four à 220° durant 20 minutes.',
    appliance: 'Four',
    utensils: ['rouleau à pâtisserie', 'râpe à fromage', 'couteau']
  },
  {
    id: 49,
    image: 'Recette49.jpg',
    name: 'Smoothie tropical',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Bananes',
        quantity: 2
      },
      {
        ingredient: 'Kiwis',
        quantity: 3
      },
      {
        ingredient: 'Mangue',
        quantity: 1
      },
      {
        ingredient: 'Ananas',
        quantity: 4,
        unit: 'tranches'
      },
      {
        ingredient: 'Miel',
        quantity: 2,
        unit: 'cuillères à soupe'
      }
    ],
    time: 0,
    description: 'Découper les fruits. Les passer au blender jusqu’à obtenir une texture liquide. Mettre au frais. Servir.',
    appliance: 'Blender',
    utensils: ['couteau', 'verres']
  },
  {
    id: 50,
    image: 'Recette50.jpg',
    name: 'Frangipane',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Pâte feuilletée',
        quantity: 400,
        unit: 'grammes'
      },
      {
        ingredient: 'Oeuf',
        quantity: 6
      },
      {
        ingredient: 'Poudre d\'amandes',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Beurre',
        quantity: 500,
        unit: 'grammes'
      },
      {
        ingredient: 'Sucre glace',
        quantity: 500,
        unit: 'grammes'
      }
    ],
    time: 60,
    description: 'Préparer la frangipane : Mélanger le sucre, la poudre d’amandes, le beurre et les œufs. Étaler la moitié de la pâte feuilletée et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pâte feuilletée. Mettre au four 30 minutes.',
    appliance: 'Four',
    utensils: ['rouleau à pâtisserie', 'fouet']
  }
]
