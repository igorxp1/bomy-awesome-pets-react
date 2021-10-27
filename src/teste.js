console.log('vai começa  ')
for (var c = 1; c >= 4; c++) {
    console.log(c)
}
console.log('Fim')

import logo from './logo.svg';
import './App.css';

function App() {
    /*
    1. Store all the hamburguers that he has eaten
    2. Hamburguer must not be only name. We have to store the ingredients, the name (of the hamburguer) and the company.
    3. hamburguerSSSSSSSS!!<--- PLURAL
    4. The date the hamburguer was eaten https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    5. No tomato burguers :(
    6. VEGETARIAN ONES!! :DDDD (FREE THE COWS!!)
    7. Check if the hamburguer is real veggie: has it being cooked with animal kind of something
     */
    const filteredHamburguer = 'and';

    function createHamburguer(name, ingredient, company, date) {
        if (name === undefined || name === null || name !== '') {
            let name;
            name = 'Burguer not found'
        }

    }

    if (ingredient === undefined || company === null || company !== '') {
        let ingredient;
        ingredient = 'Ingredient not found';
    }


    if (company === undefined || company === null || company !== '') {
        let company;
        company = 'Company not found';
    }

    const date = new Date();
    const date = new Date(value
:
    ''
)


    return createHamburguer(name, ingredient, company, date)
    {

    }

    function getHamburguer() {

        const hamburguer = [
            createHamburguer(name
    :
        'Meat Burguer', ingredient
    :
        'bread', 'meat', 'onion', company
    :
        'BurguerKing', date
    :
        'December 2020),
        createHamburguer(name
    :
        'Vegie Burguer', ingredient
    :
        'bread', 'carrot', 'toffu', 'bean', company
    :
        'McDonalds', date
    :
        'January 1st 2020'
    )
        createHamburguer(name
    :
        'Vegie Burguer with Tomato', ingredient
    :
        'bread', 'tomato', company
    :
        'McDonalds', date
    :
        'March 14th 2020'
    )
    ]

    }

    let filteredhamburguer = hamburguer.filter(createHamburguer(name
:
    string, ingredient
:
    string, company
:
    string, date
:
    string
))=>
    {
        var filteredhamburguer = hamburguer.filter(item => !items);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {getHamburguer()}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
