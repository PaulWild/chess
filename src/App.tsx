import { useState } from "react";
import { Draggable } from "./components/draggable";
import { Black, White } from "./components/classic_pieces";
import styles from "./App.module.css";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import {
  DraggableContext,
  DraggableContextProvider,
} from "./components/game-context";
import { useContext } from "react";
import { File, GameState, Rank } from "./engine/types";
import { FileArray, RankArray, Board as GameBoard } from "./engine/board";
import { isLightSquare } from "./engine/square";
import { Promotion } from "./components/promotion";
import { useOnWindowResize } from "./utils/window";
import { useStockfish } from "./useStockfish";
import { toFenString } from "./engine/fen";

const getPieceAt = (rank: Rank, file: File, currentBoard: GameBoard) => {
  const piece = currentBoard.getPieceAt({ rank, file });

  if (piece) {
    const set = piece.colour === "WHITE" ? White : Black;
    switch (piece.pieceType) {
      case "BISHOP":
        return set.Bishop;
      case "KING":
        return set.King;
      case "KNIGHT":
        return set.Knight;
      case "PAWN":
        return set.Pawn;
      case "QUEEN":
        return set.Queen;
      case "ROOK":
        return set.Rook;
    }
  }
};

type gridProps = {
  rank: Rank;
  file: File;
  bound: DOMRect | undefined;
};

const GridPosition = ({ rank, file, bound }: gridProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useContext(DraggableContext);
  const [inBound, setInBound] = useState(false);
  const isLight = isLightSquare(rank, file);
  const Piece = getPieceAt(rank, file, state.board);

  useEffect(() => {
    const bound = ref.current?.getBoundingClientRect();

    if (bound) {
      if (
        state.activePiece &&
        state.activePiece.x >= bound?.left &&
        state.activePiece.x < bound?.right &&
        state.activePiece.y >= bound.top &&
        state.activePiece.y < bound.bottom
      ) {
        setInBound(true);
      } else {
        setInBound(false);
      }
    }
  }, [state, rank, file]);

  useEffect(() => {
    if (inBound) {
      dispatch({ type: "SQUARE_ATTACKED", payload: { rank, file } });
    }
  }, [inBound, dispatch, file, rank]);

  const pieceHover = useCallback(
    (x, y) => dispatch({ type: "PIECE_HOVER", payload: { x, y } }),
    [dispatch]
  );

  const pieceActivated = useCallback(
    (x, y) =>
      dispatch({ type: "PIECE_ACTIVATED", payload: { rank, file, x, y } }),
    [dispatch, rank, file]
  );

  const move = useCallback(() => dispatch({ type: "MOVE" }), [dispatch]);

  return (
    <div
      className={`${styles.chessSquare} ${isLight ? styles.light : ""} ${
        inBound ? styles.highlighted : ""
      } ${styles[`rank_${rank}`]} ${styles[`file_${file}`]}`}
      //@ts-ignore
      rank={rank}
      file={file}
      key={rank + file}
      ref={ref}
    >
      {Piece && (
        <Draggable
          boundingBox={bound}
          onMouseUp={move}
          onMouseMove={pieceHover}
          onMouseDown={pieceActivated}
        >
          <Piece />
        </Draggable>
      )}
      {rank === 1 && <div className={styles.rank}>{file}</div>}
      {file === "a" && <div className={styles.file}>{rank}</div>}
    </div>
  );
};

const gameStateAsString = (state: GameState) => {
  switch (state) {
    case "BlackMove":
      return "Black to move";
    case "BlackWin":
      return "Black Won!";
    case "StaleMate":
      return "Stalemate";
    case "WhiteMove":
      return "White to move";
    case "WhiteWin":
      return "White Won!";
    case "DrawRepetition3":
      return "Draw by repetition";
    default:
      return state;
  }
};

const Board = () => {
  const [state, dispatch] = useContext(DraggableContext);

  const fun = useCallback(
    (str: string) => {
      const ranksAndFiles = str.split("");
      const from = {
        file: ranksAndFiles[0] as File,
        rank: parseInt(ranksAndFiles[1]) as Rank,
      };

      const to = {
        file: ranksAndFiles[2] as File,
        rank: parseInt(ranksAndFiles[3]) as Rank,
      };

      dispatch({ type: "BLACKMOVE", payload: { from, to } });
    },
    [dispatch]
  );
  const BlackMove = useStockfish(fun);
  const chessGrid = useRef<HTMLDivElement>(null);
  const [bound, setBound] = useState<DOMRect>();

  const onWindowResize = useCallback(() => {
    setBound(chessGrid.current?.getBoundingClientRect());
  }, []);

  useOnWindowResize(onWindowResize);

  useEffect(() => {
    setBound(chessGrid.current?.getBoundingClientRect());
  }, [chessGrid]);

  const promote = (piece: "QUEEN" | "ROOK" | "BISHOP" | "KNIGHT") => {
    dispatch({ type: "PROMOTE", payload: { piece } });
  };

  useEffect(() => {
    if (state.state === "BlackMove") {
      BlackMove(toFenString(state.game));
    }
  }, [BlackMove, state.game, state.state]);

  return (
    <div className={styles.container}>
      <div ref={chessGrid} className={styles.chessGrid}>
        {RankArray.map((r) =>
          FileArray.map((f) => (
            <GridPosition rank={r} file={f} bound={bound} key={r + f} />
          ))
        )}
      </div>
      <div className={styles.infoPane}>{gameStateAsString(state.state)}</div>
      {state.state === "WhitePromote" && (
        <Promotion colour={"WHITE"} promoteCallback={promote} />
      )}
      {state.state === "BlackPromote" && (
        <Promotion colour={"BLACK"} promoteCallback={promote} />
      )}
    </div>
  );
};

function App() {
  return (
    <DraggableContextProvider>
      <Board />
    </DraggableContextProvider>
  );
}

export default App;
