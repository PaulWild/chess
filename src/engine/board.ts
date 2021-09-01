import { IPiece } from "./pieces";
import { Square } from "./square";
import { File, PieceColour, Position, Rank } from "./types";

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

export class Board {
  private _board: Square[];

  public get board() {
    return this._board;
  }

  private _enPassant: Position | undefined;
  public get enPassant(): Position | undefined {
    return this._enPassant;
  }
  public set enPassant(value: Position | undefined) {
    this._enPassant = value;
  }

  private _movedPieces: IPiece[];

  constructor(
    initialPositions: Square[],
    enPassant: Position | undefined = undefined,
    movedPieces: IPiece[] | [] = []
  ) {
    this._board = initialPositions;
    this.enPassant = enPassant;
    this._movedPieces = movedPieces;
  }

  addToMoved = (piece: IPiece) => {
    if (!this._movedPieces.includes(piece)) {
      this._movedPieces.push(piece);
    }
  };

  pieceMoved = (piece: IPiece) => {
    return this._movedPieces.includes(piece);
  };

  clone = () => {
    const board = this._board.map((x) => x.clone());
    return new Board(
      board,
      this._enPassant,
      this._movedPieces.map((_) => _)
    );
  };

  move = (from: Position, to: Position) => {
    const squareFrom = this.getPieceAt(from);
    const squareFromPiece = squareFrom.piece;
    const squareTo = this.getPieceAt(to);

    if (!squareFromPiece) throw new Error("no piece to move");

    squareFrom.remove();
    this.addToMoved(squareFromPiece);
    squareTo.place(squareFromPiece);
  };

  remove = (position: Position) => {
    const square = this.getPieceAt(position);
    if (!square.piece) throw new Error("no piece to remove");
    square.remove();
  };

  placeAt = (position: Position, piece: IPiece) => {
    const square = this.getPieceAt(position);
    square.place(piece);
  };

  getPieceAt = (position: Position): Square => {
    const square = this._board.find(
      (x) => x.rank === position.rank && x.file === position.file
    );

    if (square === undefined) throw new Error("Out of bounds");

    return square;
  };

  getPieces = (colour: PieceColour): Square[] => {
    return this.board.filter(
      (x) => x.piece !== null && x.piece.colour === colour
    );
  };

  getKing = (colour: PieceColour): Square => {
    const king = this.board.find(
      (x) => x.piece?.pieceType === "KING" && x.piece.colour === colour
    );

    if (!king) {
      throw new Error("Where's the king?");
    }
    return king;
  };
}
