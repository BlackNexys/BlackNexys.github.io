var l=Object.defineProperty;var n=(e,t,s)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>n(e,typeof t!="symbol"?t+"":t,s);import{W as o}from"./Webcomp.base-rIjdwhcW.js";class c extends o{constructor(){super(...arguments);i(this,"label");i(this,"icon")}static get observedAttributes(){return["label","icon"]}attributeChangedCallback(){this.label=this.getAttribute("label"),this.icon=this.getAttribute("icon"),this.render()}async template(){return`
            <section class="flex flex-col gap-2">
                <h1 class="text-xl uppercase font-semibold flex gap-2 items-center border-b-2 border-slate-500">
                    ${this.hasAttribute("icon")?`<${this.icon} class="text-3xl h-10 w-10 flex items-center justify-center"></${this.icon}>`:""}
                    <strong>${this.label||"undefined"}</strong>
                </h1>
                <p class="text-sm pt-1">
                    <slot></slot>
                </p>
            </section>
        `}}export{c as default};
