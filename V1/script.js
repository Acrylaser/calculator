const categories = {
  "Acrílico a medida": ["Cristal u Opal (A)", "Colores (A)", "Espejo (A)", "Brush (A)"], //check
  "MDF a medida": ["MDF 2.5mm/2.7mm", "MDF 5.5mm", "MDF 9mm", "MDF 12mm"], //check
  "Vinilo a medida": ["Regular", "Brush", "Fotoluminiscente 5h", "Fotoluminiscente 10h", "Transfer"],//check
  "Impresión": ["Vinilo laminado", "Vinilo laminado en espejo", "Banner"],//check
  "Poliestireno a medida":["Blanco u Opal (P)", "Colores (P)"],//check
  "Eléctricos":["Neón Flex", "Fuente"],//check
  "Herrajes": ["Cerradura", "Bisagra acrílica", "Dilatador"],//check
  "Mano de obra": ["-"],
  "Otros": ["-"]
};

const materials = {
  "Cristal u Opal (A)": ["2mm", "3mm", "4mm", "5mm", "8mm", "10mm"],//check
  "Colores (A)": ["2mm", "3mm", "4mm", "5mm"],//check
  "Espejo (A)": ["3mm"],//check
  "Brush (A)": ["3mm"],//check

  "MDF 2.5mm/2.7mm": ["-"],//check
  "MDF 5.5mm": ["-"],//check
  "MDF 9mm": ["-"],//check
  "MDF 12mm": ["-"],//check

  "Regular": ["-"],//check
  "Brush": ["-"],//check
  "Fotoluminiscente 5h": ["-"],//check
  "Fotoluminiscente 10h": ["-"],//check
  "Transfer": ["-"],//check

  "Vinilo laminado": ["-"],//check
  "Vinilo laminado en espejo": ["-"],//check
  "Banner": ["-"],//check

  "Blanco u Opal (P)": ["40(1mm)", "60(1.5mm)", "80(2mm)", "100(2.5mm)"],//check
  "Colores (P)" : ["40(1mm)", "60(1.5mm)", "80(2mm)", "100(2.5mm)"],//check

  "Neón Flex" : ["Metro instalado", "Metro suelto"],
  "Fuente" : ["12V-1A", "12V-2A", "12V-3A", "12V-5A", "12V-10A"],

  "Cerradura":["Grande", "Pequeña"],
  "Bisagra acrílica":["Grande", "Mediana", "Pequeña"],
  "Dilatador":["D2xA2"],

  "-":["-"]
};

const prices = {
  "Acrílico a medida": {
    "Cristal u Opal (A)": {
        "2mm": 16,
        "3mm": 20,
        "4mm": 25,
        "5mm": 32,
        "8mm": 46,
        "10mm": 57
    },
    "Colores (A)": {
        "2mm": 18,
        "3mm": 22,
        "4mm": 27,
        "5mm": 35
    },
    "Espejo (A)": {
        "3mm": 28
    },
    "Brush (A)": {
      "3mm": 34
    }
  },
  "MDF a medida": {
    "MDF 2.5mm/2.7mm": {
        "-": 2
    },
    "MDF 5.5mm": {
      "-": 5
    },
    "MDF 9mm": {
      "-": 9
    },
    "MDF 12mm": {
      "-": 12
    }
  },
  "Vinilo a medida": {
    "Regular":{
      "-":2
    },
    "Brush":{
      "-":4
    },
    "Fotoluminiscente 5h":{
      "-":10
    },
    "Fotoluminiscente 10h":{
      "-":20
    },
    "Transfer":{
      "-":1.5
    }
  },

  "Impresión": {
    "Vinilo laminado":{
      "-":6
    },
    "Vinilo laminado en espejo":{
      "-":6.5
    },
    "Banner":{
      "-":7
    }
  },

"Poliestireno a medida": {
    "Blanco u Opal (P)": {
      "40(1mm)": 3.5,
      "60(1.5mm)": 5,
      "80(2mm)": 6.5,
      "100(2.5mm)": 8
    },
    "Colores (P)": {
      "40(1mm)": 3.5,
      "60(1.5mm)": 5,
      "80(2mm)": 6.5,
      "100(2.5mm)": 8
    }
  },

  "Eléctricos": {
    "Neón Flex": {
      "Metro instalado": 30000,
      "Metro suelto": 15000
    },
    "Fuente": {
      "12V-1A": 10,
      "12V-2A": 18,
      "12V-3A": 25,
      "12V-5A": 40,
      "12V-10A": 70
    }
  },

  "Herrajes":{
    "Cerradura":{
      "Grande": 6000,
      "Pequeña": 4000
    },
    "Bisagra acrílica":{
      "Grande": 3000,
      "Mediana": 4500,
      "Pequeña": 6000
    },
    "Dilatador":{
      "D2xA2":6000
    }, 
  },
  "Mano de obra":{
    "-":{
      "-":1
    }
  },
  "Otros":{
    "-":{
      "-":1
    }
  }
}

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
