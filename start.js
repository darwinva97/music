const { execSync } = require('child_process');

try {
  // Ejecutar el script definido en package.json bajo "scripts.start"
  // guardar en archivo "output.log" el output de la ejecución
  execSync('npm start > output.log', { stdio: 'inherit' });
} catch (error) {
  console.error('Error al ejecutar "npm start"', error);
  process.exit(1);
}
