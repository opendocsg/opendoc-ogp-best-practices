(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "aws.md",
                title: "AWS Best Practices",
                url: "/opendoc-ogp-best-practices/Deployment/aws.html",
                escapedPath: "Deployment/aws.md",
                dir: "/Deployment/",
                tocId: "toc_/deployment/",
                documentInfo: ["Deployment","",["aws.md","working-with-nectar.md"]]
            },
            
        {
                name: "working-with-nectar.md",
                title: "Working with Nectar",
                url: "/opendoc-ogp-best-practices/Deployment/working-with-nectar.html",
                escapedPath: "Deployment/working-with-nectar.md",
                dir: "/Deployment/",
                tocId: "toc_/deployment/",
                documentInfo: ["Deployment","",["aws.md","working-with-nectar.md"]]
            },
            
        {
                name: "linting.md",
                title: "Linting",
                url: "/opendoc-ogp-best-practices/Development/linting.html",
                escapedPath: "Development/linting.md",
                dir: "/Development/",
                tocId: "toc_/development/",
                documentInfo: ["Development","",["node-dev-setup.md","linting.md","using-github.md"]]
            },
            
        {
                name: "node-dev-setup.md",
                title: "Node.js Developer Setup",
                url: "/opendoc-ogp-best-practices/Development/node-dev-setup.html",
                escapedPath: "Development/node-dev-setup.md",
                dir: "/Development/",
                tocId: "toc_/development/",
                documentInfo: ["Development","",["node-dev-setup.md","linting.md","using-github.md"]]
            },
            
        {
                name: "using-github.md",
                title: "Using GitHub",
                url: "/opendoc-ogp-best-practices/Development/using-github.html",
                escapedPath: "Development/using-github.md",
                dir: "/Development/",
                tocId: "toc_/development/",
                documentInfo: ["Development","",["node-dev-setup.md","linting.md","using-github.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()