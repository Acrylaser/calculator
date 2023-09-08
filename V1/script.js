const categories = {
  "Acrílico a medida": ['Cristal u Opal (A)', 'Colores (A)', 'Espejo (A)', 'Brush (Silver) (A)'],
  "MDF a medida": ['MDF 2.5mm/2.7mm', 'MDF 5.5mm', 'MDF 9mm', 'MDF 12mm'],
  "Vinilo a medida": ['Regular', 'Brush (Silver)', 'Fotoluminiscente 5h', 'Fotoluminiscente 10h', 'Transfer'],
  "Impresión": ['Vinilo laminado', 'Vinilo laminado en espejo', 'Banner'],
  "Poliestireno a medida": ['Blanco u Opal (P)', 'Colores (P)'],
  "Eléctricos": ['Neón Flex', 'Fuente'],
  "Herrajes": ['Cerradura', 'Bisagra acrílica', 'Dilatador'],
  "Letras cantoneradas": ['Con luz', 'Sin luz'],
  "Mano de obra": ['-'],
  "Otros": ['-'],
}

const materials = {
  "Cristal u Opal (A)": ['2mm', '3mm', '4mm', '5mm', '8mm', '10mm'],
  "Colores (A)": ['2mm', '3mm', '4mm', '5mm'],
  "Espejo (A)": ['3mm'],
  "Brush (Silver) (A)": ['3mm'],
  "MDF 2.5mm/2.7mm": ['-'],
  "MDF 5.5mm": ['-'],
  "MDF 9mm": ['-'],
  "MDF 12mm": ['-'],
  "Regular": ['-'],
  "Brush (Silver)": ['-'],
  "Fotoluminiscente 5h": ['-'],
  "Fotoluminiscente 10h": ['-'],
  "Transfer": ['-'],
  "Vinilo laminado": ['-'],
  "Vinilo laminado en espejo": ['-'],
  "Banner": ['-'],
  "Blanco u Opal (P)": ['40(1mm)', '60(1.5mm)', '80(2mm)', '100(2.5mm)'],
  "Colores (P)": ['40(1mm)', '60(1.5mm)', '80(2mm)', '100(2.5mm)'],
  "Neón Flex": ['Metro instalado', 'Metro suelto'],
  "Fuente": ['12V-1A', '12V-2A', '12V-3A', '12V-5A', '12V-10A'],
  "Cerradura": ['Grande', 'Pequeña'],
  "Bisagra acrílica": ['Pequeña (30X34mm)', 'Mediana (35X45mm)', 'Grande (40X65mm)', 'Muy Grande (40X100mm)', 'Un metro'],
  "Dilatador": ['D2xA2'],
  "Con luz": ['Color', 'Brush (Silver)'],
  "Sin luz": ['Color', 'Brush (Silver)'],
  "-": ['-'],
}

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
    "Brush (Silver) (A)": {
      "3mm": 34.0,
    },
  },
  "MDF a medida": {
    "MDF 2.5mm/2.7mm": {
      "-": 2.0,
    },
    "MDF 5.5mm": {
      "-": 5.0,
    },
    "MDF 9mm": {
      "-": 9.0,
    },
    "MDF 12mm": {
      "-": 12.0,
    },
  },
  "Vinilo a medida": {
    "Regular": {
      "-": 2.0,
    },
    "Brush (Silver)": {
      "-": 4.0,
    },
    "Fotoluminiscente 5h": {
      "-": 10.0,
    },
    "Fotoluminiscente 10h": {
      "-": 20.0,
    },
    "Transfer": {
      "-": 1.5,
    },
  },
  "Impresión": {
    "Vinilo laminado": {
      "-": 6.0,
    },
    "Vinilo laminado en espejo": {
      "-": 6.5,
    },
    "Banner": {
      "-": 7.0,
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
      "Pequeña (30X34mm)": 3000.0,
      "Mediana (35X45mm)": 4500.0,
      "Grande (40X65mm)": 6000.0,
      "Muy Grande (40X100mm)": 9000.0,
      "Un metro": 45000.0,
    },
    "Dilatador": {
      "D2xA2": 6000.0,
    },
  },
  "Letras cantoneradas": {
    "Con luz": {
      "Color": 4500.0,
      "Brush (Silver)": 4900.0,
    },
    "Sin luz": {
      "Color": 2300.0,
      "Brush (Silver)": 2700.0,
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
}


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
