import {mkdir,copyFile,rm} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const out=join(root,'public');
if(out!==join(root,'public'))throw new Error('Unexpected build directory');
await rm(out,{recursive:true,force:true});await mkdir(out,{recursive:true});
const pages=['index.html','kezelesek.html','rolunk.html','kapcsolat.html','adatkezeles.html','koszonjuk.html'];
const copied=new Set();
async function copy(rel){if(copied.has(rel))return;const source=resolve(root,rel);if(!source.startsWith(root+'/')&&!source.startsWith(root+'\\'))throw new Error('Invalid asset path');const target=resolve(out,rel);if(!target.startsWith(out+'/')&&!target.startsWith(out+'\\'))throw new Error('Invalid output path');await mkdir(resolve(target,'..'),{recursive:true});await copyFile(source,target);copied.add(rel);}
const {readFile}=await import('node:fs/promises');
for(const page of pages){await copy(page);const html=await readFile(join(root,page),'utf8');for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){let rel=match[1].split(/[?#]/)[0];if(/^(assets|képek|logók)\//.test(rel))await copy(decodeURIComponent(rel));}}
console.log('Built '+pages.length+' pages and '+(copied.size-pages.length)+' assets in public/.');
