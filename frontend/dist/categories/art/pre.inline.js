
        import header from "/assets/header.component.638065378913190000.js";import footer from "/assets/footer.component.638065378913190000.js";import articles from "/assets/articles.component.638065378913190000.js";
        import main from "/assets/main.layout.638065378913190000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/categories/art","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/bbc9ad0580206bbfe1051dd96c838798"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Art Category Articles","canonical":"http://localhost:3000/categories/art","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Art Articles"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.638065378913190000.js'),[])
            })
        }    