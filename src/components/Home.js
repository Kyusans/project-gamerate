import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Card, Button, Col, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    
    const [game, setGame] = useState([]);

    const navigateTo = useNavigate();

    useEffect(() =>{
        getGames();
    }, [game])

    const getGames = () =>{
        const url = "http://localhost/gamerate/games.php";

        const formData = new FormData();

        formData.append("operation", "getGames");

        axios({
            url: url,
            data: formData,
            method: "post"
        })

        .then((res) =>{
            if(res.data !== 0){
                setGame(res.data);
            }
        })
    }

    const handleSelectedGame = (gameId) =>{
        navigateTo("/game", {state:{selectedGameId: gameId}})
    }

    return ( 
        <>
            <Container className="text-center text-white">
                <h1>Games</h1>
                <hr />
                {game.map((games, index) => (
                    <Col className="mb-5 mt-2" key={index}>
                        <Card bg="dark">
                            <Card.Header>
                                <Card.Title>{games.game_name}</Card.Title>
                            </Card.Header>

                            <Card.Body>
                                <Card.Text>{games.game_description}</Card.Text>
                            </Card.Body>

                            <Card.Footer>
                                <Button className="btn-succes" size="lg" onClick={() => handleSelectedGame(games.game_id)}>See more</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}

            </Container>
        </>
     );
}
 
export default Home;