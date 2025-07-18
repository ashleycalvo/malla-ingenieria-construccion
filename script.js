
const cursos = {
    0: ["Examen Diagnóstico", "Inglés Básico"],
    1: ["Comunicación Escrita", "CI1106", "CS1502", "MA0101", "QI1102", "SE1200", "SE1400"],
    2: ["Comunicación Oral", "CI1230", "FH1000", "FI1101", "FI1201", "QI1106", "QI1104", "QI1107", "SE1201"],
    3: ["Dibujo", "CO2205", "CO2103", "C04108", "CS2101", "FI1102", "MA1102", "AI1103"],
    4: ["Topografía", "Interpretación de Planos", "Mecánica De Suelos I", "Taller I", "Física General II", "Cálculo Superior", "Probabilidad y Estadística"],
    5: ["Topografía Aplicada", "Concreto", "Laboratorio De Concreto", "Mecánica De Suelo II", "Ecuaciones Diferenciales", "Ciencias De Los Materiales"],
    6: ["Contabilidad y Finanzas", "Métodos Numéricos Para Ingeniería", "Laboratorio Mecánica De Suelos", "Hidráulica", "Laboratorio De Hidráulica", "Carreteras I", "Análisis Estructural"],
    7: ["Geología Aplicada", "Estructuras De Concreto", "Estructuras De Acero", "Carreteras II", "Construcción De Estructuras De Mampostería", "Instalaciones Electromecánicas", "Relaciones Laborales"],
    8: ["Taller II", "Programación De Proyectos", "Diseño De Procesos Constructivos", "Estructuras Temporales", "Construcción De Pavimentos", "Control De Costos De Construcción", "Seminario De Ética Para La Ingeniería"],
    9: ["Ingeniería Económica", "Estructuras Temporales", "Administración De Empresas Constructoras", "Taller De Diseño", "Seminario De Estudios Costarricenses"],
    10: ["Procesos Constructivos", "Normativa En La Construcción", "Proyecto De Graduación"]
};

function crearMalla() {
    const malla = document.getElementById("malla");
    for (let semestre = 0; semestre <= 10; semestre++) {
        const columna = document.createElement("div");
        columna.className = "semestre";
        cursos[semestre]?.forEach(nombre => {
            const curso = document.createElement("div");
            curso.className = "curso";
            curso.textContent = nombre;
            curso.onclick = () => curso.classList.toggle("completado");
            columna.appendChild(curso);
        });
        malla.appendChild(columna);
    }
}

window.onload = crearMalla;
