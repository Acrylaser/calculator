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
      "2": 9.8,
      "3": 12.2,
      "4": 16.9,
      "5": 19.9,
      "8": 31.2,
      "10": 34.1,
    },
    "Opal (Recuperado)": {
      "2": 10.4,
      "3": 12.8,
      "4": 17.2,
      "5": 20.5,
      "8": 34.4,
      "10": 37.7,
    },
    "Color (Recuperado)": {
      "2": 11.6,
      "3": 13.4,
      "4": 18.1,
      "5": 21.4,
      "8": 35.0,
      "10": 38.3,
    },
    "Cristal (Original)": {
      "2": 14.3,
      "3": 18.9,
      "4": 25.7,
      "5": 32.7,
      "6": 37.0,
      "8": 54.3,
      "10": 63.0,
      "15": 108.8,
    },
    "Opal (Original)": {
      "2": 16.8,
      "3": 20.1,
      "5": 34.2,
      "10": 64.3,
    },
    "Color (Original)": {
      "2": 14.1,
      "3": 20.1,
      "5": 34.6,
      "10": 63.4,
    },
    "Color Traslúcido (Original)": {
      "3": 23.2,
    },
    "Espejo (Original)": {
      "3": 28.4,
    },
    "Espejo Traslúcido (Original)": {
      "3": 29.8,
    },
    "Metalizado (Original)": {
      "3": 30.8,
    },
    "Textura Madera (Original)": {
      "3": 31.5,
    },
    "Blanco Sellado (Original)": {
      "3": 22.8,
      "5": 33.3,
    },
    "Cristal Mate (Original)": {
      "3": 22.8,
    },
    "Negro Mate (Original)": {
      "3": 22.8,
    },
  },
  "Ac (240x120)": {
    "Cristal (Recuperado)": {
      "2": 208000.0,
      "3": 253500.0,
      "4": 345800.0,
      "5": 396500.0,
      "8": 592800.0,
      "10": 705900.0,
    },
    "Opal (Recuperado)": {
      "2": 221000.0,
      "3": 260000.0,
      "4": 357500.0,
      "5": 409500.0,
      "8": 609700.0,
      "10": 722800.0,
    },
    "Color (Recuperado)": {
      "2": 240500.0,
      "3": 286000.0,
      "4": 371800.0,
      "5": 422500.0,
      "8": 627900.0,
      "10": 739700.0,
    },
    "Cristal (Original)": {
      "2": 278600.0,
      "3": 379848.0,
      "4": 578400.0,
      "5": 648200.0,
      "10": 1406706.0,
    },
    "Opal (Original)": {
      "2": 375646.0,
      "3": 399000.0,
      "4": 620837.0,
      "5": 638412.0,
    },
    "Color (Original)": {
      "3": 399000.0,
      "5": 638412.0,
    },
    "Espejo (Original)": {
      "3": 552613.0,
    },
    "Cristal Mate (Original)": {
      "3": 419832.0,
    },
    "Negro Mate (Original)": {
      "3": 419832.0,
    },
  },
  "Ac (180x120)": {
    "Cristal (Recuperado)": {
      "2": 147714.0,
      "3": 182949.0,
      "4": 253418.0,
      "5": 304914.0,
      "8": 472956.0,
      "10": 514966.0,
    },
    "Opal (Recuperado)": {
      "2": 155845.0,
      "3": 195145.0,
      "4": 261549.0,
      "5": 311690.0,
      "8": 524452.0,
      "10": 571883.0,
    },
    "Color (Recuperado)": {
      "2": 173463.0,
      "3": 203276.0,
      "4": 273745.0,
      "5": 322532.0,
      "8": 532583.0,
      "10": 581369.0,
    },
    "Cristal (Original)": {
      "2": 233566.0,
      "3": 305545.0,
      "4": 401028.0,
      "5": 512709.0,
      "6": 580185.0,
      "8": 822642.0,
      "10": 1019463.0,
      "15": 1542322.0,
    },
    "Opal (Original)": {
      "2": 262945.0,
      "3": 315828.0,
      "4": 491451.0,
      "5": 512709.0,
      "10": 988533.0,
    },
    "Color (Original)": {
      "2": 211517.0,
      "3": 315828.0,
      "5": 512709.0,
      "10": 988533.0,
    },
    "Color Traslúcido (Original)": {
      "3": 331959.0,
    },
    "Espejo (Original)": {
      "3": 437752.0,
    },
    "Espejo Traslúcido (Original)": {
      "3": 418663.0,
    },
    "Metalizado (Original)": {
      "3": 528828.0,
    },
    "Textura Madera (Original)": {
      "3": 470231.0,
    },
    "Blanco Sellado (Original)": {
      "3": 323393.0,
      "5": 499599.0,
    },
    "Cristal Mate (Original)": {
      "3": 323393.0,
    },
    "Negro Mate (Original)": {
      "3": 323393.0,
    },
  },
  "Ac (120x120)": {
    "Cristal (Recuperado)": {
      "2": 112828.0,
      "3": 137509.0,
      "4": 187576.0,
      "5": 215078.0,
      "8": 321559.0,
      "10": 382909.0,
    },
    "Opal (Recuperado)": {
      "2": 119880.0,
      "3": 141035.0,
      "4": 193923.0,
      "5": 222130.0,
      "8": 330726.0,
      "10": 392076.0,
    },
    "Color (Recuperado)": {
      "2": 130457.0,
      "3": 155138.0,
      "4": 201680.0,
      "5": 229182.0,
      "8": 340599.0,
      "10": 401244.0,
    },
    "Cristal (Original)": {
      "2": 153025.0,
      "3": 208636.0,
      "4": 317693.0,
      "5": 356032.0,
      "10": 772649.0,
    },
    "Opal (Original)": {
      "2": 206328.0,
      "3": 219156.0,
      "4": 341002.0,
      "5": 350655.0,
    },
    "Color (Original)": {
      "3": 219156.0,
      "5": 350655.0,
    },
    "Espejo (Original)": {
      "3": 303529.0,
    },
    "Cristal Mate (Original)": {
      "3": 230598.0,
      "2": 173864.0,
    },
    "Negro Mate (Original)": {
      "3": 230598.0,
    },
    "Lila (Original)": {
      "3": 253658.0,
    },
  },
  "Ac (120x90)": {
    "Cristal (Recuperado)": {
      "2": 78368.0,
      "3": 97061.0,
      "4": 134447.0,
      "5": 161768.0,
      "8": 250919.0,
      "10": 273207.0,
    },
    "Opal (Recuperado)": {
      "2": 82682.0,
      "3": 103532.0,
      "4": 138761.0,
      "5": 165363.0,
      "8": 278240.0,
      "10": 303404.0,
    },
    "Color (Recuperado)": {
      "2": 92028.0,
      "3": 107845.0,
      "4": 145232.0,
      "5": 171114.0,
      "8": 282554.0,
      "10": 308437.0,
    },
    "Cristal (Original)": {
      "2": 125007.0,
      "3": 163532.0,
      "4": 214635.0,
      "5": 274408.0,
      "6": 310522.0,
      "8": 440287.0,
      "10": 545628.0,
      "15": 825468.0,
    },
    "Opal (Original)": {
      "2": 140732.0,
      "3": 169035.0,
      "4": 263030.0,
      "5": 274408.0,
      "10": 529074.0,
    },
    "Color (Original)": {
      "2": 113206.0,
      "3": 169035.0,
      "5": 274408.0,
      "10": 529074.0,
    },
    "Color Traslúcido (Original)": {
      "3": 177668.0,
    },
    "Espejo (Original)": {
      "3": 234290.0,
    },
    "Espejo Traslúcido (Original)": {
      "3": 224073.0,
    },
    "Metalizado (Original)": {
      "3": 283035.0,
    },
    "Textura Madera (Original)": {
      "3": 251673.0,
    },
    "Blanco Sellado (Original)": {
      "3": 173084.0,
      "5": 267391.0,
    },
    "Cristal Mate (Original)": {
      "3": 173084.0,
    },
    "Negro Mate (Original)": {
      "3": 173084.0,
    },
  },
  "Ac (120x60)": {
    "Cristal (Recuperado)": {
      "2": 58621.0,
      "3": 71444.0,
      "4": 97457.0,
      "5": 111746.0,
      "8": 167069.0,
      "10": 198944.0,
    },
    "Opal (Recuperado)": {
      "2": 62285.0,
      "3": 73276.0,
      "4": 100755.0,
      "5": 115410.0,
      "8": 171832.0,
      "10": 203707.0,
    },
    "Color (Recuperado)": {
      "2": 67781.0,
      "3": 80604.0,
      "4": 104785.0,
      "5": 119074.0,
      "8": 176962.0,
      "10": 208470.0,
    },
    "Cristal (Original)": {
      "2": 79944.0,
      "3": 108996.0,
      "4": 165970.0,
      "5": 185999.0,
      "10": 403649.0,
    },
    "Opal (Original)": {
      "2": 107790.0,
      "3": 114492.0,
      "5": 183190.0,
    },
    "Color (Original)": {
      "3": 114492.0,
      "5": 183190.0,
    },
    "Espejo (Original)": {
      "3": 158570.0,
    },
    "Cristal Mate (Original)": {
      "3": 120470.0,
    },
    "Negro Mate (Original)": {
      "3": 120470.0,
    },
  },
  "Ac Cuarto (90x60 / 120x45)": {
    "Cristal (Recuperado)": {
      "2": 40312.0,
      "3": 49927.0,
      "4": 69158.0,
      "5": 83212.0,
      "8": 129070.0,
      "10": 140535.0,
    },
    "Opal (Recuperado)": {
      "2": 42531.0,
      "3": 53256.0,
      "4": 71377.0,
      "5": 85061.0,
      "8": 143124.0,
      "10": 156068.0,
    },
    "Color (Recuperado)": {
      "2": 47338.0,
      "3": 55475.0,
      "4": 74706.0,
      "5": 88019.0,
      "8": 145343.0,
      "10": 158657.0,
    },
    "Cristal (Original)": {
      "2": 64560.0,
      "3": 84456.0,
      "4": 110848.0,
      "5": 141717.0,
      "6": 160368.0,
      "8": 227385.0,
      "10": 281788.0,
      "15": 426311.0,
    },
    "Opal (Original)": {
      "2": 72681.0,
      "3": 87298.0,
      "5": 141717.0,
      "10": 273239.0,
    },
    "Color (Original)": {
      "2": 58465.0,
      "3": 87298.0,
      "5": 141717.0,
      "10": 273239.0,
    },
    "Color Traslúcido (Original)": {
      "3": 91757.0,
    },
    "Espejo (Original)": {
      "3": 120999.0,
    },
    "Espejo Traslúcido (Original)": {
      "3": 115722.0,
    },
    "Metalizado (Original)": {
      "3": 146173.0,
    },
    "Textura Madera (Original)": {
      "3": 129976.0,
    },
    "Blanco Sellado (Original)": {
      "3": 89389.0,
      "5": 138094.0,
    },
    "Cristal Mate (Original)": {
      "3": 89389.0,
    },
    "Negro Mate (Original)": {
      "3": 89389.0,
    },
  },
  "Ac Octavo (60x45)": {
    "Cristal (Recuperado)": {
      "2": 20438.0,
      "3": 25313.0,
      "4": 35063.0,
      "5": 42188.0,
      "8": 65438.0,
      "10": 71250.0,
    },
    "Opal (Recuperado)": {
      "2": 21563.0,
      "3": 27000.0,
      "4": 36188.0,
      "5": 43125.0,
      "8": 72563.0,
      "10": 79125.0,
    },
    "Color (Recuperado)": {
      "2": 24000.0,
      "3": 28125.0,
      "4": 37875.0,
      "5": 44625.0,
      "8": 73688.0,
      "10": 88482.0,
    },
    "Cristal (Original)": {
      "2": 32794.0,
      "3": 42900.0,
      "4": 56307.0,
      "5": 71987.0,
      "6": 81461.0,
      "8": 115503.0,
      "10": 143138.0,
      "15": 216550.0,
    },
    "Opal (Original)": {
      "2": 36919.0,
      "3": 44344.0,
      "5": 71987.0,
      "10": 138795.0,
    },
    "Color (Original)": {
      "2": 29698.0,
      "3": 44344.0,
      "5": 71987.0,
      "10": 138795.0,
    },
    "Color Traslúcido (Original)": {
      "3": 46609.0,
    },
    "Espejo (Original)": {
      "3": 61463.0,
    },
    "Espejo Traslúcido (Original)": {
      "3": 58783.0,
    },
    "Metalizado (Original)": {
      "3": 74250.0,
    },
    "Textura Madera (Original)": {
      "3": 66023.0,
    },
    "Blanco Sellado (Original)": {
      "3": 45406.0,
      "5": 70147.0,
    },
    "Cristal Mate (Original)": {
      "3": 45406.0,
    },
    "Negro Mate (Original)": {
      "3": 45406.0,
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
      "20 (0.5 mm)": 2.0,
      "30 (0.75 mm)": 3.0,
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
      "120 (3 mm)": 15.0,
      "180 (4.5 mm)": 22.5,
    },
  },
  "PS (100x200)": {
    "Blanco": {
      "15 (0.38 mm)": 22400.0,
      "20 (0.5 mm)": 29900.0,
      "30 (0.75 mm)": 44800.0,
      "40 (1 mm)": 59700.0,
      "60 (1.5 mm)": 89500.0,
      "80 (2 mm)": 119300.0,
      "100 (2.5 mm)": 149100.0,
      "120 (3 mm)": 178900.0,
      "150 (3.75 mm)": 223700.0,
      "180 (4.5 mm)": 268400.0,
    },
    "Ecolam": {
      "30 (0.75 mm)": 38600.0,
      "40 (1 mm)": 51500.0,
      "60 (1.5 mm)": 77200.0,
      "80 (2 mm)": 102900.0,
      "100 (2.5 mm)": 128600.0,
    },
    "Blackout": {
      "20 (0.5 mm)": 34600.0,
      "30 (0.75 mm)": 51800.0,
      "40 (1 mm)": 69100.0,
      "60 (1.5 mm)": 103600.0,
    },
    "Colores": {
      "40 (1 mm)": 67900.0,
      "60 (1.5 mm)": 101800.0,
      "80 (2 mm)": 135800.0,
      "100 (2.5 mm)": 169700.0,
      "120 (3 mm)": 203600.0,
    },
    "Cristal": {
      "40 (1 mm)": 91400.0,
      "60 (1.5 mm)": 137000.0,
      "80 (2 mm)": 182700.0,
      "100 (2.5 mm)": 222100.0,
      "120 (3 mm)": 266500.0,
      "180 (4.5 mm)": 399700.0,
    },
  },
  "Pet-G a medida": {
    "Cristal": {
      "40 (1 mm)": 9.4,
    },
  },
  "Pet-G 100x200": {
    "Cristal": {
      "40 (1 mm)": 171200.0,
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
      "20 (0.5 mm)": 26600.0,
      "30 (0.75 mm)": 39800.0,
      "40 (1 mm)": 53100.0,
      "60 (1.5 mm)": 79600.0,
      "80 (2 mm)": 106100.0,
      "120 (3 mm)": 160200.0,
      "160 (4 mm)": 213600.0,
      "200 (5 mm)": 267000.0,
      "240 (6 mm)": 320400.0,
    },
    "Color": {
      "20 (0.5 mm)": 30300.0,
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
      "Con luz_C": 4500.0,
      "Sin luz_C": 4500.0,
    },
    "Brush (Silver)_LC": {
      "Con luz_B": 4500.0,
      "Sin luz_B": 4500.0,
    },
  },
  "Corte/Grabado": {
    "Tiempo": {
      "Tiempo (minutos)": 1000.0,
    },
    "Grabado": {
      "Tiempo (minutos)": 1000.0,
      "0.05": 135.705,
      "0.06": 113.1567,
      "0.07": 97.11,
      "0.08": 85.2133,
      "0.09": 75.8067,
      "0.1": 68.1983,
      "0.11": 62.25,
      "0.12": 56.9933,
      "0.13": 52.705,
      "0.14": 48.97,
      "0.15": 45.65,
      "0.2": 34.445,
      "0.25": 27.6667,
      "0.3": 23.1017,
      "0.35": 19.92,
      "0.4": 17.43,
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

function createProductElement(data = {}) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const descriptionInput = document.createElement("input");
  descriptionInput.placeholder = "Descripción";
  descriptionInput.value = data.description || "";

  const categorySelect = document.createElement("select");
  categorySelect.innerHTML = `<option disabled selected>Seleccione categoría</option>`;
  for (const category in categories) {
    categorySelect.innerHTML += `<option>${category}</option>`;
  }

  const materialSelect = document.createElement("select");
  materialSelect.innerHTML = `<option disabled selected>Seleccione material</option>`;

  const caliberSelect = document.createElement("select");
  caliberSelect.innerHTML = `<option disabled selected>Seleccione calibre</option>`;

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = data.quantity || 1;

  const widthInput = document.createElement("input");
  widthInput.type = "number";
  widthInput.value = data.width || 1;

  const heightInput = document.createElement("input");
  heightInput.type = "number";
  heightInput.value = data.height || 1;

  const costSpan = document.createElement("span");
  costSpan.textContent = "";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑";
  deleteButton.onclick = () => {
    productDiv.remove();
    updateTotal();
  };

  const copyButton = document.createElement("button");
  copyButton.textContent = "📋";
  copyButton.onclick = () => {
    const cloneData = {
      description: descriptionInput.value,
      category: categorySelect.value,
      material: materialSelect.value,
      caliber: caliberSelect.value,
      quantity: quantityInput.value,
      width: widthInput.value,
      height: heightInput.value
    };
    createProductElement(cloneData);
  };

  function updateMaterialOptions() {
    materialSelect.innerHTML = `<option disabled selected>Seleccione material</option>`;
    if (categories[categorySelect.value]) {
      for (const material of categories[categorySelect.value]) {
        materialSelect.innerHTML += `<option>${material}</option>`;
      }
    }
  }

  function updateCaliberOptions() {
    caliberSelect.innerHTML = `<option disabled selected>Seleccione calibre</option>`;
    if (materials[materialSelect.value]) {
      for (const caliber of materials[materialSelect.value]) {
        caliberSelect.innerHTML += `<option>${caliber}</option>`;
      }
    }
  }

  function updateCost() {
    if (
      categorySelect.value && materialSelect.value && caliberSelect.value &&
      quantityInput.value && widthInput.value && heightInput.value
    ) {
      const price = prices[categorySelect.value]?.[materialSelect.value]?.[caliberSelect.value];
      if (price) {
        const cost = price * widthInput.value * heightInput.value * quantityInput.value;
        costSpan.textContent = `$${cost}`;
      } else {
        costSpan.textContent = "";
      }
    } else {
      costSpan.textContent = "";
    }
    updateTotal();
  }

  categorySelect.addEventListener("change", () => {
    updateMaterialOptions();
    updateCaliberOptions();
    updateCost();
  });

  materialSelect.addEventListener("change", () => {
    updateCaliberOptions();
    updateCost();
  });

  caliberSelect.addEventListener("change", updateCost);
  quantityInput.addEventListener("input", updateCost);
  widthInput.addEventListener("input", updateCost);
  heightInput.addEventListener("input", updateCost);

  // Si hay datos cargados, asignarlos
  if (data.category) {
    categorySelect.value = data.category;
    updateMaterialOptions();
    materialSelect.value = data.material;
    updateCaliberOptions();
    caliberSelect.value = data.caliber;
    updateCost();
  }

  productDiv.append(
    descriptionInput, categorySelect, materialSelect,
    caliberSelect, quantityInput, widthInput, heightInput,
    costSpan, copyButton, deleteButton
  );
  productsDiv.appendChild(productDiv);
}

function updateTotal() {
  let total = 0;
  for (const span of productsDiv.querySelectorAll(".product span")) {
    const value = parseFloat(span.textContent.replace("$", ""));
    if (!isNaN(value)) total += value;
  }
  totalSpan.textContent = `$${total}`;
}

addButton.addEventListener("click", () => createProductElement());

document.querySelector("#save").addEventListener("click", () => {
  const title = document.querySelector("#title").value.trim();
  const observations = document.querySelector("#observations").value.trim();
  const products = [];

  if (!title) {
    alert("Por favor ingresa un título.");
    return;
  }

  for (const productDiv of productsDiv.querySelectorAll(".product")) {
    const [description, cat, mat, cal] = productDiv.querySelectorAll("input, select");
    const inputs = productDiv.querySelectorAll("input[type='number']");
    const cost = productDiv.querySelector("span").textContent.replace("$", "");

    products.push({
      description: description.value,
      category: cat.value,
      material: mat.value,
      caliber: cal.value,
      width: inputs[0].value,
      height: inputs[1].value,
      quantity: inputs[2].value,
      cost
    });
  }

  const now = new Date();
  const fileName = `COT_${now.toISOString().slice(0, 16).replace(/[-T:]/g, '')}_${title}.json`;

  const blob = new Blob([JSON.stringify({ title, observations, products }, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
});

document.querySelector("#load").addEventListener("change", (event) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = JSON.parse(e.target.result);
    document.querySelector("#title").value = data.title;
    document.querySelector("#observations").value = data.observations;
    productsDiv.innerHTML = "";
    data.products.forEach(p => createProductElement(p));
  };
  reader.readAsText(event.target.files[0]);
});