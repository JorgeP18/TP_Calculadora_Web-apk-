function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  if (user === 'fisica' && pass === '123') {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    alert('Bienvenido a la Calculadora de Física');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
}

function mostrarFormulario() {
  const tipo = document.getElementById('calc-type').value;
  const contenedor = document.getElementById('formulario');
  contenedor.innerHTML = '';
  document.getElementById('resultado').innerText = '';

  let html = '';
  if (tipo === 'velocidad') {
    html = `
      <h3>Cálculo de Velocidad</h3>
      <label>Distancia (m):</label>
      <input type="number" id="distancia">
      <label>Tiempo (s):</label>
      <input type="number" id="tiempo">
      <button onclick="calcularVelocidad()">Calcular</button>
    `;
  } else if (tipo === 'fuerza') {
    html = `
      <h3>Cálculo de Fuerza</h3>
      <label>Masa (kg):</label>
      <input type="number" id="masa">
      <label>Aceleración (m/s²):</label>
      <input type="number" id="aceleracion">
      <button onclick="calcularFuerza()">Calcular</button>
    `;
  } else if (tipo === 'trabajo') {
    html = `
      <h3>Cálculo de Trabajo</h3>
      <label>Fuerza (N):</label>
      <input type="number" id="fuerza">
      <label>Distancia (m):</label>
      <input type="number" id="distanciaT">
      <button onclick="calcularTrabajo()">Calcular</button>
    `;
  }

  contenedor.innerHTML = html;
}

function calcularVelocidad() {
  const d = parseFloat(document.getElementById('distancia').value);
  const t = parseFloat(document.getElementById('tiempo').value);
  const sonido = document.getElementById('sonido');

  if (d > 0 && t > 0) {
    const v = (d / t).toFixed(2);
    sonido.play();
    document.getElementById('resultado').innerText = `La velocidad es ${v} m/s`;
  } else {
    alert('Completa todos los campos correctamente.');
  }
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById('masa').value);
  const a = parseFloat(document.getElementById('aceleracion').value);
  const sonido = document.getElementById('sonido');

  if (m > 0 && a > 0) {
    const f = (m * a).toFixed(2);
    sonido.play();
    document.getElementById('resultado').innerText = `La fuerza es ${f} N`;
  } else {
    alert('Completa todos los campos correctamente.');
  }
}

function calcularTrabajo() {
  const f = parseFloat(document.getElementById('fuerza').value);
  const d = parseFloat(document.getElementById('distanciaT').value);
  const sonido = document.getElementById('sonido');

  if (f > 0 && d > 0) {
    const w = (f * d).toFixed(2);
    sonido.play();
    document.getElementById('resultado').innerText = `El trabajo es ${w} J`;
  } else {
    alert('Completa todos los campos correctamente.');
  }
}