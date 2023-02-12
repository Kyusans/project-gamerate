import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const GameDetail = () => {

    const [gameId, setGameId] = useState("");
    const [gameName, setGameName] = useState("No game selected");
    const [gameDescription, setGameDescription] = useState("");
    const [gameRate, setGameRate] = useState(0);

    const navigateTo = useNavigate(); 

    const location = useLocation();
    useEffect(() =>{
        if(location.state !== null){
            selectGame();
        }
    })

    const handleBack = () =>{
        navigateTo("/");
    }

    const selectGame = () =>{
        setGameId(location.state.selectedGameId);
        const url = "http://localhost/gamerate/games.php";
        
        const jsonData = {
            gameId: gameId
        }

        const formData = new FormData();

        formData.append("operation", "selectGame");
        formData.append("json", JSON.stringify(jsonData));
        
        axios({
            url: url,
            data: formData,
            method: "post"
        })

        .then((res) =>{
            if(res.data !== 0){
                setGameId(res.data.game_id)
                setGameName(res.data.game_name);
                setGameDescription(res.data.game_description);
                setGameRate(res.data.game_rate);
            }
        })

        .catch((err) =>{
            alert("There was an error occured: " + err)
        })
    }

    return ( 
        <>
            <Container className="text-center mt-3 text-white">
                <h1>{gameName}</h1><br />
                <p>{gameDescription}</p><br />
                <h2>Ratings: {gameRate} Stars</h2> <br />
                <Button className="btn-danger" onClick={handleBack}>Back</Button>
            </Container>
            
        </>
     );
}
 
export default GameDetail;