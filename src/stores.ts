import { writable } from "svelte/store"

export const playerTurn = writable<number>(Math.floor(Math.random() * 2))
export const winner = writable<"X" | "O" | "Draw" | null>(null)
export const squares = writable(Array(9).fill(null))

const winnerPositions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

export function checkWinner(squaresParam: ("X" | "O" | "Draw" | null)[]) {
	winnerPositions.map((position) => {
		const [posA, posB, posC] = position

		if (
			squaresParam[posA] &&
			squaresParam[posA] === squaresParam[posB] &&
			squaresParam[posB] === squaresParam[posC]
		) {
			winner.set(squaresParam[posA])
		}
	})

	if (squaresParam.every((square) => square !== null)) winner.set("Draw")
}

export function resetGame() {
	playerTurn.set(Math.floor(Math.random() * 2))
	winner.set(null)
	squares.set(Array(9).fill(null))
}
