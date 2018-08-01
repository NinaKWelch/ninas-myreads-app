//JSX produces React 'elements' which can be rendered into the DOM

const name = 'Nina';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);

//Seclect options

const controls = <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="wantToRead">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>


const controls = <div className="book-shelf-changer"></div>


        {this.state.showSearchPage ? (

        ) : (