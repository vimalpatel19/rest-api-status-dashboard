# REST API Status Dashboard
This project is part of my initial stab at learning the Javascript React library. The application was created by starting off with the [create-react-app](https://github.com/facebook/create-react-app) project.

##### The dasboard is a SPA that provides a unified view of the current status/availability of one or more REST APIs:
- Many REST APIs that I have either designed, seen, or used tend to have a health check endpoint (typically `/health`) used to verify that the application is indeed running. This dashboard is intended to leverage that endpoint to verify whether that service is up and running!
- I have come across many services that also leverage that endpoint to provide information such as version number, feature/functionality flags, and other non-sensitive configurable properties about the service. This dashboard can also display the value of these properties/fields as well!

### Setting up the `services.json` file
The `/src/services/services.json` file is used to specify which service(s) and which properties of each service to display in the dashboard.

Here is file containing the configuration of a sample service:
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

More information pertaining to the fields in the `services.json` file:

| Field      | Details                                                                     |
| ---------- | --------------------------------------------------------------------------- |
| service    | Name of the service to display in the dashboard                             |
| url        | The URL the dashboard will access to retrieve information about the service |
| properties | The list of properties received from the call made to the URL above         |

More information about the fields in each `properties` list object:

| Field    | Details                                                                               |
| -------- | ------------------------------------------------------------------------------------- |
| kind     | Indicates the kind of property: `main` or `secondary`                                 |
| field    | Name of the field in the response from the call to the URL                            |
| dataType | Indicates the data type of the property: `flag` or `normal`                           |
| label    | Label to display on the dashboard for this property (only for `secondary` properties) |


### Future enhancements
- [ ] Make various enhancement updates to the Dashboard, including but not limited to:
    - [ ] Placing the secondary properties into a default hidden section that can be expanded using a drop-down open in the card.
    - [ ] Using color (red/green) to indicate the state of secondary properties that are of type flag.
    - [ ] Using **Alert** and **Skeleton** features of [Material UI Lab](https://material-ui.com/components/about-the-lab/) to enhance user experience of the dashboard.
- [ ] Display properties about the service that are simply included in the `services.json` file and do not require calling the service. 
- [ ] Auto refreshing of the services' status on a time based interval (to provide more real-time experience without having the users to refresh the page)
- [ ] Ability to make additional calls to a service that can provide additional information regarding the service's status beyond the fact that the service is up.