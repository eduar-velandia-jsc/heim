// Compila el sitio para Hostinger (raíz del dominio) y lo deja listo en dist-hostinger/ y heim-hostinger.zip.
import { execSync } from "node:child_process";
import { copyFileSync, rmSync } from "node:fs";

const outDir = "dist-hostinger";
const run = (command) => execSync(command, { stdio: "inherit" });

run("npx tsc -b");
run(`npx vite build --base=/ --outDir ${outDir} --emptyOutDir`);
copyFileSync("hosting/hostinger/.htaccess", `${outDir}/.htaccess`);

rmSync("heim-hostinger.zip", { force: true });
run(`cd ${outDir} && zip -qr ../heim-hostinger.zip .`);
console.log("\nListo: sube el contenido de heim-hostinger.zip a public_html en Hostinger.");
