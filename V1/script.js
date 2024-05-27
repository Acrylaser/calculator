const categories = {
  "Acrílico (Cuarto de lámina)": ['Cristal  Org', 'Opal Org', 'Color Org', 'Espejo Org', 'Brush Org', 'Cristal (Rec)', 'Opal (Rec)', 'Color (Rec)'],
  "Acrílico (Lámina)": ['Cristal  Org', 'Opal Org', 'Color Org', 'Espejo Org', 'Brush Org', 'Cristal (Rec)', 'Opal (Rec)', 'Color (Rec)'],
  "Acrílico (Media lámina)": ['Cristal  Org', 'Opal Org', 'Color Org', 'Espejo Org', 'Brush Org', 'Cristal (Rec)', 'Opal (Rec)', 'Color (Rec)'],
  "Acrílico (Octavo)": ['Cristal  Org', 'Opal Org', 'Color Org', 'Espejo Org', 'Brush Org', 'Cristal (Rec)', 'Opal (Rec)', 'Color (Rec)'],
  "Acrílico a medida": ['Cristal (Org)', 'Opal (Org)', 'Color (Org)', 'Espejo (Org)', 'Brush (Org)', 'Cristal (Rec)', 'Opal (Rec)', 'Color (Rec)'],
  "MDF a medida": ['MDF 2.5mm/2.7mm', 'MDF 5.5mm', 'MDF 9mm', 'MDF 12mm'],
  "Vinilo a medida": ['Regular', 'Brush', 'Fotoluminiscente 5h', 'Fotoluminiscente 10h', 'Transfer'],
  "Impresión": ['Vinilo laminado', 'Vinilo laminado en espejo', 'Banner'],
  "Poliestireno a medida": ['Blanco u Opal (P)', 'Colores (P)'],
  "Eléctricos": ['Neón Flex', 'Fuente'],
  "Herrajes": ['Cerradura', 'Bisagra Acrílica', 'Dilatador'],
  "Letras Volumétrica": ['Color_LC', 'Brush (Silver)_LC'],
  "Corte/Grabado": ['Tiempo', 'Grabado'],
  "Mano de obra": ['-'],
  "Otros": ['-'],
};

const materials = {
  "Cristal  Org": ['2mm', '3mm', '4mm', '5mm', '6mm*', '8mm', '10mm', '15mm*'],
  "Opal Org": ['2mm', '3mm', '4mm*', '5mm', '8mm*', '10mm'],
  "Color Org": ['2mm', '3mm', '4mm*', '5mm', '8mm*', '10mm'],
  "Espejo Org": ['3mm'],
  "Brush Org": ['3mm'],
  "Cristal (Rec)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Opal (Rec)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Color (Rec)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Cristal (Org)": ['2mm', '3mm', '4mm', '5mm', '6mm*', '8mm', '10mm', '15mm*'],
  "Opal (Org)": ['2mm', '3mm', '4mm*', '5mm', '8mm*', '10mm'],
  "Color (Org)": ['2mm', '3mm', '4mm*', '5mm', '8mm', '10mm'],
  "Espejo (Org)": ['3mm'],
  "Brush (Org)": ['3mm'],
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
  "Bisagra Acrílica": ['Grande', 'Mediana', 'Pequeña'],
  "Dilatador": ['D2xA2'],
  "Color_LC": ['Con luz_C', 'Sin luz_C'],
  "Brush (Silver)_LC": ['Con luz_B', 'Sin luz_B'],
  "Tiempo": ['Tiempo (minutos)'],
  "Grabado": ['Tiempo (minutos)', 'Grueso (0.1mm)', 'Medio (0.075mm)', 'Fino (0.05mm)'],
  "-": ['-'],
};

const prices = {
  "Acrílico (Cuarto de lámina)": {
    "Cristal  Org": {
      "2mm": 16000.0,
      "3mm": 25000.0,
      "4mm": 32000.0,
      "5mm": 37000.0,
      "6mm*": 46000.0,
      "8mm": 65000.0,
      "10mm": 79000.0,
      "15mm*": 124000.0,
    },
    "Opal Org": {
      "2mm": 18000.0,
      "3mm": 25000.0,
      "4mm*": 34000.0,
      "5mm": 44000.0,
      "8mm*": 69000.0,
      "10mm": 81000.0,
    },
    "Color Org": {
      "2mm": 18000.0,
      "3mm": 25000.0,
      "4mm*": 48000.0,
      "5mm": 42000.0,
      "8mm*": 79000.0,
      "10mm": 79000.0,
    },
    "Espejo Org": {
      "3mm": 35000.0,
    },
    "Brush Org": {
      "3mm": 41000.0,
    },
    "Cristal (Rec)": {
      "2mm": 55000.0,
      "3mm": 68000.0,
      "4mm": 96000.0,
      "5mm": 113000.0,
      "8mm": 181000.0,
      "10mm": 197000.0,
    },
    "Opal (Rec)": {
      "2mm": 57000.0,
      "3mm": 71000.0,
      "4mm": 99000.0,
      "5mm": 116000.0,
      "8mm": 184000.0,
      "10mm": 200000.0,
    },
    "Color (Rec)": {
      "2mm": 65000.0,
      "3mm": 76000.0,
      "4mm": 103000.0,
      "5mm": 121000.0,
      "8mm": 191000.0,
      "10mm": 210000.0,
    },
  },
  "Acrílico (Lámina)": {
    "Cristal  Org": {
      "2mm": 223000.0,
      "3mm": 327000.0,
      "4mm": 422000.0,
      "5mm": 528000.0,
      "6mm*": 634000.0,
      "8mm": 876000.0,
      "10mm": 1054000.0,
      "15mm*": 1630000.0,
    },
    "Opal Org": {
      "2mm": 235000.0,
      "3mm": 327000.0,
      "4mm*": 451000.0,
      "5mm": 576000.0,
      "8mm*": 945000.0,
      "10mm": 1130000.0,
    },
    "Color Org": {
      "2mm": 228000.0,
      "3mm": 333000.0,
      "4mm*": 439000.0,
      "5mm": 544000.0,
      "8mm*": 870000.0,
      "10mm": 1033000.0,
    },
    "Espejo Org": {
      "3mm": 452000.0,
    },
    "Brush Org": {
      "3mm": 528000.0,
    },
    "Cristal (Rec)": {
      "2mm": 166000.0,
      "3mm": 208000.0,
      "4mm": 291000.0,
      "5mm": 344000.0,
      "8mm": 550000.0,
      "10mm": 600000.0,
    },
    "Opal (Rec)": {
      "2mm": 173000.0,
      "3mm": 216000.0,
      "4mm": 301000.0,
      "5mm": 352000.0,
      "8mm": 560000.0,
      "10mm": 608000.0,
    },
    "Color (Rec)": {
      "2mm": 197000.0,
      "3mm": 232000.0,
      "4mm": 315000.0,
      "5mm": 370000.0,
      "8mm": 581000.0,
      "10mm": 640000.0,
    },
  },
  "Acrílico (Media lámina)": {
    "Cristal  Org": {
      "2mm": 123000.0,
      "3mm": 184000.0,
      "4mm": 233000.0,
      "5mm": 284000.0,
      "6mm*": 348000.0,
      "8mm": 490000.0,
      "10mm": 586000.0,
      "15mm*": 933000.0,
    },
    "Opal Org": {
      "2mm": 131000.0,
      "3mm": 184000.0,
      "4mm*": 254000.0,
      "5mm": 324000.0,
      "8mm*": 388000.0,
      "10mm": 420000.0,
    },
    "Color Org": {
      "2mm": 133000.0,
      "3mm": 187000.0,
      "4mm*": 187000.0,
      "5mm": 306000.0,
      "8mm*": 306000.0,
      "10mm": 586000.0,
    },
    "Espejo Org": {
      "3mm": 256000.0,
    },
    "Brush Org": {
      "3mm": 298000.0,
    },
    "Cristal (Rec)": {
      "2mm": 104000.0,
      "3mm": 130000.0,
      "4mm": 182000.0,
      "5mm": 215000.0,
      "8mm": 344000.0,
      "10mm": 375000.0,
    },
    "Opal (Rec)": {
      "2mm": 108000.0,
      "3mm": 135000.0,
      "4mm": 188000.0,
      "5mm": 220000.0,
      "8mm": 350000.0,
      "10mm": 380000.0,
    },
    "Color (Rec)": {
      "2mm": 123000.0,
      "3mm": 145000.0,
      "4mm": 197000.0,
      "5mm": 231000.0,
      "8mm": 363000.0,
      "10mm": 400000.0,
    },
  },
  "Acrílico (Octavo)": {
    "Cristal  Org": {
      "2mm": 33000.0,
      "3mm": 51000.0,
      "4mm": 65000.0,
      "5mm": 76000.0,
      "6mm*": 94000.0,
      "8mm": 134000.0,
      "10mm": 162000.0,
      "15mm*": 255000.0,
    },
    "Opal Org": {
      "2mm": 37000.0,
      "3mm": 51000.0,
      "4mm*": 70000.0,
      "5mm": 90000.0,
      "8mm*": 142000.0,
      "10mm": 167000.0,
    },
    "Color Org": {
      "2mm": 37000.0,
      "3mm": 52000.0,
      "4mm*": 99000.0,
      "5mm": 86000.0,
      "8mm*": 162000.0,
      "10mm": 162000.0,
    },
    "Espejo Org": {
      "3mm": 72000.0,
    },
    "Brush Org": {
      "3mm": 83000.0,
    },
    "Cristal (Rec)": {
      "2mm": 30000.0,
      "3mm": 37000.0,
      "4mm": 52000.0,
      "5mm": 62000.0,
      "8mm": 99000.0,
      "10mm": 108000.0,
    },
    "Opal (Rec)": {
      "2mm": 31000.0,
      "3mm": 39000.0,
      "4mm": 54000.0,
      "5mm": 63000.0,
      "8mm": 101000.0,
      "10mm": 109000.0,
    },
    "Color (Rec)": {
      "2mm": 35000.0,
      "3mm": 42000.0,
      "4mm": 57000.0,
      "5mm": 66000.0,
      "8mm": 104000.0,
      "10mm": 115000.0,
    },
  },
  "Acrílico a medida": {
    "Cristal (Org)": {
      "2mm": 12.0,
      "3mm": 17.5,
      "4mm": 22.5,
      "5mm": 28.0,
      "6mm*": 34.0,
      "8mm": 46.5,
      "10mm": 56.0,
      "15mm*": 87.0,
    },
    "Opal (Org)": {
      "2mm": 12.5,
      "3mm": 17.5,
      "4mm*": 24.0,
      "5mm": 30.5,
      "8mm*": 50.5,
      "10mm": 60.5,
    },
    "Color (Org)": {
      "2mm": 12.0,
      "3mm": 18.0,
      "4mm*": 23.5,
      "5mm": 29.0,
      "8mm": 46.5,
      "10mm": 55.0,
    },
    "Espejo (Org)": {
      "3mm": 24.0,
    },
    "Brush (Org)": {
      "3mm": 28.0,
    },
    "Cristal (Rec)": {
      "2mm": 9.0,
      "3mm": 11.0,
      "4mm": 15.5,
      "5mm": 18.5,
      "8mm": 29.5,
      "10mm": 32.0,
    },
    "Opal (Rec)": {
      "2mm": 9.5,
      "3mm": 11.5,
      "4mm": 16.0,
      "5mm": 19.0,
      "8mm": 30.0,
      "10mm": 32.5,
    },
    "Color (Rec)": {
      "2mm": 10.5,
      "3mm": 12.5,
      "4mm": 17.0,
      "5mm": 20.0,
      "8mm": 31.0,
      "10mm": 34.5,
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
