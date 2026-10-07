const clientesData = [
  {
    "Numero Cliente": 2,
    "Nombre": "Gloria Zamora",
    "Rut": 98246479,
    "Direccion": "Amancay 751 los J.del Cerro Taltal",
    "Celular": 961100002
  },
  {
    "Numero Cliente": 3,
    "Nombre": "Silvia Espejo",
    "Rut": 66591808,
    "Direccion": "Avenida Matta 1695 Taltal",
    "Celular": 552612461
  },
  {
    "Numero Cliente": 4,
    "Nombre": "Angelina Roga",
    "Rut": 74680828,
    "Direccion": "Avenida Matta 2168 Taltal",
    "Celular": 998952691
  },
  {
    "Numero Cliente": 5,
    "Nombre": "Ekko Mart SPA",
    "Rut": 778691515,
    "Direccion": "Eluterio Ramires 271 Taltal",
    "Celular": 990970802
  },
  {
    "Numero Cliente": 6,
    "Nombre": "Ana Cuadra",
    "Rut": 93281225,
    "Direccion": "Progreso 664 Taltal",
    "Celular": 977412074
  },
  {
    "Numero Cliente": 7,
    "Nombre": "Wilson Rojas",
    "Rut": 49798709,
    "Direccion": "Merino Jarpa 960 Chañaral",
    "Celular": 983600776
  },
  {
    "Numero Cliente": 8,
    "Nombre": "Restuarant El Corazon SPA",
    "Rut": 776294926,
    "Direccion": "Jorge Montt 683 Taltal",
    "Celular": 999132566
  },
  {
    "Numero Cliente": 11,
    "Nombre": "Ana Palacio",
    "Rut": "6477929k",
    "Direccion": "Ohiggins 583 Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 12,
    "Nombre": "Rafael M. Tapia",
    "Rut": 121707047,
    "Direccion": "Serrano 801 Taltal",
    "Celular": 949202122
  },
  {
    "Numero Cliente": 13,
    "Nombre": "Nelson Colillan",
    "Rut": "9465498k",
    "Direccion": "Sargento Aldea Taltal",
    "Celular": 992784297
  },
  {
    "Numero Cliente": 14,
    "Nombre": "Ximena E. Diaz Carcamo",
    "Rut": 92948943,
    "Direccion": "Thompson 667 Taltal",
    "Celular": 996918972
  },
  {
    "Numero Cliente": 15,
    "Nombre": "Maria A. Zazzali Piazzoli",
    "Rut": 70879778,
    "Direccion": "Arturo Prat 619 Taltal",
    "Celular": 552611724
  },
  {
    "Numero Cliente": 16,
    "Nombre": "Luis Esquivel",
    "Rut": 171327962,
    "Direccion": "Niganor Plaza 1070 Antofagas",
    "Celular": 995284579
  },
  {
    "Numero Cliente": 17,
    "Nombre": "Fernando L. Godoy Perez",
    "Rut": 101991598,
    "Direccion": "Carrera 108 Taltal",
    "Celular": 988355016
  },
  {
    "Numero Cliente": 18,
    "Nombre": "Minimarket Gyn SPA",
    "Rut": 773534292,
    "Direccion": "Arturo Prat 1397 Taltal",
    "Celular": 957137022
  },
  {
    "Numero Cliente": 19,
    "Nombre": "Andrea Alejandra Araya Araya",
    "Rut": "13326970-3",
    "Direccion": "Riquelme 916",
    "Celular": 947743420
  },
  {
    "Numero Cliente": 20,
    "Nombre": "Rita C. Araya Perez",
    "Rut": 67574389,
    "Direccion": "argento Aldea 402 Taltal",
    "Celular": 94290588
  },
  {
    "Numero Cliente": 21,
    "Nombre": "Patricia Guarda Carillo",
    "Rut": 88716078,
    "Direccion": "Juan Martinez 447 Taltal",
    "Celular": 977597666
  },
  {
    "Numero Cliente": 22,
    "Nombre": "Dolly Ayala Pipazrro",
    "Rut": 70962144,
    "Direccion": "Serrano 716 Taltal",
    "Celular": 999122202
  },
  {
    "Numero Cliente": 24,
    "Nombre": "Maria I. Quintana Egana",
    "Rut": 55141045,
    "Direccion": "Avenida Matta 148 Taltal",
    "Celular": 552611107
  },
  {
    "Numero Cliente": 23,
    "Nombre": "Nestor",
    "Rut": "",
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 25,
    "Nombre": "Com.San Pablo SPA",
    "Rut": 76447976,
    "Direccion": "Serrano 956 Taltal",
    "Celular": 965120806
  },
  {
    "Numero Cliente": 26,
    "Nombre": "Pancho Cabrera",
    "Rut": "10.518.533-2",
    "Direccion": "",
    "Celular": 976817052
  },
  {
    "Numero Cliente": 27,
    "Nombre": "Miguel Gavilan",
    "Rut": 137897512,
    "Direccion": "Prat 486 Taltal",
    "Celular": 942489958
  },
  {
    "Numero Cliente": 28,
    "Nombre": "Servicios Integrales",
    "Rut": 78286469,
    "Direccion": "Zuleta 25 Chañaral",
    "Celular": ""
  },
  {
    "Numero Cliente": 31,
    "Nombre": "Comercial San Francisco",
    "Rut": 781316865,
    "Direccion": "Leonidas Perez 2938 Copiapo",
    "Celular": ""
  },
  {
    "Numero Cliente": 34,
    "Nombre": "Victor Covarrubias Vegas",
    "Rut": 187923123,
    "Direccion": "Arturo Prat 475 Taltal",
    "Celular": 952094939
  },
  {
    "Numero Cliente": 35,
    "Nombre": "Maria Teresa Araya Araya",
    "Rut": 100100142,
    "Direccion": "Avenida Arturo Prat 1511 Chñaral",
    "Celular": 997058028
  },
  {
    "Numero Cliente": 36,
    "Nombre": "Oscar M. Zamora Salazar",
    "Rut": 39512882,
    "Direccion": "Freire 613 Chañaral",
    "Celular": ""
  },
  {
    "Numero Cliente": 37,
    "Nombre": "Marcelina Carmona Constancio",
    "Rut": "11380114k",
    "Direccion": "Isabel Barrios Ford 666 Taltal",
    "Celular": 98222559
  },
  {
    "Numero Cliente": 38,
    "Nombre": "Delia Reyes Cuello",
    "Rut": "8759775k",
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 39,
    "Nombre": "Elvia AnaisRamirez",
    "Rut": 225886318,
    "Direccion": "Serrano 820 Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 40,
    "Nombre": "Yubitza Tapia",
    "Rut": 135303151,
    "Direccion": "Matta 1221 Taltal",
    "Celular": 971305905
  },
  {
    "Numero Cliente": 41,
    "Nombre": "Claudia Miskulini",
    "Rut": 161336599,
    "Direccion": "E. Lillo 319 Taltal",
    "Celular": 930681983
  },
  {
    "Numero Cliente": 42,
    "Nombre": "Maria/Ana Palacio",
    "Rut": "",
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 43,
    "Nombre": "Casa Blanca SPA",
    "Rut": 73682607,
    "Direccion": "",
    "Celular": 957718524
  },
  {
    "Numero Cliente": 44,
    "Nombre": "Javier Antonio Rojas Salas",
    "Rut": 94464013,
    "Direccion": "Merino Jarpa 583 Chañaral",
    "Celular": 997365732
  },
  {
    "Numero Cliente": 45,
    "Nombre": "Rossana Ines Pizarro Toro",
    "Rut": 98627340,
    "Direccion": "Zuleta 149 Chañaral",
    "Celular": 989547123
  },
  {
    "Numero Cliente": 46,
    "Nombre": "Jannette Cordovez",
    "Rut": "8876238k",
    "Direccion": "Atacama 795 Taltal",
    "Celular": 956652713
  },
  {
    "Numero Cliente": 47,
    "Nombre": "Maritza Abarca Valderrama",
    "Rut": 108734299,
    "Direccion": "Mario Bahamones 1886 Renacer Taltal",
    "Celular": 962336853
  },
  {
    "Numero Cliente": 48,
    "Nombre": "Marcia Aguirre",
    "Rut": 105882742,
    "Direccion": "Santo Bahamondes 845 Taltal",
    "Celular": 979589200
  },
  {
    "Numero Cliente": 49,
    "Nombre": "Liliana Lizama Lopez",
    "Rut": 73221102,
    "Direccion": "San Martin 631 Taltal",
    "Celular": 973835208
  },
  {
    "Numero Cliente": 50,
    "Nombre": "Geovani Alberto Marambio",
    "Rut": 99435895,
    "Direccion": "Esmeralda 760 Taltal",
    "Celular": 932266690
  },
  {
    "Numero Cliente": 51,
    "Nombre": "Sara ester Contreras Yañez",
    "Rut": 133268200,
    "Direccion": "Ramirez 345",
    "Celular": 956911080
  },
  {
    "Numero Cliente": 52,
    "Nombre": "Raniero Perucci Osorio",
    "Rut": 109323837,
    "Direccion": "San Martin 217 Taltal",
    "Celular": 995965975
  },
  {
    "Numero Cliente": 53,
    "Nombre": "Milza Antonia Ramos Mercado",
    "Rut": 64617958,
    "Direccion": "Los Carrers 940 Chañaral",
    "Celular": 522481114
  },
  {
    "Numero Cliente": 55,
    "Nombre": "Mauricio Segundo Valenzuela Cordovez",
    "Rut": 165242629,
    "Direccion": "AV Gral Bonilla Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 54,
    "Nombre": "Oscar Javier Beecher Bugueno",
    "Rut": 117232263,
    "Direccion": "Avda Diego de Almeyda 528 Chañaral",
    "Celular": ""
  },
  {
    "Numero Cliente": 56,
    "Nombre": "Juan Sebastian Montenegro",
    "Rut": 761772988,
    "Direccion": "esmeralda 328",
    "Celular": 983979681
  },
  {
    "Numero Cliente": 57,
    "Nombre": "Yenny Oliyanes",
    "Rut": 139758684,
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 58,
    "Nombre": "Misael Gavilan",
    "Rut": "",
    "Direccion": "Avenida Matta",
    "Celular": 983979681
  },
  {
    "Numero Cliente": 59,
    "Nombre": "Rentas e Inversiones Betania SPA",
    "Rut": 775068558,
    "Direccion": "Av los Loros 1357 Copiapo",
    "Celular": ""
  },
  {
    "Numero Cliente": 60,
    "Nombre": "Lucy del Carmen Rojo Bugueno",
    "Rut": 103897629,
    "Direccion": "Avenida Arica 669",
    "Celular": ""
  },
  {
    "Numero Cliente": 61,
    "Nombre": "Carnes La Andina 4E Spa",
    "Rut": "78339552-5",
    "Direccion": "Juan Martinez 814 D de Almagro",
    "Celular": ""
  },
  {
    "Numero Cliente": 62,
    "Nombre": "Andrea Vergara Soto",
    "Rut": 103322715,
    "Direccion": "Merino Jarpa 865 Taltal",
    "Celular": 976742318
  },
  {
    "Numero Cliente": 63,
    "Nombre": "Teresa Polez",
    "Rut": 47460468,
    "Direccion": "Avenida Matta 42",
    "Celular": 944478551
  },
  {
    "Numero Cliente": 65,
    "Nombre": "En San Cristobal SPA",
    "Rut": 778956853,
    "Direccion": "Buena Esperanza 540 Copiapo",
    "Celular": ""
  },
  {
    "Numero Cliente": 64,
    "Nombre": "Carniceria y Roticeria Joche Joche Ivan Tapia",
    "Rut": 781421057,
    "Direccion": "Diego de Almagro 511",
    "Celular": 999997405
  },
  {
    "Numero Cliente": 69,
    "Nombre": "La Central 2.0 SPA",
    "Rut": 776103810,
    "Direccion": "San Martin 283-287 Taltal",
    "Celular": 973820522
  },
  {
    "Numero Cliente": 70,
    "Nombre": "Mis Raices SPA",
    "Rut": 773582513,
    "Direccion": "Gallo 598 Esquina Montt Caldera",
    "Celular": ""
  },
  {
    "Numero Cliente": 72,
    "Nombre": "El Viejo Robles SPA",
    "Rut": 775508027,
    "Direccion": "El Caleuche",
    "Celular": ""
  },
  {
    "Numero Cliente": 78,
    "Nombre": "Rotiseria Taltal Itda",
    "Rut": 761932403,
    "Direccion": "Prat 709 Taltal",
    "Celular": 992432208
  },
  {
    "Numero Cliente": 79,
    "Nombre": "Lidia del Carmen Gomez Chinga",
    "Rut": 106818924,
    "Direccion": "P.Norte/Sur 1090",
    "Celular": 962324955
  },
  {
    "Numero Cliente": 80,
    "Nombre": "A & B SPA",
    "Rut": 775902353,
    "Direccion": "Av Matta 1221 Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 81,
    "Nombre": "Yomar Mariana Arana Mosquera",
    "Rut": "21512052k",
    "Direccion": "12 de Julio 038 Casa Poblacion Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 82,
    "Nombre": "Oscar Julio Calderon Fritis",
    "Rut": 5515402,
    "Direccion": "Maipu 717 Copiapo",
    "Celular": ""
  },
  {
    "Numero Cliente": 83,
    "Nombre": "Lina Maria Carvajal Vielma",
    "Rut": "7827008k",
    "Direccion": "Gaston Serazzi 367 Aeropuerto Chañaral",
    "Celular": ""
  },
  {
    "Numero Cliente": 84,
    "Nombre": "Rosa Vianette Palacios Ramos",
    "Rut": 109172294,
    "Direccion": "Serrano 701-709 Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 85,
    "Nombre": "Jacqueline Ximena Acuña Armijo",
    "Rut": 245614578,
    "Direccion": "Serrano 985 Oficina",
    "Celular": ""
  },
  {
    "Numero Cliente": 86,
    "Nombre": "Silvia Lidia Lizama Lopez",
    "Rut": 54697155,
    "Direccion": "San Martin 641 Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 87,
    "Nombre": "Juan Luis Lai Burgos",
    "Rut": 95666493,
    "Direccion": "Los Baños 226 Chañaral",
    "Celular": ""
  },
  {
    "Numero Cliente": 88,
    "Nombre": "Soc Hecort Ltda",
    "Rut": 797618705,
    "Direccion": "Comercio 394",
    "Celular": 965176238
  },
  {
    "Numero Cliente": 89,
    "Nombre": "Inmobiliaria Atacama SPA",
    "Rut": 768964041,
    "Direccion": "Avda. Matta 1435 Taltal",
    "Celular": ""
  },
  {
    "Numero Cliente": 29,
    "Nombre": "Mirza",
    "Rut": "",
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 1,
    "Nombre": "HOSTAL PAN DE AZUCA",
    "Rut": "",
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 68,
    "Nombre": "Edith Montalvo Chipana",
    "Rut": "28.669.677-5",
    "Direccion": "Los Carrera 514",
    "Celular": ""
  },
  {
    "Numero Cliente": 67,
    "Nombre": "Chompo",
    "Rut": "",
    "Direccion": "",
    "Celular": ""
  },
  {
    "Numero Cliente": 71,
    "Nombre": "YESICA CARDENAS PEREZ",
    "Rut": "27.098.079-1",
    "Direccion": "S.ALDEA Nº907  COPIAPO",
    "Celular": ""
  },
  {
    "Numero Cliente": 73,
    "Nombre": "PALADAR ZULIANO SPA",
    "Rut": "77.717.262-K",
    "Direccion": "LOS CARRERAS Nº3131 COPIAPO",
    "Celular": ""
  },
  {
    "Numero Cliente": 30,
    "Nombre": "Comercial y Servicios Sba Spa",
    "Rut": "78.341.819-3",
    "Direccion": "Ramirez N 325",
    "Celular": "Taltal"
  },
  {
    "Numero Cliente": 32,
    "Nombre": "Carniceria Rest.Min.Mark Varela",
    "Rut": "77.110.005-8",
    "Direccion": "Buena Esperanza Nº 540",
    "Celular": ""
  },
  {
    "Numero Cliente": 74,
    "Nombre": "Mezones & Uluchi Limitada",
    "Rut": "77.469.885-k",
    "Direccion": "Maipu N142A",
    "Celular": ""
  },
  {
    "Numero Cliente": 9,
    "Nombre": "Padrotes L&ZSpa",
    "Rut": "78220681-8",
    "Direccion": "Freire 41  Copiapo",
    "Celular": ""
  }
];