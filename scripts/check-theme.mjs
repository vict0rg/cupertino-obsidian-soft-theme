import fs from "node:fs";
import assert from "node:assert/strict";
const css=fs.readFileSync("theme.css","utf8"), man=JSON.parse(fs.readFileSync("manifest.json","utf8"));
assert.equal(man.name,"Cupertino Soft");
assert.equal(man.version,"0.2.0");
assert.ok(css.length>300000,"Preserve the original Cupertino base CSS");
for(const token of ["#FAFAF7","#F1F2F3","#E8EAEC","#DDE0E3","#C97073","OBSIDIAN CUPERTINO SOFT THEME","titlebar-button.mod-close:hover","tbody tr:nth-child(even)"]) assert.ok(css.includes(token),token);
assert.ok(css.includes("content:none!important"),"Heading accent bars must be gone");
assert.ok(css.includes(".cm-formatting"),"Markdown syntax styling missing");
assert.ok(fs.readFileSync("LICENSE","utf8").includes("Copyright (c) 2026 svnaxis"));
let depth=0,comment=false,quote=null;
for(let i=0;i<css.length;i++){const c=css[i],n=css[i+1];if(comment){if(c==="*"&&n==="/"){comment=false;i++;}continue;}if(quote){if(c==="\\"){i++;continue;}if(c===quote)quote=null;continue;}if(c==="/"&&n==="*"){comment=true;i++;continue;}if(c==='"'||c==="'"){quote=c;continue;}if(c==="{")depth++;if(c==="}"){depth--;assert.ok(depth>=0,"Unbalanced CSS");}}
assert.equal(depth,0);
console.log("Cupertino Soft theme validated");
