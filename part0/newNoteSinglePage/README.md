sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Write note in text field
    User->>Browser: Click Save button
    activate Browser
    Browser->>Server: HTTP POST /exampleapp/new_note_spa
    Note right of Browser: Payload: { "content": "New SPA note content" }
    activate Server
    Server-->>Browser: {"message": "note created successfully"}
    deactivate Server
    Browser->>Server: HTTP GET /exampleapp/data.json
    activate Server
    Server-->>Browser: updated data.json

    Note right of Server: { "notes": [ {"content": "new new note"} ] }
    deactivate Server
    deactivate Browser
    
    Note right of Browser: Browser updates the DOM with the new note
