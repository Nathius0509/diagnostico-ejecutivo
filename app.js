// ========================================
// DPM DIAGNÓSTICO EJECUTIVO
// Paso 4 - 12 preguntas
// ========================================


// ========================================
// PREGUNTAS DEL DIAGNÓSTICO
// ========================================

const preguntas = [

    {
        id: 1,
        dimension: "Estrategia & Gobierno",
        tema: "Plan Estratégico de Tecnología",
        texto: "¿Existe un Plan Estratégico de Tecnología alineado con los Objetivos del Negocio?",
        respuestas: [
            { texto: "No existe", puntos: 0 },
            { texto: "Existe pero informalmente", puntos: 1 },
            { texto: "Existe y se revisa periódicamente", puntos: 2 },
            { texto: "Está integrado al proceso estratégico del Negocio", puntos: 3 }
        ]
    },

    {
        id: 2,
        dimension: "Estrategia & Gobierno",
        tema: "Priorización de Inversiones y Proyectos",
        texto: "¿Existen mecanismos formales para priorizar inversiones y proyectos tecnológicos?",
        respuestas: [
            { texto: "No existe", puntos: 0 },
            { texto: "Existe un proceso básico e informal", puntos: 1 },
            { texto: "Existe proceso definido, documentado y actualizado", puntos: 2 },
            { texto: "Optimizado e implementado con criterios de costos, beneficios y estrategia", puntos: 3 }
        ]
    },

    {
        id: 3,
        dimension: "Proyectos & Portfolio",
        tema: "Visibilidad del Portfolio",
        texto: "¿La Dirección tiene visibilidad del estado, avance, riesgos y beneficios del portfolio?",
        respuestas: [
            { texto: "No existe portfolio de proyectos unificado", puntos: 0 },
            { texto: "Hay un listado básico que se actualiza esporádicamente", puntos: 1 },
            { texto: "Existe un repositorio centralizado que se actualiza de manera periódica", puntos: 2 },
            { texto: "Existe una PMO que lo prioriza y gestiona", puntos: 3 }
        ]
    },

    {
        id: 4,
        dimension: "Datos & Business Intelligence",
        tema: "Indicadores de Negocio",
        texto: "¿Los principales indicadores de Negocio están definidos y tienen un responsable?",
        respuestas: [
            { texto: "No existen indicadores de Negocio definidos", puntos: 0 },
            { texto: "Están definidos pero no tienen un responsable formal para su seguimiento", puntos: 1 },
            { texto: "Definidos y con responsable, pero con seguimiento informal", puntos: 2 },
            { texto: "Indicadores definidos, con responsable claro y seguimiento periódico", puntos: 3 }
        ]
    },

    {
        id: 5,
        dimension: "Tecnología & Infraestructura",
        tema: "Riesgos Tecnológicos y Continuidad",
        texto: "¿La Organización tiene identificados sus principales riesgos tecnológicos y de continuidad?",
        respuestas: [
            { texto: "No existe gestión de riesgos tecnológicos", puntos: 0 },
            { texto: "Se identifican riesgos de manera aislada sin registro formal", puntos: 1 },
            { texto: "Existe registro centralizado, pero no se revisa ni actualiza de manera periódica", puntos: 2 },
            { texto: "Existe proceso formal de gestión de riesgos con responsables y monitoreo continuo", puntos: 3 }
        ]
    },

    {
        id: 6,
        dimension: "Organización & Gestión",
        tema: "Gestión de Proveedores",
        texto: "¿Existe un proceso formal de gestión de proveedores tecnológicos?",
        respuestas: [
            { texto: "No existe", puntos: 0 },
            { texto: "Existe listado de Proveedores pero sin seguimiento ni actualización", puntos: 1 },
            { texto: "Hay una gestión periódica de Proveedores clave", puntos: 2 },
            { texto: "Existe un área específica que gobierna y optimiza la Gestión de Proveedores", puntos: 3 }
        ]
    },

    {
        id: 7,
        dimension: "Tecnología & Infraestructura",
        tema: "Arquitectura y Aplicaciones",
        texto: "¿La arquitectura tecnológica y las aplicaciones actuales están alineadas con las necesidades y objetivos del Negocio?",
        respuestas: [
            { texto: "No están alineadas", puntos: 0 },
            { texto: "Existe conocimiento informal de la arquitectura y de las aplicaciones, pero no está documentado", puntos: 1 },
            { texto: "Existe arquitectura tecnológica documentada usada para orientar las decisiones de Tecnología", puntos: 2 },
            { texto: "Existe Gobierno Tecnológico alineado a las necesidades eestratégicas del Negocio", puntos: 3 }
        ]
    },

    {
        id: 8,
        dimension: "Tecnología & Infraestructura",
        tema: "Seguridad de la Información",
        texto: "¿La Organización cuenta con políticas y mecanismos formales para proteger la información y los activos tecnológicos?",
        respuestas: [
            { texto: "No existen políticas ni mecanismos formales", puntos: 0 },
            { texto: "Existen medidas de seguridad, pero se aplican de manera reactiva", puntos: 1 },
            { texto: "Existen políticas y controles definidos para la protección de la información y activos tecnológicos", puntos: 2 },
            { texto: "Existe modelo integral de Seguridad de la Información con políticas, controles, responsables y monitoreo", puntos: 3 }
        ]
    },

    {
        id: 9,
        dimension: "Proyectos & Portfolio",
        tema: "Metodología de Proyectos",
        texto: "¿Los proyectos cuentan con una metodología común para su planificación, seguimiento y gestión de riesgos?",
        respuestas: [
            { texto: "No existe metodología definida", puntos: 0 },
            { texto: "Existen prácticas comunes, su aplicación depende de cada responsable de proyecto", puntos: 1 },
            { texto: "Metodología definida y documentada, utilizada en la mayoría de los proyectos", puntos: 2 },
            { texto: "Existe metodología corporativa gestionada por la Oficina de Proyectos (PMO)", puntos: 3 }
        ]
    },

    {
        id: 10,
        dimension: "Datos & Business Intelligence",
        tema: "Calidad y Gobierno de Datos",
        texto: "¿La Organización cuenta con procesos para asegurar la calidad, disponibilidad y confiabilidad de sus datos?",
        respuestas: [
            { texto: "No existen", puntos: 0 },
            { texto: "Los problemas de calidad de datos se detectan y corrigen de manera reactiva", puntos: 1 },
            { texto: "Existen responsables y procesos definidos para los datos críticos", puntos: 2 },
            { texto: "Existe Gobierno de Datos, con responsables, estándares, indicadores de calidad y monitoreo continuo", puntos: 3 }
        ]
    },

    {
        id: 11,
        dimension: "Organización & Gestión",
        tema: "Capacidades y Perfiles",
        texto: "¿La organización tiene capacidades y perfiles necesarios para gestionar adecuadamente Tecnología y Transformación?",
        respuestas: [
            { texto: "Existen brechas significativas", puntos: 0 },
            { texto: "Las necesidades de capacitación y perfiles se identifican de manera reactiva", puntos: 1 },
            { texto: "Existe una identificación de roles, capacidades y acciones de capacitación y desarrollo", puntos: 2 },
            { texto: "Existe un modelo de gestión de capacidades alineado con la estrategia tecnológica, con planificación de recursos, desarrollo profesional y evaluación periódica de brechas.", puntos: 3 }
        ]
    },

    {
        id: 12,
        dimension: "Organización & Gestión",
        tema: "Indicadores de Tecnología",
        texto: "¿Existen indicadores de gestión de Tecnología que permitan evaluar desempeño, eficiencia y aporte al Negocio?",
        respuestas: [
            { texto: "No existen", puntos: 0 },
            { texto: "Existen indicadores operativos para resolver problemas puntuales", puntos: 1 },
            { texto: "Existe un conjunto definido de indicadores de Tecnología que se monitorea periódicamente", puntos: 2 },
            { texto: "Existe Tablero Ejecutivo de Tecnología con indicadores alineados al Negocio, para la toma de decisiones", puntos: 3 }
        ]
    }

];


// ========================================
// VARIABLES DEL DIAGNÓSTICO
// ========================================

let preguntaActual = 0;

let contenidoResultado = "";


// Acá vamos a guardar los puntos obtenidos
let respuestasUsuario = [];

let datosInforme = {
    empresa: "",
    nombre: "",
    fecha: ""
};


// ========================================
// ELEMENTOS DE LA PÁGINA
// ========================================

const btnComenzar = document.getElementById("btn-comenzar");


// ========================================
// COMENZAR DIAGNÓSTICO
// ========================================

btnComenzar.addEventListener("click", function () {

    preguntaActual = 0;
    respuestasUsuario = [];

    mostrarPregunta(preguntaActual);

});


// ========================================
// MOSTRAR PREGUNTA
// ========================================

function mostrarPregunta(indice) {

    const pregunta = preguntas[indice];

    const pantalla = document.querySelector(".pantalla-inicio");

    const porcentajeProgreso =
        ((indice + 1) / preguntas.length) * 100;


    pantalla.innerHTML = `

        <div class="progreso">
            Pregunta ${indice + 1} de ${preguntas.length}
        </div>

        <div class="barra-progreso">
            <div
                class="barra-progreso-avance"
                style="width: ${porcentajeProgreso}%">
            </div>
        </div>

        <p class="dimension">
            ${pregunta.dimension}
        </p>

        <h2>
            ${pregunta.texto}
        </h2>

        <div class="respuestas">

            ${pregunta.respuestas.map((respuesta, i) => `

                <button
                    class="respuesta"
                    data-puntos="${respuesta.puntos}">

                    <span class="letra">
                        ${String.fromCharCode(97 + i)}
                    </span>

                    <span>
                        ${respuesta.texto}
                    </span>

                </button>

            `).join("")}

        </div>

        <button
            id="btn-siguiente"
            class="btn-principal btn-siguiente"
            disabled>

            ${indice === preguntas.length - 1
                ? "Ver resultado →"
                : "Siguiente →"}

        </button>

    `;


    configurarRespuestas();

}


// ========================================
// CONFIGURAR RESPUESTAS
// ========================================

function configurarRespuestas() {

    const botonesRespuesta =
        document.querySelectorAll(".respuesta");

    const btnSiguiente =
        document.getElementById("btn-siguiente");


    let puntosSeleccionados = null;


    botonesRespuesta.forEach(function (boton) {

        boton.addEventListener("click", function () {

            // Quitamos selección anterior
            botonesRespuesta.forEach(function (b) {
                b.classList.remove("seleccionada");
            });

            // Marcamos la respuesta seleccionada
            boton.classList.add("seleccionada");

            // Guardamos los puntos
            puntosSeleccionados =
                Number(boton.dataset.puntos);

            // Habilitamos botón
            btnSiguiente.disabled = false;

        });

    });


    // ====================================
    // BOTÓN SIGUIENTE
    // ====================================

    btnSiguiente.addEventListener("click", function () {

        // Guardamos la respuesta
        respuestasUsuario[preguntaActual] =
            puntosSeleccionados;


        // Si quedan preguntas
        if (preguntaActual < preguntas.length - 1) {

            preguntaActual++;

            mostrarPregunta(preguntaActual);

        }

        // Si estamos en la última
        else {

            mostrarResultado();

        }

    });

}

// ========================================
// MOTOR DE RECOMENDACIONES DPM
// ========================================

const recomendaciones = {

    "Estrategia & Gobierno": {

        "CRÍTICO":
            "Definir un marco básico de Gobierno de TI y establecer un Plan Estratégico de Tecnología alineado con las prioridades del Negocio.",

        "BÁSICO":
            "Formalizar la planificación y los mecanismos de gobierno, estableciendo criterios claros para priorizar inversiones e iniciativas tecnológicas.",

        "EN DESARROLLO":
            "Fortalecer la integración entre la estrategia del Negocio y la estrategia tecnológica, incorporando indicadores y mecanismos sistemáticos de seguimiento.",

        "AVANZADO":
            "Continuar evolucionando el Gobierno de TI como habilitador estratégico del Negocio, integrando planificación, inversión, riesgos y generación de valor."
    },


    "Proyectos & Portfolio": {

        "CRÍTICO":
            "Establecer una metodología común para gestionar proyectos y crear visibilidad sobre las iniciativas tecnológicas en curso.",

        "BÁSICO":
            "Formalizar la gestión del portfolio, definiendo criterios de priorización, responsables, seguimiento y mecanismos de reporte ejecutivo.",

        "EN DESARROLLO":
            "Evolucionar hacia una gestión integral del portfolio, incorporando beneficios, riesgos, capacidad y alineación estratégica en la toma de decisiones.",

        "AVANZADO":
            "Optimizar la gestión del portfolio mediante indicadores de valor, gestión de beneficios, capacidad de ejecución y mejora continua."
    },


    "Datos & Business Intelligence": {

        "CRÍTICO":
            "Establecer las bases para una gestión confiable de la información, identificando datos críticos, responsables e indicadores prioritarios para el Negocio.",

        "BÁSICO":
            "Formalizar responsabilidades y procesos para mejorar la calidad, disponibilidad y utilización de los datos relevantes para la toma de decisiones.",

        "EN DESARROLLO":
            "Consolidar un modelo de Gobierno de Datos y evolucionar las capacidades de Business Intelligence para transformar información en conocimiento accionable.",

        "AVANZADO":
            "Potenciar el uso estratégico de los datos mediante analítica avanzada, automatización, gobierno de información y generación de nuevos insights para el Negocio."
    },


    "Tecnología & Infraestructura": {

        "CRÍTICO":
            "Identificar las principales brechas de infraestructura, arquitectura, seguridad y continuidad que puedan comprometer la operación del Negocio.",

        "BÁSICO":
            "Formalizar la gestión de infraestructura, arquitectura y seguridad, estableciendo controles, responsables y mecanismos de gestión de riesgos.",

        "EN DESARROLLO":
            "Evolucionar la arquitectura tecnológica y fortalecer la resiliencia, seguridad y eficiencia de la infraestructura en función de las necesidades del Negocio.",

        "AVANZADO":
            "Optimizar continuamente la arquitectura y la infraestructura tecnológica, incorporando innovación, automatización, seguridad y criterios de eficiencia."
    },


    "Organización & Gestión": {

        "CRÍTICO":
            "Identificar las principales brechas de capacidades, roles y responsabilidades necesarias para sostener la gestión tecnológica.",

        "BÁSICO":
            "Formalizar roles, responsabilidades y capacidades del equipo de Tecnología, estableciendo prioridades de desarrollo y mecanismos básicos de seguimiento.",

        "EN DESARROLLO":
            "Alinear las capacidades de Tecnología con la estrategia del Negocio, incorporando planificación de recursos, desarrollo de talento e indicadores de gestión.",

        "AVANZADO":
            "Optimizar el modelo organizacional de Tecnología mediante gestión estratégica de capacidades, indicadores ejecutivos, desarrollo de talento y mejora continua."
    }

};


// ========================================
// OBTENER NIVEL DE MADUREZ
// ========================================

function obtenerNivelDimension(porcentaje) {

    if (porcentaje <= 39) {

        return "CRÍTICO";

    } else if (porcentaje <= 59) {

        return "BÁSICO";

    } else if (porcentaje <= 79) {

        return "EN DESARROLLO";

    } else {

        return "AVANZADO";

    }

}


// ========================================
// RESUMEN EJECUTIVO
// ========================================

function generarResumenEjecutivo(puntaje, nivel) {

    if (nivel === "CRÍTICO") {

        return `
            La organización presenta un nivel inicial de
            madurez en la gestión tecnológica. Existen
            oportunidades relevantes para fortalecer el
            gobierno, la gestión y la alineación de
            Tecnología con las prioridades del Negocio.
        `;

    }

    if (nivel === "BÁSICO") {

        return `
            La organización cuenta con algunas prácticas
            de gestión tecnológica, aunque todavía existen
            oportunidades para formalizar procesos,
            responsabilidades e indicadores y fortalecer
            la alineación con el Negocio.
        `;

    }

    if (nivel === "EN DESARROLLO") {

        return `
            La organización cuenta con una base de gestión
            tecnológica en evolución. El principal desafío
            consiste en consolidar las capacidades existentes
            y avanzar hacia un modelo de Tecnología más
            integrado con la estrategia del Negocio.
        `;

    }

    return `
        La organización presenta un nivel avanzado de
        madurez en la gestión tecnológica. El foco debería
        estar en optimizar las capacidades existentes,
        profundizar la generación de valor y sostener la
        evolución continua.
    `;

}


// ========================================
// MOSTRAR RESULTADO EJECUTIVO
// ========================================

function mostrarResultado() {

    // ------------------------------------
    // 1. PUNTAJE TOTAL
    // ------------------------------------

    const total = respuestasUsuario.reduce(
        (acumulado, puntos) => acumulado + puntos,
        0
    );

    const puntajeGlobal = Math.round(
        (total / 36) * 100
    );


    // ------------------------------------
    // 2. NIVEL Y MENSAJE EJECUTIVO
    // ------------------------------------

    let nivel;
    let descripcionNivel;
    let prioridadRecomendada;
    let resumenEjecutivo;

    if (puntajeGlobal <= 39) {

        nivel = "CRÍTICO";

        descripcionNivel =
            "El diagnóstico evidencia brechas relevantes en la gestión de Tecnología que pueden limitar la capacidad de la organización para acompañar el crecimiento y las prioridades del Negocio.";

        prioridadRecomendada =
            "Establecer las bases de gobierno, planificación, gestión de riesgos y alineación entre Tecnología y Negocio.";

    } else if (puntajeGlobal <= 59) {

        nivel = "BÁSICO";

        descripcionNivel =
            "Existen prácticas y capacidades de gestión, pero todavía hay oportunidades importantes para formalizar procesos, mejorar la visibilidad ejecutiva y optimizar la gestión de Tecnología.";

        prioridadRecomendada =
            "Ordenar y formalizar la gestión tecnológica, estableciendo prioridades, indicadores y mecanismos de gobierno.";

    } else if (puntajeGlobal <= 79) {

        nivel = "EN DESARROLLO";

        descripcionNivel =
            "La organización cuenta con una base de gestión tecnológica, aunque existen oportunidades concretas para mejorar la alineación con el Negocio, la eficiencia y la capacidad de generar valor.";

        prioridadRecomendada =
            "Evolucionar desde una gestión principalmente operativa hacia un modelo de gestión tecnológica estratégico.";

    } else {

        nivel = "AVANZADO";

        descripcionNivel =
            "La organización cuenta con capacidades y prácticas maduras de gestión tecnológica, con una buena integración entre Tecnología y Negocio.";

        prioridadRecomendada =
            "Continuar evolucionando el modelo mediante innovación, optimización, gobierno de datos y mejora continua.";

    }

    // ========================================
    // RESUMEN EJECUTIVO
    // ========================================

        resumenEjecutivo =
            generarResumenEjecutivo(puntajeGlobal, nivel);

    // ------------------------------------
    // 3. DIMENSIONES
    // ------------------------------------

    const dimensiones = {

        "Estrategia & Gobierno": {
            preguntas: [0, 1],
            maximo: 6
        },

        "Proyectos & Portfolio": {
            preguntas: [2, 8],
            maximo: 6
        },

        "Datos & Business Intelligence": {
            preguntas: [3, 9],
            maximo: 6
        },

        "Tecnología & Infraestructura": {
            preguntas: [4, 6, 7],
            maximo: 9
        },

        "Organización & Gestión": {
            preguntas: [5, 10, 11],
            maximo: 9
        }

    };


    // ------------------------------------
    // 4. CALCULAR DIMENSIONES
    // ------------------------------------

    Object.keys(dimensiones).forEach(function (dimension) {

        const datos = dimensiones[dimension];

        datos.obtenido = datos.preguntas.reduce(
            function (total, indicePregunta) {

                return total + respuestasUsuario[indicePregunta];

            },
            0
        );

        datos.porcentaje = Math.round(
            (datos.obtenido / datos.maximo) * 100
        );

        datos.nivel =
            obtenerNivelDimension(datos.porcentaje);

        datos.recomendacion =
            recomendaciones[dimension][datos.nivel];

    });


    // ------------------------------------
    // 5. FORTALEZA Y OPORTUNIDAD
    // ------------------------------------

    const listaDimensiones =
        Object.entries(dimensiones);

// ========================================
// FORTALEZA Y OPORTUNIDADES
// ========================================

    const dimensionesOrdenadas =
        [...listaDimensiones]
            .sort(
                (a, b) =>
                    b[1].porcentaje - a[1].porcentaje
            );


    const fortaleza =
        dimensionesOrdenadas[0];


    const oportunidad =
        dimensionesOrdenadas[
            dimensionesOrdenadas.length - 1
        ];


    const segundaOportunidad =
        dimensionesOrdenadas[
            dimensionesOrdenadas.length - 2
        ];

    // ------------------------------------
    // 6. MOSTRAR RESULTADO
    // ------------------------------------

    const pantalla =
        document.querySelector(".pantalla-inicio");


    pantalla.innerHTML = `



        <div class="resultado">

            <!-- ====================================
                 PORTADA DEL INFORME
            ==================================== -->

            <div class="portada-informe">

                <div class="portada-logo">
                    DPM CONSULTING
                </div>

                <div class="portada-tagline">
                    Estrategia, Tecnología & Transformación
                </div>

                <div class="portada-separador"></div>

                <div class="portada-titulo">
                    DIAGNÓSTICO EJECUTIVO
                </div>

                <div class="portada-subtitulo">
                    Evaluación de Madurez de Gestión Tecnológica
                </div>

                <div class="portada-datos">

                    <div>
                        <span>ORGANIZACIÓN</span>
                        <strong id="informe-empresa">
                            —
                        </strong>
                    </div>

                    <div>
                        <span>FECHA</span>
                        <strong id="informe-fecha">
                            —
                        </strong>
                    </div>

                </div>

                <div class="portada-footer">
                    DPM Consulting
                </div>

            </div>


            <div class="dimension">
                DIAGNÓSTICO EJECUTIVO
            </div>


            <h1 class="puntaje-global">
                ${puntajeGlobal}
                <span>/100</span>
            </h1>


            <div class="nivel">
                ${nivel}
            </div>


            <p class="descripcion-resultado">
                ${descripcionNivel}
            </p>

            <!-- RESUMEN EJECUTIVO -->

            <div class="resumen-ejecutivo">

                <h3>
                    Resumen ejecutivo
                </h3>

                <p>
                    ${resumenEjecutivo}
                </p>

            </div>

            <!-- PRIORIDAD EJECUTIVA -->

            <div class="prioridad-ejecutiva">

                <span class="etiqueta">
                    PRIORIDAD RECOMENDADA
                </span>

                <p>
                    ${prioridadRecomendada}
                </p>

            </div>


            <div class="separador"></div>


            <h3>
                Madurez por dimensión
            </h3>


            <div class="dimensiones">

                ${listaDimensiones.map(function ([nombre, datos]) {

                    return `

                        <div class="dimension-resultado">

                            <div class="dimension-header">

                                <span>
                                    ${nombre}
                                </span>

                                    <strong>
                                        ${datos.porcentaje}%
                                    </strong>

                            </div>


                            <div class="barra-dimension">

                                <div
                                    class="barra-dimension-avance"
                                    style="width: ${datos.porcentaje}%">
                                </div>

                            </div>


                            <p class="recomendacion-dimension">
                                ${datos.recomendacion}
                            </p>

                        </div>

                    `;

                }).join("")}

            </div>


    <!-- ====================================
     MAPA DE PRIORIDADES
     ==================================== -->

        <div class="mapa-prioridades">

            <h3>
                Mapa de prioridades
            </h3>


            <!-- FORTALEZA -->

            <div class="prioridad-card fortaleza-card">

                <span class="etiqueta">
                    PRINCIPAL FORTALEZA
                </span>

                <div class="prioridad-titulo">

                    <strong>
                        ${fortaleza[0]}
                    </strong>

                    <span class="prioridad-valor">
                        ${fortaleza[1].porcentaje}%
                    </span>

                </div>

                <p>
                    La organización presenta su mayor nivel de
                    madurez en esta dimensión.
                </p>

            </div>


            <!-- OPORTUNIDAD -->

            <div class="prioridad-card oportunidad-card">

                <span class="etiqueta">
                    PRINCIPAL OPORTUNIDAD
                </span>

                <div class="prioridad-titulo">

                    <strong>
                        ${oportunidad[0]}
                    </strong>

                    <span class="prioridad-valor">
                        ${oportunidad[1].porcentaje}%
                    </span>

                </div>

                <p>
                    Esta dimensión presenta la mayor oportunidad
                    de evolución dentro del diagnóstico.
                </p>

                <div class="recomendacion-prioritaria">

                    <strong>
                        Prioridad:
                    </strong>

                    ${oportunidad[1].recomendacion}

                </div>

            </div>


            <!-- SEGUNDA OPORTUNIDAD -->

            <div class="prioridad-card segunda-oportunidad-card">

                <span class="etiqueta">
                    SEGUNDA OPORTUNIDAD
                </span>

                <div class="prioridad-titulo">

                    <strong>
                        ${segundaOportunidad[0]}
                    </strong>

                    <span class="prioridad-valor">
                        ${segundaOportunidad[1].porcentaje}%
                    </span>

                </div>

                <div class="recomendacion-prioritaria">

                    <strong>
                        Prioridad:
                    </strong>

                    ${segundaOportunidad[1].recomendacion}

                </div>

            </div>

        </div>

<!-- ====================================
     PRÓXIMOS PASOS
     ==================================== -->

            <div class="proximos-pasos">

                <h3>
                    Próximos pasos sugeridos
                </h3>

                <p>
                    A partir de los resultados obtenidos, DPM
                    recomienda profundizar las dimensiones con
                    menor nivel de madurez y definir un roadmap
                    de evolución tecnológica priorizado según
                    impacto, esfuerzo y alineación con los
                    objetivos del Negocio.
                </p>

                <ul>

                    <li>
                        Profundizar el diagnóstico de las principales
                        brechas identificadas.
                    </li>

                    <li>
                        Definir prioridades de evolución tecnológica.
                    </li>

                    <li>
                        Establecer iniciativas, responsables y
                        horizonte de implementación.
                    </li>

                </ul>

            </div>        


            <!-- CTA -->

            <div class="cta-diagnostico">

                <h3>
                    ¿Querés conocer cómo mejorar
                    la madurez tecnológica de tu organización?
                </h3>

                <p>
                    Recibí un análisis ejecutivo con
                    recomendaciones específicas para tu organización.
                </p>

                <button
                    class="btn-principal"
                    id="btn-contacto">

                    Recibir mi diagnóstico ejecutivo →

                </button>

            </div>

            
            <!-- ====================================
                 HOJA 3 - PLAN DE ACCIÓN EJECUTIVO
            ==================================== -->

            <div class="hoja-3">

                <div class="hoja-3-header">

                    <div class="portada-logo">
                        DPM CONSULTING
                    </div>

                    <div class="portada-tagline">
                        Estrategia, Tecnología & Transformación
                    </div>

                </div>


                <div class="hoja-3-titulo">

                    <div class="dimension">
                        PLAN DE ACCIÓN EJECUTIVO
                    </div>

                    <h2>
                        Prioridades de evolución
                    </h2>

                    <p>
                        A partir de los resultados obtenidos,
                        se identifican las principales áreas
                        de evolución para fortalecer la gestión
                        tecnológica.
                    </p>

                </div>


                <!-- PRIORIDADES -->

                <div class="plan-prioridades">

                    ${dimensionesOrdenadas
                        .slice()
                        .reverse()
                        .slice(0, 3)
                        .map(function ([nombre, datos], indice) {

                            return `

                                <div class="plan-prioridad">

                                    <div class="plan-numero">
                                        0${indice + 1}
                                    </div>

                                    <div class="plan-contenido">

                                        <div class="plan-header">

                                            <strong>
                                                ${nombre}
                                            </strong>

                                            <span>
                                                ${datos.porcentaje}%
                                            </span>

                                        </div>

                                        <p>
                                            ${datos.recomendacion}
                                        </p>

                                    </div>

                                </div>

                            `;

                        }).join("")}

                </div>


                <!-- ROADMAP -->

                <div class="roadmap">

                    <h3>
                        Roadmap sugerido
                    </h3>


                    <div class="roadmap-item">

                        <div class="roadmap-periodo">
                            0–90 días
                        </div>

                        <div class="roadmap-contenido">

                            <strong>
                                ORDENAR
                            </strong>

                            <p>
                                Formalizar gobierno, prioridades,
                                responsabilidades y principales
                                brechas identificadas.
                            </p>

                        </div>

                    </div>


                    <div class="roadmap-item">

                        <div class="roadmap-periodo">
                            3–6 meses
                        </div>

                        <div class="roadmap-contenido">

                            <strong>
                                CONSOLIDAR
                            </strong>

                            <p>
                                Implementar procesos, indicadores
                                y mecanismos de seguimiento para
                                fortalecer la gestión.
                            </p>

                        </div>

                    </div>


                    <div class="roadmap-item">

                        <div class="roadmap-periodo">
                            6–12 meses
                        </div>

                        <div class="roadmap-contenido">

                            <strong>
                                EVOLUCIONAR
                            </strong>

                            <p>
                                Integrar Tecnología con la estrategia
                                del Negocio y profundizar la generación
                                de valor.
                            </p>

                        </div>

                    </div>

                </div>


                <!-- CIERRE -->

                <div class="plan-cierre">

                    <div class="dimension">
                        PRÓXIMO PASO
                    </div>

                    <p>
                        El diagnóstico permite identificar dónde está
                        hoy la organización. El próximo paso es definir
                        cómo avanzar.
                    </p>

                    <strong>
                        DPM Consulting
                    </strong>

                    <span>
                        Estrategia, Tecnología & Transformación
                    </span>

                </div>


            </div>

        </div>

    `;
        // ====================================
        // BOTÓN CONTACTO
        // ====================================

        document
            .getElementById("btn-contacto")
            .addEventListener("click", mostrarFormulario);

}

// ========================================
// MOSTRAR FORMULARIO DE CONTACTO
// ========================================

function mostrarFormulario() {

    const pantalla =
        document.querySelector(".pantalla-inicio");

        // Guardamos el resultado antes de mostrar el formulario
        contenidoResultado = pantalla.innerHTML;

    pantalla.innerHTML = `

        <div class="formulario-container">

            <div class="dimension resultado-ejecutivo-inicio">
                RECIBÍ TU DIAGNÓSTICO EJECUTIVO
            </div>

            <h1>
                Conocé las oportunidades
                de mejora de tu organización
            </h1>

            <p class="formulario-intro">

                Completá tus datos y recibirás una devolución
                ejecutiva basada en los resultados de tu diagnóstico.

            </p>


            <form id="form-diagnostico">


                <!-- NOMBRE -->

                <div class="campo">

                    <label for="nombre">
                        Nombre y Apellido *
                    </label>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ej. Juan Pérez"
                        required>

                </div>


                <!-- EMPRESA -->

                <div class="campo">

                    <label for="empresa">
                        Empresa *
                    </label>

                    <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        placeholder="Ej. Empresa S.A."
                        required>

                </div>


                <!-- CARGO -->

                <div class="campo">

                    <label for="cargo">
                        Cargo / Función *
                    </label>

                    <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        placeholder="Ej. Gerente General"
                        required>

                </div>


                <!-- CANTIDAD DE EMPLEADOS -->

                <div class="campo">

                    <label for="empleados">
                        Cantidad aproximada de empleados *
                    </label>

                    <select
                        id="empleados"
                        name="empleados"
                        required>

                        <option value="">
                            Seleccioná una opción
                        </option>

                        <option value="Hasta 10">
                            Hasta 10
                        </option>

                        <option value="11-50">
                            11-50
                        </option>

                        <option value="51-100">
                            51–100
                        </option>

                        <option value="101-250">
                            101–250
                        </option>

                        <option value="251-500">
                            251–500
                        </option>

                        <option value="501-1000">
                            501–1.000
                        </option>

                        <option value="Más de 1000">
                            Más de 1.000
                        </option>

                    </select>

                </div>


                <!-- EMAIL -->

                <div class="campo">

                    <label for="email">
                        Email corporativo *
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nombre@empresa.com"
                        required>

                </div>


                <!-- TELEFONO -->

                <div class="campo">

                    <label for="telefono">
                        Teléfono
                        <span class="opcional">
                            (opcional)
                        </span>
                    </label>

                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="+54 9 ...">

                </div>


                <!-- DESAFÍO -->

                <div class="campo">

                    <label for="desafio">
                        ¿Cuál es el principal desafío
                        tecnológico de tu organización? *
                    </label>

                    <select
                        id="desafio"
                        name="desafio"
                        required>

                        <option value="">
                            Seleccioná una opción
                        </option>

                        <option value="Alineación Tecnología y Negocio">
                            Alineación entre Tecnología y Negocio
                        </option>

                        <option value="Proyectos y prioridades">
                            Gestión de proyectos y prioridades
                        </option>

                        <option value="Datos y BI">
                            Datos y Business Intelligence
                        </option>

                        <option value="Infraestructura y Seguridad">
                            Infraestructura y Seguridad
                        </option>

                        <option value="Organización y capacidades">
                            Organización y capacidades del equipo
                        </option>

                        <option value="Costos y eficiencia">
                            Costos y eficiencia de Tecnología
                        </option>

                        <option value="Transformación Digital">
                            Transformación Digital
                        </option>

                        <option value="Otro">
                            Otro
                        </option>

                    </select>

                </div>


                <!-- CONSENTIMIENTO -->

                <div class="consentimiento">

                    <label>

                        <input
                            type="checkbox"
                            id="consentimiento"
                            name="consentimiento">

                        <span>
                            Acepto recibir información,
                            contenidos y novedades de
                            DPM Consulting.
                        </span>

                    </label>

                </div>


                <!-- BOTÓN -->

                <button
                    type="submit"
                    class="btn-principal btn-formulario">

                    Recibir mi diagnóstico →

                </button>


                <p class="formulario-privacidad">

                    Tus datos serán utilizados únicamente para
                    enviarte el resultado del diagnóstico y
                    contactarte en relación con los servicios
                    de DPM Consulting.

                </p>

            </form>

        </div>

    `;


    // ====================================
    // PROCESAR FORMULARIO
    // ====================================

    document
        .getElementById("form-diagnostico")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            procesarFormulario();

        });

        // ====================================
        // POSICIONAR FORMULARIO AL INICIO
        // ====================================

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        document.getElementById("nombre").focus();

}

// ========================================
// PROCESAR FORMULARIO
// ========================================

async function procesarFormulario() {

    const nombre =
        document.getElementById("nombre").value;

    const empresa =
        document.getElementById("empresa").value;

    datosInforme.empresa = empresa;
    datosInforme.nombre = nombre;

    datosInforme.fecha =
        new Date().toLocaleDateString("es-AR");

    const cargo =
        document.getElementById("cargo").value;

    const empleados =
        document.getElementById("empleados").value;

    const email =
        document.getElementById("email").value;

    const telefono =
        document.getElementById("telefono").value;

    const desafio =
        document.getElementById("desafio").value;

    const consentimiento =
        document.getElementById("consentimiento").checked;


    // ====================================
    // CALCULAR PUNTAJE GLOBAL
    // ====================================

    const total =
        respuestasUsuario.reduce(
            (total, puntos) => total + puntos,
            0
        );

    const puntaje =
        Math.round((total / 36) * 100);



    // ====================================
    // DETERMINAR NIVEL
    // ====================================

    let nivel;

    if (puntaje <= 39) {

        nivel = "CRÍTICO";

    } else if (puntaje <= 59) {

        nivel = "BÁSICO";

    } else if (puntaje <= 79) {

        nivel = "EN DESARROLLO";

    } else {

        nivel = "AVANZADO";

    }


    // ====================================
    // CALCULAR DIMENSIONES
    // ====================================

    const dimensiones = {

        estrategia:
            [0, 1],

        proyectos:
            [2, 8],

        datos:
            [3, 9],

        tecnologia:
            [4, 6, 7],

        organizacion:
            [5, 10, 11]

    };


    function calcularDimension(preguntas) {

        const obtenido =
            preguntas.reduce(
                (total, indice) =>
                    total + respuestasUsuario[indice],
                0
            );

        const maximo =
            preguntas.length * 3;

        return Math.round(
            (obtenido / maximo) * 100
        );

    }


    const estrategia =
        calcularDimension(dimensiones.estrategia);

    const proyectos =
        calcularDimension(dimensiones.proyectos);

    const datos =
        calcularDimension(dimensiones.datos);

    const tecnologia =
        calcularDimension(dimensiones.tecnologia);

    const organizacion =
        calcularDimension(dimensiones.organizacion);


    // ====================================
    // FORTALEZA Y OPORTUNIDAD
    // ====================================

    const resultadosDimensiones = {

        "Estrategia & Gobierno":
            estrategia,

        "Proyectos & Portfolio":
            proyectos,

        "Datos & BI":
            datos,

        "Tecnología & Infraestructura":
            tecnologia,

        "Organización & Gestión":
            organizacion

    };


    const nombresDimensiones =
        Object.keys(resultadosDimensiones);


    const fortaleza =
        nombresDimensiones.reduce(
            (a, b) =>
                resultadosDimensiones[a] >
                resultadosDimensiones[b]
                    ? a
                    : b
        );


    const oportunidad =
        nombresDimensiones.reduce(
            (a, b) =>
                resultadosDimensiones[a] <
                resultadosDimensiones[b]
                    ? a
                    : b
        );


    // ====================================
    // DATOS A ENVIAR
    // ====================================

    const datosFormulario = {

        nombre,
        empresa,
        cargo,
        empleados,
        email,
        telefono,
        desafio,

        puntaje,
        nivel,

        estrategia,
        proyectos,
        datos,
        tecnologia,
        organizacion,

        fortaleza,
        oportunidad,

        consentimiento

    };


    // ====================================
    // URL GOOGLE APPS SCRIPT
    // ====================================

    const URL_GOOGLE_SCRIPT =
        "https://script.google.com/macros/s/AKfycbxooE4tR17oFoSV2BTOA1yUmZURHk7d_TvkEb_o02YJNPZahAGVGDKZTdSzgEOObdqhig/exec";


    // ====================================
    // ENVIAR A GOOGLE SHEETS
    // ====================================

    try {

        await fetch(
            URL_GOOGLE_SCRIPT,
            {

                method: "POST",

                mode: "no-cors",

                headers: {

                    "Content-Type":
                        "text/plain;charset=utf-8"

                },

                body:
                    JSON.stringify(
                        datosFormulario
                    )

            }
        );


        // --------------------------------
        // MOSTRAR CONFIRMACIÓN
        // --------------------------------

        mostrarConfirmacion(nombre);


    } catch (error) {

        console.error(
            "Error al enviar diagnóstico:",
            error
        );


        alert(
            "No pudimos enviar el diagnóstico. " +
            "Por favor, intentá nuevamente."
        );

    }

}


// ========================================
// CONFIRMACIÓN Y ACCESO AL INFORME
// ========================================

function mostrarConfirmacion(nombre) {

    const pantalla =
        document.querySelector(".pantalla-inicio");


    // ====================================
    // RESTAURAR EL DIAGNÓSTICO
    // ====================================

    pantalla.innerHTML = contenidoResultado;

    const empresaInforme =
    document.getElementById("informe-empresa");

    const fechaInforme =
        document.getElementById("informe-fecha");

    if (empresaInforme) {
        empresaInforme.textContent =
            datosInforme.empresa;
    }

    if (fechaInforme) {
        fechaInforme.textContent =
            datosInforme.fecha;
    }


    // ====================================
    // BUSCAR EL CTA ORIGINAL
    // ====================================

    const cta =
        pantalla.querySelector(".cta-diagnostico");


    if (cta) {

        cta.innerHTML = `

            <div class="confirmacion">

                <div class="confirmacion-icono">
                    ✓
                </div>

                <div class="dimension">
                    DIAGNÓSTICO RECIBIDO
                </div>

                <h3>
                    ¡Gracias, ${nombre}!
                </h3>

                <p>
                    Hemos registrado correctamente tus datos.
                </p>

                <p>
                    Tu diagnóstico ejecutivo ya está disponible.
                </p>

            </div>


            <div class="informe-acciones">

                <button
                    type="button"
                    class="btn-pdf"
                    onclick="generarInformePDF()">

                    📄 Descargar Informe Ejecutivo

                </button>

            </div>

            <div class="volver-home">
            
                <a
                    href="https://www.dpmconsulting.org/"
                    class="btn-volver-home">
            
                    ← Volver a DPM Consulting
            
                </a>
            
            </div>
        `;

    }

}

// ========================================
// GENERAR INFORME PDF
// ========================================

function generarInformePDF() {

    const contenido = document.querySelector(".pantalla-inicio").innerHTML;

    const ventana = window.open("", "_blank");

    if (!ventana) {
        alert("El navegador bloqueó la ventana de impresión. Permití las ventanas emergentes e intentá nuevamente.");
        return;
    }

    ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>

            <meta charset="UTF-8">

            <title>DPM Consulting - Diagnóstico Ejecutivo</title>

            <link rel="stylesheet"
                  href="https://nathius0509.github.io/diagnostico-ejecutivo/styles.css">

            <style>

                body {
                    background: white !important;
                    display: block !important;
                    min-height: auto !important;
                }

                .diagnostico-container {
                    max-width: 900px !important;
                    margin: 0 auto !important;
                    padding: 30px !important;
                }

                .pantalla-inicio {
                    box-shadow: none !important;
                    border-radius: 0 !important;
                }

                .cta-diagnostico {
                    display: none !important;
                }

                .btn-pdf,
                .informe-acciones {
                    display: none !important;
                }

                @media print {

                    @page {
                        size: A4;
                        margin: 15mm;
                    }

                    body {
                        background: white !important;
                    }

                }

            </style>

        </head>

        <body>

            <main class="diagnostico-container">

                <section class="pantalla-inicio">

                    ${contenido}

                </section>

            </main>

        </body>
        </html>
    `);

    ventana.document.close();

    ventana.onload = function () {

        setTimeout(function () {

            ventana.focus();
            ventana.print();

        }, 700);

    };

}
