import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../api/contact.js";
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../dist",
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".xml": "application/xml",
  ".json": "application/json",
};
http
  .createServer(async (req, res) => {
    const u = new URL(req.url, "http://localhost:8080");
    if (u.pathname === "/api/contact") {
      let body = "";
      for await (const chunk of req) {
        body += chunk;
        if (body.length > 12000) {
          res.writeHead(413);
          res.end();
          return;
        }
      }
      req.body = body;
      await handler(req, res);
      return;
    }
    let file = path.join(root, decodeURIComponent(u.pathname));
    if (!file.startsWith(root + path.sep) && file !== root) {
      res.writeHead(403);
      res.end();
      return;
    }
    if (u.pathname === "/") file = path.join(root, "index.html");
    else if (!path.extname(file)) file += ".html";
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.statusCode = 404;
      file = path.join(root, "404.html");
    }
    res.setHeader(
      "Content-Type",
      types[path.extname(file)] || "application/octet-stream",
    );
    fs.createReadStream(file).pipe(res);
  })
  .listen(8080, "0.0.0.0", () =>
    console.log("MoTechy preview: http://localhost:8080"),
  );
