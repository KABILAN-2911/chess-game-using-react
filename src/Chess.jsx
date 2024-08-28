import React from 'react'
import { Chessboard } from 'react-chessboard'
import './chess.css'
export default function Chess() {
  return (
    <div className='container mt-5  w-50'>
        
         <table className='ms-5 text-center'>
        <tr>
            <td class="White"><i class="fa-solid fa-chess-rook fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-knight fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-bishop fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-king fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-queen fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-bishop fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-knight fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-rook fs-1"></i></td>
        </tr>
        <tr>
            
            <td class="Black"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn fs-1"></i></td>
        </tr>
        <tr>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
        </tr>
        <tr>
            
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
        </tr>
        <tr>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
        </tr>
        <tr>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
            <td class="Black"></td>
            <td class="White"></td>
        </tr>
        <tr>
            <td class="White"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-pawn text-white fs-1"></i></td>
        </tr>
        <tr>
            
            <td class="Black"><i class="fa-solid fa-chess-rook fs-1 text-white"></i></td>
            <td class="White"><i class="fa-solid fa-chess-knight text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-bishop text-white fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-queen text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-king text-white fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-bishop text-white fs-1"></i></td>
            <td class="Black"><i class="fa-solid fa-chess-knight text-white fs-1"></i></td>
            <td class="White"><i class="fa-solid fa-chess-rook fs-1 text-white"></i></td>
        </tr>
    </table> 
    {/* <Chessboard /> */}

    </div>
  )
}
