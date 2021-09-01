import React, { useEffect, useState } from "react";
import classes from "./EightPuzzle.module.css";
import Project from "../Project";
import Button from "../../../UI/Button/Button";

const EightPuzzle = () => {
  const [puzzle, setPuzzle] = useState("123456780");
  const [puzzleSolution, setPuzzleSolution] = useState({
    initialState: "123456780",
    numStepsToSolve: 0,
    solution: ["123456780"],
    duration: 28882,
  });
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [numberOfSteps, setNumberOfSteps] = useState(0);
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    setPuzzlePieces(getPuzzlePieces("123456780"));
  }, []);

  const getRandomPuzzleHandler = (triesLeft) => {
    if (triesLeft === 0) {
      return;
    }
    let puzzleApiUrl = `${process.env.REACT_APP_API_URL}/eight-puzzle-solver/random`;
    fetch(puzzleApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPuzzle(data.toString());
        setPuzzlePieces(getPuzzlePieces(data.toString()));
        setCurrentStep(0);
        setIsSolved(false);
      })
      .catch((err) => {
        getRandomPuzzleHandler(triesLeft - 1);
        console.log("Error fetching random puzzle");
      });
  };

  const solvePuzzleHandler = (puzzle, heuristic, triesLeft) => {
    if (triesLeft === 0) {
      return;
    }
    if (puzzle.length < 9) {
      setPuzzleSolution({ initialState: "Not valid" });
      return;
    }
    let puzzleApiUrl = `${process.env.REACT_APP_API_URL}/eight-puzzle-solver/${heuristic}/${puzzle}`;
    fetch(puzzleApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPuzzleSolution(data);
        setNumberOfSteps(data.numStepsToSolve);
        setIsSolved(true);
      })
      .catch((err) => {
        solvePuzzleHandler(puzzle, heuristic, triesLeft - 1);
        console.log("Error solving puzzle");
      });
  };

  const getPuzzlePieces = (puzzle) => {
    let tempPuzzlePieces = [];
    for (let i = 0; i < 9; i++) {
      tempPuzzlePieces.push(
        <div key={i} className={classes.eight_puzzle_piece}>
          {puzzle.charAt(i) === "0" || puzzle.charAt(i) === "" ? (
            <div>&nbsp;</div>
          ) : (
            puzzle.charAt(i)
          )}
        </div>
      );
    }
    return tempPuzzlePieces;
  };

  const nextStepHander = () => {
    if (currentStep < numberOfSteps) {
      let nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setPuzzlePieces(getPuzzlePieces(puzzleSolution.solution[nextStep]));
    }
  };

  const prevStepHandler = () => {
    if (currentStep > 0) {
      let prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      setPuzzlePieces(getPuzzlePieces(puzzleSolution.solution[prevStep]));
    }
  };

  const updatePuzzleHandler = (event) => {
    const newPuzzle = event.target.value + "";
    setPuzzle(newPuzzle);
    getPuzzlePieces(newPuzzle);
    setPuzzlePieces(getPuzzlePieces(newPuzzle));
    setCurrentStep(0);
    setIsSolved(false);
  };

  return (
    <Project
      title="8-Puzzle Solver"
      description="Solves 8-Puzzles using A* Search with Misplaced Tiles and Manhattan Distance heuristics"
    >
      <div className={classes.eight_puzzle_project}>
        <h4
          className={
            puzzleSolution.initialState === "Not solvable"
              ? classes.error
              : classes.hidden
          }
        >
          Not Solvable
        </h4>
        <h4
          className={
            puzzleSolution.initialState === "Not valid"
              ? classes.error
              : classes.hidden
          }
        >
          Not Valid: Please use one occurence of each digit 0-8
        </h4>
        <h4 className={!isSolved ? classes.hidden : classes.steps}>
          Step {currentStep}/{numberOfSteps}
        </h4>
        <div className={classes.solution_box}>
          <ion-icon
            onClick={prevStepHandler}
            name="chevron-back-outline"
          ></ion-icon>
          <div className={classes.eight_puzzle}>{puzzlePieces}</div>
          <ion-icon
            onClick={nextStepHander}
            name="chevron-forward-outline"
          ></ion-icon>
        </div>
        <div className={classes.button_row}>
          <div className={classes.form_content}>
            <label>Custom Puzzle &nbsp;</label>
            <input
              type="text"
              value={puzzle}
              size={10}
              onChange={updatePuzzleHandler}
            ></input>
          </div>
          <Button
            classes={classes.puzzle_button}
            onClick={() => getRandomPuzzleHandler(3)}
          >
            Random Puzzle
          </Button>
          <Button
            classes={classes.puzzle_button}
            onClick={() => solvePuzzleHandler(puzzle, "MPT", 3)}
          >
            Solve [MPT]
          </Button>
          <Button
            classes={classes.puzzle_button}
            onClick={() => solvePuzzleHandler(puzzle, "MHD", 3)}
          >
            Solve [MHD]
          </Button>
        </div>
      </div>
    </Project>
  );
};

export default EightPuzzle;
