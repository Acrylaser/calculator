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
  "Cristal (Recuperado)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Opal (Recuperado)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Color (Recuperado)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Cristal (Original)": ['2mm', '3mm', '4mm', '5mm', '6mm', '8mm', '10mm', '15mm'],
  "Opal (Original)": ['2mm', '3mm', '5mm', '10mm', '4mm'],
  "Color (Original)": ['2mm', '3mm', '5mm', '10mm'],
  "Color Traslúcido (Original)": ['3mm'],
  "Espejo (Original)": ['3mm'],
  "Espejo Traslúcido (Original)": ['3mm'],
  "Metalizado (Original)": ['3mm'],
  "Textura Madera (Original)": ['3mm'],
  "Blanco Sellado (Original)": ['3mm', '5mm'],
  "Cristal Mate (Original)": ['3mm', '2mm'],
  "Negro Mate (Original)": ['3mm'],
  "Lila (Original)": ['3mm'],
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
      "2mm": 9.8,
      "3mm": 12.2,
      "4mm": 16.9,
      "5mm": 19.6,
      "8mm": 31.2,
      "10mm": 33.8,
    },
    "Opal (Recuperado)": {
      "2mm": 10.1,
      "3mm": 12.5,
      "4mm": 17.2,
      "5mm": 20.2,
      "8mm": 31.8,
      "10mm": 34.4,
    },
    "Color (Recuperado)": {
      "2mm": 11.6,
      "3mm": 13.4,
      "4mm": 18.1,
      "5mm": 21.1,
      "8mm": 32.9,
      "10mm": 36.2,
    },
    "Cristal (Original)": {
      "2mm": 14.3,
      "3mm": 18.9,
      "4mm": 25.7,
      "5mm": 32.7,
      "6mm": 35.5,
      "8mm": 52.1,
      "10mm": 63.0,
      "15mm": 104.4,
    },
    "Opal (Original)": {
      "2mm": 16.8,
      "3mm": 20.1,
      "5mm": 32.8,
      "10mm": 61.6,
    },
    "Color (Original)": {
      "2mm": 13.5,
      "3mm": 20.1,
      "5mm": 33.2,
      "10mm": 60.8,
    },
    "Color Traslúcido (Original)": {
      "3mm": 22.2,
    },
    "Espejo (Original)": {
      "3mm": 28.4,
    },
    "Espejo Traslúcido (Original)": {
      "3mm": 28.6,
    },
    "Metalizado (Original)": {
      "3mm": 30.8,
    },
    "Textura Madera (Original)": {
      "3mm": 30.2,
    },
    "Blanco Sellado (Original)": {
      "3mm": 21.9,
      "5mm": 31.9,
    },
    "Cristal Mate (Original)": {
      "3mm": 21.9,
    },
    "Negro Mate (Original)": {
      "3mm": 21.9,
    },
  },
  "Ac (240x120)": {
    "Cristal (Recuperado)": {
      "2mm": 208000.0,
      "3mm": 249600.0,
      "4mm": 338000.0,
      "5mm": 387400.0,
      "8mm": 572000.0,
      "10mm": 676000.0,
    },
    "Opal (Recuperado)": {
      "2mm": 221000.0,
      "3mm": 260000.0,
      "4mm": 351000.0,
      "5mm": 396500.0,
      "8mm": 585000.0,
      "10mm": 682500.0,
    },
    "Color (Recuperado)": {
      "2mm": 240500.0,
      "3mm": 286000.0,
      "4mm": 364000.0,
      "5mm": 410800.0,
      "8mm": 598000.0,
      "10mm": 734500.0,
    },
    "Cristal (Original)": {
      "2mm": 280000.0,
      "3mm": 379848.0,
      "4mm": 554746.0,
      "5mm": 648200.0,
      "10mm": 1349179.0,
    },
    "Opal (Original)": {
      "2mm": 360284.0,
      "3mm": 399000.0,
      "4mm": 595448.0,
      "5mm": 638412.0,
    },
    "Color (Original)": {
      "3mm": 399000.0,
      "5mm": 638412.0,
    },
    "Espejo (Original)": {
      "3mm": 552613.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 419832.0,
    },
    "Negro Mate (Original)": {
      "3mm": 419832.0,
    },
  },
  "Ac (180x120)": {
    "Cristal (Recuperado)": {
      "2mm": 147714.0,
      "3mm": 182949.0,
      "4mm": 253418.0,
      "5mm": 298138.0,
      "8mm": 472956.0,
      "10mm": 514966.0,
    },
    "Opal (Recuperado)": {
      "2mm": 153135.0,
      "3mm": 189725.0,
      "4mm": 261549.0,
      "5mm": 304914.0,
      "8mm": 481087.0,
      "10mm": 521742.0,
    },
    "Color (Recuperado)": {
      "2mm": 173463.0,
      "3mm": 203276.0,
      "4mm": 273745.0,
      "5mm": 319821.0,
      "8mm": 498704.0,
      "10mm": 548845.0,
    },
    "Cristal (Original)": {
      "2mm": 233566.0,
      "3mm": 305545.0,
      "4mm": 401028.0,
      "5mm": 512709.0,
      "6mm": 580185.0,
      "8mm": 822642.0,
      "10mm": 1028276.0,
      "15mm": 1542322.0,
    },
    "Opal (Original)": {
      "2mm": 262945.0,
      "3mm": 315828.0,
      "4mm": 474517.0,
      "5mm": 512709.0,
      "10mm": 988533.0,
    },
    "Color (Original)": {
      "2mm": 211517.0,
      "3mm": 315828.0,
      "5mm": 512709.0,
      "10mm": 988533.0,
    },
    "Color Traslúcido (Original)": {
      "3mm": 331959.0,
    },
    "Espejo (Original)": {
      "3mm": 437752.0,
    },
    "Espejo Traslúcido (Original)": {
      "3mm": 418663.0,
    },
    "Metalizado (Original)": {
      "3mm": 528828.0,
    },
    "Textura Madera (Original)": {
      "3mm": 470231.0,
    },
    "Blanco Sellado (Original)": {
      "3mm": 323393.0,
      "5mm": 499599.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 323393.0,
    },
    "Negro Mate (Original)": {
      "3mm": 323393.0,
    },
  },
  "Ac (120x120)": {
    "Cristal (Recuperado)": {
      "2mm": 112828.0,
      "3mm": 135394.0,
      "4mm": 183345.0,
      "5mm": 210142.0,
      "8mm": 310276.0,
      "10mm": 366690.0,
    },
    "Opal (Recuperado)": {
      "2mm": 119880.0,
      "3mm": 141035.0,
      "4mm": 190397.0,
      "5mm": 215078.0,
      "8mm": 317328.0,
      "10mm": 370216.0,
    },
    "Color (Recuperado)": {
      "2mm": 130457.0,
      "3mm": 155138.0,
      "4mm": 197449.0,
      "5mm": 222835.0,
      "8mm": 324380.0,
      "10mm": 398423.0,
    },
    "Cristal (Original)": {
      "2mm": 153794.0,
      "3mm": 208636.0,
      "4mm": 304701.0,
      "5mm": 356032.0,
      "10mm": 741052.0,
    },
    "Opal (Original)": {
      "2mm": 197890.0,
      "3mm": 219156.0,
      "4mm": 327057.0,
      "5mm": 350655.0,
    },
    "Color (Original)": {
      "3mm": 219156.0,
      "5mm": 350655.0,
    },
    "Espejo (Original)": {
      "3mm": 303529.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 230598.0,
      "2mm": 173864.0,
    },
    "Negro Mate (Original)": {
      "3mm": 230598.0,
    },
    "Lila (Original)": {
      "3mm": 253658.0,
    },
  },
  "Ac (120x90)": {
    "Cristal (Recuperado)": {
      "2mm": 78368.0,
      "3mm": 97061.0,
      "4mm": 134447.0,
      "5mm": 158173.0,
      "8mm": 250919.0,
      "10mm": 273207.0,
    },
    "Opal (Recuperado)": {
      "2mm": 81244.0,
      "3mm": 100656.0,
      "4mm": 138761.0,
      "5mm": 161768.0,
      "8mm": 255233.0,
      "10mm": 276802.0,
    },
    "Color (Recuperado)": {
      "2mm": 92028.0,
      "3mm": 107845.0,
      "4mm": 145232.0,
      "5mm": 169676.0,
      "8mm": 264580.0,
      "10mm": 291182.0,
    },
    "Cristal (Original)": {
      "2mm": 125007.0,
      "3mm": 163532.0,
      "4mm": 214635.0,
      "5mm": 274408.0,
      "6mm": 310522.0,
      "8mm": 440287.0,
      "10mm": 550345.0,
      "15mm": 825468.0,
    },
    "Opal (Original)": {
      "2mm": 140732.0,
      "3mm": 169035.0,
      "4mm": 253967.0,
      "5mm": 274408.0,
      "10mm": 529074.0,
    },
    "Color (Original)": {
      "2mm": 113206.0,
      "3mm": 169035.0,
      "5mm": 274408.0,
      "10mm": 529074.0,
    },
    "Color Traslúcido (Original)": {
      "3mm": 177668.0,
    },
    "Espejo (Original)": {
      "3mm": 234290.0,
    },
    "Espejo Traslúcido (Original)": {
      "3mm": 224073.0,
    },
    "Metalizado (Original)": {
      "3mm": 283035.0,
    },
    "Textura Madera (Original)": {
      "3mm": 251673.0,
    },
    "Blanco Sellado (Original)": {
      "3mm": 173084.0,
      "5mm": 267391.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 173084.0,
    },
    "Negro Mate (Original)": {
      "3mm": 173084.0,
    },
  },
  "Ac (120x60)": {
    "Cristal (Recuperado)": {
      "2mm": 58621.0,
      "3mm": 70345.0,
      "4mm": 95259.0,
      "5mm": 109182.0,
      "8mm": 161207.0,
      "10mm": 190518.0,
    },
    "Opal (Recuperado)": {
      "2mm": 62285.0,
      "3mm": 73276.0,
      "4mm": 98923.0,
      "5mm": 111746.0,
      "8mm": 164871.0,
      "10mm": 192350.0,
    },
    "Color (Recuperado)": {
      "2mm": 67781.0,
      "3mm": 80604.0,
      "4mm": 102587.0,
      "5mm": 115776.0,
      "8mm": 168535.0,
      "10mm": 207005.0,
    },
    "Cristal (Original)": {
      "2mm": 80345.0,
      "3mm": 108996.0,
      "4mm": 159182.0,
      "5mm": 185999.0,
      "10mm": 387141.0,
    },
    "Opal (Original)": {
      "2mm": 103382.0,
      "3mm": 114492.0,
      "5mm": 183190.0,
    },
    "Color (Original)": {
      "3mm": 114492.0,
      "5mm": 183190.0,
    },
    "Espejo (Original)": {
      "3mm": 158570.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 120470.0,
    },
    "Negro Mate (Original)": {
      "3mm": 120470.0,
    },
  },
  "Ac Cuarto (90x60 / 120x45)": {
    "Cristal (Recuperado)": {
      "2mm": 40312.0,
      "3mm": 49927.0,
      "4mm": 69158.0,
      "5mm": 81363.0,
      "8mm": 129070.0,
      "10mm": 140535.0,
    },
    "Opal (Recuperado)": {
      "2mm": 41791.0,
      "3mm": 51776.0,
      "4mm": 71377.0,
      "5mm": 83212.0,
      "8mm": 131289.0,
      "10mm": 142384.0,
    },
    "Color (Recuperado)": {
      "2mm": 47338.0,
      "3mm": 55475.0,
      "4mm": 74706.0,
      "5mm": 87280.0,
      "8mm": 136097.0,
      "10mm": 149781.0,
    },
    "Cristal (Original)": {
      "2mm": 64560.0,
      "3mm": 84456.0,
      "4mm": 110848.0,
      "5mm": 141717.0,
      "6mm": 160368.0,
      "8mm": 227385.0,
      "10mm": 284225.0,
      "15mm": 426311.0,
    },
    "Opal (Original)": {
      "2mm": 72681.0,
      "3mm": 87298.0,
      "5mm": 141717.0,
      "10mm": 273239.0,
    },
    "Color (Original)": {
      "2mm": 58465.0,
      "3mm": 87298.0,
      "5mm": 141717.0,
      "10mm": 273239.0,
    },
    "Color Traslúcido (Original)": {
      "3mm": 91757.0,
    },
    "Espejo (Original)": {
      "3mm": 120999.0,
    },
    "Espejo Traslúcido (Original)": {
      "3mm": 115722.0,
    },
    "Metalizado (Original)": {
      "3mm": 146173.0,
    },
    "Textura Madera (Original)": {
      "3mm": 129976.0,
    },
    "Blanco Sellado (Original)": {
      "3mm": 89389.0,
      "5mm": 138094.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 89389.0,
    },
    "Negro Mate (Original)": {
      "3mm": 89389.0,
    },
  },
  "Ac Octavo (60x45)": {
    "Cristal (Recuperado)": {
      "2mm": 20438.0,
      "3mm": 25313.0,
      "4mm": 35063.0,
      "5mm": 41250.0,
      "8mm": 65438.0,
      "10mm": 71250.0,
    },
    "Opal (Recuperado)": {
      "2mm": 21188.0,
      "3mm": 26250.0,
      "4mm": 36188.0,
      "5mm": 42188.0,
      "8mm": 66563.0,
      "10mm": 72188.0,
    },
    "Color (Recuperado)": {
      "2mm": 24000.0,
      "3mm": 28125.0,
      "4mm": 37875.0,
      "5mm": 44250.0,
      "8mm": 69000.0,
      "10mm": 83532.0,
    },
    "Cristal (Original)": {
      "2mm": 32794.0,
      "3mm": 42900.0,
      "4mm": 56307.0,
      "5mm": 71987.0,
      "6mm": 81461.0,
      "8mm": 115503.0,
      "10mm": 144375.0,
      "15mm": 216550.0,
    },
    "Opal (Original)": {
      "2mm": 36919.0,
      "3mm": 44344.0,
      "5mm": 71987.0,
      "10mm": 138795.0,
    },
    "Color (Original)": {
      "2mm": 29698.0,
      "3mm": 44344.0,
      "5mm": 71987.0,
      "10mm": 138795.0,
    },
    "Color Traslúcido (Original)": {
      "3mm": 46609.0,
    },
    "Espejo (Original)": {
      "3mm": 61463.0,
    },
    "Espejo Traslúcido (Original)": {
      "3mm": 58783.0,
    },
    "Metalizado (Original)": {
      "3mm": 74250.0,
    },
    "Textura Madera (Original)": {
      "3mm": 66023.0,
    },
    "Blanco Sellado (Original)": {
      "3mm": 45406.0,
      "5mm": 70147.0,
    },
    "Cristal Mate (Original)": {
      "3mm": 45406.0,
    },
    "Negro Mate (Original)": {
      "3mm": 45406.0,
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
