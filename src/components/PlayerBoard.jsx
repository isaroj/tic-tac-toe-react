import {useState} from 'react'
import Icon from "./Icon"

import { FaGrinWink, FaRegCircle, FaTimes } from "react-icons/fa";

// toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reactstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Button, Row, Col, Container, Card, CardBody, Badge } from 'reactstrap'

const itemArray = new Array(9).fill('empty')

const PlayerBoard = () => {

    // states
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState('');


    // methods
    const nextMove = (pos) => {
        if (winMessage) {
            toast.error(`${winMessage}`, {
              position: "bottom-right",
            });
        }
        else if (itemArray[pos] === 'empty') {
            itemArray[pos] = isCross ? 'cross' : 'circle'
            setIsCross(!isCross)
        }else {
            toast.warn('already filled', {
                position: 'bottom-right'
            })
        }
        checkWinner()
    }
    const checkWinner = () => {
        if (
          itemArray[0] !== "empty" &&
          itemArray[0] === itemArray[1] &&
          itemArray[0] === itemArray[2]
        ) {
          setWinMessage(`${itemArray[0]} won the match`);
          setWinningMark([0,1,2])
        } else if (
          itemArray[3] !== "empty" &&
          itemArray[3] === itemArray[4] &&
          itemArray[3] === itemArray[5]
        ) {
          setWinMessage(`${itemArray[3]} won the match`);
          setWinningMark([3, 4, 5]);

        } else if (
          itemArray[6] !== "empty" &&
          itemArray[6] === itemArray[7] &&
          itemArray[6] === itemArray[8]
        ) {
          setWinMessage(`${itemArray[6]} won the match`);
          setWinningMark([6, 7, 8]);
        } else if (
          itemArray[0] !== "empty" &&
          itemArray[0] === itemArray[3] &&
          itemArray[0] === itemArray[6]
        ) {
          setWinMessage(`${itemArray[0]} won the match`);
          setWinningMark([0, 3, 6]);
        } else if (
          itemArray[1] !== "empty" &&
          itemArray[1] === itemArray[4] &&
          itemArray[1] === itemArray[7]
        ) {
          setWinMessage(`${itemArray[1]} won the match`);
          setWinningMark([1, 4, 7]);
        } else if (
          itemArray[2] !== "empty" &&
          itemArray[2] === itemArray[5] &&
          itemArray[2] === itemArray[8]
        ) {
          setWinMessage(`${itemArray[2]} won the match`);
          setWinningMark([2, 5, 8]);
        } else if (
          itemArray[0] !== "empty" &&
          itemArray[0] === itemArray[4] &&
          itemArray[0] === itemArray[8]
        ) {
          setWinMessage(`${itemArray[0]} won the match`);
          setWinningMark([0, 4, 8]);
        } else if (
          itemArray[2] !== "empty" &&
          itemArray[2] === itemArray[4] &&
          itemArray[2] === itemArray[6]
        ) {
          setWinMessage(`${itemArray[2]} won the match`);
          setWinningMark([2, 4, 6]);
        }
    }
    const reloadGame = () => {
        setIsCross(false)
        setWinMessage('')
        itemArray.fill('empty')
        document.querySelectorAll(".markWinning").forEach(ele => ele.style.backgroundColor = '#fff')
    }
    const setWinningMark = (posArray) => {
        posArray.forEach(
          (pos) => {
            document.querySelectorAll(".markWinning")[
              pos
            ].style.backgroundColor = "#FF6263";
          }
        );
    }

    return (
      <>
        <Container className="p-5" style={styles.container}>
          <ToastContainer position="bottom-center" />
          <header className="text-center display-6">
            Tic Tac Toe - Reactifying <FaGrinWink className="text-info" />
          </header>
          <Row className="mt-5">
            {itemArray.map((item, index) => (
              <Col
                md={4}
                style={styles.cardContainer}
                onClick={() => nextMove(index)}
              >
                <Card style={styles.card} className='markWinning'>
                  <CardBody className="d-flex justify-content-center">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <div>
            {winMessage ? (
              <>
                <h3 className="text-center mt-3">
                  <Badge color="success" pill>{winMessage}</Badge>
                </h3>
                <Button color="primary" block onClick={reloadGame} >
                  Reload Game
                </Button>
              </>
            ) : (
              <div className="bg-primary mt-3 p-2 d-flex justify-content-center">
                {isCross ? (
                  <FaTimes style={styles.icons} />
                ) : (
                  <FaRegCircle style={styles.icons} />
                )}
                <h1 className="text-white text-center display-6">
                  {isCross ? "cross" : "circle"}'s turn now{" "}
                </h1>
              </div>
            )}
          </div>
        </Container>
      </>
    );
}

const styles = {
    container: {
        maxWidth: '40vw'
    },
    cardContainer: {
        padding: '0.1rem'
    },
    card: {
        padding: '1.2rem'
    },
    icons: {
        color: '#fff',
        fontSize: '2rem',
        marginTop: '0.9rem',
        marginRight: '0.5rem'
    }
}
export default PlayerBoard