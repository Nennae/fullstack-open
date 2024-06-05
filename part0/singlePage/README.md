sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Enter URL and press Enter
    activate Browser
    Browser->>Server: HTTP GET /exampleapp/spa
    activate Server
    Server-->>Browser: HTML Page for SPA
    deactivate Server
    Browser->>Server: HTTP GET /exampleapp/main.css
    activate Server
    Server-->>Browser: main.css
    deactivate Server
    Browser->>Server: HTTP GET /exampleapp/spa.js
    activate Server
    Server-->>Browser: spa.js
    deactivate Server
    deactivate Browser

    Note right of Browser: Browser starts rendering the SPA
    
    activate Browser
    Browser->>Server: HTTP GET /exampleapp/data.json
    activate Server
    Server-->>Browser: data.json
    deactivate Server
    deactivate Browser
    
    Note right of Browser: Browser executes JavaScript and updates the DOM with notes
