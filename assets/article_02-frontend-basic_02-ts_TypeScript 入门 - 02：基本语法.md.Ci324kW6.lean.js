import{_ as h,D as t,c as l,j as s,a,I as k,a8 as i,o as p}from"./chunks/framework.Bou8hzLb.js";const x=JSON.parse('{"title":"TypeScript 入门 - 02：基本语法","description":"","frontmatter":{"title":"TypeScript 入门 - 02：基本语法","author":"Potter","date":"2022-05-12 18:49","tags":["TypeScript"],"categories":["TypeScript 入门"]},"headers":[],"relativePath":"article/02-frontend-basic/02-ts/TypeScript 入门 - 02：基本语法.md","filePath":"article/02-frontend-basic/02-ts/TypeScript 入门 - 02：基本语法.md","lastUpdated":1720930927000}'),e={name:"article/02-frontend-basic/02-ts/TypeScript 入门 - 02：基本语法.md"},r=i("",44),d=i("",4),E=s("p",null,"模块声明通配符：",-1),g=s("li",null,[s("p",null,"理解：未理解啥意思")],-1),y=s("p",null,"示例1：",-1),F=s("pre",null,[s("code",null,`\`\`\`tsx
/* 声明：外部模块文件src/node.d.ts */
declare module "*!text" {
    const content: string;
    export default content;
}
`)],-1),o=i("",1),c=i("",2),u=i("",7);function C(A,D,b,B,m,q){const n=t("reference");return p(),l("div",null,[r,s("ul",null,[d,s("li",null,[E,s("ul",null,[g,s("li",null,[y,F,s("p",null,[a("//------------------------------------------------------------------------- /// "),k(n,{path:"node.d.ts"}),a(" import fileContent from \"./xyz.txt!text\"; //报错：Cannot find module './xyz.txt!text' console.log(fileContent); ```")]),o])])]),c]),u])}const v=h(e,[["render",C]]);export{x as __pageData,v as default};
