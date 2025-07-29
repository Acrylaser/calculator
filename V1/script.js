const categories = {
  "Acrílico a medida": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Color Traslúcido (Original)', 'Espejo (Original)', 'Espejo Traslúcido (Original)', 'Metalizado (Original)', 'Textura Madera (Original)', 'Blanco Sellado (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "Ac (240x120)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Espejo (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "Ac (180x120)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Color Traslúcido (Original)', 'Espejo (Original)', 'Espejo Traslúcido (Original)', 'Metalizado (Original)', 'Textura Madera (Original)', 'Blanco Sellado (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "Ac (120x120)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Espejo (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)', 'Lila (Original)'],
  "Ac (120x90)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Color Traslúcido (Original)', 'Espejo (Original)', 'Espejo Traslúcido (Original)', 'Metalizado (Original)', 'Textura Madera (Original)', 'Blanco Sellado (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "Ac (120x60)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Espejo (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "Ac Cuarto (90x60 / 120x45)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Color Traslúcido (Original)', 'Espejo (Original)', 'Espejo Traslúcido (Original)', 'Metalizado (Original)', 'Textura Madera (Original)', 'Blanco Sellado (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "Ac Octavo (60x45)": ['Cristal (Recuperado)', 'Opal (Recuperado)', 'Color (Recuperado)', 'Cristal (Original)', 'Opal (Original)', 'Color (Original)', 'Color Traslúcido (Original)', 'Espejo (Original)', 'Espejo Traslúcido (Original)', 'Metalizado (Original)', 'Textura Madera (Original)', 'Blanco Sellado (Original)', 'Cristal Mate (Original)', 'Negro Mate (Original)'],
  "MDF a medida": ['MDF 2.5mm/2.7mm', 'MDF 5.5mm', 'MDF 9mm', 'MDF 12mm'],
  "Vinilo a medida": ['Regular', 'Brush', 'Fotoluminiscente 5h', 'Fotoluminiscente 10h', 'Transfer'],
  "Impresión": ['Vinilo laminado', 'Vinilo laminado en espejo', 'Banner'],
  "PS a medida": ['Blanco', 'Ecolam', 'Blackout', 'Colores', 'Cristal'],
  "PS (100x200)": ['Blanco', 'Ecolam', 'Blackout', 'Colores', 'Cristal'],
  "Pet-G a medida": ['Cristal'],
  "Pet-G 100x200": ['Cristal'],
  "PP a medida": ['Natural (Hielo)', 'Color'],
  "PP 100x200": ['Natural (Hielo)', 'Color'],
  "ABS": ['Silver', 'Otros'],
  "Eléctricos": ['Neón Flex', 'Fuente'],
  "Herrajes": ['Cerradura', 'Bisagra Acrílica', 'Dilatador'],
  "Letras Volumétrica": ['Color_LC', 'Brush (Silver)_LC'],
  "Corte/Grabado": ['Tiempo', 'Grabado'],
  "Mano de obra": ['-'],
  "Otros": ['-'],
};

const materials = {
  "Cristal (Recuperado)": ['2', '3', '4', '5', '8', '10'],
  "Opal (Recuperado)": ['2', '3', '4', '5', '8', '10'],
  "Color (Recuperado)": ['2', '3', '4', '5', '8', '10'],
  "Cristal (Original)": ['2', '3', '4', '5', '6', '8', '10', '15'],
  "Opal (Original)": ['2', '3', '5', '10', '4'],
  "Color (Original)": ['2', '3', '5', '10'],
  "Color Traslúcido (Original)": ['3'],
  "Espejo (Original)": ['3'],
  "Espejo Traslúcido (Original)": ['3'],
  "Metalizado (Original)": ['3'],
  "Textura Madera (Original)": ['3'],
  "Blanco Sellado (Original)": ['3', '5'],
  "Cristal Mate (Original)": ['3', '2'],
  "Negro Mate (Original)": ['3'],
  "Lila (Original)": ['3'],
  "MDF 2.5mm/2.7mm": ['MDF 2.5mm/2.7mm'],
  "MDF 5.5mm": ['MDF 5.5mm'],
  "MDF 9mm": ['MDF 9mm'],
  "MDF 12mm": ['MDF 12mm'],
  "Regular": ['Regular'],
  "Brush": ['Brush'],
  "Fotoluminiscente 5h": ['Fotoluminiscente 5h'],
  "Fotoluminiscente 10h": ['Fotoluminiscente 10h'],
  "Transfer": ['Transfer'],
  "Vinilo laminado": ['Vinilo laminado'],
  "Vinilo laminado en espejo": ['Vinilo laminado en espejo'],
  "Banner": ['-'],
  "Blanco": ['15 (0.38 mm)', '20 (0.5 mm)', '30 (0.75 mm)', '40 (1 mm)', '60 (1.5 mm)', '80 (2 mm)', '100 (2.5 mm)', '120 (3 mm)', '150 (3.75 mm)', '180 (4.5 mm)'],
  "Ecolam": ['30 (0.75 mm)', '40 (1 mm)', '60 (1.5 mm)', '80 (2 mm)', '100 (2.5 mm)'],
  "Blackout": ['20 (0.5 mm)', '30 (0.75 mm)', '40 (1 mm)', '60 (1.5 mm)'],
  "Colores": ['40 (1 mm)', '60 (1.5 mm)', '80 (2 mm)', '100 (2.5 mm)', '120 (3 mm)'],
  "Cristal": ['40 (1 mm)', '60 (1.5 mm)', '80 (2 mm)', '100 (2.5 mm)', '120 (3 mm)', '180 (4.5 mm)'],
  "Natural (Hielo)": ['20 (0.5 mm)', '30 (0.75 mm)', '40 (1 mm)', '60 (1.5 mm)', '80 (2 mm)', '120 (3 mm)', '160 (4 mm)', '200 (5 mm)', '240 (6 mm)'],
  "Color": ['20 (0.5 mm)'],
  "Silver": ['2.5mm'],
  "Otros": ['2.5mm'],
  "Neón Flex": ['Metro instalado', 'Metro suelto'],
  "Fuente": ['12V-1A', '12V-2A', '12V-3A', '12V-5A', '12V-10A'],
  "Cerradura": ['Grande', 'Pequeña'],
  "Bisagra Acrílica": ['Grande', 'Mediana', 'Pequeña'],
  "Dilatador": ['D2xA2'],
  "Color_LC": ['Con luz_C', 'Sin luz_C'],
  "Brush (Silver)_LC": ['Con luz_B', 'Sin luz_B'],
  "Tiempo": ['Tiempo (minutos)'],
  "Grabado": ['Tiempo (minutos)', '0.05', '0.06', '0.07', '0.08', '0.09', '0.1', '0.11', '0.12', '0.13', '0.14', '0.15', '0.2', '0.25', '0.3', '0.35', '0.4', '0.45', '0.5'],
  "-": ['-'],
};

const prices = {
  "Acrílico a medida": {
    "Cristal (Recuperado)": {
      "2": Price,
      "3": 9.8,
      "4": 12.2,
      "5": 16.9,
      "8": 19.9,
      "10": 31.2,
    },
    "Opal (Recuperado)": {
      "2": 34.1,
      "3": 10.4,
      "4": 12.8,
      "5": 17.2,
      "8": 20.5,
      "10": 34.4,
    },
    "Color (Recuperado)": {
      "2": 37.7,
      "3": 11.6,
      "4": 13.4,
      "5": 18.1,
      "8": 21.4,
      "10": 35,
    },
    "Cristal (Original)": {
      "2": 38.3,
      "3": 14.3,
      "4": 18.9,
      "5": 25.7,
      "6": 32.7,
      "8": 37,
      "10": 54.3,
      "15": 63,
    },
    "Opal (Original)": {
      "2": 108.8,
      "3": 16.8,
      "5": 20.1,
      "10": 34.2,
    },
    "Color (Original)": {
      "2": 64.3,
      "3": 14.1,
      "5": 20.1,
      "10": 34.6,
    },
    "Color Traslúcido (Original)": {
      "3": 63.4,
    },
    "Espejo (Original)": {
      "3": 23.2,
    },
    "Espejo Traslúcido (Original)": {
      "3": 28.4,
    },
    "Metalizado (Original)": {
      "3": 29.8,
    },
    "Textura Madera (Original)": {
      "3": 30.8,
    },
    "Blanco Sellado (Original)": {
      "3": 31.5,
      "5": 22.8,
    },
    "Cristal Mate (Original)": {
      "3": 33.3,
    },
    "Negro Mate (Original)": {
      "3": 22.8,
    },
  },
  "Ac (240x120)": {
    "Cristal (Recuperado)": {
      "2": 208000,
      "3": 253500,
      "4": 345800,
      "5": 396500,
      "8": 592800,
      "10": 705900,
    },
    "Opal (Recuperado)": {
      "2": 221000,
      "3": 260000,
      "4": 357500,
      "5": 409500,
      "8": 609700,
      "10": 722800,
    },
    "Color (Recuperado)": {
      "2": 240500,
      "3": 286000,
      "4": 371800,
      "5": 422500,
      "8": 627900,
      "10": 739700,
    },
    "Cristal (Original)": {
      "2": 278600,
      "3": 379848,
      "4": 578400,
      "5": 648200,
      "10": 1406706,
    },
    "Opal (Original)": {
      "2": 375646,
      "3": 399000,
      "4": 620837,
      "5": 638412,
    },
    "Color (Original)": {
      "3": 399000,
      "5": 638412,
    },
    "Espejo (Original)": {
      "3": 552613,
    },
    "Cristal Mate (Original)": {
      "3": 419832,
    },
    "Negro Mate (Original)": {
      "3": 419832,
    },
  },
  "Ac (180x120)": {
    "Cristal (Recuperado)": {
      "2": 147714,
      "3": 182949,
      "4": 253418,
      "5": 304914,
      "8": 472956,
      "10": 514966,
    },
    "Opal (Recuperado)": {
      "2": 155845,
      "3": 195145,
      "4": 261549,
      "5": 311690,
      "8": 524452,
      "10": 571883,
    },
    "Color (Recuperado)": {
      "2": 173463,
      "3": 203276,
      "4": 273745,
      "5": 322532,
      "8": 532583,
      "10": 581369,
    },
    "Cristal (Original)": {
      "2": 233566,
      "3": 305545,
      "4": 401028,
      "5": 512709,
      "6": 580185,
      "8": 822642,
      "10": 1019463,
      "15": 1542322,
    },
    "Opal (Original)": {
      "2": 262945,
      "3": 315828,
      "4": 491451,
      "5": 512709,
      "10": 988533,
    },
    "Color (Original)": {
      "2": 211517,
      "3": 315828,
      "5": 512709,
      "10": 988533,
    },
    "Color Traslúcido (Original)": {
      "3": 331959,
    },
    "Espejo (Original)": {
      "3": 437752,
    },
    "Espejo Traslúcido (Original)": {
      "3": 418663,
    },
    "Metalizado (Original)": {
      "3": 528828,
    },
    "Textura Madera (Original)": {
      "3": 470231,
    },
    "Blanco Sellado (Original)": {
      "3": 323393,
      "5": 499599,
    },
    "Cristal Mate (Original)": {
      "3": 323393,
    },
    "Negro Mate (Original)": {
      "3": 323393,
    },
  },
  "Ac (120x120)": {
    "Cristal (Recuperado)": {
      "2": 112828,
      "3": 137509,
      "4": 187576,
      "5": 215078,
      "8": 321559,
      "10": 382909,
    },
    "Opal (Recuperado)": {
      "2": 119880,
      "3": 141035,
      "4": 193923,
      "5": 222130,
      "8": 330726,
      "10": 392076,
    },
    "Color (Recuperado)": {
      "2": 130457,
      "3": 155138,
      "4": 201680,
      "5": 229182,
      "8": 340599,
      "10": 401244,
    },
    "Cristal (Original)": {
      "2": 153025,
      "3": 208636,
      "4": 317693,
      "5": 356032,
      "10": 772649,
    },
    "Opal (Original)": {
      "2": 206328,
      "3": 219156,
      "4": 341002,
      "5": 350655,
    },
    "Color (Original)": {
      "3": 219156,
      "5": 350655,
    },
    "Espejo (Original)": {
      "3": 303529,
    },
    "Cristal Mate (Original)": {
      "3": 230598,
      "2": 173864,
    },
    "Negro Mate (Original)": {
      "3": 230598,
    },
    "Lila (Original)": {
      "3": 253658,
    },
  },
  "Ac (120x90)": {
    "Cristal (Recuperado)": {
      "2": 78368,
      "3": 97061,
      "4": 134447,
      "5": 161768,
      "8": 250919,
      "10": 273207,
    },
    "Opal (Recuperado)": {
      "2": 82682,
      "3": 103532,
      "4": 138761,
      "5": 165363,
      "8": 278240,
      "10": 303404,
    },
    "Color (Recuperado)": {
      "2": 92028,
      "3": 107845,
      "4": 145232,
      "5": 171114,
      "8": 282554,
      "10": 308437,
    },
    "Cristal (Original)": {
      "2": 125007,
      "3": 163532,
      "4": 214635,
      "5": 274408,
      "6": 310522,
      "8": 440287,
      "10": 545628,
      "15": 825468,
    },
    "Opal (Original)": {
      "2": 140732,
      "3": 169035,
      "4": 263030,
      "5": 274408,
      "10": 529074,
    },
    "Color (Original)": {
      "2": 113206,
      "3": 169035,
      "5": 274408,
      "10": 529074,
    },
    "Color Traslúcido (Original)": {
      "3": 177668,
    },
    "Espejo (Original)": {
      "3": 234290,
    },
    "Espejo Traslúcido (Original)": {
      "3": 224073,
    },
    "Metalizado (Original)": {
      "3": 283035,
    },
    "Textura Madera (Original)": {
      "3": 251673,
    },
    "Blanco Sellado (Original)": {
      "3": 173084,
      "5": 267391,
    },
    "Cristal Mate (Original)": {
      "3": 173084,
    },
    "Negro Mate (Original)": {
      "3": 173084,
    },
  },
  "Ac (120x60)": {
    "Cristal (Recuperado)": {
      "2": 58621,
      "3": 71444,
      "4": 97457,
      "5": 111746,
      "8": 167069,
      "10": 198944,
    },
    "Opal (Recuperado)": {
      "2": 62285,
      "3": 73276,
      "4": 100755,
      "5": 115410,
      "8": 171832,
      "10": 203707,
    },
    "Color (Recuperado)": {
      "2": 67781,
      "3": 80604,
      "4": 104785,
      "5": 119074,
      "8": 176962,
      "10": 208470,
    },
    "Cristal (Original)": {
      "2": 79944,
      "3": 108996,
      "4": 165970,
      "5": 185999,
      "10": 403649,
    },
    "Opal (Original)": {
      "2": 107790,
      "3": 114492,
      "5": 183190,
    },
    "Color (Original)": {
      "3": 114492,
      "5": 183190,
    },
    "Espejo (Original)": {
      "3": 158570,
    },
    "Cristal Mate (Original)": {
      "3": 120470,
    },
    "Negro Mate (Original)": {
      "3": 120470,
    },
  },
  "Ac Cuarto (90x60 / 120x45)": {
    "Cristal (Recuperado)": {
      "2": 40312,
      "3": 49927,
      "4": 69158,
      "5": 83212,
      "8": 129070,
      "10": 140535,
    },
    "Opal (Recuperado)": {
      "2": 42531,
      "3": 53256,
      "4": 71377,
      "5": 85061,
      "8": 143124,
      "10": 156068,
    },
    "Color (Recuperado)": {
      "2": 47338,
      "3": 55475,
      "4": 74706,
      "5": 88019,
      "8": 145343,
      "10": 158657,
    },
    "Cristal (Original)": {
      "2": 64560,
      "3": 84456,
      "4": 110848,
      "5": 141717,
      "6": 160368,
      "8": 227385,
      "10": 281788,
      "15": 426311,
    },
    "Opal (Original)": {
      "2": 72681,
      "3": 87298,
      "5": 141717,
      "10": 273239,
    },
    "Color (Original)": {
      "2": 58465,
      "3": 87298,
      "5": 141717,
      "10": 273239,
    },
    "Color Traslúcido (Original)": {
      "3": 91757,
    },
    "Espejo (Original)": {
      "3": 120999,
    },
    "Espejo Traslúcido (Original)": {
      "3": 115722,
    },
    "Metalizado (Original)": {
      "3": 146173,
    },
    "Textura Madera (Original)": {
      "3": 129976,
    },
    "Blanco Sellado (Original)": {
      "3": 89389,
      "5": 138094,
    },
    "Cristal Mate (Original)": {
      "3": 89389,
    },
    "Negro Mate (Original)": {
      "3": 89389,
    },
  },
  "Ac Octavo (60x45)": {
    "Cristal (Recuperado)": {
      "2": 20438,
      "3": 25313,
      "4": 35063,
      "5": 42188,
      "8": 65438,
      "10": 71250,
    },
    "Opal (Recuperado)": {
      "2": 21563,
      "3": 27000,
      "4": 36188,
      "5": 43125,
      "8": 72563,
      "10": 79125,
    },
    "Color (Recuperado)": {
      "2": 24000,
      "3": 28125,
      "4": 37875,
      "5": 44625,
      "8": 73688,
      "10": 88482,
    },
    "Cristal (Original)": {
      "2": 32794,
      "3": 42900,
      "4": 56307,
      "5": 71987,
      "6": 81461,
      "8": 115503,
      "10": 143138,
      "15": 216550,
    },
    "Opal (Original)": {
      "2": 36919,
      "3": 44344,
      "5": 71987,
      "10": 138795,
    },
    "Color (Original)": {
      "2": 29698,
      "3": 44344,
      "5": 71987,
      "10": 138795,
    },
    "Color Traslúcido (Original)": {
      "3": 46609,
    },
    "Espejo (Original)": {
      "3": 61463,
    },
    "Espejo Traslúcido (Original)": {
      "3": 58783,
    },
    "Metalizado (Original)": {
      "3": 74250,
    },
    "Textura Madera (Original)": {
      "3": 66023,
    },
    "Blanco Sellado (Original)": {
      "3": 45406,
      "5": 70147,
    },
    "Cristal Mate (Original)": {
      "3": 45406,
    },
    "Negro Mate (Original)": {
      "3": 45406,
    },
  },
  "MDF a medida": {
    "MDF 2.5mm/2.7mm": {
      "MDF 2.5mm/2.7mm": 2.0,
    },
    "MDF 5.5mm": {
      "MDF 5.5mm": 5.0,
    },
    "MDF 9mm": {
      "MDF 9mm": 9.0,
    },
    "MDF 12mm": {
      "MDF 12mm": 12.0,
    },
  },
  "Vinilo a medida": {
    "Regular": {
      "Regular": 2.0,
    },
    "Brush": {
      "Brush": 4.0,
    },
    "Fotoluminiscente 5h": {
      "Fotoluminiscente 5h": 10.0,
    },
    "Fotoluminiscente 10h": {
      "Fotoluminiscente 10h": 20.0,
    },
    "Transfer": {
      "Transfer": 1.5,
    },
  },
  "Impresión": {
    "Vinilo laminado": {
      "Vinilo laminado": 6.0,
    },
    "Vinilo laminado en espejo": {
      "Vinilo laminado en espejo": 6.5,
    },
    "Banner": {
      "-": 8.0,
    },
  },
  "PS a medida": {
    "Blanco": {
      "15 (0.38 mm)": 1.3,
      "20 (0.5 mm)": 1.7,
      "30 (0.75 mm)": 2.6,
      "40 (1 mm)": 3.4,
      "60 (1.5 mm)": 5.1,
      "80 (2 mm)": 6.8,
      "100 (2.5 mm)": 8.4,
      "120 (3 mm)": 10.1,
      "150 (3.75 mm)": 12.6,
      "180 (4.5 mm)": 15.1,
    },
    "Ecolam": {
      "30 (0.75 mm)": 2.2,
      "40 (1 mm)": 2.9,
      "60 (1.5 mm)": 4.4,
      "80 (2 mm)": 5.8,
      "100 (2.5 mm)": 7.3,
    },
    "Blackout": {
      "20 (0.5 mm)": 2,
      "30 (0.75 mm)": 3,
      "40 (1 mm)": 3.9,
      "60 (1.5 mm)": 5.9,
    },
    "Colores": {
      "40 (1 mm)": 3.9,
      "60 (1.5 mm)": 5.8,
      "80 (2 mm)": 7.7,
      "100 (2.5 mm)": 9.6,
      "120 (3 mm)": 11.5,
    },
    "Cristal": {
      "40 (1 mm)": 5.2,
      "60 (1.5 mm)": 7.8,
      "80 (2 mm)": 10.3,
      "100 (2.5 mm)": 12.5,
      "120 (3 mm)": 15,
      "180 (4.5 mm)": 22.5,
    },
  },
  "PS (100x200)": {
    "Blanco": {
      "15 (0.38 mm)": 22400,
      "20 (0.5 mm)": 29900,
      "30 (0.75 mm)": 44800,
      "40 (1 mm)": 59700,
      "60 (1.5 mm)": 89500,
      "80 (2 mm)": 119300,
      "100 (2.5 mm)": 149100,
      "120 (3 mm)": 178900,
      "150 (3.75 mm)": 223700,
      "180 (4.5 mm)": 268400,
    },
    "Ecolam": {
      "30 (0.75 mm)": 38600,
      "40 (1 mm)": 51500,
      "60 (1.5 mm)": 77200,
      "80 (2 mm)": 102900,
      "100 (2.5 mm)": 128600,
    },
    "Blackout": {
      "20 (0.5 mm)": 34600,
      "30 (0.75 mm)": 51800,
      "40 (1 mm)": 69100,
      "60 (1.5 mm)": 103600,
    },
    "Colores": {
      "40 (1 mm)": 67900,
      "60 (1.5 mm)": 101800,
      "80 (2 mm)": 135800,
      "100 (2.5 mm)": 169700,
      "120 (3 mm)": 203600,
    },
    "Cristal": {
      "40 (1 mm)": 91400,
      "60 (1.5 mm)": 137000,
      "80 (2 mm)": 182700,
      "100 (2.5 mm)": 222100,
      "120 (3 mm)": 266500,
      "180 (4.5 mm)": 399700,
    },
  },
  "Pet-G a medida": {
    "Cristal": {
      "40 (1 mm)": 9.4,
    },
  },
  "Pet-G 100x200": {
    "Cristal": {
      "40 (1 mm)": 171200,
    },
  },
  "PP a medida": {
    "Natural (Hielo)": {
      "20 (0.5 mm)": 1.5,
      "30 (0.75 mm)": 2.2,
      "40 (1 mm)": 2.9,
      "60 (1.5 mm)": 4.4,
      "80 (2 mm)": 5.8,
      "120 (3 mm)": 8.8,
      "160 (4 mm)": 11.7,
      "200 (5 mm)": 14.6,
      "240 (6 mm)": 17.5,
    },
    "Color": {
      "20 (0.5 mm)": 1.7,
    },
  },
  "PP 100x200": {
    "Natural (Hielo)": {
      "20 (0.5 mm)": 26600,
      "30 (0.75 mm)": 39800,
      "40 (1 mm)": 53100,
      "60 (1.5 mm)": 79600,
      "80 (2 mm)": 106100,
      "120 (3 mm)": 160200,
      "160 (4 mm)": 213600,
      "200 (5 mm)": 267000,
      "240 (6 mm)": 320400,
    },
    "Color": {
      "20 (0.5 mm)": 30300,
    },
  },
  "ABS": {
    "Silver": {
      "2.5mm": 20.0,
    },
    "Otros": {
      "2.5mm": 16.5,
    },
  },
  "Eléctricos": {
    "Neón Flex": {
      "Metro instalado": 30000.0,
      "Metro suelto": 15000.0,
    },
    "Fuente": {
      "12V-1A": 10000.0,
      "12V-2A": 18000.0,
      "12V-3A": 25000.0,
      "12V-5A": 40000.0,
      "12V-10A": 70000.0,
    },
  },
  "Herrajes": {
    "Cerradura": {
      "Grande": 6000.0,
      "Pequeña": 4000.0,
    },
    "Bisagra Acrílica": {
      "Grande": 3000.0,
      "Mediana": 4500.0,
      "Pequeña": 6000.0,
    },
    "Dilatador": {
      "D2xA2": 6000.0,
    },
  },
  "Letras Volumétrica": {
    "Color_LC": {
      "Con luz_C":  4500.0,
      "Sin luz_C":  4500.0,
    },
    "Brush (Silver)_LC": {
      "Con luz_B":  4500.0,
      "Sin luz_B":  4500.0,
    },
  },
  "Corte/Grabado": {
    "Tiempo": {
      "Tiempo (minutos)": 1000.0,
    },
    "Grabado": {
      "Tiempo (minutos)": 1000.0,
      "0.05": 135.7050,
      "0.06": 113.1567,
      "0.07": 97.1100,
      "0.08": 85.2133,
      "0.09": 75.8067,
      "0.1": 68.1983,
      "0.11": 62.2500,
      "0.12": 56.9933,
      "0.13": 52.7050,
      "0.14": 48.9700,
      "0.15": 45.6500,
      "0.2": 34.4450,
      "0.25": 27.6667,
      "0.3": 23.1017,
      "0.35": 19.9200,
      "0.4": 17.4300,
      "0.45": 15.4933,
      "0.5": 13.9717,
    },
  },
  "Mano de obra": {
    "-": {
      "-": 1.0,
    },
  },
  "Otros": {
    "-": {
      "-": 1.0,
    },
  },
};






const productsDiv = document.querySelector("#products");
const totalSpan = document.querySelector("#total");
const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const categorySelect = document.createElement("select");
  categorySelect.innerHTML = `<option disabled selected>Seleccione</option>`;
  for (const category in categories) {
      categorySelect.innerHTML += `<option>${category}</option>`;
  }
  
  const materialSelect = document.createElement("select");
  materialSelect.innerHTML = `<option disabled selected>Seleccione</option>`;
  
  const caliberSelect = document.createElement("select");
  caliberSelect.innerHTML = `<option disabled selected>Seleccione</option>`;

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = 1; // Set default quantity value to 1

  
  const widthInput = document.createElement("input");
  widthInput.type = "number";
  widthInput.value = 1; // Set default width value to 1

  const heightInput = document.createElement("input");
  heightInput.type = "number";
  heightInput.value = 1; // Set default height value to 1;
  
  const costSpan = document.createElement("span");
  
  categorySelect.addEventListener("change", () => {
      materialSelect.innerHTML = `<option disabled selected>Material</option>`;
      for (const material of categories[categorySelect.value]) {
          materialSelect.innerHTML += `<option>${material}</option>`;
      }
      
      caliberSelect.innerHTML = `<option disabled selected>Caliber</option>`;
      
      updateCost();
  });
  
  materialSelect.addEventListener("change", () => {
      caliberSelect.innerHTML = `<option disabled selected>Caliber</option>`;
      for (const caliber of materials[materialSelect.value]) {
          caliberSelect.innerHTML += `<option>${caliber}</option>`;
      }
      
      updateCost();
  });
  
  caliberSelect.addEventListener("change", updateCost);
  
  quantityInput.addEventListener("input", updateCost);

  widthInput.addEventListener("input", updateCost);
  
  heightInput.addEventListener("input", updateCost);
  
  function updateCost() {
    if (categorySelect.value && materialSelect.value && caliberSelect.value && widthInput.value && heightInput.value && quantityInput.value) {
      const pricePerUnitArea = prices[categorySelect.value][materialSelect.value][caliberSelect.value];
      const area = widthInput.value * heightInput.value;
      const quantity = quantityInput.value;
      const cost = pricePerUnitArea * area * quantity;
      
      costSpan.textContent = `$${cost}`;
      
      updateTotal();
    } else {
      costSpan.textContent = "";
      
      updateTotal();
    }
  }
  
  
  
  function updateTotal() {
    let totalCost = 0;
    
    for (const productDiv of productsDiv.querySelectorAll(".product")) {
      if (productDiv.querySelector("span").textContent) {
        const cost = parseFloat(productDiv.querySelector("span").textContent.slice(1));
        const quantity = parseInt(productDiv.querySelector("input[type='number']").value);
        totalCost += cost; // * quantity; // Update total cost considering quantity
      }
    }
    
    totalSpan.textContent = `$${totalCost}`;
  }
  
  
  productDiv.appendChild(categorySelect);
  productDiv.appendChild(materialSelect);
  productDiv.appendChild(caliberSelect);
  productDiv.appendChild(quantityInput); // Add the quantity input field
  productDiv.appendChild(widthInput);
  productDiv.appendChild(heightInput);
  productDiv.appendChild(costSpan);
  
  productsDiv.appendChild(productDiv);
});


// Save button click event
const saveButton = document.querySelector("#save");
saveButton.addEventListener("click", () => {
  const title = document.querySelector("#title").value.trim();
  const observations = document.querySelector("#observations").value.trim();
  const products = [];

  for (const productDiv of productsDiv.querySelectorAll(".product")) {
    const category = productDiv.querySelector("select:nth-child(1)").value;
    const material = productDiv.querySelector("select:nth-child(2)").value;
    const caliber = productDiv.querySelector("select:nth-child(3)").value;
    const width = productDiv.querySelector("input[type='number']:nth-child(4)").value;
    const height = productDiv.querySelector("input[type='number']:nth-child(5)").value;
    const cost = productDiv.querySelector("span").textContent.slice(1);

    products.push({ category, material, caliber, width, height, cost });
  }

  if (title === "") {
    alert("Please enter a title before saving.");
    return;
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2);
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const fileName = `COT_${year}${month}${day}_${hours}${minutes}_${title}.json`;

  const data = { title, observations, products }
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.click();
});


// Load button change event
const loadInput = document.querySelector("#load");
loadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = JSON.parse(event.target.result);
    document.querySelector("#title").value = data.title;
    document.querySelector("#observations").value = data.observations;

    productsDiv.innerHTML = ""; // Clear existing products

    data.products.forEach((product) => {
      addButton.click(); // Add new product div
      const productDiv = productsDiv.lastElementChild;

      productDiv.querySelector("select:nth-child(1)").value = product.category;
      productDiv.querySelector("select:nth-child(1)").dispatchEvent(new Event("change"));

      productDiv.querySelector("select:nth-child(2)").value = product.material;
      productDiv.querySelector("select:nth-child(2)").dispatchEvent(new Event("change"));

      productDiv.querySelector("select:nth-child(3)").value = product.caliber;
      productDiv.querySelector("select:nth-child(3)").dispatchEvent(new Event("change"));

      productDiv.querySelector("input[type='number']:nth-child(4)").value = product.width;
      productDiv.querySelector("input[type='number']:nth-child(4)").dispatchEvent(new Event("input"));

      productDiv.querySelector("input[type='number']:nth-child(5)").value = product.height;
      productDiv.querySelector("input[type='number']:nth-child(5)").dispatchEvent(new Event("input"));
    });

    // Update the cost once all products are loaded
    updateTotal();
  }

  reader.readAsText(file);
});
