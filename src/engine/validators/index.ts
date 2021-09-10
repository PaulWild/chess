import { Board } from "../board";
import { IPiece } from "../pieces";
import {
  Position,
  ValidMoves,
  ValidMove,
  InvalidMove,
  CastlingRights,
} from "../types";
import { BishopValidator } from "./bishopValidator";
import { KingValidator } from "./kingValidator";
import { KnightValidator } from "./knightValidator";
import { PawnValidator } from "./pawnValidator";
import { QueenValidator } from "./queenValidator";
import { RookValidator } from "./rookValidator";

export interface IValidMoves {
  potentialMoves(position: Position): ValidMoves;

  canMove(from: Position, to: Position): ValidMove | InvalidMove;

  moves(from: Position): ValidMoves;

  isKingInCheck(): Boolean;
}

export const getMoveValidator = (
  piece: IPiece,
  board: Board,
  enPessantTarget: Position | undefined = undefined,
  castlingRights: CastlingRights = CastlingRights.None
): IValidMoves => {
  switch (piece.pieceType) {
    case "BISHOP":
      return new BishopValidator(piece, board, enPessantTarget, castlingRights);
    case "KING":
      return new KingValidator(piece, board, enPessantTarget, castlingRights);
    case "KNIGHT":
      return new KnightValidator(piece, board, enPessantTarget, castlingRights);
    case "PAWN":
      return new PawnValidator(piece, board, enPessantTarget, castlingRights);
    case "QUEEN":
      return new QueenValidator(piece, board, enPessantTarget, castlingRights);
    case "ROOK":
      return new RookValidator(piece, board, enPessantTarget, castlingRights);
  }
};
