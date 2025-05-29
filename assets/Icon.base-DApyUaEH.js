var i=Object.defineProperty;var r=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var s=(e,t,o)=>r(e,typeof t!="symbol"?t+"":t,o);import{W as n}from"./Webcomp.base-rIjdwhcW.js";class l extends n{constructor(){super(...arguments);s(this,"viewport","0 0 24 24")}async template(){return`
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="${this.viewport}" style="fill: currentColor;">
                ${await this.icon()}
            </svg>
        `}}export{l as I};
