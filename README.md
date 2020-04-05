# REST API Status Dashboard
This project is part of my initial stab at learning the Javascript React library. The application was created by starting off with the [create-react-app](https://github.com/facebook/create-react-app) project.

###### The dasboard is a SPA that provides a unified view of the current status/availability of one or more REST APIs:
- Many REST APIs that I have either designed, seen, or used tend to have a health check endpoint (typically `/health`) used to verify that the application is indeed running. This dashboard is intended to leverage that endpoint to verify whether that service is up and running!
- I have come across many services that also leverage that endpoint to provide information such as version number, feature/functionality flags, and other non-sensitive configurable properties about the service. This dashboard can also display the value of these properties/fields as well!

### Setting up the `services.json` file
The `/src/services/services.json` file is used to specify which service(s) and which properties of each service to display in the dashboard.

Here is a sample of the file:
```
[
    {
        "service": "Sample Service",
        "url": "http://localhost:8000/sample",
        "properties": [
            {
                "property": "main",
                "field": "version",
                "type": "normal"
            },
            {
                "property": "secondary",
                "field": "allowCoolFeature",
                "label": "Cool Feature",
                "type": "flag"
            }
        ]
    }
]
```

### Future enhancements
- [ ] Make various enhancement updates to the Dashboard, including but not limited to:
    - [ ] Placing the secondary properties into a default hidden section that can be expanded using a drop-down open in the card.
    - [ ] Using color (red/green) to indicate the state of secondary properties that are of type flag.
- [ ] Implement auto refreshing of the services' status on a time based interval (to provide more real-time experience without having the users to refresh the page)
- [ ] 