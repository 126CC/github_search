import './App.css'
import {useEffect, useState} from "react";

export default function App() {
    const [users, setUser] = useState<{login:string, avatar_url: string,}[]>([]);
    const [search, result] = useState<string>('126');
    useEffect(() => {
        fetch("https://api.github.com/search/users?q="+search+"+in:login")
            .then((response) => response.json())
            .then((data) => {
                setUser(data.items);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, [search]);
    return(
        <>
            <div className={"search"}>
                <label>
                    <input id="myInput" placeholder={"Type Here to Search"}></input>
                </label>
                <button onClick={() => {
                    const newVal = (document.getElementById('myInput') as HTMLInputElement).value;
                    result(newVal);
                }
                }>Search
                </button>
            </div>

            <div className={"search1"}>{users.map((user, index) =>
                <div key={index} className={"users"}>
                    <img className={"pic"}
                        src={user.avatar_url}
                    />
                    <span className={"login"}>{user.login}</span>



                </div>
            )}
                </div>
        </>
    )
}


