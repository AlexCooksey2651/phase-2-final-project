# Welcome to SharkAid!
#### Alex Cooksey Phase 2 - Final Project

## Functional Description:

SharkAid is a web app designed to help users learn more about sharks and steps they can take to support the protection of sharks and, more generally, ocean conservation. 

SharkAid features three pages: "Home", "Add a Shark", and "Learn and Help." At the top of all pages is a header that welcomes the user to the page, as well as the NavLink buttons to help users navigate from one page to another. 

The "Home" page features a search bar that allows users to filter which sharks are displayed based on name. When the page loads, shark data is loaded to create Cards that display the various sharks' images, names, and various other information. Users can click a link to visit each individual species' Wikipedia page to learn more, and have an option to donate an amount of their choosing to support the sharks. 

The "Add a Shark" page contains a form that a user (in this case, most likely a site administrator) could fill out to add another shark to the display. Some inputs are required, such as the Name and Image URL; others are optional, and if left blank will return a default value of "More Information Needed" when the card is displayed. In future development, an edit feature could be built to allow easier editing of card information. When the form is submitted, the new shark will appear on the home page with the others. 

The "Learn and Help" page is mostly educational; it features an embedded YouTube video along with text where users can learn more about sharks, the dangers they face, and actions they can take to help. 

## Technical Description:

To allow client-side routing with the navigation links, BrowserRouter, Route, and Switch are used across different components. Other than the `index.js` file, the App component represets the top of the component tree. There are 8 components in total. 

When the App component loads, the `useEffect()` hook is used to perform a GET request from the backend `db.json` file. The `useState` hook is used in App to store the shark data; from here it can be passed into various child components where it is needed. The App component renders the Header component, the NavBar, and - depending on the current selected NavLink - either SharkContainer, SharkForm, or LearnAndHelp.

SharkContainer renders the SharkCards and the Search component. The SharkCards are created with the .map() method based on the `sharks` variable in state on the App component. The Search component uses a callback function, `handleSearch`, to dictate which sharks are displayed. Within the App component is a variable, `filteredSharks`, which allows the Home page to conditionally show only those cards with a shark whose name includes the search text. If nothing is entered in the search bar, all cards are displayed. 

```
function App() {
    const [sharks, setSharks] = useState([])
    const [search, setSearch] = useState("")

    ...

    function handleSearch(searchText) {
      setSearch(searchText)
    }

    const filteredSharks = sharks.filter(shark => shark.name.toLowerCase().includes(search.toLowerCase()))
    
    ...
}
```

Ultimately, it is this `filteredSharks` variable that is passed down to the SharkContainer component and the SharkCard component, rather than the `sharks` variable (stored in state). 

The SharkCards mostly display information, but also contain a small form that allows users to donate an amount of their choosing. When submitted, this triggers a patch request to update the current_donated variable for the appropriate shark on the backend. The display is then updated within the App component, using an `if else` statement so that only the appropriate shark is updated in state. 

As mentioned earlier, "Add a Shark" contains a form. The form is a controlled component, with all the `formData` stored in state. State is modified with `setFormData()` whenever an input field is changed, using the `handleChange()` function. When the submit button is clicked, a POST request is triggered to the backend so that the shark, when added, persists if the page is reloaded. 

```
function SharkForm({ addShark }) {
    const [formData, setFormData] = useState(
        {
            "name": "More Information Needed",
            "image": "More Information Needed",
            "scientific_name": "More Information Needed",
            "length": "More Information Needed",
            "weight": "More Information Needed",
            "conservation_status": "More Information Needed",
            "fun_fact": "More Information Needed",
            "learn_more": "More Information Needed",
            "current_donated": 0,
        }
    )

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:3000/sharks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(newShark => addShark(newShark))
    }
```

In the App component, we update state to include the new shark in our display of cards as follows:

```setSharks([...sharks, newShark])```

The final page, "Learn and Help," does not feature any real user interactivity other than the controls of the embedded YouTube video. A couple resource links are included for users to learn more at their leisure. 

Some options for future updates: I could look to update the app to reset forms after they have been submitted. I would also like to further employ client-side routing to emulate a login feature, where users could be conditionally allowed to view the "Add a Shark" page based on whether or not their login information matched that of a site administrator. Finally, it would be cool to use an external API to retrieve data, then have a separate backend data collection to hold user information (such as member login information, donation history, etc.). 

## Resources:

For backend db.json file, please visit [sharkaid-json-server](https://github.com/AlexCooksey2651/sharkaid-json-server/tree/main/db) on Github.

This application was built with HTML, CSS, and JavaScript/React.

[Blog Post](https://medium.com/@aecooksey2651/react-app-from-scratch-sharkaid-6c8ec3b42fc3) on Medium.

[Video Walkthrough](https://youtu.be/tpV6DvG0zXw)

All shark data displayed within the Shark Cards is taken from [Wikipedia](https://en.wikipedia.org/wiki/Main_Page) (individual shark species' pages can be accessed from the "Learn More" link displayed within the card).

YouTube video featured in LearnAndHelp component taken from [here](https://www.youtube.com/embed/FYonjn1oYcQ).

Additional information about shark and ocean conservation taken from [oceanconservancy.org](https://oceanconservancy.org/) and [WildAid](https://wildaid.org/).

