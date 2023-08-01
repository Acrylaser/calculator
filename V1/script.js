const categories = {
  "Acrílico a medida": ['Cristal u Opal (A)', 'Colores (A)', 'Espejo (A)', 'Brush (A)'],
  "MDF a medida": ['MDF 2.5mm/2.7mm', 'MDF 5.5mm', 'MDF 9mm', 'MDF 12mm'],
  "Vinilo a medida": ['Regular', 'Brush', 'Fotoluminiscente 5h', 'Fotoluminiscente 10h', 'Transfer'],
  "Impresión": ['Vinilo laminado', 'Vinilo laminado en espejo', 'Banner'],
  "Poliestireno a medida": ['Blanco u Opal (P)', 'Colores (P)'],
  "Eléctricos": ['Neón Flex', 'Fuente'],
  "Herrajes": ['Cerradura', 'Bisagra acrílica', 'Dilatador'],
  "Corte/Grabado": ['Tiempo', 'Grabado'],
  "Mano de obra": ['-'],
  "Otros": ['-'],
};

const materials = {
  "Cristal u Opal (A)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Colores (A)": ['2mm', '3mm', '4mm', '5mm'],
  "Espejo (A)": ['3mm'],
  "Brush (A)": ['3mm'],
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
  "Blanco u Opal (P)": ['40(1mm)', '60(1.5mm)', '80(2mm)', '100(2.5mm)'],
  "Colores (P)": ['40(1mm)', '60(1.5mm)', '80(2mm)', '100(2.5mm)'],
  "Neón Flex": ['Metro instalado', 'Metro suelto'],
  "Fuente": ['12V-1A', '12V-2A', '12V-3A', '12V-5A', '12V-10A'],
  "Cerradura": ['Grande', 'Pequeña'],
  "Bisagra acrílica": ['Grande', 'Mediana', 'Pequeña'],
  "Dilatador": ['D2xA2'],
  "Tiempo": ['Tiempo (minutos)'],
  "Grabado": ['Tiempo (minutos)', 'Grueso (0.1mm)', 'Medio (0.075mm)', 'Fino (0.05mm)'],
  "-": ['-'],
};

const prices = {
  "Acrílico a medida": {
    "Cristal u Opal (A)": {
      "2mm": 16.0,
      "3mm": 20.0,
      "4mm": 25.0,
      "5mm": 32.0,
      "8mm": 46.0,
      "10mm": 57.0,
    },
    "Colores (A)": {
      "2mm": 18.0,
      "3mm": 22.0,
      "4mm": 27.0,
      "5mm": 35.0,
    },
    "Espejo (A)": {
      "3mm": 28.0,
    },
    "Brush (A)": {
      "3mm": 34.0,
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
  "Poliestireno a medida": {
    "Blanco u Opal (P)": {
      "40(1mm)": 3.5,
      "60(1.5mm)": 5.0,
      "80(2mm)": 6.5,
      "100(2.5mm)": 8.0,
    },
    "Colores (P)": {
      "40(1mm)": 3.5,
      "60(1.5mm)": 5.0,
      "80(2mm)": 6.5,
      "100(2.5mm)": 8.0,
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
    "Bisagra acrílica": {
      "Grande": 3000.0,
      "Mediana": 4500.0,
      "Pequeña": 6000.0,
    },
    "Dilatador": {
      "D2xA2": 6000.0,
    },
  },
  "Corte/Grabado": {
    "Tiempo": {
      "Tiempo (minutos)": 1000.0,
    },
    "Grabado": {
      "Tiempo (minutos)": 1000.0,
      "Grueso (0.1mm)": 60.5,
      "Medio (0.075mm)": 80.5,
      "Fino (0.05mm)": 12.2,
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
  categorySelect.innerHTML = `<option disabled selected>Category</option>`;
  for (const category in categories) {
      categorySelect.innerHTML += `<option>${category}</option>`;
  }
  
  const materialSelect = document.createElement("select");
  materialSelect.innerHTML = `<option disabled selected>Material</option>`;
  
  const caliberSelect = document.createElement("select");
  caliberSelect.innerHTML = `<option disabled selected>Caliber</option>`;
  
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
  
  widthInput.addEventListener("input", updateCost);
  
  heightInput.addEventListener("input", updateCost);
  
  function updateCost() {
      if (categorySelect.value && materialSelect.value && caliberSelect.value && widthInput.value && heightInput.value) {
          const pricePerUnitArea = prices[categorySelect.value][materialSelect.value][caliberSelect.value];
          const area = widthInput.value * heightInput.value;
          const cost = pricePerUnitArea * area;
          
          costSpan.textContent = `$${cost}`;
          
          updateTotal();
      } else {
          costSpan.textContent = "";
          
          updateTotal();
      }
  }
  
  function updateTotal() {
      let totalCost = 0;
      
      for (const costSpan of productsDiv.querySelectorAll(".product span")) {
          if (costSpan.textContent) {
              totalCost += parseFloat(costSpan.textContent.slice(1));
          }
      }
      
      totalSpan.textContent = totalCost;
  }
  
  productDiv.appendChild(categorySelect);
  productDiv.appendChild(materialSelect);
  productDiv.appendChild(caliberSelect);
  productDiv.appendChild(widthInput);
  productDiv.appendChild(heightInput);
  productDiv.appendChild(costSpan);
  
  productsDiv.appendChild(productDiv);
});
