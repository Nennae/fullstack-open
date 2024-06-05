sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Write note in text field
    User->>Browser: Click Save button
    activate Browser
    Browser->>Server: HTTP POST /exampleapp/new_note
    activate Server
    Server-->>Browser: 302 Redirect to /exampleapp/notes
    deactivate Server
    Browser->>Server: HTTP GET /exampleapp/notes
    activate Server
    Server-->>Browser: HTML Page
    deactivate Server
    Browser->>Server: HTTP GET /exampleapp/main.css
    activate Server
    Server-->>Browser: main.css
    deactivate Server
    Browser->>Server: HTTP GET /exampleapp/main.js
    activate Server
    Server-->>Browser: main.js
    deactivate Server
    deactivate Browser
    
    Note right of Browser: Browser starts rendering the page
    
    activate Browser
    Browser->>Server: HTTP GET /exampleapp/data.json
    activate Server
    Server-->>Browser: [{"content": "to care"}]
    deactivate Server
    deactivate Browser

    Note right of Browser: Browser executes JavaScript and updates the DOM with notes, including the new note
