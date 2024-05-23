    const langTexts = {
        en1: {
            title: "Resource Index",
            homelessShelters: "Homeless Shelters: Shelters provide temporary housing and support services for homeless individuals and families.",
            addictionRehab: "Addiction Rehabilitation Centers/Programs: These programs offer support and treatment for individuals struggling with substance abuse.",
            alternativeShelter: "Alternative Shelter Communities: Alternative shelters offer unique housing solutions outside of traditional shelter systems.",
            foodbanksMeals: "Foodbanks/Meals: Foodbanks and meal programs provide free or low-cost food to individuals and families in need.",
            healthClinics: "Health Clinics: Health clinics offer medical services to the community, often focusing on low-income individuals or those without insurance."
        },
        es1: {
            title: "Índice de Recursos",
            homelessShelters: "Refugios para Personas sin Hogar: Estos refugios ofrecen vivienda temporal y servicios de apoyo para individuos y familias sin hogar.",
            addictionRehab: "Centros/Programas de Rehabilitación de Adicciones: Estos programas brindan apoyo y tratamiento para personas con problemas de abuso de sustancias.",
            alternativeShelter: "Comunidades de Refugio Alternativo: Los refugios alternativos ofrecen soluciones de vivienda únicas fuera del sistema tradicional.",
            foodbanksMeals: "Bancos de Alimentos/Comidas: Los bancos de alimentos y programas de comidas proveen alimentos gratuitos o a bajo costo a individuos y familias necesitadas.",
            healthClinics: "Clínicas de Salud: Las clínicas de salud ofrecen servicios médicos a la comunidad, enfocándose a menudo en personas de bajos ingresos o sin seguro."
        },
        en2: {
            title: "Sobre Nosotros",
            aboutTextTitle: "Empowering Lives, One Map at a Time",
            aboutText: "Welcome to UPRescue, an innovative project developed by Anish Karumuri, Calvin Phuong, Eric Su, Hung-Nghi Vu, Yutaka Roberts. With a deep understanding of the challenges faced by the homeless population, we've embarked on a mission to create a bridge between those in need and the resources that can make a difference in their lives."
        },
        es2: {
            title: "Índice de Recursos",
            aboutTextTitle: "Potenciando Vidas, Un Mapa a la Vez",
            aboutText: "Bienvenido a UPRescue, un proyecto innovador desarrollado por Anish Karumuri, Calvin Phuong, Eric Su, Hung-Nghi Vu, Yutaka Roberts. Con una comprensión profunda de los desafíos enfrentados por la población sin hogar, hemos emprendido una misión para crear un puente entre aquellos que necesitan ayuda y los recursos que pueden marcar la diferencia en sus vidas."
        },
        en3: {
            title: "User Manual",
            step0: "Step 0 - Count 5 Mississippi so that radio buttons become enabled; it takes time to get your location :)",
            step1: "Step 1 - Choose what resource you would like and then press submit",
            step2: "Step 2 - The locations are marked 1-5; 1 being the closest and 5 being the farthest",
            step3: "Step 3 - Click the location you like and then the adress should appear in the top search bar",
            step4: "Step 4 - Click the search bar and press the address in the dropdown and the Map should take you there",
            step5: "Step 5 - If you click on the place in the map you can go directly to google maps for directions"
        },
        es3: {
            title: "Manual de Usuario",
            step0: "Paso 0 - Cuenta hasta 5 Mississippi para que los botones de opción se activen; ¡toma tiempo obtener tu ubicación :)",
            step1: "Paso 1 - Elige qué recurso te gustaría y luego presiona enviar",
            step2: "Paso 2 - Las ubicaciones están marcadas del 1 al 5; 1 siendo la más cercana y 5 siendo la más lejana",
            step3: "Paso 3 - Haz clic en la ubicación que te guste y luego la dirección debería aparecer en la barra de búsqueda superior",
            step4: "Paso 4 - Haz clic en la barra de búsqueda y presiona la dirección en el menú desplegable y el Mapa debería llevarte allí",
            step5: "Paso 5 - Si haces clic en el lugar en el mapa, puedes ir directamente a Google Maps para obtener direcciones"
        }
    };

    function switchLanguage1(language) {
        document.querySelector('.title h1').textContent = langTexts[language].title;
        document.querySelectorAll('.descriptions h1')[0].textContent = langTexts[language].homelessShelters;
        document.querySelectorAll('.descriptions h1')[1].textContent = langTexts[language].addictionRehab;
        document.querySelectorAll('.descriptions h1')[2].textContent = langTexts[language].alternativeShelter;
        document.querySelectorAll('.descriptions h1')[3].textContent = langTexts[language].foodbanksMeals;
        document.querySelectorAll('.descriptions h1')[4].textContent = langTexts[language].healthClinics;
    }

    function switchLanguage2(language) {
        document.querySelector('.title h1').textContent = langTexts[language].title;
        document.querySelector('.descriptions h1').textContent = langTexts[language].aboutTextTitle;
        document.querySelector('.descriptions h2').textContent = langTexts[language].aboutText;
    }

    function switchLanguage3(language) {
        document.querySelector('.title h1').textContent = langTexts[language].title;
        document.querySelectorAll('.descriptions h1')[0].textContent = langTexts[language].step0;
        document.querySelectorAll('.descriptions h1')[1].textContent = langTexts[language].step1;
        document.querySelectorAll('.descriptions h1')[2].textContent = langTexts[language].step2;
        document.querySelectorAll('.descriptions h1')[3].textContent = langTexts[language].step3;
        document.querySelectorAll('.descriptions h1')[4].textContent = langTexts[language].step4;
        document.querySelectorAll('.descriptions h1')[5].textContent = langTexts[language].step5;
    }

    


    





