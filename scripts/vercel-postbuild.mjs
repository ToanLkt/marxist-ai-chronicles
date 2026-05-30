import { cp, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const distClient = join(root, "dist", "client");
const distServer = join(root, "dist", "server");
const vercelOut = join(root, ".vercel", "output");
const staticDir = join(vercelOut, "static");
const funcDir = join(vercelOut, "functions", "__server.func");
const funcServerDir = join(funcDir, "server");

await mkdir(staticDir, { recursive: true });
await mkdir(funcDir, { recursive: true });

// Copy client and server build outputs into Vercel Build Output structure.
await cp(distClient, staticDir, { recursive: true });
await cp(distServer, funcServerDir, { recursive: true });

const vcConfig = {
  runtime: "nodejs22.x",
  handler: "index.mjs",
};

const routesConfig = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/__server" },
  ],
};

await writeFile(join(funcDir, ".vc-config.json"), JSON.stringify(vcConfig, null, 2));
await writeFile(join(vercelOut, "config.json"), JSON.stringify(routesConfig, null, 2));
await writeFile(
  join(funcDir, "index.mjs"),
  "export { default } from \"./server/index.mjs\";\n",
);
