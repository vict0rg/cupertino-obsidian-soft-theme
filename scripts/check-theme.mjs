import fs from "node:fs";
import assert from "node:assert/strict";
const css = fs.readFileSync("theme.css","utf8");
const manifest = JSON.parse(fs.readFileSync("manifest.json","utf8"));
assert.equal(manifest.name,"Cupertino Cream");
assert.match(manifest.version,/^\d+\.\d+\.\d+$/);
assert.ok(css.length > 200000, "Full original Cupertino CSS must remain");
for(const required of ["#FFFDF9","#F7F1E5","#F3EDE5","#FF3B30","HyperMD-header-1",".markdown-rendered h1","Cupertino Cream for Obsidian"]) assert.ok(css.includes(required),required);
const remote = /url\(\s*['"]?https?:\/\//i;
assert.ok(!remote.test(css),"No remote CSS images or fonts allowed");
const upstream = fs.readFileSync("LICENSE.txt","utf8");
assert.ok(upstream.includes("Copyright (c) 2026 svnaxis"));
assert.ok(fs.readFileSync("LICENSE","utf8").includes("Copyright (c) 2026 svnaxis"));
// Balanced braces outside comments and strings (avoid accidental broken override)
let depth=0,quote=null,comment=false;
for(let i=0;i<css.length;i++){
 const c=css[i], n=css[i+1];
 if(comment){if(c==='*'&&n==='/'){comment=false;i++;}continue;}
 if(quote){if(c==='\\'){i++;continue;}if(c===quote)quote=null;continue;}
 if(c==='/'&&n==='*'){comment=true;i++;continue;}
 if(c==='"'||c==="'"){quote=c;continue;}
 if(c==='{')depth++;
 if(c==='}'){depth--;assert.ok(depth>=0,"Unexpected CSS closing brace");}
}
assert.equal(depth,0,"Unbalanced CSS braces");
console.log("Validated Cupertino Cream Obsidian CSS, manifest, license and offline assets");
