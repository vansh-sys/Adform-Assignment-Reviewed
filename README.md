################################## ADFORM ASSIGNMENT ##################################

About Assignment : A simple react application that shows a list of campaigns that can be filtered by campaign name and by date (using a date range selector).

Basic Coverage Includes:

A list of Campaign which shows
    # The Name 
    #The startDate 
    #The endDate 
    #A flag to state if the Campaign is active (a campaign is running when the current date is inside the start-end date range) 
    #The Budget (in USD dollar) User name (can be , if the user's data is missing for specified userId) Unknown user 
    #A Search Form before the list in order to filter the list by Campaign Name 
    #A DateRange component that filters the list of campaigns based on a Start and End Date. 
        #If the campaign has a startDate that is contained in the range, it should show 
        #If the campaign has an endDate that is contained in the range, it should show. 
        #User is able to select an end-date that is before the start-date. If the endDate is before the start Date, the campaign should not show.

External API

https://jsonplaceholder.typicode.com/users


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.



