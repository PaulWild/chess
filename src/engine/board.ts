import {
  File,
  PiecePosition,
  Position,
  Rank,
  StandardMove,
  ValidMoves,
} from "./types";

export const RankArray: Rank[] = [8, 7, 6, 5, 4, 3, 2, 1];
export const FileArray: File[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export const isLightSquare = (rank: Rank, file: File) => {
  if (rank % 2 === 0 && FileArray.indexOf(file) % 2 === 0) {
    return true;
  } else if (rank % 2 === 1 && FileArray.indexOf(file) % 2 === 1) {
    return true;
  }
  return false;
};

export const getValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): ValidMoves => {
  const potentialMoves = getValidMovesInternal(piece, board);

  return potentialMoves.filter((move) => {
    if (move.move === "Castle") {
      return true;
    }
    const movePosition = move as Position;
    const potentialBoard = board.filter(
      (x) =>
        !(
          x.position.rank === piece.position.rank &&
          x.position.file === piece.position.file
        ) &&
        !(
          x.position.rank === movePosition.rank &&
          x.position.file === movePosition.file
        )
    );

    potentialBoard.push({
      colour: piece?.colour,
      piece: piece.piece,
      moved: true,
      position: {
        rank: movePosition.rank,
        file: movePosition.file,
      },
    });

    return !KingInCheck(piece.colour, potentialBoard);
  });
};

const KingInCheck = (
  colour: "WHITE" | "BLACK",
  board: PiecePosition[]
): Boolean => {
  const kingPosition = board.find(
    (x) => x.piece === "KING" && x.colour === colour
  );

  return board
    .filter((x) => x.colour !== colour)
    .flatMap((x) => getValidMovesInternal(x, board))
    .some(
      (x) =>
        (x as Position).file === kingPosition?.position.file &&
        (x as Position).rank === kingPosition?.position.rank
    );
};

export const getValidMovesInternal = (
  piece: PiecePosition,
  board: PiecePosition[]
): ValidMoves => {
  switch (piece.piece) {
    case "PAWN":
      return getPawnValidMoves(piece, board);
    case "ROOK":
      return getRookValidMoves(piece, board);
    case "BISHOP":
      return getBishopValidMoves(piece, board);
    case "QUEEN":
      return getQueenValidMoves(piece, board);
    case "KNIGHT":
      return getKnightValidMoves(piece, board);
    case "KING":
      return getKingValidMoves(piece, board);
    default:
      throw Error("nope");
  }
};

const getPieceAt = (position: Position, board: PiecePosition[]) => {
  return board.find(
    (x) =>
      x.position.rank === position.rank && x.position.file === position?.file
  );
};

const getPawnValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): StandardMove[] => {
  const startRank = piece.colour === "WHITE" ? 2 : 7;
  const increment = piece.colour === "WHITE" ? 1 : -1;
  const steps = piece.position.rank === startRank ? 2 : 1;

  const validMoves: StandardMove[] = [];
  for (let i = 1; i <= steps; i++) {
    const newRank = (piece.position.rank + i * increment) as Rank;

    if (newRank) {
      const pieceAt = getPieceAt(
        { rank: newRank, file: piece?.position.file },
        board
      );

      if (pieceAt) {
        break;
      }

      validMoves.push({
        move: "Move",
        rank: newRank,
        file: piece.position.file,
      });
    }
  }

  if (piece.position.file !== "a") {
    const fileToCheck = FileArray[FileArray.indexOf(piece.position.file) - 1];
    const rankToCheck = (piece.position.rank + 1 * increment) as Rank;

    const leftFilePiece = getPieceAt(
      { rank: rankToCheck, file: fileToCheck },
      board
    );

    if (leftFilePiece && leftFilePiece.colour !== piece.colour) {
      validMoves.push({
        move: "Move",
        rank: rankToCheck,
        file: fileToCheck,
      });
    }
  }

  if (piece.position.file !== "h") {
    const fileToCheck = FileArray[FileArray.indexOf(piece.position.file) + 1];
    const rankToCheck = (piece.position.rank + 1 * increment) as Rank;

    const leftFilePiece = getPieceAt(
      { rank: rankToCheck, file: fileToCheck },
      board
    );

    if (leftFilePiece && leftFilePiece.colour !== piece.colour) {
      validMoves.push({
        move: "Move",
        rank: rankToCheck,
        file: fileToCheck,
      });
    }
  }

  //TODO: EN-Passant
  return validMoves;
};

const getRookValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): StandardMove[] => {
  return [
    ...getMovesOnLine(piece, 1, 0, board),
    ...getMovesOnLine(piece, 0, 1, board),
    ...getMovesOnLine(piece, 0, -1, board),
    ...getMovesOnLine(piece, -1, 0, board),
  ];
};

const getBishopValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): StandardMove[] => {
  return [
    ...getMovesOnLine(piece, -1, -1, board),
    ...getMovesOnLine(piece, 1, 1, board),
    ...getMovesOnLine(piece, 1, -1, board),
    ...getMovesOnLine(piece, -1, 1, board),
  ];
};

const getMovesOnLine = (
  piece: PiecePosition,
  rankDelta: number,
  fileDelta: number,
  board: PiecePosition[]
): StandardMove[] => {
  const validMoves = [];
  for (let i = 1; i < 8; i++) {
    const newFile = FileArray.indexOf(piece.position.file) + fileDelta * i;
    const newRank = piece.position.rank + rankDelta * i;

    if (newRank > 8 || newFile > 7 || newRank < 1 || newFile < 0) {
      break;
    }

    const move = checkPosition(
      piece.colour,
      newRank as Rank,
      FileArray[newFile],
      board
    );

    if (move !== undefined) {
      validMoves.push(move);
    } else {
      break;
    }
  }
  return validMoves;
};

const getQueenValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): StandardMove[] => {
  return [
    ...getRookValidMoves(piece, board),
    ...getBishopValidMoves(piece, board),
  ];
};

const getKnightValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): StandardMove[] => {
  const moveDeltas = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1],
  ];

  const file = FileArray.indexOf(piece.position.file);
  const rank = piece.position.rank;

  return moveDeltas
    .map(([rankDelta, fileDelta]) => {
      const newFile = file + fileDelta;
      const newRank = rank + rankDelta;
      if (newRank > 8 || newFile > 7 || newRank < 1 || newFile < 0) {
        return undefined;
      }

      return checkPosition(
        piece.colour,
        newRank as Rank,
        FileArray[newFile],
        board
      );
    })
    .filter(isStandardMove);
};

const isStandardMove = (
  item: StandardMove | undefined
): item is StandardMove => {
  return !!item;
};

const checkPosition = (
  colour: "WHITE" | "BLACK",
  rank: Rank,
  file: File,
  board: PiecePosition[]
): StandardMove | undefined => {
  const pieceAt = getPieceAt({ rank: rank as Rank, file }, board);

  if (pieceAt && pieceAt.colour !== colour) {
    return {
      move: "Move",
      rank: rank,
      file: file,
    };
  } else if (pieceAt) {
    return;
  } else {
    return {
      move: "Move",
      rank: rank,
      file: file,
    };
  }
};

const getKingValidMoves = (
  piece: PiecePosition,
  board: PiecePosition[]
): ValidMoves => {
  const validMoves: ValidMoves = [];
  const moveDeltas = [
    [1, 1],
    [0, 1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [-1, 1],
    [1, -1],
  ];

  const file = FileArray.indexOf(piece.position.file);
  const rank = piece.position.rank;

  moveDeltas.forEach(([rankDelta, fileDelta]) => {
    const newFile = file + fileDelta;
    const newRank = rank + rankDelta;
    if (newRank > 8 || newFile > 7 || newRank < 1 || newFile < 0) {
      return;
    }

    return checkPosition(
      piece.colour,
      newRank as Rank,
      FileArray[newFile],
      board
    );
  });

  //TODO Castling

  //short Castle.
  const colour = piece.colour;
  const shortRook = board.find(
    (x) =>
      x.piece === "ROOK" &&
      x.colour === colour &&
      x.position.file === "h" &&
      x.moved === false
  );

  if (shortRook && !piece.moved) {
    const moveDeltas = [
      [0, 0],
      [0, 1],
      [0, 2],
    ];

    const canShortCastle = moveDeltas.every(([rankDelta, fileDelta]) => {
      const newFile = file + fileDelta;
      const newRank = rank + rankDelta;

      const pieceAt = board.find(
        (x) =>
          x.position.file === FileArray[newFile] && x.position.rank === newRank
      );
      if (!pieceAt || (rankDelta === 0 && fileDelta === 0)) {
        const potentialBoard = board.filter(
          (x) =>
            !(
              x.position.rank === piece.position.rank &&
              x.position.file === piece.position.file
            )
        );

        potentialBoard.push({
          colour: piece?.colour,
          piece: piece.piece,
          moved: true,
          position: {
            rank: newRank as Rank,
            file: FileArray[newFile],
          },
        });

        return !KingInCheck(piece.colour, potentialBoard);
      }
      return false;
    });

    if (canShortCastle)
      validMoves.push({
        move: "Castle",
        type: "SHORT",
        colour: piece.colour,
        rank: rank,
        file: FileArray[file + 2],
      });
  }

  //short Castle.
  const longRook = board.find(
    (x) =>
      x.piece === "ROOK" &&
      x.colour === colour &&
      x.position.file === "a" &&
      x.moved === false
  );

  if (longRook && !piece.moved) {
    const moveDeltas = [
      [0, 0],
      [0, -1],
      [0, -2],
    ];

    const canLongCastle = moveDeltas.every(([rankDelta, fileDelta]) => {
      const newFile = file + fileDelta;
      const newRank = rank + rankDelta;

      const pieceAt = board.find(
        (x) =>
          x.position.file === FileArray[newFile] && x.position.rank === newRank
      );
      if (!pieceAt || (rankDelta === 0 && fileDelta === 0)) {
        const potentialBoard = board.filter(
          (x) =>
            !(
              x.position.rank === piece.position.rank &&
              x.position.file === piece.position.file
            )
        );

        potentialBoard.push({
          colour: piece?.colour,
          piece: piece.piece,
          moved: true,
          position: {
            rank: newRank as Rank,
            file: FileArray[newFile],
          },
        });

        return !KingInCheck(piece.colour, potentialBoard);
      }
      return false;
    });

    if (canLongCastle)
      validMoves.push({
        move: "Castle",
        type: "LONG",
        colour: piece.colour,
        rank: rank,
        file: FileArray[file - 2],
      });
  }

  return validMoves;
};
