# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Start the json server first then run the application:
the command for starting the server is->> json-server db.json --port 3001

*Assume that you are sharing a flat with your friend or some other person and you share the various bills like cooking, electricity, Bike Maintenance(maybe), Rent, etc. Each time either of you will pay the amount. You are keeping note of the expenses and at the end of the period of sharing a flat, the person who spent an excess amount shall pay the other. All this process is done manually as on date.

Being a techie, you have observed this problem and thought of making the process digital to an extent in the first version of the application. Your main goals to accomplish are,

1.	To create a json-server which can store the data for future use.
2.	Make sure every input has an id and the user should not manually insert the id for the data.
3.	To create a GUI structure where the data from json-server can be seen.
4.	To create a GUI structure where you can fill the details needed to store in the server.
5.	At the end of the data retrieved from server, show Total spent, person A spent, Person B spent, who pays to whom and how has to be paid by them at any given time.
6.	View the Add new Item Form separately with the react router dom.

Future Developments: 
1.	Create a functionality where you can select a particular month data
2.	Restrict the usage of the date of the previous month.
3.	Create Login functionality. 
4.	Restrict server update of previous month.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
