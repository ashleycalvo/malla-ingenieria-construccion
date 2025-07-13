document.querySelectorAll('.curso').forEach(curso => {
    const requisitos = curso.dataset.requisitos?.split(',') || [];
    const correquisitos = curso.dataset.requisitosCorrequisitos?.split(',') || [];
    curso.classList.add('bloqueado');

    curso.addEventListener('click', () => {
        curso.classList.toggle('completado');
        actualizarBloqueos();
    });
});

function actualizarBloqueos() {
    const completados = Array.from(document.querySelectorAll('.curso.completado')).map(c => c.dataset.codigo);
    document.querySelectorAll('.curso').forEach(curso => {
        const requisitos = curso.dataset.requisitos?.split(',') || [];
        const correquisitos = curso.dataset.requisitosCorrequisitos?.split(',') || [];
        const habilitado = requisitos.every(r => completados.includes(r)) && correquisitos.every(c => true);
        curso.classList.toggle('bloqueado', !habilitado && !curso.classList.contains('completado'));
    });
}

actualizarBloqueos();